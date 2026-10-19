// ==========================================
// A+ KEEPERS TEAM - PLATFORM CONFIGURATION
// Port Said University - Faculty of Medicine (Block 1 / MED101)
// ==========================================

window.APP_CONFIG = {
  brand: {
    name: "A+ KEEPERS TEAM",
    shortName: "A+ KEEPERS",
    tagline: "طريقك للـ A+ في طب بورسعيد (حكومي وأهلية)",
    subtitle: "منصة التدريب وبنوك الأسئلة الشاملة للبلوك الأول (Introduction to Medicine - MED101)",
    batch: "دفعة 2027 - سنة أولى طب بورسعيد",
    logo: "assets/logo.jpg",
    telegramChannel: "https://t.me/AplusKeepersClass1_2027",
    telegramGroup: "https://t.me/+2OKH0D4gDD03NGE0",
    telegramSupport: "https://t.me/A_Plus_Keepers_Support",
    telegramSupportHandle: "@A_Plus_Keepers_Support",
    courseFeatures: [
      {
        icon: "🎯",
        title: "شرح مبسط وموجه للامتحان",
        desc: "تغطية شاملة لكل محاضرات البلوك الأول بأسلوب يربط الفهم بالبصمجة الذكية."
      },
      {
        icon: "🔥",
        title: "تجميعات وسنوات سابقة",
        desc: "كل امتحانات السنين السابقة (حكومي وأهلية) متصنفة ومحلولة مع تفسير علمي دقيق."
      },
      {
        icon: "🩺",
        title: "اسأل الدكاترة في أي وقت",
        desc: "لو عاوز تفهم أو تتأكد من إجابة أي سؤال، الدكاترة معاك على جروب التليجرام خطوة بخطوة."
      },
      {
        icon: "🏆",
        title: "تدريب على المقالي والـ MCQ",
        desc: "نماذج محاكاة حقيقية لنظام امتحانات كلية طب جامعة بورسعيد."
      }
    ]
  },

  subjects: [
    {
      id: "anatomy",
      nameEn: "Anatomy",
      nameAr: "التشريح العام (Anatomy)",
      icon: "🦴",
      color: "#dc2626",
      bgLight: "rgba(220, 38, 38, 0.1)",
      desc: "Anatomical Position, Planes, Bones, Cartilage, Joints & Skeletal Muscles"
    },
    {
      id: "physiology",
      nameEn: "Physiology",
      nameAr: "الفسيولوجي (Physiology)",
      icon: "💓",
      color: "#e11d48",
      bgLight: "rgba(225, 29, 72, 0.1)",
      desc: "Introduction to Physiology, Levels of Organization, Homeostasis & Feedback Loops"
    },
    {
      id: "biochemistry",
      nameEn: "Biochemistry",
      nameAr: "الكيمياء الحيوية (Biochemistry)",
      icon: "🧬",
      color: "#2563eb",
      bgLight: "rgba(37, 99, 235, 0.1)",
      desc: "Carbohydrate Chemistry, Lipid Chemistry & Amino Acid Chemistry"
    },
    {
      id: "microbiology",
      nameEn: "Microbiology",
      nameAr: "الميكروبيولوجي (Microbiology)",
      icon: "🦠",
      color: "#059669",
      bgLight: "rgba(5, 150, 105, 0.1)",
      desc: "Prokaryotes vs Eukaryotes, Bacterial Cell Wall, Capsule, Flagella, Spores & Plasmids"
    },
    {
      id: "parasitology",
      nameEn: "Parasitology",
      nameAr: "الطفيليات (Parasitology)",
      icon: "🔬",
      color: "#d97706",
      bgLight: "rgba(217, 119, 6, 0.1)",
      desc: "Introduction to Parasitology, Types of Parasites, Hosts, Vectors & Symbiosis"
    },
    {
      id: "pharmacology",
      nameEn: "Pharmacology",
      nameAr: "الفارماكولوجي (Pharmacology)",
      icon: "💊",
      color: "#7c3aed",
      bgLight: "rgba(124, 58, 237, 0.1)",
      desc: "Pharmacokinetics, Pharmacodynamics, Routes of Administration, Adverse & Toxic Effects"
    },
    {
      id: "histology",
      nameEn: "Histology & Genetics",
      nameAr: "الهستولوجي والوراثة (Histology)",
      icon: "🧪",
      color: "#db2777",
      bgLight: "rgba(219, 39, 119, 0.1)",
      desc: "Microtechniques, Staining (H&E, PAS), Epithelium, Connective Tissue, Nervous & Karyotyping"
    },
    {
      id: "pathology",
      nameEn: "Pathology",
      nameAr: "الباثولوجي (Pathology)",
      icon: "🩺",
      color: "#0891b2",
      bgLight: "rgba(8, 145, 178, 0.1)",
      desc: "Introduction to Pathology, Etiology, Pathogenesis, Complications, Biopsy & Autopsy"
    },
    {
      id: "community",
      nameEn: "Family & Public Health",
      nameAr: "طب الأسرة والمجتمع والبحث العلمي",
      icon: "🏥",
      color: "#4f46e5",
      bgLight: "rgba(79, 70, 229, 0.1)",
      desc: "Family Medicine, Family Cycle, APGAR, Public Health, Prevention Levels, PHC & Research"
    }
  ],

  // فهرس الشرح - لو محتاج تذاكر أي محاضرة
  lecturesIndex: [
    {
      num: 1,
      subjectId: "physiology",
      icon: "🫀",
      title: "الفسيولوجي (Physiology)",
      color: "#e11d48",
      bgLight: "rgba(225, 29, 72, 0.1)",
      groups: [
        {
          label: "",
          items: [
            { title: "Physiology – Lec 1 (Part 1)", url: "https://t.me/AplusKeepersClass1_2027/54" },
            { title: "Physiology – Lec 1 (Part 2)", url: "https://t.me/AplusKeepersClass1_2027/55" },
            { title: "Physiology – Lec 2 (Homeostasis & Basic Concepts)", url: "https://t.me/AplusKeepersClass1_2027/73" }
          ]
        }
      ]
    },
    {
      num: 2,
      subjectId: "anatomy",
      icon: "🦴",
      title: "الأناتومي (Anatomy)",
      color: "#dc2626",
      bgLight: "rgba(220, 38, 38, 0.1)",
      groups: [
        {
          label: "🔻 أهلية:",
          items: [
            { title: "Anatomy – Lec 1 (Part 1)", url: "https://t.me/AplusKeepersClass1_2027/57" },
            { title: "Anatomy – Lec 1 (Part 2)", url: "https://t.me/AplusKeepersClass1_2027/58" }
          ]
        },
        {
          label: "🔻 حكومية:",
          items: [
            { title: "Anatomy – Lec 1 (حكومية)", url: "https://t.me/AplusKeepersClass1_2027/59" },
            { title: "Anatomy – Lec 2 (حكومية)", url: "https://t.me/AplusKeepersClass1_2027/86" }
          ]
        }
      ]
    },
    {
      num: 3,
      subjectId: "histology",
      icon: "🔬",
      title: "الهستولوجي (Histology)",
      color: "#db2777",
      bgLight: "rgba(219, 39, 119, 0.1)",
      groups: [
        {
          label: "",
          items: [
            { title: "Histology – Lec 1 (Microtechniques)", url: "https://t.me/AplusKeepersClass1_2027/60" },
            { title: "Histology – Lec 2 (Advanced Techniques & Staining)", url: "https://t.me/AplusKeepersClass1_2027/68" },
            { title: "Histology – Lec 3 (Chromosomes & Karyotyping)", url: "https://t.me/AplusKeepersClass1_2027/84" }
          ]
        }
      ]
    },
    {
      num: 4,
      subjectId: "microbiology",
      icon: "🧫",
      title: "المايكروبيولوجي (Microbiology)",
      color: "#059669",
      bgLight: "rgba(5, 150, 105, 0.1)",
      groups: [
        {
          label: "",
          items: [
            { title: "Microbiology – Lec 1 (Part 1 - Bacterial Ultrastructure)", url: "https://t.me/AplusKeepersClass1_2027/61" },
            { title: "Microbiology – Lec 1 (Part 2 - Bacterial Ultrastructure)", url: "https://t.me/AplusKeepersClass1_2027/62" },
            { title: "Microbiology – Lec 1 (حكومية)", url: "https://t.me/AplusKeepersClass1_2027/96" },
            { title: "Microbiology – Lec 2 (Virology Basics)", url: "https://t.me/AplusKeepersClass1_2027/70" }
          ]
        }
      ]
    },
    {
      num: 5,
      subjectId: "biochemistry",
      icon: "🧪",
      title: "الكيمياء الحيوية (Biochemistry)",
      color: "#2563eb",
      bgLight: "rgba(37, 99, 235, 0.1)",
      groups: [
        {
          label: "",
          items: [
            { title: "Biochemistry – Lec 1 (Part 1 - Carbohydrates)", url: "https://t.me/AplusKeepersClass1_2027/64" },
            { title: "Biochemistry – Lec 2 (Lipid Chemistry)", url: "https://t.me/AplusKeepersClass1_2027/91" }
          ]
        }
      ]
    },
    {
      num: 6,
      subjectId: "parasitology",
      icon: "🪱",
      title: "الباراسيتولوجي (Parasitology)",
      color: "#d97706",
      bgLight: "rgba(217, 119, 6, 0.1)",
      groups: [
        {
          label: "🔻 أهلية:",
          items: [
            { title: "Parasitology – Lec 1 (أهلية)", url: "https://t.me/AplusKeepersClass1_2027/71" },
            { title: "Parasitology – Lec 2 (أهلية)", url: "https://t.me/AplusKeepersClass1_2027/87" }
          ]
        },
        {
          label: "🔻 حكومية:",
          items: [
            { title: "Parasitology – Lec 1 (حكومية)", url: "https://t.me/AplusKeepersClass1_2027/79" }
          ]
        }
      ]
    },
    {
      num: 7,
      subjectId: "pharmacology",
      icon: "💊",
      title: "الفارماكولوجي (Pharmacology)",
      color: "#7c3aed",
      bgLight: "rgba(124, 58, 237, 0.1)",
      groups: [
        {
          label: "",
          items: [
            { title: "Pharmacology – Lec 1 (Introduction A: Pharmacokinetics - Ph.K)", url: "https://t.me/AplusKeepersClass1_2027/80" },
            { title: "Pharmacology – Lec 1 (Introduction B: Pharmacodynamics - Ph.D)", url: "https://t.me/AplusKeepersClass1_2027/81" }
          ]
        }
      ]
    },
    {
      num: 8,
      subjectId: "pathology",
      icon: "🩺",
      title: "الباثولوجي (Pathology)",
      color: "#0891b2",
      bgLight: "rgba(8, 145, 178, 0.1)",
      groups: [
        {
          label: "",
          items: [
            { title: "Pathology – Lec 1 (Introduction to Pathology & Cell Injury)", url: "https://t.me/AplusKeepersClass1_2027/83" }
          ]
        }
      ]
    },
    {
      num: 9,
      subjectId: "community",
      icon: "👥",
      title: "طب المجتمع (Community Medicine)",
      color: "#4f46e5",
      bgLight: "rgba(79, 70, 229, 0.1)",
      groups: [
        {
          label: "",
          items: [
            { title: "Community Medicine – Lec 1 (Introduction)", url: "https://t.me/AplusKeepersClass1_2027/85" },
            { title: "Community Medicine – Lec 2 (Part 1 - Levels of Prevention)", url: "https://t.me/AplusKeepersClass1_2027/88" },
            { title: "Community Medicine – Lec 2 (Part 2 - Levels of Prevention)", url: "https://t.me/AplusKeepersClass1_2027/89" }
          ]
        }
      ]
    },
    {
      num: 10,
      subjectId: "community",
      icon: "👨‍👩‍👧‍👦",
      title: "طب الأسرة (Family Medicine)",
      color: "#4f46e5",
      bgLight: "rgba(79, 70, 229, 0.1)",
      groups: [
        {
          label: "",
          items: [
            { title: "Family Medicine – Lec 1 (Principles of Family Medicine)", url: "https://t.me/AplusKeepersClass1_2027/90" }
          ]
        }
      ]
    }
  ],

  sources: [
    // --- PAST EXAMS ---
    {
      id: "exam_oct_2024",
      category: "past_exam",
      title: "امتحان نهاية البلوك الأول - أكتوبر 2024 (MED101)",
      subtitle: "End-Block Examination (31-10-2024) - Model 1",
      year: "2024/2025",
      badge: "أحدث امتحان 🔥",
      durationMinutes: 60,
      description: "امتحان نهاية البلوك الأول بتاريخ 31-10-2024 (كود MED101) شامل جميع مواد البلوك."
    },
    {
      id: "exam_summer_2024",
      category: "past_exam",
      title: "امتحان سمر البلوك الأول - سبتمبر 2024",
      subtitle: "1st Year Block 1 Introduction MCQ - Summer (12-9-2024)",
      year: "صيف 2024",
      badge: "امتحان سمر 2024",
      durationMinutes: 60,
      description: "امتحان الدور الصيفي للبلوك الأول بتاريخ 12-9-2024 (32 سؤال شامل)."
    },
    {
      id: "exam_ebe_2023",
      category: "past_exam",
      title: "امتحان نهاية البلوك الأول EBE B1 - 2023",
      subtitle: "End-Block Examination B1 (2023)",
      year: "2023",
      badge: "سنوات سابقة 2023",
      durationMinutes: 60,
      description: "امتحان نهاية البلوك الأول لعام 2023 بعد تصحيح جميع الأخطاء المطبعية في الورقة الأصلية."
    },
    {
      id: "exam_epe_2022_p1",
      category: "past_exam",
      title: "امتحان نهاية البلوك 2022/2023 - Paper (1)",
      subtitle: "Introduction End-Block Examination: Paper 1 (3-11-2022)",
      year: "2022/2023",
      badge: "Paper 1 - 2022",
      durationMinutes: 60,
      description: "الورقة الأولى من امتحان نهاية البلوك الأول بتاريخ 3-11-2022 مع تصحيح أخطاء التظليل اليدوي."
    },
    {
      id: "exam_epe_2022_p2",
      category: "past_exam",
      title: "امتحان نهاية البلوك 2022/2023 - Paper (2)",
      subtitle: "Introduction End-Block Examination: Paper 2 (3-11-2022)",
      year: "2022/2023",
      badge: "Paper 2 - 2022",
      durationMinutes: 60,
      description: "الورقة الثانية من امتحان نهاية البلوك الأول بتاريخ 3-11-2022 (32 سؤال شامل)."
    },
    {
      id: "exam_2020_p1",
      category: "past_exam",
      title: "امتحان نهاية البلوك 2020 - Paper (1)",
      subtitle: "Introduction End-Block Written Exam 2020 (Paper 1)",
      year: "2020",
      badge: "شامل التوصيل Matching",
      durationMinutes: 60,
      description: "امتحان عام 2020 الورقة الأولى (31 سؤال MCQ + 5 أسئلة توصيل Matching)."
    },
    {
      id: "exam_2020_p2",
      category: "past_exam",
      title: "امتحان نهاية البلوك 2020 - Paper (2)",
      subtitle: "Introduction End-Block Written Exam 2020 (Paper 2)",
      year: "2020",
      badge: "شامل التوصيل Matching",
      durationMinutes: 60,
      description: "امتحان عام 2020 الورقة الثانية (32 سؤال MCQ + 4 أسئلة توصيل Matching)."
    },

    // --- SUBJECT & REVISION BANKS ---
    {
      id: "bank_camscanner_rev",
      category: "subject_bank",
      title: "بنك المراجعة الشاملة للبلوك الأول (51 سؤال)",
      subtitle: "Comprehensive Block 1 Revision MCQs",
      year: "تجميعات مهمة",
      badge: "تجميعة شاملة ⭐",
      durationMinutes: 50,
      description: "51 سؤال مراجعة شاملة تغطي جميع مواد البلوك الأول (Biochem, Anatomy, Histo, Family, Pharma, Micro, Para, Patho)."
    },
    {
      id: "bank_anatomy",
      category: "subject_bank",
      title: "بنك أسئلة التشريح (Anatomy Bank)",
      subtitle: "General Anatomy Introduction MCQs",
      year: "بنك المادة",
      badge: "Anatomy",
      durationMinutes: 15,
      description: "أسئلة مركزة على الاتجاهات التشريحية، أنواع العظام، الغضاريف، المفاصل، والعضلات."
    },
    {
      id: "bank_physio_intro",
      category: "subject_bank",
      title: "بنك أسئلة الفسيولوجي (Physiology & Homeostasis)",
      subtitle: "Introduction to Physiology & Homeostasis Review Questions",
      year: "بنك المادة",
      badge: "Physiology",
      durationMinutes: 35,
      description: "أسئلة مستويات التنظيم الوظيفي، فروع الفسيولوجي، الـ Homeostasis والـ Negative/Positive Feedback مع الشرح."
    },
    {
      id: "bank_biochem_carbs",
      category: "subject_bank",
      title: "بنك الكيمياء الحيوية - الكربوهيدرات (Carbohydrate Chemistry)",
      subtitle: "Carbohydrate Chemistry & Structural Formulas",
      year: "بنك المادة",
      badge: "شامل الصيغ الكيميائية 🧪",
      durationMinutes: 25,
      description: "24 سؤال على السكريات الثنائية، الـ Epimers، الـ Isomers، والتعرف على الصيغ البنائية وحلقات الجلوكوز."
    },
    {
      id: "bank_biochem_lipids",
      category: "subject_bank",
      title: "بنك الكيمياء الحيوية - الليبيدات (Lipid Chemistry)",
      subtitle: "Lipid Chemistry MCQs & True/False",
      year: "بنك المادة",
      badge: "MCQ + صح وغلط",
      durationMinutes: 20,
      description: "21 سؤال على الأحماض الدهنية، أوميجا 3 و 6، تقسيم الليبيدات، والصيغ البنائية للأحماض الهيدروكسيلية."
    },
    {
      id: "bank_biochem_amino",
      category: "subject_bank",
      title: "بنك الكيمياء الحيوية - الأحماض الأمينية (Amino Acids)",
      subtitle: "Amino Acid Chemistry MCQs",
      year: "بنك المادة",
      badge: "Biochemistry",
      durationMinutes: 20,
      description: "19 سؤال على تصنيف الأحماض الأمينية، المجموعات الجانبية (R groups)، والأحماض الأساسية وغير الأساسية."
    },
    {
      id: "bank_micro",
      category: "subject_bank",
      title: "بنك مراجعة الميكروبيولوجي (EBE Revision - Micro)",
      subtitle: "First Year EBE Revision MCQ - Introduction to Microbiology",
      year: "بنك المادة",
      badge: "42 سؤال شامل 🦠",
      durationMinutes: 40,
      description: "42 سؤال تغطي تركيب الخلية البكتيرية، الجدار الخلوي، الريبوسومات، البلازميد، الجينات القافزة، والكبسولة."
    },
    {
      id: "bank_parasitology",
      category: "subject_bank",
      title: "بنك أسئلة الطفيليات (Parasitology Lecture 1)",
      subtitle: "MCQs Lecture 1 - Introduction to Parasitology",
      year: "بنك المادة",
      badge: "Parasitology",
      durationMinutes: 15,
      description: "أسئلة مقدمة الطفيليات: أنواع الطفيليات (Obligatory, Facultative, Erratic) وأنواع العوائل والنواقل."
    },
    {
      id: "bank_pharma",
      category: "subject_bank",
      title: "بنك أسئلة الفارماكولوجي الشامل (Pharmacology Bank)",
      subtitle: "General Pharmacology 52 MCQs",
      year: "بنك المادة",
      badge: "52 سؤال شامل 💊",
      durationMinutes: 50,
      description: "بنك شامل يغطي طرق إعطاء الدواء، الحرائك الدوائية، الديناميكا الدوائية، التفاعلات الضارة، والـ Five Rights."
    }
  ],

  // Helper Chemical Structure Diagrams (for introduction questions.pdf)
  diagrams: {
    carb_q13_fischer_beta_d_glucose: `
      <div class="chem-diagram-box">
        <div class="chem-title">Fischer Projection (Cyclic Hemiacetal Form)</div>
        <svg viewBox="0 0 240 245" width="220" height="225" class="chem-svg">
          <rect x="8" y="8" width="224" height="228" rx="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
          <!-- C1 -->
          <text x="52" y="38" text-anchor="end" font-family="monospace" font-weight="bold" font-size="14" fill="#ef4444">HO</text>
          <line x1="56" y1="33" x2="80" y2="33" stroke="currentColor" stroke-width="2"/>
          <text x="88" y="38" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">C</text>
          <line x1="96" y1="33" x2="120" y2="33" stroke="currentColor" stroke-width="2"/>
          <text x="125" y="38" text-anchor="start" font-family="monospace" font-size="14" fill="currentColor">H</text>
          <!-- C1 to C5 Oxygen Bridge -->
          <line x1="88" y1="22" x2="88" y2="15" stroke="currentColor" stroke-width="1.8"/>
          <line x1="88" y1="15" x2="175" y2="15" stroke="currentColor" stroke-width="1.8"/>
          <line x1="175" y1="15" x2="175" y2="173" stroke="currentColor" stroke-width="1.8"/>
          <line x1="133" y1="173" x2="175" y2="173" stroke="currentColor" stroke-width="1.8"/>
          <!-- Vertical spine -->
          <line x1="88" y1="43" x2="88" y2="57" stroke="currentColor" stroke-width="2"/>
          <!-- C2 -->
          <text x="52" y="73" text-anchor="end" font-family="monospace" font-size="14" fill="currentColor">H</text>
          <line x1="56" y1="68" x2="80" y2="68" stroke="currentColor" stroke-width="2"/>
          <text x="88" y="73" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">C</text>
          <line x1="96" y1="68" x2="120" y2="68" stroke="currentColor" stroke-width="2"/>
          <text x="125" y="73" text-anchor="start" font-family="monospace" font-size="14" fill="currentColor">OH</text>
          <line x1="88" y1="78" x2="88" y2="92" stroke="currentColor" stroke-width="2"/>
          <!-- C3 -->
          <text x="52" y="108" text-anchor="end" font-family="monospace" font-size="14" fill="currentColor">HO</text>
          <line x1="56" y1="103" x2="80" y2="103" stroke="currentColor" stroke-width="2"/>
          <text x="88" y="108" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">C</text>
          <line x1="96" y1="103" x2="120" y2="103" stroke="currentColor" stroke-width="2"/>
          <text x="125" y="108" text-anchor="start" font-family="monospace" font-size="14" fill="currentColor">H</text>
          <line x1="88" y1="113" x2="88" y2="127" stroke="currentColor" stroke-width="2"/>
          <!-- C4 -->
          <text x="52" y="143" text-anchor="end" font-family="monospace" font-size="14" fill="currentColor">H</text>
          <line x1="56" y1="138" x2="80" y2="138" stroke="currentColor" stroke-width="2"/>
          <text x="88" y="143" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">C</text>
          <line x1="96" y1="138" x2="120" y2="138" stroke="currentColor" stroke-width="2"/>
          <text x="125" y="143" text-anchor="start" font-family="monospace" font-size="14" fill="currentColor">OH</text>
          <line x1="88" y1="148" x2="88" y2="162" stroke="currentColor" stroke-width="2"/>
          <!-- C5 -->
          <text x="52" y="178" text-anchor="end" font-family="monospace" font-size="14" fill="currentColor">H</text>
          <line x1="56" y1="173" x2="80" y2="173" stroke="currentColor" stroke-width="2"/>
          <text x="88" y="178" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">C</text>
          <line x1="96" y1="173" x2="116" y2="173" stroke="currentColor" stroke-width="2"/>
          <text x="124" y="178" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">O</text>
          <line x1="88" y1="183" x2="88" y2="200" stroke="currentColor" stroke-width="2"/>
          <!-- C6 -->
          <text x="88" y="216" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">CH₂OH</text>
        </svg>
      </div>
    `,
    carb_q14_haworth_beta_d_glucose: `
      <div class="chem-diagram-box">
        <div class="chem-title">Haworth Projection (Pyranose Ring - C1 OH is UP)</div>
        <svg viewBox="0 0 260 200" width="240" height="185" class="chem-svg">
          <rect x="6" y="6" width="248" height="188" rx="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
          <!-- Ring vertices: C5(80,65), O(165,65), C1(205,110), C2(165,155), C3(80,155), C4(40,110) -->
          <line x1="88" y1="65" x2="155" y2="65" stroke="currentColor" stroke-width="2"/>
          <line x1="174" y1="72" x2="200" y2="102" stroke="currentColor" stroke-width="2"/>
          <line x1="200" y1="118" x2="172" y2="148" stroke="currentColor" stroke-width="2"/>
          <line x1="156" y1="155" x2="88" y2="155" stroke="currentColor" stroke-width="2.5"/>
          <line x1="72" y1="148" x2="45" y2="118" stroke="currentColor" stroke-width="2"/>
          <line x1="45" y1="102" x2="72" y2="72" stroke="currentColor" stroke-width="2"/>
          <!-- Labels -->
          <text x="80" y="70" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">C</text>
          <text x="165" y="70" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">O</text>
          <text x="205" y="115" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">C</text>
          <text x="165" y="160" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">C</text>
          <text x="80" y="160" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">C</text>
          <text x="40" y="115" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">C</text>
          <!-- C5 substituents: CH2OH up, H down -->
          <line x1="80" y1="54" x2="80" y2="35" stroke="currentColor" stroke-width="1.8"/>
          <text x="80" y="30" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="13" fill="currentColor">CH₂OH</text>
          <line x1="80" y1="74" x2="80" y2="90" stroke="currentColor" stroke-width="1.8"/>
          <text x="80" y="103" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">H</text>
          <!-- C1 substituents: OH UP (beta), H DOWN -->
          <line x1="205" y1="100" x2="205" y2="80" stroke="#ef4444" stroke-width="2"/>
          <text x="205" y="75" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="#ef4444">OH</text>
          <line x1="205" y1="120" x2="205" y2="140" stroke="currentColor" stroke-width="1.8"/>
          <text x="205" y="153" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">H</text>
          <!-- C2 substituents: H up, OH down -->
          <line x1="165" y1="145" x2="165" y2="128" stroke="currentColor" stroke-width="1.8"/>
          <text x="165" y="124" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">H</text>
          <line x1="165" y1="164" x2="165" y2="178" stroke="currentColor" stroke-width="1.8"/>
          <text x="165" y="190" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">OH</text>
          <!-- C3 substituents: OH up, H down -->
          <line x1="80" y1="145" x2="80" y2="128" stroke="currentColor" stroke-width="1.8"/>
          <text x="80" y="124" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">OH</text>
          <line x1="80" y1="164" x2="80" y2="178" stroke="currentColor" stroke-width="1.8"/>
          <text x="80" y="190" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">H</text>
          <!-- C4 substituents: H up, OH down -->
          <line x1="40" y1="100" x2="40" y2="82" stroke="currentColor" stroke-width="1.8"/>
          <text x="40" y="77" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">H</text>
          <line x1="40" y1="120" x2="40" y2="138" stroke="currentColor" stroke-width="1.8"/>
          <text x="40" y="151" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">OH</text>
        </svg>
      </div>
    `,
    carb_q15_haworth_alpha_d_glucose: `
      <div class="chem-diagram-box">
        <div class="chem-title">Haworth Projection (Pyranose Ring - C1 OH is DOWN)</div>
        <svg viewBox="0 0 260 200" width="240" height="185" class="chem-svg">
          <rect x="6" y="6" width="248" height="188" rx="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
          <line x1="88" y1="65" x2="155" y2="65" stroke="currentColor" stroke-width="2"/>
          <line x1="174" y1="72" x2="200" y2="102" stroke="currentColor" stroke-width="2"/>
          <line x1="200" y1="118" x2="172" y2="148" stroke="currentColor" stroke-width="2"/>
          <line x1="156" y1="155" x2="88" y2="155" stroke="currentColor" stroke-width="2.5"/>
          <line x1="72" y1="148" x2="45" y2="118" stroke="currentColor" stroke-width="2"/>
          <line x1="45" y1="102" x2="72" y2="72" stroke="currentColor" stroke-width="2"/>
          <text x="80" y="70" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">C</text>
          <text x="165" y="70" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">O</text>
          <text x="205" y="115" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">C</text>
          <text x="165" y="160" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">C</text>
          <text x="80" y="160" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">C</text>
          <text x="40" y="115" text-anchor="middle" font-family="monospace" font-size="13" fill="currentColor">C</text>
          <!-- C5 -->
          <line x1="80" y1="54" x2="80" y2="35" stroke="currentColor" stroke-width="1.8"/>
          <text x="80" y="30" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="13" fill="currentColor">CH₂OH</text>
          <line x1="80" y1="74" x2="80" y2="90" stroke="currentColor" stroke-width="1.8"/>
          <text x="80" y="103" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">H</text>
          <!-- C1 substituents: H UP, OH DOWN (alpha) -->
          <line x1="205" y1="100" x2="205" y2="80" stroke="currentColor" stroke-width="1.8"/>
          <text x="205" y="75" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">H</text>
          <line x1="205" y1="120" x2="205" y2="140" stroke="#ef4444" stroke-width="2"/>
          <text x="205" y="153" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="#ef4444">OH</text>
          <!-- C2 -->
          <line x1="165" y1="145" x2="165" y2="128" stroke="currentColor" stroke-width="1.8"/>
          <text x="165" y="124" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">H</text>
          <line x1="165" y1="164" x2="165" y2="178" stroke="currentColor" stroke-width="1.8"/>
          <text x="165" y="190" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">OH</text>
          <!-- C3 -->
          <line x1="80" y1="145" x2="80" y2="128" stroke="currentColor" stroke-width="1.8"/>
          <text x="80" y="124" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">OH</text>
          <line x1="80" y1="164" x2="80" y2="178" stroke="currentColor" stroke-width="1.8"/>
          <text x="80" y="190" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">H</text>
          <!-- C4 -->
          <line x1="40" y1="100" x2="40" y2="82" stroke="currentColor" stroke-width="1.8"/>
          <text x="40" y="77" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">H</text>
          <line x1="40" y1="120" x2="40" y2="138" stroke="currentColor" stroke-width="1.8"/>
          <text x="40" y="151" text-anchor="middle" font-family="monospace" font-size="12" fill="currentColor">OH</text>
        </svg>
      </div>
    `,
    carb_q16_fischer_alpha_d_glucose: `
      <div class="chem-diagram-box">
        <div class="chem-title">Fischer Projection (Cyclic Hemiacetal - C1 OH on Right)</div>
        <svg viewBox="0 0 240 245" width="220" height="225" class="chem-svg">
          <rect x="8" y="8" width="224" height="228" rx="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
          <!-- C1 -->
          <text x="52" y="38" text-anchor="end" font-family="monospace" font-size="14" fill="currentColor">H</text>
          <line x1="56" y1="33" x2="80" y2="33" stroke="currentColor" stroke-width="2"/>
          <text x="88" y="38" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">C</text>
          <line x1="96" y1="33" x2="120" y2="33" stroke="currentColor" stroke-width="2"/>
          <text x="125" y="38" text-anchor="start" font-family="monospace" font-weight="bold" font-size="14" fill="#ef4444">OH</text>
          <!-- C1 to C5 Oxygen Bridge -->
          <line x1="88" y1="22" x2="88" y2="15" stroke="currentColor" stroke-width="1.8"/>
          <line x1="88" y1="15" x2="185" y2="15" stroke="currentColor" stroke-width="1.8"/>
          <line x1="185" y1="15" x2="185" y2="173" stroke="currentColor" stroke-width="1.8"/>
          <line x1="96" y1="173" x2="185" y2="173" stroke="currentColor" stroke-width="1.8"/>
          <text x="195" y="110" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">O</text>
          <!-- Vertical spine -->
          <line x1="88" y1="43" x2="88" y2="57" stroke="currentColor" stroke-width="2"/>
          <!-- C2 -->
          <text x="52" y="73" text-anchor="end" font-family="monospace" font-size="14" fill="currentColor">H</text>
          <line x1="56" y1="68" x2="80" y2="68" stroke="currentColor" stroke-width="2"/>
          <text x="88" y="73" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">C</text>
          <line x1="96" y1="68" x2="120" y2="68" stroke="currentColor" stroke-width="2"/>
          <text x="125" y="73" text-anchor="start" font-family="monospace" font-size="14" fill="currentColor">OH</text>
          <line x1="88" y1="78" x2="88" y2="92" stroke="currentColor" stroke-width="2"/>
          <!-- C3 -->
          <text x="52" y="108" text-anchor="end" font-family="monospace" font-size="14" fill="currentColor">HO</text>
          <line x1="56" y1="103" x2="80" y2="103" stroke="currentColor" stroke-width="2"/>
          <text x="88" y="108" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">C</text>
          <line x1="96" y1="103" x2="120" y2="103" stroke="currentColor" stroke-width="2"/>
          <text x="125" y="108" text-anchor="start" font-family="monospace" font-size="14" fill="currentColor">H</text>
          <line x1="88" y1="113" x2="88" y2="127" stroke="currentColor" stroke-width="2"/>
          <!-- C4 -->
          <text x="52" y="143" text-anchor="end" font-family="monospace" font-size="14" fill="currentColor">H</text>
          <line x1="56" y1="138" x2="80" y2="138" stroke="currentColor" stroke-width="2"/>
          <text x="88" y="143" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">C</text>
          <line x1="96" y1="138" x2="120" y2="138" stroke="currentColor" stroke-width="2"/>
          <text x="125" y="143" text-anchor="start" font-family="monospace" font-size="14" fill="currentColor">OH</text>
          <line x1="88" y1="148" x2="88" y2="162" stroke="currentColor" stroke-width="2"/>
          <!-- C5 -->
          <text x="52" y="178" text-anchor="end" font-family="monospace" font-size="14" fill="currentColor">H</text>
          <line x1="56" y1="173" x2="80" y2="173" stroke="currentColor" stroke-width="2"/>
          <text x="88" y="178" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">C</text>
          <line x1="88" y1="183" x2="88" y2="200" stroke="currentColor" stroke-width="2"/>
          <!-- C6 -->
          <text x="88" y="216" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="14" fill="currentColor">CH₂OH</text>
        </svg>
      </div>
    `,
    carb_q19_sugar_alcohol: `
      <div class="chem-diagram-box">
        <div class="chem-title">Chemical Structure</div>
        <pre class="chem-pre">  <span class="chem-hl">CH₂OH</span>
   │
  HC──OH
   │
  HC──OH
   │
  HC──OH
   │
  <span class="chem-hl">CH₂OH</span></pre>
      </div>
    `,
    carb_q21_dihydroxyacetone: `
      <div class="chem-diagram-box">
        <div class="chem-title">Chemical Structure</div>
        <pre class="chem-pre">  CH₂OH
   │
  <span class="chem-hl">C═O</span>
   │
  CH₂OH</pre>
      </div>
    `,
    carb_q22_ribose: `
      <div class="chem-diagram-box">
        <div class="chem-title">Chemical Structure (5 Carbons - Aldopentose)</div>
        <pre class="chem-pre">    <span class="chem-hl">H─C═O</span>
      │
  H───C───OH
      │
  H───C───OH
      │
  H───C───OH
      │
  H───C───OH
      │
      H</pre>
      </div>
    `,
    carb_q23_amino_sugar: `
      <div class="chem-diagram-box">
        <div class="chem-title">Chemical Structure</div>
        <pre class="chem-pre">      CHO
       │
  H ───┼─── <span class="chem-hl">NH₂</span>
       │
 HO ───┼─── H
       │
  H ───┼─── OH
       │
  H ───┼─── OH
       │
      CH₂OH</pre>
      </div>
    `,
    carb_q24_sugar_acid: `
      <div class="chem-diagram-box">
        <div class="chem-title">Chemical Structure</div>
        <pre class="chem-pre">      <span class="chem-hl">COOH</span>
       │
  H ───┼─── OH
       │
 HO ───┼─── H
       │
  H ───┼─── OH
       │
  H ───┼─── OH
       │
      CH₂OH</pre>
      </div>
    `,
    lipid_q5_alpha_hydroxybutyric: `
      <div class="chem-diagram-box">
        <div class="chem-title">Chemical Structure</div>
        <pre class="chem-pre">CH₃.CH₂.<span class="chem-hl">CH</span>.COOH
        │
        <span class="chem-hl">OH</span></pre>
      </div>
    `,
    lipid_q6_beta_hydroxybutyric: `
      <div class="chem-diagram-box">
        <div class="chem-title">Chemical Structure</div>
        <pre class="chem-pre">CH₃.<span class="chem-hl">CH</span>.CH₂.COOH
    │
    <span class="chem-hl">OH</span></pre>
      </div>
    `,
    lipid_q7_gamma_hydroxybutyric: `
      <div class="chem-diagram-box">
        <div class="chem-title">Chemical Structure</div>
        <pre class="chem-pre"><span class="chem-hl">CH₂</span>.CH₂.CH₂.COOH
 │
 <span class="chem-hl">OH</span></pre>
      </div>
    `,
    lipid_q8_saturated_fatty_acid: `
      <div class="chem-diagram-box">
        <div class="chem-title">Fatty Acid Chain</div>
        <pre class="chem-pre">    H   H   H   H   O
    │   │   │   │   ║
H───C───C───C───C───C───OH
    │   │   │   │
    H   H   H   H</pre>
      </div>
    `
  }
};
