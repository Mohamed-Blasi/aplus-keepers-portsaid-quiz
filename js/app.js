// ==========================================
// A+ KEEPERS TEAM - MAIN APPLICATION ENGINE
// Port Said University - Faculty of Medicine (Block 1 / MED101)
// ==========================================

(function () {
  "use strict";

  const STORAGE_KEYS = {
    THEME: "aplus_theme_v1",
    STUDENT_NAME: "aplus_student_name_v1",
    PROGRESS: "aplus_progress_v1",       // { [qId]: 'correct' | 'wrong' }
    MISTAKES: "aplus_mistakes_v1",       // [qId, ...]
    BOOKMARKS: "aplus_bookmarks_v1",     // [qId, ...]
    ESSAY_RATES: "aplus_essay_rates_v1", // { [essayId]: 'mastered' | 'partial' | 'review' }
    CUSTOM_QS: "aplus_custom_qs_v1"      // custom added questions
  };

  // State
  const state = {
    activeTab: "subjects", // 'subjects' | 'exams' | 'essay' | 'custom' | 'search' | 'course' | 'quiz' | 'result'
    examFilter: "all",     // 'all' | 'past_exam' | 'subject_bank'
    essaySourceFilter: "all",
    essaySubjectFilter: "all",
    essayRateFilter: "all",
    searchQuery: "",

    studentName: localStorage.getItem(STORAGE_KEYS.STUDENT_NAME) || "",
    progress: loadJSON(STORAGE_KEYS.PROGRESS, {}),
    mistakes: loadJSON(STORAGE_KEYS.MISTAKES, []),
    bookmarks: loadJSON(STORAGE_KEYS.BOOKMARKS, []),
    essayRates: loadJSON(STORAGE_KEYS.ESSAY_RATES, {}),
    customQuestions: loadJSON(STORAGE_KEYS.CUSTOM_QS, []),

    // Active Quiz State
    quiz: {
      title: "",
      subtitle: "",
      questions: [],
      currentIndex: 0,
      mode: "study", // 'study' | 'exam'
      userAnswers: {}, // { [index]: selectedOptionIndex }
      submitted: false,
      timerEnabled: false,
      timerSeconds: 0,
      timerRemaining: 0,
      timerInterval: null
    }
  };

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveJSON(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn("Storage error:", e);
    }
  }

  // Merge all MCQ/TF/Matching questions
  function getAllQuestions() {
    return [].concat(
      window.QUESTIONS_SUBJECTS_1 || [],
      window.QUESTIONS_SUBJECTS_2 || [],
      window.QUESTIONS_EXAMS_1 || [],
      window.QUESTIONS_EXAMS_2 || [],
      state.customQuestions || []
    );
  }

  function getAllEssays() {
    return window.QUESTIONS_ESSAY || [];
  }

  // Initialize Theme
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME) || "light";
    document.documentElement.setAttribute("data-theme", saved);
    updateThemeBtnIcon(saved);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEYS.THEME, next);
    updateThemeBtnIcon(next);
  }

  function updateThemeBtnIcon(theme) {
    const btn = document.getElementById("themeToggleBtn");
    if (btn) {
      btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
      btn.title = theme === "dark" ? "الوضع النهاري" : "الوضع الليلي";
    }
  }

  // Deduplicate questions by normalized stem and options to ensure no duplicate questions appear in composite sessions
  function deduplicateQuestions(list) {
    const seen = new Set();
    const result = [];
    for (const q of list) {
      const normStem = (q.q || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      const normFirstOpt = (q.options && q.options[0] ? q.options[0] : "").toLowerCase().replace(/[^a-z0-9]/g, "");
      const key = normStem + "::" + normFirstOpt;
      if (!seen.has(key)) {
        seen.add(key);
        result.push(q);
      }
    }
    return result;
  }

  // Navigation
  window.switchTab = function (tabName) {
    stopQuizTimer();
    state.activeTab = tabName;
    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tabName);
    });
    renderMainView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.saveStudentName = function (val) {
    state.studentName = val.trim();
    localStorage.setItem(STORAGE_KEYS.STUDENT_NAME, state.studentName);
  };

  // ==========================================
  // RENDER CONTROLLER
  // ==========================================
  function renderMainView() {
    const container = document.getElementById("appMainContent");
    const heroEl = document.getElementById("heroSection");
    if (!container) return;

    // Update top badges
    updateHeaderCounters();

    // Show hero only on the main home tab ('subjects') so other tabs open immediately at the top
    if (heroEl) {
      heroEl.style.display = state.activeTab === "subjects" ? "block" : "none";
    }

    if (state.activeTab === "subjects") {
      container.innerHTML = renderQuickTools() + renderSubjectsSection();
    } else if (state.activeTab === "lectures") {
      container.innerHTML = renderLecturesSection();
    } else if (state.activeTab === "practical") {
      container.innerHTML = renderPracticalSection();
    } else if (state.activeTab === "exams") {
      container.innerHTML = renderQuickTools() + renderExamsSection();
    } else if (state.activeTab === "essay") {
      container.innerHTML = renderEssaySection();
    } else if (state.activeTab === "custom") {
      container.innerHTML = renderCustomQuizBuilder();
    } else if (state.activeTab === "search") {
      container.innerHTML = renderSearchSection();
      const input = document.getElementById("globalSearchInput");
      if (input) input.focus();
    } else if (state.activeTab === "course") {
      container.innerHTML = renderCourseAndAdminSection();
    } else if (state.activeTab === "quiz") {
      container.innerHTML = renderQuizPlayer();
    } else if (state.activeTab === "result") {
      container.innerHTML = renderQuizResult();
    }
  }

  function updateHeaderCounters() {
    const allQs = getAllQuestions();
    const essays = getAllEssays();
    const totalEl = document.getElementById("statTotalQuestions");
    if (totalEl) totalEl.textContent = allQs.length + essays.length + "+";

    const solvedCount = Object.keys(state.progress).length;
    const solvedEl = document.getElementById("statSolvedCount");
    if (solvedEl) solvedEl.textContent = solvedCount;
  }

  // ==========================================
  // QUICK TOOLS STRIP
  // ==========================================
  function renderQuickTools() {
    const mistakesCount = state.mistakes.length;
    const bookmarksCount = state.bookmarks.length;
    const essaysCount = getAllEssays().length;

    return `
      <div class="quick-tools-grid">
        <div class="quick-tool-card" onclick="switchTab('lectures')" style="border-color: rgba(14, 165, 233, 0.45); background: rgba(14, 165, 233, 0.05);">
          <div class="quick-tool-info">
            <div class="quick-tool-icon" style="background: rgba(14,165,233,0.15); color: #0284c7;">🎧</div>
            <div>
              <div class="quick-tool-title">فهرس الشرح (10 مواد)</div>
              <div class="quick-tool-sub">لو محتاج تذاكر أي محاضرة (حكومي وأهلية)</div>
            </div>
          </div>
          <span class="btn btn-sm btn-telegram">ذاكر</span>
        </div>

        <div class="quick-tool-card" onclick="startMistakesQuiz()">
          <div class="quick-tool-info">
            <div class="quick-tool-icon" style="background: rgba(239,68,68,0.12); color: #ef4444;">🔴</div>
            <div>
              <div class="quick-tool-title">بنك أخطائي (${mistakesCount})</div>
              <div class="quick-tool-sub">راجع الأسئلة اللي غلطت فيها قبل كده</div>
            </div>
          </div>
          <span class="btn btn-sm btn-secondary">ابدأ</span>
        </div>

        <div class="quick-tool-card" onclick="startBookmarksQuiz()">
          <div class="quick-tool-info">
            <div class="quick-tool-icon" style="background: rgba(245,158,11,0.14); color: #d97706;">⭐</div>
            <div>
              <div class="quick-tool-title">الأسئلة المحفوظة (${bookmarksCount})</div>
              <div class="quick-tool-sub">الأسئلة اللي علمت عليها بنجمة للمراجعة</div>
            </div>
          </div>
          <span class="btn btn-sm btn-secondary">مراجعة</span>
        </div>

        <div class="quick-tool-card" onclick="switchTab('essay')">
          <div class="quick-tool-info">
            <div class="quick-tool-icon" style="background: rgba(16,185,129,0.12); color: #059669;">✍️</div>
            <div>
              <div class="quick-tool-title">أسئلة المقالي MEQ (${essaysCount})</div>
              <div class="quick-tool-sub">امتحان مقالي 2024 + أهلية 2023 + ملف المقالي</div>
            </div>
          </div>
          <span class="btn btn-sm btn-secondary">تدرب</span>
        </div>
      </div>
    `;
  }

  // Helper to get lectures for a given subjectId
  function getSubjectLecturesHtml(subjectId) {
    const lecturesList = (window.APP_CONFIG.lecturesIndex || []).filter(
      (sec) => sec.subjectId === subjectId
    );
    if (!lecturesList.length) return "";

    let totalLecs = 0;
    const innerHtml = lecturesList
      .map((sec) => {
        return sec.groups
          .map((grp) => {
            totalLecs += grp.items.length;
            return `
              ${grp.label ? `<div style="font-size:0.8rem; font-weight:800; color:var(--brand-red); margin-top:6px; margin-bottom:4px;">${grp.label}</div>` : ""}
              <div style="display:flex; flex-direction:column; gap:5px;">
                ${grp.items
                  .map(
                    (lec) => `
                  <a href="${lec.url}" target="_blank" rel="noopener" style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:7px 10px; border-radius:8px; background:var(--bg-surface); border:1px solid var(--border-color); font-size:0.82rem; font-weight:700; color:var(--text-main); text-decoration:none;">
                    <span class="ltr-text" style="text-align:left; flex:1;">🎧 ${lec.title}</span>
                    <span style="color:#0088cc; font-size:0.76rem; font-weight:800; white-space:nowrap;">فتح الشرح ⬅</span>
                  </a>
                `
                  )
                  .join("")}
              </div>
            `;
          })
          .join("");
      })
      .join("");

    return `
      <details style="margin-bottom:12px; background:var(--bg-elevated); border:1px solid var(--border-color); border-radius:10px; padding:8px 12px;">
        <summary style="cursor:pointer; font-size:0.84rem; font-weight:800; color:#0284c7; user-select:none;">
          🎧 لو محتاج تذاكر أي محاضرة في المادة (${totalLecs} محاضرات)
        </summary>
        <div style="margin-top:8px; display:flex; flex-direction:column; gap:6px;">
          ${innerHtml}
        </div>
      </details>
    `;
  }

  // ==========================================
  // 1. SUBJECTS SECTION
  // ==========================================
  function renderSubjectsSection() {
    const allQs = getAllQuestions();
    const subjects = window.APP_CONFIG.subjects;

    const cardsHtml = subjects
      .map((subj) => {
        const subjQs = allQs.filter((q) => q.subject === subj.id);
        const bankQs = subjQs.filter((q) => q.source.startsWith("bank_"));
        const examQs = subjQs.filter((q) => q.source.startsWith("exam_"));

        const solvedInSubj = subjQs.filter((q) => state.progress[q.id]).length;
        const correctInSubj = subjQs.filter((q) => state.progress[q.id] === "correct").length;
        const pct = subjQs.length ? Math.round((solvedInSubj / subjQs.length) * 100) : 0;

        // Special sub-buttons for Biochemistry
        let extraSubBanks = "";
        if (subj.id === "biochemistry") {
          const carbsCount = allQs.filter(q => q.source === "bank_biochem_carbs").length;
          const lipidsCount = allQs.filter(q => q.source === "bank_biochem_lipids").length;
          const aminoCount = allQs.filter(q => q.source === "bank_biochem_amino").length;
          extraSubBanks = `
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:10px;">
              <button class="btn btn-sm btn-secondary" style="flex:1; font-size:0.78rem;" onclick="startSourceQuiz('bank_biochem_carbs', 'study')">🍬 Carbs (${carbsCount})</button>
              <button class="btn btn-sm btn-secondary" style="flex:1; font-size:0.78rem;" onclick="startSourceQuiz('bank_biochem_lipids', 'study')">🥑 Lipids (${lipidsCount})</button>
              <button class="btn btn-sm btn-secondary" style="flex:1; font-size:0.78rem;" onclick="startSourceQuiz('bank_biochem_amino', 'study')">🧬 Amino Acids (${aminoCount})</button>
            </div>
          `;
        }

        const subjectLecturesBox = getSubjectLecturesHtml(subj.id);

        return `
          <div class="subject-card">
            <div>
              <div class="card-top-row">
                <div class="subject-icon-box" style="background: ${subj.bgLight}; color: ${subj.color};">
                  ${subj.icon}
                </div>
                <span class="card-badge">${subjQs.length} سؤال</span>
              </div>
              <h3 class="card-title">${subj.nameAr}</h3>
              <p class="card-subtitle ltr-text">${subj.desc}</p>

              <div class="card-meta-tags">
                <span class="meta-tag">📚 بنك المادة: ${bankQs.length}</span>
                <span class="meta-tag">🎓 سنوات سابقة: ${examQs.length}</span>
                ${solvedInSubj > 0 ? `<span class="meta-tag" style="color:var(--success);">✅ صح: ${correctInSubj}/${solvedInSubj}</span>` : ""}
              </div>

              <div class="progress-wrap">
                <div class="progress-label-row">
                  <span>نسبة الإنجاز</span>
                  <span>${solvedInSubj} / ${subjQs.length} (${pct}%)</span>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" style="width: ${pct}%;"></div>
                </div>
              </div>
              ${extraSubBanks}
              ${subjectLecturesBox}
            </div>

            <div class="card-actions">
              <button class="btn btn-primary btn-sm" onclick="startSubjectQuiz('${subj.id}', 'all', 'study')">
                📖 كل أسئلة المادة (${subjQs.length})
              </button>
              ${
                examQs.length > 0
                  ? `<button class="btn btn-secondary btn-sm" onclick="startSubjectQuiz('${subj.id}', 'exams_only', 'study')">
                      🔥 سنوات سابقة (${examQs.length})
                    </button>`
                  : ""
              }
            </div>
          </div>
        `;
      })
      .join("");

    return `
      <div class="section-header">
        <h2 class="section-title">بنوك المواد الدراسية - البلوك الأول (MED101)</h2>
        <div class="filter-pills">
          <button class="filter-pill active" onclick="switchTab('subjects')">تقسيم حسب المواد (9 مواد)</button>
          <button class="filter-pill" onclick="switchTab('lectures')">🎧 فهرس الشرح للمحاضرات</button>
          <button class="filter-pill" onclick="switchTab('exams')">امتحانات السنين السابقة كاملة</button>
          <button class="filter-pill" onclick="switchTab('essay')">أسئلة المقالي MEQ</button>
        </div>
      </div>
      <div class="cards-grid">
        ${cardsHtml}
      </div>
    `;
  }

  // ==========================================
  // 1B. LECTURES EXPLANATION INDEX (فهرس الشرح)
  // ==========================================
  function renderLecturesSection() {
    const lecturesIndex = window.APP_CONFIG.lecturesIndex || [];
    const allQs = getAllQuestions();

    const cardsHtml = lecturesIndex
      .map((sec) => {
        const subjQsCount = allQs.filter((q) => q.subject === sec.subjectId).length;
        const groupsHtml = sec.groups
          .map(
            (grp) => `
            ${
              grp.label
                ? `<div style="font-size:0.9rem; font-weight:800; color:var(--brand-red); margin-top:10px; margin-bottom:6px;">${grp.label}</div>`
                : ""
            }
            <div style="display:flex; flex-direction:column; gap:8px;">
              ${grp.items
                .map(
                  (lec) => `
                <a
                  href="${lec.url}"
                  target="_blank"
                  rel="noopener"
                  style="display:flex; align-items:center; justify-content:space-between; gap:10px; padding:11px 14px; border-radius:10px; background:var(--bg-elevated); border:1px solid var(--border-color); color:var(--text-main); font-weight:700; font-size:0.92rem; transition:var(--transition);"
                >
                  <span class="ltr-text" style="text-align:left; flex:1;">🎧 ${lec.title}</span>
                  <span class="btn btn-telegram btn-sm" style="padding:5px 10px; font-size:0.78rem;">فتح المحاضرة ⬅</span>
                </a>
              `
                )
                .join("")}
            </div>
          `
          )
          .join("");

        return `
          <div class="subject-card">
            <div>
              <div class="card-top-row">
                <div class="subject-icon-box" style="background: ${sec.bgLight}; color: ${sec.color};">
                  ${sec.icon}
                </div>
                <span class="card-badge">مادة #${sec.num}</span>
              </div>

              <h3 class="card-title">${sec.num}. ${sec.icon} ${sec.title}</h3>
              <div style="margin-top:12px; margin-bottom:16px; display:flex; flex-direction:column; gap:8px;">
                ${groupsHtml}
              </div>
            </div>

            <div class="card-actions">
              <button class="btn btn-primary btn-sm" onclick="startSubjectQuiz('${sec.subjectId}', 'all', 'study')">
                📝 حل أسئلة المادة بعد المذاكرة (${subjQsCount} سؤال)
              </button>
            </div>
          </div>
        `;
      })
      .join("");

    return `
      <div class="section-header">
        <div>
          <h2 class="section-title">🎧 فهرس الشرح — لو محتاج تذاكر أي محاضرة (حكومي وأهلية)</h2>
          <p style="font-size:0.92rem; color:var(--text-muted); margin-top:4px;">
            اضغط على أي محاضرة لفتح الشرح مباشرة على قناة دفعة 2027، أو اضغط "حل أسئلة المادة" للتدرب عليها فوراً.
          </p>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <a href="https://t.me/+2OKH0D4gDD03NGE0" target="_blank" rel="noopener" class="btn btn-telegram btn-sm">
            💬 اسأل الدكاترة على جروب التليجرام
          </a>
          <a href="https://t.me/AplusKeepersClass1_2027" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
            📢 قناة الدفعة
          </a>
        </div>
      </div>

      <div class="cards-grid">
        ${cardsHtml}
      </div>
    `;
  }

  // ==========================================
  // 1C. PRACTICAL EXPLANATION SECTION (شرح العملي)
  // ==========================================
  function renderPracticalSection() {
    const practicalIndex = window.APP_CONFIG.practicalIndex || [];

    const cardsHtml = practicalIndex
      .map((sec) => {
        const itemsHtml = sec.items
          .map(
            (item) => `
            <a
              href="${item.url}"
              target="_blank"
              rel="noopener"
              style="display:flex; align-items:center; justify-content:space-between; gap:10px; padding:11px 14px; border-radius:10px; background:var(--bg-elevated); border:1px solid var(--border-color); color:var(--text-main); font-weight:700; font-size:0.92rem; transition:var(--transition);"
            >
              <span class="ltr-text" style="text-align:left; flex:1;">🔬 ${item.title}</span>
              <span class="btn btn-telegram btn-sm" style="padding:5px 10px; font-size:0.78rem;">فتح العملي ⬅</span>
            </a>
          `
          )
          .join("");

        return `
          <div class="subject-card">
            <div>
              <div class="card-top-row">
                <div class="subject-icon-box" style="background: ${sec.bgLight}; color: ${sec.color};">
                  ${sec.icon}
                </div>
                <span class="card-badge">عملي #${sec.num}</span>
              </div>

              <h3 class="card-title">${sec.num}. ${sec.icon} ${sec.title}</h3>
              <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
                ${itemsHtml}
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    return `
      <div class="section-header">
        <div>
          <h2 class="section-title">🔬 شرح العملي (Practical & OSPE — حكومي وأهلية)</h2>
          <p style="font-size:0.92rem; color:var(--text-muted); margin-top:4px;">
            جميع فيديوهات ومراجعات العملي للبلوك الأول مجمعة في صفحة واحدة منفصلة.
          </p>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="switchTab('lectures')">
          🎧 العودة لفهرس شرح المحاضرات
        </button>
      </div>

      <div class="cards-grid">
        ${cardsHtml}
      </div>
    `;
  }

  // ==========================================
  // 2. PAST EXAMS & FULL BANKS SECTION
  // ==========================================
  window.setExamFilter = function (filter) {
    state.examFilter = filter;
    renderMainView();
  };

  function renderExamsSection() {
    const allQs = getAllQuestions();
    const sources = window.APP_CONFIG.sources.filter((src) => {
      if (state.examFilter === "all") return true;
      return src.category === state.examFilter;
    });

    const cardsHtml = sources
      .map((src) => {
        const srcQs = allQs.filter((q) => q.source === src.id);
        const solvedCount = srcQs.filter((q) => state.progress[q.id]).length;
        const pct = srcQs.length ? Math.round((solvedCount / srcQs.length) * 100) : 0;
        const isPastExam = src.category === "past_exam";

        return `
          <div class="exam-card">
            <div>
              <div class="card-top-row">
                <div class="subject-icon-box" style="background: ${isPastExam ? "rgba(200,16,46,0.1)" : "rgba(37,99,235,0.1)"}; color: ${isPastExam ? "var(--brand-red)" : "#2563eb"};">
                  ${isPastExam ? "🎓" : "📋"}
                </div>
                <span class="card-badge">${src.badge}</span>
              </div>

              <h3 class="card-title">${src.title}</h3>
              <p class="card-subtitle ltr-text">${src.subtitle}</p>
              <p style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:12px;">${src.description}</p>

              <div class="card-meta-tags">
                <span class="meta-tag">❓ ${srcQs.length} سؤال</span>
                <span class="meta-tag">⏱️ ${src.durationMinutes} دقيقة</span>
                <span class="meta-tag">📅 ${src.year}</span>
              </div>

              <div class="progress-wrap">
                <div class="progress-label-row">
                  <span>تقدمك في هذا الملف</span>
                  <span>${solvedCount} / ${srcQs.length} (${pct}%)</span>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" style="width: ${pct}%;"></div>
                </div>
              </div>
            </div>

            <div class="card-actions">
              <button class="btn btn-primary btn-sm" onclick="startSourceQuiz('${src.id}', 'study', false)">
                📖 وضع المذاكرة والشرح
              </button>
              <button class="btn btn-secondary btn-sm" onclick="startSourceQuiz('${src.id}', 'exam', true)">
                ⏱️ محاكاة امتحان بتايمر
              </button>
            </div>
          </div>
        `;
      })
      .join("");

    return `
      <div class="section-header">
        <h2 class="section-title">امتحانات السنوات السابقة وبنوك التجميعات الكاملة</h2>
        <div class="filter-pills">
          <button class="filter-pill ${state.examFilter === "all" ? "active" : ""}" onclick="setExamFilter('all')">الكل (${window.APP_CONFIG.sources.length})</button>
          <button class="filter-pill ${state.examFilter === "past_exam" ? "active" : ""}" onclick="setExamFilter('past_exam')">امتحانات السنين السابقة (7)</button>
          <button class="filter-pill ${state.examFilter === "subject_bank" ? "active" : ""}" onclick="setExamFilter('subject_bank')">بنوك المحاضرات والمراجعات (${window.APP_CONFIG.sources.filter(s => s.category === 'subject_bank').length})</button>
        </div>
      </div>
      <div class="cards-grid">
        ${cardsHtml}
      </div>
    `;
  }

  // ==========================================
  // 3. ESSAY / MEQ SECTION
  // ==========================================
  window.setEssayFilter = function (type, val) {
    if (type === "source") state.essaySourceFilter = val;
    if (type === "subject") state.essaySubjectFilter = val;
    if (type === "rate") state.essayRateFilter = val;
    renderMainView();
  };

  window.toggleEssayAnswer = function (id) {
    const panel = document.getElementById("essayAns_" + id);
    const btn = document.getElementById("essayBtn_" + id);
    if (!panel) return;
    const isHidden = panel.style.display === "none";
    panel.style.display = isHidden ? "block" : "none";
    if (btn) {
      btn.innerHTML = isHidden ? "🙈 إخفاء الإجابة النموذجية" : "👁️ إظهار الإجابة النموذجية والشرح";
    }
  };

  window.revealAllEssays = function () {
    document.querySelectorAll(".essay-answer-panel").forEach((el) => {
      el.style.display = "block";
    });
  };

  window.rateEssay = function (id, rating) {
    state.essayRates[id] = rating;
    saveJSON(STORAGE_KEYS.ESSAY_RATES, state.essayRates);
    renderMainView();
  };

  function renderEssaySection() {
    const allEssays = getAllEssays();
    const filtered = allEssays.filter((item) => {
      if (state.essaySourceFilter !== "all" && item.source !== state.essaySourceFilter) return false;
      if (state.essaySubjectFilter !== "all" && item.subject !== state.essaySubjectFilter) return false;
      if (state.essayRateFilter !== "all") {
        const r = state.essayRates[item.id] || "unrated";
        if (r !== state.essayRateFilter) return false;
      }
      return true;
    });

    const masteredCount = allEssays.filter((e) => state.essayRates[e.id] === "mastered").length;
    const reviewCount = allEssays.filter((e) => state.essayRates[e.id] === "review").length;

    const listHtml = filtered
      .map((item, idx) => {
        const rate = state.essayRates[item.id] || "";
        const subjObj = window.APP_CONFIG.subjects.find((s) => s.id === item.subject);
        const srcObj = (window.ESSAY_SOURCES || []).find((s) => s.id === item.source);

        return `
          <div class="essay-card">
            <div class="question-meta-bar">
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                <span class="q-counter-badge">سؤال مقالي #${idx + 1}</span>
                <span class="meta-tag">${subjObj ? subjObj.icon + " " + subjObj.nameEn : item.subject}</span>
                <span class="meta-tag">${srcObj ? srcObj.badge : item.marks}</span>
                <span class="meta-tag" style="color:var(--brand-red);">${item.marks}</span>
              </div>
              <button id="essayBtn_${item.id}" class="btn btn-primary btn-sm" onclick="toggleEssayAnswer('${item.id}')">
                👁️ إظهار الإجابة النموذجية والشرح
              </button>
            </div>

            <div class="question-stem ltr-text" style="margin-bottom:10px;">
              ${item.q}
            </div>

            <textarea
              class="essay-practice-input"
              placeholder="✍️ (اختياري) اكتب إجابتك أو عناصر الإجابة هنا لتختبر حفظك قبل إظهار الإجابة النموذجية..."
            ></textarea>

            <div id="essayAns_${item.id}" class="essay-answer-panel" style="display:none;">
              <div style="font-weight:800; color:var(--success); margin-bottom:10px;">
                ✅ الإجابة النموذجية الكاملة (Model Answer):
              </div>
              <ul class="essay-points-list">
                ${item.points.map((pt) => `<li>${pt}</li>`).join("")}
              </ul>
              ${
                item.tip
                  ? `<div class="essay-tip-box">💡 <strong>خلاصة A+ Keepers:</strong> ${item.tip}</div>`
                  : ""
              }
            </div>

            <div class="self-rate-row" style="justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">تقييمك الذاتي للسؤال:</span>
                <button class="rate-btn ${rate === "mastered" ? "active-mastered" : ""}" onclick="rateEssay('${item.id}', 'mastered')">
                  ✅ أتقنتها بالكامل
                </button>
                <button class="rate-btn ${rate === "partial" ? "active-partial" : ""}" onclick="rateEssay('${item.id}', 'partial')">
                  ⚠️ نص نص
                </button>
                <button class="rate-btn ${rate === "review" ? "active-review" : ""}" onclick="rateEssay('${item.id}', 'review')">
                  🔄 محتاج أراجعها
                </button>
              </div>
              <a href="https://t.me/+2OKH0D4gDD03NGE0" target="_blank" rel="noopener" class="btn btn-telegram btn-sm">
                💬 اسأل الدكاترة على جروب التليجرام
              </a>
            </div>
          </div>
        `;
      })
      .join("");

    return `
      <div class="section-header">
        <div>
          <h2 class="section-title">قسم الأسئلة المقالية (MEQ & Written Exams)</h2>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-top:4px;">
            شامل امتحان مقالي أكتوبر 2024 (MED101) + امتحان مقالي أهلية 2023 + بنك ملف المقالي الشامل (أتقنت: ${masteredCount} من ${allEssays.length})
          </p>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="revealAllEssays()">
          👁️ إظهار كل الإجابات للمراجعة السريعة
        </button>
      </div>

      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:18px;">
        <div class="filter-pills">
          <button class="filter-pill ${state.essaySourceFilter === "all" ? "active" : ""}" onclick="setEssayFilter('source', 'all')">كل ملفات المقالي (${allEssays.length})</button>
          <button class="filter-pill ${state.essaySourceFilter === "essay_exam_oct_2024" ? "active" : ""}" onclick="setEssayFilter('source', 'essay_exam_oct_2024')">🔥 امتحان مقالي أكتوبر 2024 (4)</button>
          <button class="filter-pill ${state.essaySourceFilter === "essay_exam_ahlia_2023" ? "active" : ""}" onclick="setEssayFilter('source', 'essay_exam_ahlia_2023')">⭐ مقالي أهلية 2023 (4)</button>
          <button class="filter-pill ${state.essaySourceFilter === "essay_bank_main" ? "active" : ""}" onclick="setEssayFilter('source', 'essay_bank_main')">📌 ملف المقالي الشامل (20)</button>
          <button class="filter-pill ${state.essaySourceFilter === "essay_bank_q2" ? "active" : ""}" onclick="setEssayFilter('source', 'essay_bank_q2')">📝 بنك SEQs الجديد (19)</button>
        </div>
      </div>

      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:24px;">
        <button class="filter-pill ${state.essayRateFilter === "all" ? "active" : ""}" onclick="setEssayFilter('rate', 'all')">الكل</button>
        <button class="filter-pill ${state.essayRateFilter === "review" ? "active" : ""}" onclick="setEssayFilter('rate', 'review')">🔄 محتاج مراجعة (${reviewCount})</button>
        <button class="filter-pill ${state.essayRateFilter === "partial" ? "active" : ""}" onclick="setEssayFilter('rate', 'partial')">⚠️ نص نص</button>
        <button class="filter-pill ${state.essayRateFilter === "mastered" ? "active" : ""}" onclick="setEssayFilter('rate', 'mastered')">✅ أتقنتها (${masteredCount})</button>
      </div>

      <div>
        ${listHtml || `<div class="question-card" style="text-align:center;">لا توجد أسئلة مطابقة لهذا الفلتر حالياً.</div>`}
      </div>
    `;
  }

  // ==========================================
  // 4. CUSTOM QUIZ BUILDER
  // ==========================================
  function renderCustomQuizBuilder() {
    const subjects = window.APP_CONFIG.subjects;
    return `
      <div class="quiz-container">
        <div class="question-card">
          <h2 class="section-title" style="margin-bottom:10px;">⚡ صمم امتحانك المخصص (Custom Quiz Builder)</h2>
          <p style="color:var(--text-muted); margin-bottom:22px;">
            اختر المواد اللي عاوز تراجعها، وحدد عدد الأسئلة ونظام الحل والتايمر، وهيتم تجميع امتحان عشوائي مخصوص ليك!
          </p>

          <div class="form-group">
            <label>1. اختر المواد المطلوبة:</label>
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(210px, 1fr)); gap:10px; margin-top:8px;">
              ${subjects
                .map(
                  (s) => `
                <label style="display:flex; align-items:center; gap:8px; background:var(--bg-elevated); padding:10px 12px; border-radius:10px; cursor:pointer; border:1px solid var(--border-color);">
                  <input type="checkbox" class="custom-subj-cb" value="${s.id}" checked style="width:18px; height:18px;" />
                  <span>${s.icon} ${s.nameAr}</span>
                </label>
              `
                )
                .join("")}
            </div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px; margin-top:18px;">
            <div class="form-group">
              <label>2. عدد الأسئلة:</label>
              <select id="customCountSelect">
                <option value="10">10 أسئلة (سريع)</option>
                <option value="20">20 سؤال</option>
                <option value="32" selected>32 سؤال (محاكاة امتحان البلوك)</option>
                <option value="50">50 سؤال (مراجعة مكثفة)</option>
                <option value="100">100 سؤال (ماراثون)</option>
                <option value="9999">كل الأسئلة المتاحة</option>
              </select>
            </div>

            <div class="form-group">
              <label>3. نظام الحل:</label>
              <select id="customModeSelect">
                <option value="study">📖 وضع المذاكرة (تصحيح وشرح فوري)</option>
                <option value="exam">📝 وضع الامتحان (التصحيح في النهاية)</option>
              </select>
            </div>

            <div class="form-group">
              <label>4. التايمر (المؤقت):</label>
              <select id="customTimerSelect">
                <option value="on">⏱️ تشغيل التايمر</option>
                <option value="off">🔕 إيقاف التايمر</option>
              </select>
            </div>
          </div>

          <div style="margin-top:22px; display:flex; gap:12px; flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="launchCustomQuiz()">
              🚀 ابدأ الاختبار المخصص الآن
            </button>
          </div>
        </div>
      </div>
    `;
  }

  window.launchCustomQuiz = function () {
    const checked = Array.from(document.querySelectorAll(".custom-subj-cb:checked")).map(
      (cb) => cb.value
    );
    if (checked.length === 0) {
      alert("من فضلك اختر مادة واحدة على الأقل!");
      return;
    }
    const count = parseInt(document.getElementById("customCountSelect").value, 10) || 32;
    const mode = document.getElementById("customModeSelect").value || "study";
    const timerOn = document.getElementById("customTimerSelect").value === "on";

    const rawPool = getAllQuestions().filter((q) => checked.includes(q.subject));
    const pool = deduplicateQuestions(rawPool);
    const shuffled = pool.slice().sort(() => Math.random() - 0.5).slice(0, count);

    startQuizSession({
      title: "اختبار مخصص - A+ KEEPERS",
      subtitle: `${shuffled.length} سؤال مختار من ${checked.length} مواد`,
      questions: shuffled,
      mode: mode,
      timerEnabled: timerOn,
      durationMinutes: Math.max(10, Math.round(shuffled.length * 1.2))
    });
  };

  // ==========================================
  // 5. GLOBAL SEARCH SECTION
  // ==========================================
  window.handleSearchInput = function (val) {
    state.searchQuery = val;
    const resultsBox = document.getElementById("searchResultsContainer");
    if (resultsBox) {
      resultsBox.innerHTML = renderSearchResultsList(val);
    }
  };

  function renderSearchSection() {
    return `
      <div class="quiz-container">
        <h2 class="section-title" style="margin-bottom:14px;">🔍 البحث السريع في جميع الأسئلة (MCQs & المقالي)</h2>
        <div class="search-input-wrap">
          <input
            id="globalSearchInput"
            type="text"
            placeholder="اكتب أي كلمة مفتاحية بالإنجليزي أو العربي (مثال: epimers, synovial, peptidoglycan, morphine, referral, PAS)..."
            value="${escapeHtml(state.searchQuery)}"
            oninput="handleSearchInput(this.value)"
          />
        </div>
        <div id="searchResultsContainer">
          ${renderSearchResultsList(state.searchQuery)}
        </div>
      </div>
    `;
  }

  function renderSearchResultsList(query) {
    const qTrim = (query || "").trim().toLowerCase();
    if (qTrim.length < 2) {
      return `
        <div class="question-card" style="text-align:center; color:var(--text-muted);">
          اكتب حرفين على الأقل للبحث الفوري في أكثر من 790 سؤال وإجاباتها وشرحها العلمي.
        </div>
      `;
    }

    const allQs = getAllQuestions();
    const matchedMcqs = allQs.filter((item) => {
      const hay = (
        item.q +
        " " +
        (item.options || []).join(" ") +
        " " +
        (item.explanation || "")
      ).toLowerCase();
      return hay.includes(qTrim);
    });

    if (matchedMcqs.length === 0) {
      return `<div class="question-card" style="text-align:center;">لا توجد نتائج مطابقة لـ "${escapeHtml(query)}".</div>`;
    }

    return `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px;">
        <div style="font-weight:800;">تم العثور على ${matchedMcqs.length} سؤال مطابق:</div>
        <button class="btn btn-primary btn-sm" onclick="startSearchResultsQuiz()">
          🎯 حل نتائج البحث كاختبار تفاعلي (${matchedMcqs.length})
        </button>
      </div>
      ${matchedMcqs
        .slice(0, 40)
        .map(
          (item, i) => `
        <div class="question-card" style="padding:20px; margin-bottom:14px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.82rem; color:var(--text-muted); font-weight:700;">
            <span>#${i + 1} • ${item.subject.toUpperCase()}</span>
            <span>${item.source}</span>
          </div>
          <div class="ltr-text" style="font-weight:700; font-size:1.05rem; margin-bottom:10px;">${item.q}</div>
          <div class="ltr-text" style="color:var(--success); font-weight:800; margin-bottom:6px;">
            ✔ Correct Answer: ${item.options[item.answer]}
          </div>
          <div style="font-size:0.9rem; color:var(--text-secondary);">💡 ${item.explanation}</div>
        </div>
      `
        )
        .join("")}
    `;
  }

  window.startSearchResultsQuiz = function () {
    const qTrim = (state.searchQuery || "").trim().toLowerCase();
    const matched = getAllQuestions().filter((item) => {
      const hay = (
        item.q +
        " " +
        (item.options || []).join(" ") +
        " " +
        (item.explanation || "")
      ).toLowerCase();
      return hay.includes(qTrim);
    });
    if (matched.length === 0) return;
    startQuizSession({
      title: `نتائج البحث: "${state.searchQuery}"`,
      subtitle: `${matched.length} سؤال مطابق`,
      questions: matched,
      mode: "study",
      timerEnabled: false,
      durationMinutes: 20
    });
  };

  // ==========================================
  // 6. TEAM IDENTITY & ADMIN QUESTION ADDER
  // ==========================================
  function renderCourseAndAdminSection() {
    const brand = window.APP_CONFIG.brand;
    return `
      <div class="quiz-container">
        <div class="result-share-card" style="max-width:100%; text-align:right; display:grid; grid-template-columns: 1.5fr 1fr; gap:24px; align-items:center;">
          <div>
            <span class="hero-pill">A+ KEEPERS TEAM • PORT SAID MEDICINE</span>
            <h2 style="font-size:1.85rem; font-weight:900; margin:10px 0;">
              تيم A+ KEEPERS معاك خطوة بخطوة للـ A+ (دفعة 2027)
            </h2>
            <p style="color:#cbd5e1; margin-bottom:18px;">
              لو عاوز تفهم أو تتأكد من إجابة أي سؤال، اسأل الدكاترة مباشرة على جروب التليجرام، وتابع قناة الدفعة لكل الشروحات والتجميعات والمراجعات لطلبة طب بورسعيد (حكومي وأهلية).
            </p>
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
              <a href="${brand.telegramGroup}" target="_blank" rel="noopener" class="btn btn-primary">
                💬 اسأل الدكاترة على جروب التليجرام
              </a>
              <a href="${brand.telegramChannel}" target="_blank" rel="noopener" class="btn btn-telegram">
                📢 قناة تليجرام الدفعة (Class 1 - 2027)
              </a>
              <a href="${brand.telegramSupport}" target="_blank" rel="noopener" class="btn btn-outline-light">
                ✉️ تواصل مع الدعم (${brand.telegramSupportHandle})
              </a>
            </div>
          </div>
          <div style="background:#fff; padding:20px; border-radius:16px; text-align:center; color:#0f172a;">
            <img src="${brand.logo}" alt="A+ KEEPERS TEAM" style="max-width:200px; width:100%; border-radius:8px; margin-bottom:8px;" />
            <div style="font-weight:900; color:#c8102e; font-size:1.1rem;">${brand.name}</div>
            <div style="font-size:0.85rem; color:#475569; font-weight:700;">تواصل مباشر: <span dir="ltr">${brand.telegramSupportHandle}</span></div>
          </div>
        </div>

        <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));">
          ${brand.courseFeatures
            .map(
              (f) => `
            <div class="subject-card" style="padding:20px;">
              <div style="font-size:2rem; margin-bottom:8px;">${f.icon}</div>
              <h3 class="card-title">${f.title}</h3>
              <p style="font-size:0.9rem; color:var(--text-secondary);">${f.desc}</p>
            </div>
          `
            )
            .join("")}
        </div>

        <div style="margin-top:28px; text-align:center; padding:18px; background:var(--card-bg); border-radius:12px; border:1px solid var(--border-color);">
          <span style="font-size:0.9rem; color:var(--text-muted); margin-left:12px;">لو عاوز تبدأ من الصفر وتمسح سجل إجاباتك وبنك الأخطاء:</span>
          <button class="btn btn-secondary btn-sm" onclick="resetStudentProgress()">🗑️ إعادة تعيين سجلي والبدء من جديد</button>
        </div>
      </div>
    `;
  }

  window.resetStudentProgress = function () {
    if (!confirm("هل أنت متأكد من مسح سجل الحلول وبنك الأخطاء للبدء من جديد؟")) return;
    state.progress = {};
    state.mistakes = [];
    saveJSON(STORAGE_KEYS.PROGRESS, {});
    saveJSON(STORAGE_KEYS.MISTAKES, []);
    renderMainView();
  };

  // ==========================================
  // QUIZ LAUNCHERS
  // ==========================================
  window.startSubjectQuiz = function (subjectId, filterType, mode) {
    const subj = window.APP_CONFIG.subjects.find((s) => s.id === subjectId);
    let pool = getAllQuestions().filter((q) => q.subject === subjectId);
    let subtitle = "شامل بنك المادة + أسئلة السنين السابقة";

    if (filterType === "exams_only") {
      pool = pool.filter((q) => q.source.startsWith("exam_"));
      subtitle = "أسئلة امتحانات السنين السابقة في المادة فقط";
    } else if (filterType === "bank_only") {
      pool = pool.filter((q) => q.source.startsWith("bank_"));
      subtitle = "بنك محاضرات المادة فقط";
    } else {
      pool = deduplicateQuestions(pool);
    }

    startQuizSession({
      title: subj ? subj.nameAr : subjectId,
      subtitle: subtitle,
      questions: pool,
      mode: mode || "study",
      timerEnabled: false,
      durationMinutes: Math.max(15, Math.round(pool.length * 1.2))
    });
  };

  window.startSourceQuiz = function (sourceId, mode, enableTimer) {
    const src = window.APP_CONFIG.sources.find((s) => s.id === sourceId);
    const pool = getAllQuestions().filter((q) => q.source === sourceId);
    startQuizSession({
      title: src ? src.title : sourceId,
      subtitle: src ? src.subtitle : "",
      questions: pool,
      mode: mode || "study",
      timerEnabled: Boolean(enableTimer),
      durationMinutes: src ? src.durationMinutes : 45
    });
  };

  window.startMistakesQuiz = function () {
    const pool = getAllQuestions().filter((q) => state.mistakes.includes(q.id));
    if (pool.length === 0) {
      alert("🎉 عاش يا دكتور! بنك أخطائك فاضي حالياً (ما غلطتش في أي سؤال أو صححت كل أخطائك).");
      return;
    }
    startQuizSession({
      title: "🔴 مراجعة بنك أخطائي",
      subtitle: `${pool.length} سؤال أخطأت فيها سابقاً`,
      questions: pool,
      mode: "study",
      timerEnabled: false,
      durationMinutes: 30
    });
  };

  window.startBookmarksQuiz = function () {
    const pool = getAllQuestions().filter((q) => state.bookmarks.includes(q.id));
    if (pool.length === 0) {
      alert("⭐ لم تقم بحفظ أي أسئلة بعد. اضغط على زر (⭐ حفظ السؤال) داخل أي اختبار لإضافته هنا.");
      return;
    }
    startQuizSession({
      title: "⭐ الأسئلة المحفوظة للمراجعة",
      subtitle: `${pool.length} سؤال مهم محفوظ`,
      questions: pool,
      mode: "study",
      timerEnabled: false,
      durationMinutes: 30
    });
  };

  function startQuizSession(config) {
    stopQuizTimer();
    state.quiz = {
      title: config.title,
      subtitle: config.subtitle || "",
      questions: config.questions || [],
      currentIndex: 0,
      mode: config.mode || "study",
      userAnswers: {},
      submitted: false,
      timerEnabled: Boolean(config.timerEnabled),
      timerSeconds: (config.durationMinutes || 30) * 60,
      timerRemaining: (config.durationMinutes || 30) * 60,
      timerInterval: null
    };
    state.activeTab = "quiz";
    if (state.quiz.timerEnabled) {
      startQuizTimer();
    }
    trackEventSilent("quizzes_started");
    renderMainView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ==========================================
  // TIMER LOGIC (WITH ON/OFF TOGGLE)
  // ==========================================
  window.toggleQuizTimer = function () {
    state.quiz.timerEnabled = !state.quiz.timerEnabled;
    if (state.quiz.timerEnabled) {
      if (state.quiz.timerRemaining <= 0) {
        state.quiz.timerRemaining = state.quiz.timerSeconds || 1800;
      }
      startQuizTimer();
    } else {
      stopQuizTimer();
    }
    renderMainView();
  };

  function startQuizTimer() {
    stopQuizTimer();
    state.quiz.timerInterval = setInterval(() => {
      if (!state.quiz.timerEnabled || state.quiz.submitted) return;
      if (state.quiz.timerRemaining > 0) {
        state.quiz.timerRemaining--;
        const disp = document.getElementById("liveTimerDisplay");
        if (disp) disp.textContent = formatTime(state.quiz.timerRemaining);
      } else {
        stopQuizTimer();
        alert("⏰ انتهى وقت الامتحان! سيتم إظهار النتيجة الآن.");
        finishQuiz();
      }
    }, 1000);
  }

  function stopQuizTimer() {
    if (state.quiz.timerInterval) {
      clearInterval(state.quiz.timerInterval);
      state.quiz.timerInterval = null;
    }
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  // ==========================================
  // QUIZ INTERACTION LOGIC
  // ==========================================
  window.setQuizMode = function (newMode) {
    state.quiz.mode = newMode;
    renderMainView();
  };

  window.selectOption = function (optIndex) {
    const qz = state.quiz;
    if (qz.submitted) return;

    const currentQ = qz.questions[qz.currentIndex];
    // In study mode, once answered, don't overwrite unless they want to? Actually let's lock after first click in study mode so score is accurate, or allow changing in exam mode!
    if (qz.mode === "study" && qz.userAnswers[qz.currentIndex] !== undefined) {
      return;
    }

    qz.userAnswers[qz.currentIndex] = optIndex;

    // Record progress & mistakes immediately
    const isCorrect = optIndex === currentQ.answer;
    state.progress[currentQ.id] = isCorrect ? "correct" : "wrong";
    saveJSON(STORAGE_KEYS.PROGRESS, state.progress);

    if (!isCorrect) {
      if (!state.mistakes.includes(currentQ.id)) {
        state.mistakes.push(currentQ.id);
        saveJSON(STORAGE_KEYS.MISTAKES, state.mistakes);
      }
    } else {
      // Remove from mistakes if answered correctly!
      const mIdx = state.mistakes.indexOf(currentQ.id);
      if (mIdx !== -1) {
        state.mistakes.splice(mIdx, 1);
        saveJSON(STORAGE_KEYS.MISTAKES, state.mistakes);
      }
    }

    renderMainView();
  };

  window.toggleBookmark = function (qId) {
    const idx = state.bookmarks.indexOf(qId);
    if (idx === -1) {
      state.bookmarks.push(qId);
    } else {
      state.bookmarks.splice(idx, 1);
    }
    saveJSON(STORAGE_KEYS.BOOKMARKS, state.bookmarks);
    renderMainView();
  };

  window.goToQuestion = function (index) {
    if (index < 0 || index >= state.quiz.questions.length) return;
    state.quiz.currentIndex = index;
    renderMainView();
  };

  window.finishQuiz = function () {
    stopQuizTimer();
    state.quiz.submitted = true;
    state.activeTab = "result";
    renderMainView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.reviewSubmittedQuiz = function () {
    state.quiz.mode = "study";
    state.quiz.currentIndex = 0;
    state.activeTab = "quiz";
    renderMainView();
  };

  window.retryQuizMistakes = function () {
    const qz = state.quiz;
    const wrongQs = qz.questions.filter((q, idx) => qz.userAnswers[idx] !== q.answer);
    if (wrongQs.length === 0) return;
    startQuizSession({
      title: "إعادة حل الأخطاء - " + qz.title,
      subtitle: `${wrongQs.length} سؤال للمراجعة`,
      questions: wrongQs,
      mode: "study",
      timerEnabled: false,
      durationMinutes: 20
    });
  };

  // ==========================================
  // RENDER ACTIVE QUIZ PLAYER
  // ==========================================
  function renderQuizPlayer() {
    const qz = state.quiz;
    const total = qz.questions.length;
    if (total === 0) {
      return `<div class="question-card">لا توجد أسئلة في هذا القسم. <button class="btn btn-primary" onclick="switchTab('subjects')">العودة</button></div>`;
    }

    const idx = qz.currentIndex;
    const currentQ = qz.questions[idx];
    const selectedOpt = qz.userAnswers[idx];
    const hasAnswered = selectedOpt !== undefined;
    const showFeedback = qz.submitted || (qz.mode === "study" && hasAnswered);
    const isBookmarked = state.bookmarks.includes(currentQ.id);
    const letters = ["A", "B", "C", "D", "E", "F"];

    const diagramHtml =
      currentQ.diagramKey && window.APP_CONFIG.diagrams[currentQ.diagramKey]
        ? window.APP_CONFIG.diagrams[currentQ.diagramKey]
        : "";

    const optionsHtml = currentQ.options
      .map((optText, oIdx) => {
        let cls = "option-btn";
        if (showFeedback) {
          if (oIdx === currentQ.answer) cls += " correct";
          else if (oIdx === selectedOpt && selectedOpt !== currentQ.answer) cls += " wrong";
        } else if (oIdx === selectedOpt) {
          cls += " selected";
        }

        return `
          <button class="${cls}" onclick="selectOption(${oIdx})">
            <span class="option-letter">${letters[oIdx] || oIdx + 1}</span>
            <span>${optText}</span>
          </button>
        `;
      })
      .join("");

    let feedbackHtml = "";
    if (showFeedback) {
      const isRight = selectedOpt === currentQ.answer;
      feedbackHtml = `
        <div class="feedback-box ${isRight ? "is-correct" : "is-wrong"}">
          <div class="feedback-header" style="color: ${isRight ? "var(--success)" : "var(--danger)"};">
            ${
              isRight
                ? "✅ إجابة صحيحة! عاش يا دكتور 👏"
                : `❌ إجابة غير صحيحة — الإجابة الصحيحة هي (${letters[currentQ.answer]}: ${currentQ.options[currentQ.answer]})`
            }
          </div>
          <div class="feedback-text">
            <strong>💡 التفسير العلمي:</strong> ${currentQ.explanation || "الإجابة موضحة أعلاه."}
          </div>
          ${
            currentQ.note
              ? `<div class="basmaga-note">⚠️ ${currentQ.note}</div>`
              : ""
          }
        </div>
      `;
    }

    // Navigator dots
    const dotsHtml = qz.questions
      .map((q, qIdx) => {
        let dotCls = "q-dot";
        if (qIdx === idx) dotCls += " current";
        const uAns = qz.userAnswers[qIdx];
        if (uAns !== undefined) {
          if (qz.mode === "study" || qz.submitted) {
            dotCls += uAns === q.answer ? " answered-correct" : " answered-wrong";
          } else {
            dotCls += " answered-Exam";
          }
        }
        return `<button class="${dotCls}" onclick="goToQuestion(${qIdx})">${qIdx + 1}</button>`;
      })
      .join("");

    const answeredCount = Object.keys(qz.userAnswers).length;

    return `
      <div class="quiz-container">
        <div class="quiz-top-bar">
          <div class="quiz-header-info">
            <h2>${qz.title}</h2>
            <p>${qz.subtitle} • تم حل ${answeredCount} من ${total}</p>
          </div>

          <div class="quiz-controls-row">
            <div class="mode-switch-group">
              <button class="mode-switch-btn ${qz.mode === "study" ? "active" : ""}" onclick="setQuizMode('study')">
                📖 مذاكرة فورية
              </button>
              <button class="mode-switch-btn ${qz.mode === "exam" ? "active" : ""}" onclick="setQuizMode('exam')">
                📝 وضع امتحان
              </button>
            </div>

            <button class="timer-pill ${qz.timerEnabled ? "active" : ""}" onclick="toggleQuizTimer()" title="تشغيل أو إيقاف التايمر">
              <span>${qz.timerEnabled ? "⏱️" : "🔕"}</span>
              <span id="liveTimerDisplay">${qz.timerEnabled ? formatTime(qz.timerRemaining) : "التايمر متوقف"}</span>
            </button>

            <button class="btn btn-secondary btn-sm" onclick="switchTab('subjects')">
              ✖ خروج
            </button>
          </div>
        </div>

        <div class="question-card">
          <div class="question-meta-bar">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="q-counter-badge">سؤال ${idx + 1} من ${total}</span>
              <span class="meta-tag">${currentQ.subject.toUpperCase()}</span>
            </div>

            <button class="bookmark-btn ${isBookmarked ? "saved" : ""}" onclick="toggleBookmark('${currentQ.id}')">
              ${isBookmarked ? "⭐ محفوظ في المفضلة" : "☆ حفظ للمراجعة"}
            </button>
          </div>

          <div class="question-stem ltr-text">
            ${idx + 1}. ${currentQ.q}
          </div>

          ${diagramHtml}

          <div class="options-list">
            ${optionsHtml}
          </div>

          ${feedbackHtml}

          <div style="margin-top: 16px;">
            ${getSubjectLecturesHtml(currentQ.subject)}
          </div>

          <div style="margin-top: 10px; padding: 12px 16px; border-radius: 12px; background: rgba(14, 165, 233, 0.08); border: 1px dashed rgba(14, 165, 233, 0.45); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
            <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-main);">
              🩺 لو عاوز تفهم أو تتأكد من إجابة أي سؤال، اسأل الدكاترة على جروب التليجرام
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button class="btn btn-secondary btn-sm" onclick="switchTab('lectures')">
                🎧 فهرس الشرح الكامل
              </button>
              <a href="https://t.me/+2OKH0D4gDD03NGE0" target="_blank" rel="noopener" class="btn btn-telegram btn-sm">
                💬 اسأل الدكاترة على جروب التليجرام
              </a>
            </div>
          </div>
        </div>

        <div class="quiz-nav-footer">
          <button class="btn btn-secondary" ${idx === 0 ? "disabled" : ""} onclick="goToQuestion(${idx - 1})">
            ➡ السؤال السابق
          </button>

          <div style="display:flex; gap:10px;">
            <button class="btn btn-primary" onclick="finishQuiz()">
              🏁 إنهاء وإظهار النتيجة (${answeredCount}/${total})
            </button>
            ${
              idx < total - 1
                ? `<button class="btn btn-secondary" onclick="goToQuestion(${idx + 1})">
                    السؤال التالي ⬅
                  </button>`
                : ""
            }
          </div>
        </div>

        <div class="q-grid-panel">
          <div class="q-grid-title">خريطة الأسئلة السريعة (اضغط على أي رقم للانتقال إليه):</div>
          <div class="q-dots-grid">
            ${dotsHtml}
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // RENDER QUIZ RESULT & SHAREABLE CARD
  // ==========================================
  function renderQuizResult() {
    const qz = state.quiz;
    const total = qz.questions.length;
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    qz.questions.forEach((q, idx) => {
      const uAns = qz.userAnswers[idx];
      if (uAns === undefined) unanswered++;
      else if (uAns === q.answer) correct++;
      else wrong++;
    });

    const pct = total ? Math.round((correct / total) * 100) : 0;
    let gradeTitle = "Keep Going! 💪";
    if (pct >= 90) gradeTitle = "A+ KEEPER CHAMPION! 🏆🔥";
    else if (pct >= 80) gradeTitle = "امتياز يليق بـ A+ Keepers 🌟";
    else if (pct >= 65) gradeTitle = "جيد جداً — راجع أخطاءك للـ A+ 👍";

    const docName = state.studentName ? `د. ${state.studentName}` : "دكتور المستقبل (دفعة 2027)";
    const brand = window.APP_CONFIG.brand;

    return `
      <div class="quiz-container">
        <div class="result-share-card">
          <img src="${brand.logo}" alt="A+ KEEPERS TEAM" style="height:54px; border-radius:10px; background:#fff; padding:4px 10px; margin-bottom:10px;" />
          <div style="font-size:0.85rem; color:#fca5a5; font-weight:800; letter-spacing:1px;">
            ${brand.name} • PORT SAID FACULTY OF MEDICINE
          </div>
          <h2 style="font-size:1.55rem; font-weight:900; margin-top:6px;">${docName}</h2>
          <p style="color:#cbd5e1; font-size:0.95rem;">${qz.title}</p>

          <div class="result-score-circle">
            <div class="result-score-pct">${pct}%</div>
            <div style="font-size:0.85rem; color:#fca5a5; font-weight:700;">${correct} / ${total}</div>
          </div>

          <div style="font-size:1.25rem; font-weight:900; color:#fde047; margin-bottom:16px;">
            ${gradeTitle}
          </div>

          <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px; max-width:440px; margin:0 auto 22px;">
            <div style="background:rgba(16,185,129,0.2); padding:10px; border-radius:10px;">
              <div style="font-weight:900; font-size:1.2rem; color:#34d399;">${correct}</div>
              <div style="font-size:0.78rem;">إجابة صحيحة</div>
            </div>
            <div style="background:rgba(239,68,68,0.2); padding:10px; border-radius:10px;">
              <div style="font-weight:900; font-size:1.2rem; color:#f87171;">${wrong}</div>
              <div style="font-size:0.78rem;">إجابة خاطئة</div>
            </div>
            <div style="background:rgba(255,255,255,0.1); padding:10px; border-radius:10px;">
              <div style="font-weight:900; font-size:1.2rem;">${unanswered}</div>
              <div style="font-size:0.78rem;">لم يُحل</div>
            </div>
          </div>

          <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="shareScoreCard(${pct}, ${correct}, ${total})">
              📤 مشاركة النتيجة على تليجرام / نسخ الكارت
            </button>
            <button class="btn btn-outline-light" onclick="reviewSubmittedQuiz()">
              📖 مراجعة الأسئلة والتفسير العلمي
            </button>
            ${
              wrong + unanswered > 0
                ? `<button class="btn btn-outline-light" onclick="retryQuizMistakes()">
                    🔄 إعادة حل الأخطاء فقط (${wrong + unanswered})
                  </button>`
                : ""
            }
          </div>

          <div style="margin-top:24px; padding-top:18px; border-top:1px solid rgba(255,255,255,0.15); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
            <div style="text-align:right;">
              <div style="font-weight:800; font-size:0.95rem;">لو عاوز تفهم أو تتأكد من إجابة أي سؤال، اسأل الدكاترة على جروب التليجرام</div>
              <div style="font-size:0.82rem; color:#cbd5e1;">انضم لجروب مناقشة الأسئلة وقناة A+ KEEPERS TEAM وتابع كل الشروحات والمراجعات</div>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <a href="https://t.me/+2OKH0D4gDD03NGE0" target="_blank" rel="noopener" class="btn btn-telegram btn-sm">
                💬 اسأل الدكاترة على جروب التليجرام
              </a>
              <a href="${brand.telegramChannel}" target="_blank" rel="noopener" class="btn btn-outline-light btn-sm">
                📢 قناة الدفعة
              </a>
              <a href="${brand.telegramSupport}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                🩺 تواصل مع التيم
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.shareScoreCard = function (pct, correct, total) {
    const docName = state.studentName ? `د. ${state.studentName}` : "بطل من دفعة 2027";
    const text =
      `🩺 نتيجة اختبار على منصة A+ KEEPERS TEAM\n` +
      `👤 الطالب: ${docName}\n` +
      `📘 الاختبار: ${state.quiz.title}\n` +
      `🏆 النتيجة: ${correct} من ${total} (${pct}%)\n\n` +
      `💬 لو عاوز تفهم أو تتأكد من إجابة أي سؤال اسأل الدكاترة على جروب التليجرام:\n` +
      `https://t.me/+2OKH0D4gDD03NGE0\n` +
      `📢 قناة الدفعة: https://t.me/AplusKeepersClass1_2027\n` +
      `للتواصل: @A_Plus_Keepers_Support`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        alert("✅ تم نسخ كارت النتيجة! تقدر تعمله Paste دلوقتي في جروب الدفعة أو تليجرام.");
      });
    } else {
      prompt("انسخ كارت النتيجة ومشاركته مع زمايلك:", text);
    }
  };

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Keyboard navigation inside Quiz
  document.addEventListener("keydown", (e) => {
    if (state.activeTab !== "quiz") return;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
    if (e.key === "ArrowLeft") {
      goToQuestion(state.quiz.currentIndex + 1);
    } else if (e.key === "ArrowRight") {
      goToQuestion(state.quiz.currentIndex - 1);
    }
  });

  // ==========================================
  // SILENT BACKGROUND ANALYTICS (ADMIN ONLY)
  // ==========================================
  const ANALYTICS_NS = "aplus_keepers_portsaid_med101";
  const ANALYTICS_BASE = "https://abacus.jasoncameron.dev";

  function trackEventSilent(key) {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("admin") === "1" || params.get("stats") === "admin") return;
      fetch(`${ANALYTICS_BASE}/hit/${ANALYTICS_NS}/${key}`, { mode: "cors", cache: "no-store" }).catch(() => {});
    } catch (e) {
      // Ignore network errors silently
    }
  }

  function initSilentAnalytics() {
    try {
      const params = new URLSearchParams(window.location.search);
      const isAdminView = params.get("admin") === "1" || params.get("stats") === "admin";

      if (isAdminView) {
        showAdminStatsModal();
        return;
      }

      // 1. Count Unique Visitor (once per device/browser)
      if (!localStorage.getItem("ak_unique_counted_v1")) {
        localStorage.setItem("ak_unique_counted_v1", "1");
        trackEventSilent("unique_visitors");
      }

      // 2. Count Session Visit (once per browser session)
      if (!sessionStorage.getItem("ak_session_counted_v1")) {
        sessionStorage.setItem("ak_session_counted_v1", "1");
        trackEventSilent("total_visits");
      }
    } catch (e) {
      // Ignore storage errors silently
    }
  }

  async function showAdminStatsModal() {
    const fetchMetric = async (key) => {
      try {
        const res = await fetch(`${ANALYTICS_BASE}/get/${ANALYTICS_NS}/${key}`, { cache: "no-store" });
        if (!res.ok) return 0;
        const data = await res.json();
        return typeof data.value === "number" ? data.value : 0;
      } catch (e) {
        return 0;
      }
    };

    const [uniqueVisitors, totalVisits, quizzesStarted] = await Promise.all([
      fetchMetric("unique_visitors"),
      fetchMetric("total_visits"),
      fetchMetric("quizzes_started")
    ]);

    const existing = document.getElementById("akAdminStatsOverlay");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "akAdminStatsOverlay";
    overlay.style.cssText =
      "position:fixed;inset:0;background:rgba(15,23,42,0.82);backdrop-filter:blur(6px);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;font-family:'Cairo',sans-serif;direction:rtl;";

    overlay.innerHTML = `
      <div style="background:var(--bg-card,#ffffff);color:var(--text-main,#0f172a);max-width:480px;width:100%;border-radius:18px;padding:24px;box-shadow:0 20px 50px rgba(0,0,0,0.35);border:2px solid #dc2626;text-align:center;">
        <div style="display:inline-block;background:#fee2e2;color:#b91c1c;font-weight:800;font-size:0.82rem;padding:4px 12px;border-radius:99px;margin-bottom:10px;">
          🔒 لوحة إحصائيات الأدمن السرية (غير ظاهرة للطلاب)
        </div>
        <h3 style="font-size:1.35rem;font-weight:900;margin:0 0 18px;">📊 إحصائيات زوار منصة A+ KEEPERS</h3>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;">
          <div style="background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.35);padding:14px 8px;border-radius:12px;">
            <div style="font-size:1.75rem;font-weight:900;color:#059669;">${uniqueVisitors}</div>
            <div style="font-size:0.8rem;font-weight:700;margin-top:4px;">طالب فريد (Unique)</div>
          </div>
          <div style="background:rgba(14,165,233,0.12);border:1px solid rgba(14,165,233,0.35);padding:14px 8px;border-radius:12px;">
            <div style="font-size:1.75rem;font-weight:900;color:#0284c7;">${totalVisits}</div>
            <div style="font-size:0.8rem;font-weight:700;margin-top:4px;">إجمالي الزيارات</div>
          </div>
          <div style="background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.35);padding:14px 8px;border-radius:12px;">
            <div style="font-size:1.75rem;font-weight:900;color:#d97706;">${quizzesStarted}</div>
            <div style="font-size:0.8rem;font-weight:700;margin-top:4px;">اختبارات تم بدؤها</div>
          </div>
        </div>
        <div style="display:flex;gap:10px;justify-content:center;">
          <button onclick="window.refreshAdminStats()" class="btn btn-primary btn-sm">🔄 تحديث الأرقام الآن</button>
          <button onclick="document.getElementById('akAdminStatsOverlay').remove()" class="btn btn-secondary btn-sm">✖ إغلاق</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  window.refreshAdminStats = showAdminStatsModal;

  // Boot
  window.addEventListener("DOMContentLoaded", () => {
    initTheme();
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    const nameInput = document.getElementById("studentNameInput");
    if (nameInput) {
      nameInput.value = state.studentName;
      nameInput.addEventListener("input", (e) => saveStudentName(e.target.value));
    }

    renderMainView();
    initSilentAnalytics();
  });
})();
