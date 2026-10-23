// ==========================================
// A+ KEEPERS TEAM - ESSAY / MEQ QUESTIONS (أسئلة المقالي)
// Includes: ملف المقالي.pdf + امتحان مقالي أكتوبر 2024 + مقالي أهلية 2023
// ==========================================

window.ESSAY_SOURCES = [
  {
    id: "essay_exam_oct_2024",
    title: "امتحان مقالي نهاية البلوك الأول - أكتوبر 2024 (MED101 MEQ)",
    subtitle: "Introduction to Medicine EBE MEQ Exam (31-10-2024) - 14 Marks",
    badge: "امتحان مقالي 2024 🔥"
  },
  {
    id: "essay_exam_ahlia_2023",
    title: "امتحان مقالي البلوك الأول - طب بورسعيد الأهلية 2023",
    subtitle: "Ahlia Block 1 Written / MEQ Exam (2023)",
    badge: "أهلية 2023 ⭐"
  },
  {
    id: "essay_bank_main",
    title: "بنك أسئلة المقالي الشامل (ملف المقالي - 20 سؤال)",
    subtitle: "Comprehensive Written / Enumerate Questions (Anatomy & Histology)",
    badge: "بنك المقالي الشامل 📌"
  },
  {
    id: "essay_bank_q2",
    title: "بنك الأسئلة المقالية الجديد (SEQs Bank - Q2)",
    subtitle: "Biochemistry, Anatomy & Pharmacology Short-Answer Questions",
    badge: "تجميعة SEQs الجديدة 📝"
  },
  {
    id: "essay_bank_gov_bio",
    title: "تحديدات مقالي الكيمياء الحيوية 2027 (BIO-VIP)",
    subtitle: "Carbohydrates, Lipids & Amino Acids High-Yield VIP MEQs",
    badge: "تحديدات بايو VIP 🔥"
  },
  {
    id: "essay_bank_gov_micro",
    title: "مقالي وحالات الميكروبيولوجي الشاملة (MEQs & Cases)",
    subtitle: "Microbiology General & Case-Based Modified Essay Questions",
    badge: "مقالي مايكرو 🦠"
  },
  {
    id: "essay_bank_gov_histo",
    title: "أسئلة الهستولوجي المقالية وتفسيرات الكاريوتايب (Histo Short Answer)",
    subtitle: "Histology Immunocytochemistry, Culture, Stains & Karyotyping",
    badge: "مقالي هستو 🔬"
  }
];

window.QUESTIONS_ESSAY = [
  // ==========================================
  // 1. OFFICIAL MEQ EXAM - OCT 31, 2024 (MED101) (4 Questions - 14 Marks)
  // ==========================================
  {
    id: "meq_oct24_1",
    source: "essay_exam_oct_2024",
    subject: "histology",
    marks: "4 Marks",
    q: "1- Enumerate steps of immunocytochemistry (immunohistochemistry)?",
    points: [
      "1. Tissue section preparation & Fixation (to preserve and immobilize the target antigen inside the cell/tissue).",
      "2. Blocking of non-specific binding sites and endogenous enzymes.",
      "3. Incubation with Primary Antibody (specific to the target protein/antigen).",
      "4. Washing to remove unbound primary antibody.",
      "5. Incubation with Labeled Secondary Antibody (conjugated with a fluorescent dye or an enzyme such as horseradish peroxidase - HRP in the indirect method).",
      "6. Detection / Visualization under the microscope (adding chromogen substrate for enzyme-linked antibodies to produce a colored precipitate, or viewing under a fluorescence microscope)."
    ],
    tip: "بصمجة سريعة لخطوات الـ Immunocytochemistry: (Fixation of antigen ➔ Primary Antibody ➔ Labeled Secondary Antibody ➔ Chromogen/Fluorescence Detection under microscope)."
  },
  {
    id: "meq_oct24_2",
    source: "essay_exam_oct_2024",
    subject: "biochemistry",
    marks: "4 Marks",
    q: "2- Give 3 examples of disaccharides and describe the monosaccharide components of each one?",
    points: [
      "1. Maltose (Malt sugar): Composed of 2 molecules of α-D-Glucose linked by α(1→4) glycosidic bond (Reducing sugar).",
      "2. Lactose (Milk sugar): Composed of 1 molecule of β-D-Galactose + 1 molecule of D-Glucose linked by β(1→4) glycosidic bond (Reducing sugar).",
      "3. Sucrose (Cane/Table sugar): Composed of 1 molecule of α-D-Glucose + 1 molecule of β-D-Fructose linked by α1,β2 glycosidic bond (Non-reducing sugar)."
    ],
    tip: "احفظ الثلاثي الذهبي: Maltose = Glucose + Glucose | Lactose = Glucose + Galactose | Sucrose = Glucose + Fructose."
  },
  {
    id: "meq_oct24_3",
    source: "essay_exam_oct_2024",
    subject: "microbiology",
    marks: "3 Marks",
    q: "3- Identify the structure and functions of the bacterial cell (cytoplasmic) membrane.",
    points: [
      "Structure of Bacterial Cytoplasmic Membrane:",
      "• Thin, elastic, semi-permeable double-layered membrane (Phospholipid bilayer + embedded proteins) located just inside the cell wall.",
      "• Chemically lacks sterols (cholesterol), EXCEPT in Mycoplasma.",
      "• Forms inward invaginations called Mesosomes (septal and lateral).",
      "Functions of Bacterial Cytoplasmic Membrane:",
      "1. Selective permeability & Active transport of nutrients and ions via specific enzymes (permeases).",
      "2. Site of bacterial respiration & energy (ATP) production (contains electron transport chain enzymes and respiratory cytochromes — acts as mitochondria).",
      "3. Biosynthesis of cell wall components (peptidoglycan) and capsule.",
      "4. Secretion of hydrolytic exoenzymes and toxins outside the cell.",
      "5. Plays a role in DNA replication and cell division (via septal mesosomes)."
    ],
    tip: "ركز على جزئين في الإجابة عشان تاخد الـ 3 درجات كاملة: التركيب (Phospholipid bilayer + Proteins, No sterols except Mycoplasma) + الوظائف (Selective permeability, Active transport, Respiration/ATP, Cell wall synthesis, Excretion of toxins)."
  },
  {
    id: "meq_oct24_4",
    source: "essay_exam_oct_2024",
    subject: "anatomy",
    marks: "3 Marks",
    q: "4- List different ways of attachment of skeletal muscle (with an example for each).",
    points: [
      "1. Direct Fleshy fibers: e.g., Popliteus muscle.",
      "2. Fibrous Tendon (cord-like): e.g., Tendo-calcaneus (Tendo-Achilles).",
      "3. Aponeurosis (flat fibrous sheet): e.g., External abdominal oblique muscle.",
      "4. Raphe (interdigitation of tendinous ends): e.g., Pharyngeal raphe / Mylohyoid raphe.",
      "5. Intermediate tendon: e.g., Digastric muscle & Omohyoid muscle.",
      "6. Attachment to skin (Dermis): e.g., Facial expression muscles."
    ],
    tip: "نفس السؤال بالنص موجود في (ملف المقالي صفحة 5) وجاء في امتحان أكتوبر 2024 بـ 3 درجات!"
  },

  // ==========================================
  // 2. AHLIA 2023 ESSAY EXAM (مقالي البلوك الأول أهلية 2023 - 4 Questions)
  // ==========================================
  {
    id: "meq_ahlia23_1",
    source: "essay_exam_ahlia_2023",
    subject: "anatomy",
    marks: "Exam Question",
    q: "1- Mention types of joints (Structural & Functional classifications, or 4 types of Synovial joints with examples).",
    points: [
      "A) Structural Classification of Joints (3 main types):",
      "1. Fibrous joints (Immobile): e.g., Sutures of skull, Syndesmosis (inferior tibiofibular), Gomphosis (teeth).",
      "2. Cartilaginous joints (Slightly movable): Primary (Epiphyseal plate) & Secondary (Intervertebral disc, Symphysis pubis).",
      "3. Synovial joints (Freely movable).",
      "B) Types of Synovial Joints According to Shape (Mention any 4 with examples):",
      "1. Ball and socket (Multiaxial): Shoulder joint & Hip joint.",
      "2. Hinge joint (Uniaxial): Elbow joint.",
      "3. Pivot joint (Uniaxial): Atlantoaxial joint & Superior radioulnar joint.",
      "4. Condyloid / Bicondylar joint (Biaxial): Knee joint.",
      "5. Ellipsoid joint (Biaxial): Radiocarpal (wrist) joint.",
      "6. Saddle joint (Biaxial): First carpometacarpal joint (thumb).",
      "7. Plane (Gliding) joint: Intercarpal & Intertarsal joints."
    ],
    tip: "في الامتحان اكتب التقسيمة الهيكلية (Fibrous, Cartilaginous, Synovial) وتحتها 4 أنواع من المفاصل الزلالية بأمثلتها عشان تضمن الدرجة النهائية مهما كان نموذج التصحيح."
  },
  {
    id: "meq_ahlia23_2",
    source: "essay_exam_ahlia_2023",
    subject: "histology",
    marks: "Exam Question",
    q: "2- Mention 4 steps of Karyotyping (chromosomal analysis).",
    points: [
      "1. Sample Collection: Obtain dividing nucleated cells (e.g., peripheral venous blood T-lymphocytes, amniotic fluid, or bone marrow).",
      "2. Cell Culture & Mitotic Stimulation: Incubate cells with Phytohemagglutinin (PHA) at 37°C for 72 hours to stimulate mitosis.",
      "3. Arresting Mitosis at Metaphase: Add Colchicine (Colcemid) to disrupt spindle fibers and arrest dividing cells at Metaphase (when chromosomes are most condensed).",
      "4. Hypotonic Solution Treatment: Add hypotonic KCl solution to cause osmotic swelling of cells and spreading of chromosomes.",
      "5. Fixation, Spreading on Slides & Staining (Banding): Fix with methanol/acetic acid, drop onto microscope slides, stain with Giemsa (G-banding), and photograph/arrange chromosomes in homologous pairs according to size and centromere position."
    ],
    tip: "أهم 4 كلمات مفتاحية: (1. Sample & Culture with PHA ➔ 2. Arrest in Metaphase by Colchicine ➔ 3. Swelling by Hypotonic solution ➔ 4. Fixation, Giemsa Staining & Pairing)."
  },
  {
    id: "meq_ahlia23_3",
    source: "essay_exam_ahlia_2023",
    subject: "biochemistry",
    marks: "Exam Question",
    q: "3- Mention examples of dimer sugars (Disaccharides) and their components.",
    points: [
      "1. Maltose (Malt sugar): α-D-Glucose + α-D-Glucose [linked by α(1→4) bond] — Reducing disaccharide.",
      "2. Lactose (Milk sugar): β-D-Galactose + D-Glucose [linked by β(1→4) bond] — Reducing disaccharide.",
      "3. Sucrose (Cane/Table sugar): α-D-Glucose + β-D-Fructose [linked by α1,β2 bond] — Non-reducing disaccharide.",
      "4. Cellobiose / Isomaltose / Trehalose (additional examples)."
    ],
    tip: "تلاحظ إن سؤال الـ Disaccharides اتكرر في مقالي أهلية 2023 ورجع اتكرر تاني في مقالي أكتوبر 2024!"
  },
  {
    id: "meq_ahlia23_4",
    source: "essay_exam_ahlia_2023",
    subject: "microbiology",
    marks: "Exam Question",
    q: "4- Mention the advantages / functions of Peptidoglycan (bacterial cell wall).",
    points: [
      "1. Provides rigidity and determines the characteristic shape of the bacterial cell (cocci, bacilli, spirilla).",
      "2. Protects the bacterial cell from osmotic lysis (bursting) in hypotonic media.",
      "3. Responsible for the staining affinity of bacteria (differentiates Gram-positive from Gram-negative in Gram stain).",
      "4. Plays an essential role in bacterial cell division (forms the cross-wall / septum).",
      "5. Selective target for bactericidal antibiotics (such as Penicillins and Cephalosporins) and host Lysozyme enzyme."
    ],
    tip: "بصمجة وظائف الـ Peptidoglycan: (Shape & Rigidity + Osmotic protection + Gram staining affinity + Cell division)."
  },

  // ==========================================
  // 3. MAIN ESSAY BANK (ملف المقالي.pdf - 20 Questions)
  // ==========================================
  {
    id: "meq_bank_1",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص1",
    q: "Define and mention the characteristics of the Anatomical Position.",
    points: [
      "1. The body is standing erect (straight).",
      "2. The eyes are looking straight forwards.",
      "3. The upper limbs (arms) are hanging by the sides close to the body.",
      "4. The palms of the hands are facing forwards (supinated).",
      "5. The lower limbs (legs) are extended and the feet are close together facing forwards."
    ],
    tip: "5 نقاط أساسية للـ Anatomical Position: واقف مستقيم، عينه للأمام، ذراعاه بجانبه، كف اليد للأمام، والقدمان للأمام."
  },
  {
    id: "meq_bank_2",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص1",
    q: "Mention the Anatomical Planes and Lines.",
    points: [
      "1. Median (Mid-sagittal) plane: Vertical plane dividing the body into equal right and left halves.",
      "2. Paramedian (Sagittal) plane: Vertical plane parallel to the median plane.",
      "3. Coronal (Frontal) plane: Vertical plane dividing the body into anterior (front) and posterior (back) parts.",
      "4. Transverse (Horizontal / Axial) plane: Horizontal plane dividing the body into superior (upper) and inferior (lower) parts.",
      "5. Anterior and posterior anatomical lines."
    ],
    tip: "المستويات التشريحية: Sagittal (يمين وشمال)، Coronal (أمام وخلف)، Transverse (فوق وتحت)."
  },
  {
    id: "meq_bank_3",
    source: "essay_bank_main",
    subject: "histology",
    marks: "ملف المقالي ص1",
    q: "Mention the 4 basic types of tissues in the human body.",
    points: [
      "1. Epithelial tissues (النسيج الطلائي).",
      "2. Connective tissues (النسيج الضام).",
      "3. Muscular tissues (النسيج العضلي).",
      "4. Nervous tissues (النسيج العصبي)."
    ],
    tip: "الأنسجة الأربعة الأساسية في الجسم: Epithelial, Connective, Muscular, Nervous."
  },
  {
    id: "meq_bank_4",
    source: "essay_bank_main",
    subject: "histology",
    marks: "ملف المقالي ص1-2",
    q: "Mention the classification of Surface Epithelial Tissues.",
    points: [
      "1. Simple Epithelium (One layer of cells resting on basement membrane):",
      "   • Simple squamous epithelium",
      "   • Simple cuboidal epithelium",
      "   • Simple columnar epithelium",
      "   • Pseudostratified columnar epithelium",
      "2. Stratified Epithelium (Multiple layers of cells):",
      "   • Stratified squamous epithelium (keratinized & non-keratinized)",
      "   • Stratified cuboidal epithelium",
      "   • Stratified columnar epithelium",
      "   • Transitional epithelium (Urothelium)"
    ],
    tip: "قسمها لـ Simple (طبقة واحدة: Squamous, Cuboidal, Columnar) و Stratified (عدة طبقات: Squamous, Cuboidal, Columnar, Transitional)."
  },
  {
    id: "meq_bank_5",
    source: "essay_bank_main",
    subject: "histology",
    marks: "ملف المقالي ص2",
    q: "Mention the classification of Connective Tissue.",
    points: [
      "1. Connective Tissue Proper (Smooth / Fibrous): Contains Reticular, Elastic, and Collagenous fibers (Loose & Dense CT).",
      "2. Specialized Skeletal Connective Tissue:",
      "   • Cartilaginous tissue (الغضاريف)",
      "   • Bony / Osseous tissue (العظام)",
      "3. Fluid Connective Tissue: Blood and Lymph."
    ],
    tip: "في ملف المقالي: (1. Smooth [Reticular, elastic, collagenous] — 2. Cartilaginous — 3. Bony)."
  },
  {
    id: "meq_bank_6",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص2",
    q: "Mention the types of Fascia and the functions of deep fascia.",
    points: [
      "Types of Fascia:",
      "1. Superficial fascia (Subcutaneous tissue).",
      "2. Deep fascia.",
      "3. Visceral (Subserous) fascia.",
      "Functions of Fascia:",
      "1. Transmitting mechanical tension generated by muscular activities.",
      "2. Reducing friction between muscles allowing smooth movement.",
      "3. Providing a supportive and movable wrapping (sheaths) for nerves and blood vessels."
    ],
    tip: "أنواع الفاشيا 3 (Superficial, Deep, Visceral) ووظيفتها (نقل الشد الميكانيكي، تقليل الاحتكاك، وتغليف وحماية الأوعية والأعصاب)."
  },
  {
    id: "meq_bank_7",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص2",
    q: "Classify bones according to their microscopic structure.",
    points: [
      "1. Compact (Ivory) bone: Dense, strong outer layer that forms the Haversian system (osteons).",
      "2. Cancellous (Spongy / Trabecular) bone: Inner meshwork of branching bony trabeculae enclosing spaces filled with red bone marrow."
    ],
    tip: "حسب التركيب الهيكلي الدقيق: Compact bone (كثيف به Haversian system) و Cancellous/Spongy bone (إسفنجي به Trabeculae)."
  },
  {
    id: "meq_bank_8",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص3",
    q: "Classify bones according to shape and give one example of each.",
    points: [
      "1. Long bones: e.g., Humerus, Femur, Radius, Ulna, Tibia, Fibula.",
      "2. Flat bones: e.g., Sternum, Skull vault, Ribs, Scapula.",
      "3. Short bones: e.g., Carpals of wrist & Tarsals of ankle.",
      "4. Irregular bones: e.g., Vertebrae, Facial bones, Hip bone.",
      "5. Sesamoid bones: e.g., Patella (knee cap).",
      "6. Pneumatic bones (air-filled): e.g., Maxilla, Frontal, Ethmoid, Sphenoid bones."
    ],
    tip: "احفظ كل نوع بالمثال بتاعه: Long (Humerus), Flat (Sternum/Skull), Short (Carpals), Irregular (Vertebrae), Sesamoid (Patella)."
  },
  {
    id: "meq_bank_9",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص3",
    q: "Mention the 3 types of Cartilage.",
    points: [
      "1. Hyaline cartilage (الغضروف الزجاجي): Most common (e.g., Articular cartilage, Costal cartilage, Larynx, Trachea, Epiphyseal plate).",
      "2. White fibrocartilage (الغضروف الليفي الأبيض): High tensile strength (e.g., Intervertebral discs, Symphysis pubis, Menisci of knee).",
      "3. Yellow elastic fibrocartilage (الغضروف المرن الأصفر): Flexible (e.g., Auricle of ear, Epiglottis, Eustachian tube)."
    ],
    tip: "أنواع الغضاريف الثلاثة: Hyaline, White fibrocartilage, Yellow elastic cartilage."
  },
  {
    id: "meq_bank_10",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص3",
    q: "Mention the Structural Classification of Joints.",
    points: [
      "1. Fibrous joints.",
      "2. Cartilaginous joints.",
      "3. Synovial joints."
    ],
    tip: "التقسيم الهيكلي للمفاصل يعتمد على المادة الفاصلة بين العظام: ليفية (Fibrous)، غضروفية (Cartilaginous)، زلالية (Synovial)."
  },
  {
    id: "meq_bank_11",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص3-4",
    q: "Mention the types of Fibrous Joints and give an example of each.",
    points: [
      "1. Sutures: Between flat bones of the skull (immovable).",
      "2. Syndesmosis: Bones connected by an interosseous ligament/membrane, e.g., Inferior tibiofibular joint.",
      "3. Gomphosis (Peg-and-socket): Roots of teeth in their alveolar sockets in the mandible and maxilla."
    ],
    tip: "المفاصل الليفية 3: Sutures (الجمجمة)، Syndesmosis (Inferior tibiofibular)، Gomphosis (جذور الأسنان)."
  },
  {
    id: "meq_bank_12",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص4",
    q: "Mention the types of Cartilaginous Joints and give an example of each.",
    points: [
      "1. Primary cartilaginous joint (Synchondrosis): Temporary hyaline cartilage, immobile, e.g., Epiphyseal plate of growing long bone & 1st costochondral joint.",
      "2. Secondary cartilaginous joint (Symphysis): White fibrocartilage in the midline, slightly movable, permanent, e.g., Intervertebral disc & Symphysis pubis."
    ],
    tip: "المفاصل الغضروفية: Primary (Epiphyseal plate - غير متحرك ومؤقت) و Secondary (Intervertebral disc & Symphysis pubis - في خط المنتصف ومتحرك قليلاً)."
  },
  {
    id: "meq_bank_13",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص4",
    q: "Mention the types of Synovial Joints according to axes of movement with an example of each.",
    points: [
      "1. Uniaxial synovial joints (move around 1 axis): e.g., Elbow joint (Hinge) & Atlantoaxial joint (Pivot).",
      "2. Biaxial synovial joints (move around 2 axes): e.g., Metacarpophalangeal / Radiocarpal wrist joint (Ellipsoid) & 1st Carpometacarpal joint (Saddle).",
      "3. Multiaxial (Polyaxial) synovial joints (move around 3 axes): e.g., Shoulder joint & Hip joint (Ball and socket)."
    ],
    tip: "حسب محاور الحركة: Uniaxial (Elbow)، Biaxial (Metacarpophalangeal / Wrist)، Multiaxial (Shoulder & Hip)."
  },
  {
    id: "meq_bank_14",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص4",
    q: "Mention the Functional Classification of Joints.",
    points: [
      "1. Immobile joints (Synarthrosis): Fibrous joints.",
      "2. Slightly movable joints (Amphiarthrosis): Cartilaginous joints.",
      "3. Freely movable joints (Diarthrosis): All Synovial joints."
    ],
    tip: "التقسيم الوظيفي للمفاصل حسب درجة الحركة: Immobile (Fibrous)، Slightly movable (Cartilaginous)، Freely movable (Synovial)."
  },
  {
    id: "meq_bank_15",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص4-5",
    q: "Mention the anatomical features (characteristics) of Synovial Joints.",
    points: [
      "1. Articular (Fibrous) capsule.",
      "2. Articular (Hyaline) cartilage covering articular surfaces.",
      "3. Synovial membrane lining the inner surface of the capsule (non-articular surfaces) and secreting synovial fluid.",
      "4. Joint cavity containing lubricating synovial fluid.",
      "5. Extracapsular and intracapsular Ligaments.",
      "6. Structures that may be present inside/around the joint: Articular disc (Meniscus), Tendons, and Bursae."
    ],
    tip: "الخصائص السبعة في ملف المقالي: Articular capsule, Articular cartilage, Synovial membrane, Ligaments, Tendons, Articular disc, Bursae."
  },
  {
    id: "meq_bank_16",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص5",
    q: "Mention the 7 types of Synovial Joints according to shape and give an example of each.",
    points: [
      "1. Pivot joint: Atlantoaxial joint & Superior radioulnar joint.",
      "2. Hinge joint: Elbow joint & Ankle joint.",
      "3. Ellipsoid joint: Radiocarpal (wrist) joint.",
      "4. Bicondylar (Condyloid) joint: Knee joint.",
      "5. Saddle joint: First carpometacarpal joint (thumb).",
      "6. Plane (Gliding) joint: Intervertebral (facet) / Intercarpal joints.",
      "7. Ball and socket joint: Shoulder joint & Hip joint."
    ],
    tip: "احفظ الـ 7 أنواع بأمثلتهم لأنهم موضع سؤال دائم في كل من الـ MCQ والمقالي!"
  },
  {
    id: "meq_bank_17",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص5-6",
    q: "Classify Skeletal Muscles according to the arrangement of muscle fibers, and mention types of Parallel fibers with examples.",
    points: [
      "Main Classification according to fiber arrangement:",
      "1. Parallel fibers (parallel to the line of pull).",
      "2. Oblique fibers (oblique to the line of pull).",
      "Types of Parallel Muscle Fibers with Examples (جاءت في امتحان الحكومي):",
      "1. Quadrilateral: e.g., Quadratus lumborum (or Thyrohyoid).",
      "2. Fusiform (spindle-shaped): e.g., Biceps brachii.",
      "3. Strap-like: e.g., Sartorius.",
      "4. Strap-like with tendinous intersections: e.g., Rectus abdominis."
    ],
    tip: "سؤالTypes of parallel fibers جه في امتحان الحكومي السنة اللي فاتت: Quadrilateral (Quadratus lumborum), Fusiform (Biceps brachii), Strap-like (Sartorius), Strap-like with tendinous intersections (Rectus abdominis)."
  },
  {
    id: "meq_bank_18",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص6",
    q: "Mention the types of Oblique muscle fiber arrangements.",
    points: [
      "1. Pennate fibers (Unipennate, Bipennate, Multipennate, Circumpennate).",
      "2. Triangular (Convergent / Fan-shaped) fibers: e.g., Temporalis, Pectoralis major.",
      "3. Spiral (Twisted) fibers: e.g., Supinator, Pectoralis major.",
      "4. Cruciate (Crossed) fibers: e.g., Masseter, Sternocleidomastoid.",
      "5. Circular (Sphincteric) fibers: e.g., Orbicularis oris, Orbicularis oculi."
    ],
    tip: "العضلات المائلة (Oblique): Pennate, Triangular, Spiral, Cruciate, Circular."
  },
  {
    id: "meq_bank_19",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص6",
    q: "Mention the 4 types of Pennate muscle fibers and give an example of each.",
    points: [
      "1. Unipennate: e.g., Flexor pollicis longus.",
      "2. Bipennate: e.g., Rectus femoris & Dorsal interossei muscles.",
      "3. Multipennate: e.g., Deltoid muscle (acromial fibers).",
      "4. Circumpennate: e.g., Tibialis anterior."
    ],
    tip: "العضلات الريشية (Pennate): Unipennate (Flexor pollicis longus), Bipennate (Rectus femoris), Multipennate (Deltoid), Circumpennate (Tibialis anterior)."
  },
  {
    id: "meq_bank_20",
    source: "essay_bank_main",
    subject: "anatomy",
    marks: "ملف المقالي ص7",
    q: "Classify Skeletal Muscles according to their actions.",
    points: [
      "1. Prime mover (Agonist / Chief muscle): Initiates and maintains the desired movement (e.g., Brachialis in elbow flexion).",
      "2. Antagonist: Opposes the prime mover and relaxes to allow smooth movement (e.g., Triceps in elbow flexion).",
      "3. Synergist: Assists the prime mover and prevents unwanted movements at intermediate joints.",
      "4. Fixator: Stabilizes the origin of the prime mover so it can act efficiently."
    ],
    tip: "تقسيم العضلات حسب الوظيفة (Action): Prime mover, Antagonist, Synergist, Fixator."
  },

  // ==========================================
  // NEW SEQs & SHORT-ANSWER QUESTIONS (Q2 Folder)
  // ==========================================
  {
    id: "meq_q2_bio_1",
    source: "essay_bank_q2",
    subject: "biochemistry",
    marks: "Biochem SEQ",
    q: "Mention the three types of fatty acids according to saturation giving examples of each.",
    points: [
      "1. Saturated fatty acids (no double bonds): e.g., Palmitic acid (16C), Stearic acid (18C), Butyric acid (4C).",
      "2. Monounsaturated fatty acids (MUFA - one double bond): e.g., Oleic acid (18:1 ω9), Palmitoleic acid (16:1 ω7).",
      "3. Polyunsaturated fatty acids (PUFA - two or more double bonds): e.g., Linoleic acid (18:2 ω6), Linolenic acid (18:3 ω3), Arachidonic acid (20:4 ω6)."
    ],
    tip: "أنواع الأحماض الدهنية حسب التشبع: Saturated (Palmitic), Monounsaturated (Oleic), Polyunsaturated (Linoleic / Arachidonic)."
  },
  {
    id: "meq_q2_bio_2",
    source: "essay_bank_q2",
    subject: "biochemistry",
    marks: "Biochem SEQ",
    q: "Classify monosaccharides according to their functional group giving an example of each.",
    points: [
      "1. Aldoses (contain an aldehyde group -CHO at C1): e.g., Glyceraldehyde (triose), Ribose (pentose), Glucose (hexose), Galactose (hexose).",
      "2. Ketoses (contain a ketone group >C=O at C2): e.g., Dihydroxyacetone (triose), Ribulose (pentose), Fructose (hexose)."
    ],
    tip: "حسب المجموعة الوظيفية: Aldoses (Glucose, Galactose) و Ketoses (Fructose, Dihydroxyacetone)."
  },
  {
    id: "meq_q2_bio_3",
    source: "essay_bank_q2",
    subject: "biochemistry",
    marks: "Biochem SEQ",
    q: "Mention the essential amino acids.",
    points: [
      "The 10 essential (or 8 strictly essential in adults) amino acids that cannot be synthesized de novo by the human body and must be supplied in the diet are:",
      "1. Isoleucine",
      "2. Leucine",
      "3. Lysine",
      "4. Methionine",
      "5. Phenylalanine",
      "6. Threonine",
      "7. Tryptophan",
      "8. Valine",
      "9. Histidine (essential in infants / semi-essential in adults)",
      "10. Arginine (semi-essential for rapid growth)"
    ],
    tip: "بصمجة مشهورة للأحماض الأساسية: (PVT TIM HALL) = Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine."
  },
  {
    id: "meq_q2_bio_4",
    source: "essay_bank_q2",
    subject: "biochemistry",
    marks: "Biochem SEQ",
    q: "Mention the semi-essential amino acids.",
    points: [
      "1. Arginine",
      "2. Histidine",
      "Explanation: Synthesized by the body in amounts sufficient for adult maintenance, but inadequate during periods of rapid growth, pregnancy, lactation, or illness."
    ],
    tip: "الأحماض شبه الأساسية (Semi-essential): Arginine و Histidine."
  },
  {
    id: "meq_q2_bio_5",
    source: "essay_bank_q2",
    subject: "biochemistry",
    marks: "Biochem SEQ",
    q: "Classify carbohydrates according to hydrolysis (number of sugar units).",
    points: [
      "1. Monosaccharides: Simple sugars that cannot be hydrolyzed into simpler carbohydrate units (e.g., Glucose, Fructose, Galactose).",
      "2. Disaccharides: Condensation products yielding 2 monosaccharide units on hydrolysis (e.g., Maltose, Lactose, Sucrose).",
      "3. Oligosaccharides: Yield 3 to 10 monosaccharide units on hydrolysis (e.g., Maltotriose, Raffinose).",
      "4. Polysaccharides (Glycans): Polymers yielding more than 10 monosaccharide units on hydrolysis (e.g., Starch, Glycogen, Cellulose, Dextrin)."
    ],
    tip: "تقسيم الكربوهيدرات حسب التحلل: Monosaccharides (1), Disaccharides (2), Oligosaccharides (3-10), Polysaccharides (>10)."
  },
  {
    id: "meq_q2_bio_6",
    source: "essay_bank_q2",
    subject: "biochemistry",
    marks: "Biochem SEQ",
    q: "Classify polysaccharides giving an example of each.",
    points: [
      "1. Homopolysaccharides (Homoglycans): Composed of repeated units of only ONE type of monosaccharide:",
      "   - Starch & Glycogen (storage forms of α-D-glucose)",
      "   - Cellulose (structural plant polymer of β-D-glucose)",
      "   - Dextran & Inulin",
      "2. Heteropolysaccharides (Heteroglycans / GAGs): Composed of two or more different types of monosaccharides or their derivatives:",
      "   - Heparin (anticoagulant)",
      "   - Hyaluronic acid (synovial fluid & vitreous body)",
      "   - Chondroitin sulfate (cartilage & bone matrix)"
    ],
    tip: "السكريات المتعددة: Homopolysaccharides (Starch, Cellulose) و Heteropolysaccharides (Heparin, Hyaluronic acid)."
  },
  {
    id: "meq_q2_bio_7",
    source: "essay_bank_q2",
    subject: "biochemistry",
    marks: "Biochem SEQ",
    q: "Mention the two groups of essential PUFAs giving an example of each.",
    points: [
      "1. Omega-3 (ω-3) Fatty Acids (first double bond at C3 from methyl end):",
      "   - Alpha-linolenic acid (ALA: 18:3 ω3)",
      "   - Eicosapentaenoic acid (EPA: 20:5 ω3) & Docosahexaenoic acid (DHA: 22:6 ω3)",
      "2. Omega-6 (ω-6) Fatty Acids (first double bond at C6 from methyl end):",
      "   - Linoleic acid (LA: 18:2 ω6)",
      "   - Arachidonic acid (ARA: 20:4 ω6 - synthesized from linoleic acid)"
    ],
    tip: "مجموعتا الأحماض غير المشبعة الأساسية: Omega-3 (Alpha-linolenic acid) و Omega-6 (Linoleic acid)."
  },
  {
    id: "meq_q2_bio_8",
    source: "essay_bank_q2",
    subject: "biochemistry",
    marks: "Biochem SEQ",
    q: "Mention the acidic amino acids (Monoamino-dicarboxylic acids).",
    points: [
      "1. Aspartic acid (Aspartate) - contains an extra β-carboxyl group (-COOH).",
      "2. Glutamic acid (Glutamate) - contains an extra γ-carboxyl group (-COOH).",
      "(Both carry a net negative charge at physiological pH 7.4)."
    ],
    tip: "الأحماض الأمينية الحامضية 2: Aspartic acid و Glutamic acid."
  },
  {
    id: "meq_q2_bio_9",
    source: "essay_bank_q2",
    subject: "biochemistry",
    marks: "Biochem SEQ",
    q: "Mention the basic amino acids (Diamino-monocarboxylic acids).",
    points: [
      "1. Lysine (contains an ε-amino group).",
      "2. Arginine (contains a guanidinium group, the most basic amino acid).",
      "3. Histidine (contains an imidazole ring).",
      "(They carry a net positive charge at physiological pH)."
    ],
    tip: "الأحماض الأمينية القاعدية 3: Lysine, Arginine, Histidine."
  },
  {
    id: "meq_q2_bio_10",
    source: "essay_bank_q2",
    subject: "biochemistry",
    marks: "Biochem SEQ",
    q: "Mention the sulphur-containing amino acids.",
    points: [
      "1. Methionine (contains a nonpolar thioether methyl group -S-CH3; essential).",
      "2. Cysteine (contains a reactive polar sulfhydryl / thiol group -SH; forms disulfide bonds in cystine)."
    ],
    tip: "الأحماض الكبريتية 2: Methionine و Cysteine."
  },
  {
    id: "meq_q2_bio_11",
    source: "essay_bank_q2",
    subject: "biochemistry",
    marks: "Biochem SEQ",
    q: "Mention the hydroxyl group (-OH) containing amino acids.",
    points: [
      "1. Serine (aliphatic hydroxy amino acid).",
      "2. Threonine (aliphatic hydroxy amino acid, essential).",
      "3. Tyrosine (aromatic hydroxy amino acid containing a phenolic -OH group)."
    ],
    tip: "الأحماض المحتوية على هيدروكسيل (-OH) هم 3: Serine, Threonine, Tyrosine."
  },
  {
    id: "meq_q2_anat_1",
    source: "essay_bank_q2",
    subject: "anatomy",
    marks: "Anatomy SEQ",
    q: "Define the following anatomical terms of movement and direction: Flexion, Extension, Abduction, Adduction, Circumduction, Eversion, Supination, Proximal, Dorsal.",
    points: [
      "• Flexion: Bending a joint to decrease the angle between two articulating bones or body parts.",
      "• Extension: Straightening a joint to increase the angle between two body parts back to the anatomical position.",
      "• Abduction: Moving a limb or digit away from the median plane (midline) of the body.",
      "• Adduction: Moving a limb or digit toward the median plane (midline) of the body.",
      "• Circumduction: A sequential combination of flexion, extension, abduction, and adduction causing a limb or digit to move in a conical path.",
      "• Eversion: Tilting or rotating the foot so that the sole faces laterally (outwards).",
      "• Supination: Lateral rotation of the forearm that positions the palm anteriorly (forwards) in anatomical position.",
      "• Proximal: Closer to the attachment point (root) of a limb or nearer to the center of the body.",
      "• Dorsal: Pertaining to or directed toward the posterior surface (back) of the body."
    ],
    tip: "مراجعة سريعة للمصطلحات: Flexion (نقص زاوية المفصل), Extension (زيادة زاوية المفصل), Abduction (إبعاد), Adduction (تقريب), Eversion (باطن القدم للخارج), Supination (الكف للأمام)."
  },
  {
    id: "meq_q2_anat_2",
    source: "essay_bank_q2",
    subject: "anatomy",
    marks: "Anatomy SEQ",
    q: "Name the types of blood vessels in the human body and state the primary characteristics of each.",
    points: [
      "1. Arteries: Thick-walled, elastic and muscular vessels that carry blood away from the heart under high pressure (e.g., Aorta, Femoral artery, Pulmonary trunk).",
      "2. Veins: Thinner-walled, collapsible vessels with larger lumens and internal valves that carry blood back toward the heart under low pressure (e.g., Superior and Inferior Vena Cava, Pulmonary veins).",
      "3. Capillaries: Microscopic, single-endothelial-layered vessels forming vast networks between arterioles and venules, functioning as the primary site of gas, nutrient, fluid, and waste exchange between blood and interstitial fluid."
    ],
    tip: "أنواع الأوعية الدموية: Arteries (تنقل الدم بعيداً عن القلب), Veins (تعيد الدم للقلب وبها صمامات), Capillaries (شعيرات دقيقة لتبادل الغازات والمغذيات)."
  },
  {
    id: "meq_q2_pha_1",
    source: "essay_bank_q2",
    subject: "pharmacology",
    marks: "Pharma SEQ",
    q: "Define Pharmacology, Pharmacokinetics, and Pharmacodynamics.",
    points: [
      "• Pharmacology: The comprehensive science studying chemical agents and drugs that interact with living organisms through chemical processes, producing therapeutic, diagnostic, or toxic responses.",
      "• Pharmacokinetics (PK): What the body does to the drug, studying the time course of drug Absorption, Distribution, Metabolism (biotransformation), and Excretion (ADME).",
      "• Pharmacodynamics (PD): What the drug does to the body, studying the physiological, biochemical mechanisms of drug action and concentration-effect relationships in target tissues."
    ],
    tip: "الفرق الأساسي: Pharmacokinetics = ما يفعله الجسم بالدواء (ADME). Pharmacodynamics = ما يفعله الدواء بالجسم وآلية عمله."
  },
  {
    id: "meq_q2_pha_2",
    source: "essay_bank_q2",
    subject: "pharmacology",
    marks: "Pharma SEQ",
    q: "Define Bioavailability, Bioequivalence, and First-Pass Effect.",
    points: [
      "• Bioavailability: The fraction and rate of an administered dose of unchanged drug that reaches the systemic circulation (100% for IV administration).",
      "• Bioequivalence: When two drug formulations containing identical active ingredients demonstrate comparable bioavailability curves and therapeutic clinical effects.",
      "• First-Pass Effect (Hepatic first-pass metabolism): The rapid hepatic and intestinal metabolic degradation of an orally absorbed drug before it enters the systemic circulation, which significantly decreases its bioavailability (completely bypassed by intravenous, sublingual, or topical routes)."
    ],
    tip: "Bioavailability (نسبة الدواء الواصل للدورة الدموية سليماً), Bioequivalence (تكافؤ مستحضرين), First-pass effect (استقلاب الدواء في الكبد قبل وصوله للدورة الدموية)."
  },
  {
    id: "meq_q2_pha_3",
    source: "essay_bank_q2",
    subject: "pharmacology",
    marks: "Pharma SEQ",
    q: "List four factors affecting drug absorption and name the three main routes of drug administration with examples.",
    points: [
      "A. Four Factors Affecting Drug Absorption:",
      "   1. Route of administration and pharmaceutical formulation (liquids vs tablets).",
      "   2. Surface area and blood supply of the absorptive site (small intestine > stomach).",
      "   3. Lipid solubility and ionization status of the drug molecule.",
      "   4. Gastric emptying time, GI motility, food interactions, and stomach acidity (pH).",
      "B. Three Main Routes of Administration:",
      "   1. Enteral: Oral (tablets), Sublingual (nitroglycerin), Buccal, Rectal (suppositories).",
      "   2. Parenteral: Intravenous (IV - fastest), Intramuscular (IM), Subcutaneous (SC), Intrathecal.",
      "   3. Topical: Transdermal patches, eye/ear drops, inhalation into lungs, vaginal creams."
    ],
    tip: "طرق إعطاء الدواء الثلاث: Enteral (فموي ومعوي), Parenteral (حقن وريدي وعضلي), Topical (موضعي وجلدي واستنشاق)."
  },
  {
    id: "meq_q2_pha_4",
    source: "essay_bank_q2",
    subject: "pharmacology",
    marks: "Pharma SEQ",
    q: "Differentiate between Therapeutic effect, Side effect, Toxic effect, and Idiosyncratic reaction.",
    points: [
      "• Therapeutic Effect: The desired, intended, and predictable beneficial clinical response for which the drug is prescribed.",
      "• Side Effect: A predictable, secondary, unavoidable effect occurring at standard therapeutic doses that may be mild or bothersome (e.g., drowsiness with antihistamines).",
      "• Toxic Effect: An exaggerated, harmful, often life-threatening drug reaction arising from excessive dosage, drug accumulation, or severely impaired renal/hepatic elimination (e.g., respiratory arrest from opioid overdose).",
      "• Idiosyncratic Reaction: A rare, completely unpredictable, abnormal reaction (hyper-responsiveness, hypo-responsiveness, or paradoxical response) typically caused by genetic variations in drug-metabolizing enzymes (e.g., hemolysis in G6PD deficiency upon taking sulfonamides)."
    ],
    tip: "أنواع استجابة الدواء: Therapeutic (المطلوب), Side effect (غير مقصود لكن متوقع), Toxic (سام بسبب جرعة زائدة أو تراكم), Idiosyncratic (نادر وغير متوقع وراثياً)."
  },
  {
    id: "meq_q2_pha_5",
    source: "essay_bank_q2",
    subject: "pharmacology",
    marks: "Pharma SEQ",
    q: "Define Half-life, Onset of action, Peak level, Duration of action, and Therapeutic Index.",
    points: [
      "• Half-life (t½): The time required for the body's elimination processes to reduce the concentration of a drug in the plasma by 50%.",
      "• Onset of Action: The elapsed time between drug administration and the first discernible therapeutic response.",
      "• Peak Plasma Concentration: The time at which the drug reaches its maximum concentration in the blood, producing its peak therapeutic effect.",
      "• Duration of Action: The total length of time that drug concentration remains above the minimum effective concentration (MEC) to produce clinical therapeutic benefit.",
      "• Therapeutic Index (TI): The ratio between the median toxic dose (TD50) and median effective dose (ED50); drugs with a narrow / low TI require therapeutic drug monitoring."
    ],
    tip: "المعايير الزمنية للدواء: Onset (بدء التأثير), Peak (أعلى تأثير), Duration (مدة التأثير), Half-life (نصف عمر الدواء), Therapeutic Index (مؤشر الأمان)."
  },
  {
    id: "meq_q2_pha_6",
    source: "essay_bank_q2",
    subject: "pharmacology",
    marks: "Pharma SEQ",
    q: "List the traditional Five Rights of Medication Administration.",
    points: [
      "1. Right Patient (verifying patient identity using two unique identifiers).",
      "2. Right Drug (verifying the correct medication name, formulation, and indication).",
      "3. Right Dose (calculating and double-checking the exact prescribed dose).",
      "4. Right Route (confirming the prescribed route: oral, IV, IM, SC, etc.).",
      "5. Right Time (administering at the precise scheduled intervals and timing)."
    ],
    tip: "حقوق إعطاء الدواء الخمسة: Right Patient, Right Drug, Right Dose, Right Route, Right Time."
  },
  // ==========================================
  // 5. GOVERNMENTAL FACULTY (حكومية) - VIP ESSAYS & MEQs
  // Biochemistry (VIP 2027), Microbiology (MEQs & Cases), Histology (Short Answer)
  // ==========================================
  {
    "id": "meq_gov_bio_1",
    "source": "essay_bank_gov_bio",
    "subject": "biochemistry",
    "marks": "VIP 2027",
    "q": "What are the main biological functions of carbohydrates?",
    "points": [
      "1. Energy Supply: Major immediate source of dietary calories and metabolic energy (glucose yields 4 kcal/g).",
      "2. Energy Reserve: Storage fuel in tissues (glycogen stored in liver and skeletal muscles in animals; starch in plants).",
      "3. Cell Communication & Recognition: Structural components of membrane glycoproteins and glycolipids that mediate cell-to-cell recognition, adhesion, and receptor signaling."
    ],
    "tip": "وظائف الكربوهيدرات الثلاث الرئيسية: Energy Supply (طاقة فورية), Energy Reserve (تخزين جليكوجين), Cell Communication (جلايكوبروتينات الغشاء الخلوي)."
  },
  {
    "id": "meq_gov_bio_2",
    "source": "essay_bank_gov_bio",
    "subject": "biochemistry",
    "marks": "VIP 2027",
    "q": "Classify monosaccharides according to the number of carbon atoms, giving an example of each.",
    "points": [
      "1. Trioses (3 Carbons): Glyceraldehyde (Aldotriose), Dihydroxyacetone (Ketotriose).",
      "2. Tetroses (4 Carbons): Erythrose (Aldotetrose), Erythrulose (Ketotetrose).",
      "3. Pentoses (5 Carbons): Ribose (in RNA/ATP), Deoxyribose (in DNA), Xylulose, Ribulose.",
      "4. Hexoses (6 Carbons): Glucose (grape sugar/blood sugar), Galactose, Fructose (fruit sugar), Mannose."
    ],
    "tip": "تقسيم السكريات الأحادية حسب عدد الكربونات: Trioses (3C), Tetroses (4C), Pentoses (5C), Hexoses (6C) مع حفظ مثال ألدوز وكيتوز."
  },
  {
    "id": "meq_gov_bio_3",
    "source": "essay_bank_gov_bio",
    "subject": "biochemistry",
    "marks": "VIP 2027",
    "q": "Define asymmetric carbon, epimers, and anomers with examples.",
    "points": [
      "• Asymmetric (Chiral) Carbon: A carbon atom bonded to four different chemical atoms or groups, conferring optical activity (dextrorotatory vs levorotatory).",
      "• Epimers: Isomers that differ in the configuration around only ONE specific carbon atom (other than the anomeric carbon). Examples: D-Glucose and D-Galactose are C4-epimers; D-Glucose and D-Mannose are C2-epimers.",
      "• Anomers: Cyclization isomers that differ in spatial configuration specifically at the anomeric (carbonyl) carbon (C1 in aldoses, C2 in ketoses) upon ring closure, forming α or β forms (e.g., α-D-glucopyranose and β-D-glucopyranose)."
    ],
    "tip": "الفرق بين Epimers و Anomers: الـ Epimers اختلاف في كربونة واحدة عادية (C2 أو C4)، بينما الـ Anomers اختلاف في الكربونة الأنوميرية (C1) لتكوين α أو β."
  },
  {
    "id": "meq_gov_bio_4",
    "source": "essay_bank_gov_bio",
    "subject": "biochemistry",
    "marks": "VIP 2027",
    "q": "What is the biological importance of lipids?",
    "points": [
      "1. Concentrated Energy Storage: Highly compact, water-free fuel storage in adipose tissue (triacylglycerols provide ~9 kcal/g, more than double carbohydrates).",
      "2. Supply of Essential Nutrients: Vehicle for absorption and transport of fat-soluble vitamins (A, D, E, K) and supplies essential fatty acids (Linoleic and Linolenic).",
      "3. Structural Framework: Principal lipid bilayer of all cellular and organelle membranes (phospholipids, sphingolipids, cholesterol).",
      "4. Precursors: Starting materials for biosynthesis of steroid hormones (cortisol, estrogen, testosterone), Vitamin D, bile acids/salts, and eicosanoids (prostaglandins)."
    ],
    "tip": "الأهمية الحيوية لليبدات: Energy Storage (9 kcal/g), Fat-soluble vitamins & EFAs, Cell membranes bilayer, Precursor of steroids & bile salts."
  },
  {
    "id": "meq_gov_bio_5",
    "source": "essay_bank_gov_bio",
    "subject": "biochemistry",
    "marks": "VIP 2027",
    "q": "Explain the biological classification of fatty acids with examples.",
    "points": [
      "• Essential Fatty Acids (EFAs): Cannot be synthesized de novo by the human body due to lack of desaturase enzymes beyond carbon 9; must be supplied in diet.",
      "  - Examples: Linoleic acid (18:2, ω-6) and α-Linolenic acid (18:3, ω-3). Required for membrane fluidity, brain development, and eicosanoid synthesis.",
      "• Non-Essential Fatty Acids: Can be synthesized endogenously by the human body from carbohydrate or acetyl-CoA precursors.",
      "  - Examples: Palmitic acid (16:0), Stearic acid (18:0), and Oleic acid (18:1, ω-9)."
    ],
    "tip": "الأحماض الدهنية الأساسية Essential: Linoleic (ω-6) و Linolenic (ω-3) لا يستطيع الجسم تصنيعها ويجب أخذها في الغذاء."
  },
  {
    "id": "meq_gov_bio_6",
    "source": "essay_bank_gov_bio",
    "subject": "biochemistry",
    "marks": "VIP 2027",
    "q": "What are the differences between saturated and unsaturated fatty acids?",
    "points": [
      "• Saturated Fatty Acids (SFAs):",
      "  - Chemical Structure: Contain NO double bonds along the hydrocarbon chain (fully saturated with hydrogen atoms).",
      "  - Physical State: Solid or semi-solid at room temperature (higher melting points) due to tight straight-chain packing.",
      "  - Sources: Predominantly animal fats, butter, lard, coconut oil (e.g., Palmitic acid 16:0, Stearic acid 18:0).",
      "• Unsaturated Fatty Acids (UFAs):",
      "  - Chemical Structure: Contain one or more double bonds (Monounsaturated MUFAs, Polyunsaturated PUFAs), usually in cis-configuration causing kinks.",
      "  - Physical State: Liquid at room temperature (oils, lower melting points) because kinks prevent tight crystalline packing.",
      "  - Sources: Plant oils (olive oil, corn oil), nuts, and fatty fish (e.g., Oleic acid 18:1, Linoleic acid 18:2)."
    ],
    "tip": "المقارنة: Saturated (No double bonds, Solid at room temp, Animal fats) vs Unsaturated (≥1 double bonds, Liquid oils, Plant & Fish oils)."
  },
  {
    "id": "meq_gov_bio_7",
    "source": "essay_bank_gov_bio",
    "subject": "biochemistry",
    "marks": "VIP 2027",
    "q": "Describe the general chemical structure of amino acids and their biological classification.",
    "points": [
      "• General Chemical Structure: A central α-carbon bonded to: 1. Carboxylic acid group (-COOH); 2. Amino group (-NH2); 3. Hydrogen atom (-H); 4. Distinctive variable side chain (-R group). (Note: Proline is an imino acid with a secondary cyclic ring).",
      "• Biological Nutritional Classification:",
      "  1. Essential Amino Acids (10): Cannot be synthesized by the body in adequate amounts; must be ingested in diet. (Mnemonic: PVT TIM HALL: Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine).",
      "  2. Non-Essential Amino Acids (10): Readily synthesized from metabolic intermediates (Glycine, Alanine, Serine, Cysteine, Tyrosine, Glutamate, Glutamine, Aspartate, Asparagine, Proline).",
      "  3. Semi-Essential Amino Acids: Arginine and Histidine (synthesized in adults but rate is insufficient during rapid growth in children and pregnancy)."
    ],
    "tip": "احفظ تجميعة الأحماض الأمينية الأساسية العشرات: PVT TIM HALL (Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine)."
  },
  {
    "id": "meq_gov_bio_8",
    "source": "essay_bank_gov_bio",
    "subject": "biochemistry",
    "marks": "VIP 2027",
    "q": "What is the biological importance of amino acids and proteins?",
    "points": [
      "1. Catalysis & Regulation: All enzymes and many polypeptide hormones (insulin, glucagon, growth hormone) that regulate metabolic pathways.",
      "2. Structural Architecture: Fibrous structural proteins such as Collagen (bone, skin, tendons), Elastin, and Keratin (hair, nails).",
      "3. Cellular Movement & Contractility: Actin and Myosin in skeletal, cardiac, and smooth muscle fibers.",
      "4. Transport & Storage: Hemoglobin and Myoglobin (O2 transport), Albumin (carrier for free fatty acids, bilirubin, drugs), Transferrin (iron transport).",
      "5. Immune Defense: Immunoglobulins (Antibodies) recognizing foreign antigens, and complement proteins."
    ],
    "tip": "الأهمية الحيوية للبروتينات والأحماض الأمينية: Enzymes, Hormones, Structural (Collagen), Movement (Actin/Myosin), Transport (Hb/Albumin), Immunity (Antibodies)."
  },
  {
    "id": "meq_gov_bio_9",
    "source": "essay_bank_gov_bio",
    "subject": "biochemistry",
    "marks": "VIP 2027",
    "q": "Define a peptide bond, describing its formation and characteristics.",
    "points": [
      "• Definition: A strong, covalent amide linkage (-CO-NH-) connecting the α-carboxyl group of one amino acid to the α-amino group of an adjacent amino acid.",
      "• Formation: Formed via a condensation (dehydration) reaction with the release of one water molecule (H2O).",
      "• Characteristics:",
      "  1. Partial double-bond character (40%) due to resonance between carbonyl oxygen and nitrogen.",
      "  2. Rigid and planar (no free rotation around the C-N peptide bond).",
      "  3. Usually in trans configuration to minimize steric hindrance between R-groups.",
      "  4. Uncharged but polar (involved in hydrogen bonding in α-helix and β-pleated sheets)."
    ],
    "tip": "الرابطة الببتيدية: Covalent amide bond (-CO-NH-) تمتاز بـ Partial double bond character و Rigid & Planar و Trans configuration."
  },
  {
    "id": "meq_gov_bio_10",
    "source": "essay_bank_gov_bio",
    "subject": "biochemistry",
    "marks": "VIP 2027",
    "q": "What are post-translational modifications of amino acids? Give examples.",
    "points": [
      "• Definition: Enzymatic, covalent alterations occurring to specific amino acid residues after protein synthesis (translation) on ribosomes, essential for protein function, stability, or localization.",
      "• Key Examples:",
      "  1. Hydroxylation: Hydroxylation of Proline to Hydroxyproline, and Lysine to Hydroxylysine in collagen (catalysed by prolyl/lysyl hydroxylase; requires Vitamin C; defect causes Scurvy).",
      "  2. Phosphorylation: Addition of phosphate group (-PO4) to hydroxyl groups of Serine, Threonine, or Tyrosine (catalysed by Protein Kinases; reversibly regulates enzyme activity).",
      "  3. Carboxylation: Addition of carboxyl group to Glutamate to form γ-carboxyglutamate in blood clotting factors (II, VII, IX, X); requires Vitamin K.",
      "  4. Glycosylation: Attachment of oligosaccharides to Asparagine (N-linked) or Serine/Threonine (O-linked) for membrane and secretory proteins."
    ],
    "tip": "أهم أمثلة الـ Post-translational modifications: Hydroxylation (الكولاجين وفيتامين C), Phosphorylation (تنشيط وتثبيط الإنزيمات), Carboxylation (تجلط الدم وفيتامين K)."
  },
  {
    "id": "meq_gov_micro_1",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Micro MEQ",
    "q": "Define microorganisms and list the five major biological groups.",
    "points": [
      "• Definition: Microorganisms are minute, generally microscopic unicellular entities capable of carrying out fundamental biological functions required to maintain life and propagate.",
      "• Five Major Biological Groups:",
      "  1. Bacteria: Unicellular prokaryotic organisms with peptidoglycan cell walls that replicate by binary fission.",
      "  2. Viruses: Obligate intracellular molecular parasites consisting of a DNA or RNA genome enclosed in a protein capsid (lacking cellular machinery).",
      "  3. Fungi: Eukaryotic organisms possessing chitinous cell walls, including single-celled yeasts and multicellular filamentous molds.",
      "  4. Protozoa: Unicellular eukaryotic parasites exhibiting motility (amebae, flagellates, ciliates, sporozoa).",
      "  5. Prions: Proteinaceous infectious particles devoid of nucleic acids that induce misfolding of normal host prion proteins."
    ],
    "tip": "المجموعات الحيوية الخمس: Bacteria (بدائيات النواة), Viruses (طفيليات داخلية إجبارية), Fungi (حقيقيات جدار كيتيني), Protozoa (أوليات), Prions (بروتينات معدية)."
  },
  {
    "id": "meq_gov_micro_2",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Micro MEQ",
    "q": "Describe the different shapes and arrangements of bacteria, giving one example for each.",
    "points": [
      "1. Cocci (Spherical cells):",
      "   • In pairs (Diplococci): e.g., Neisseria meningitidis / Streptococcus pneumoniae.",
      "   • In chains: e.g., Streptococcus pyogenes.",
      "   • In grape-like clusters: e.g., Staphylococcus aureus.",
      "2. Bacilli (Rod-shaped cells):",
      "   • Single rods: e.g., Escherichia coli.",
      "   • In chains (Streptobacilli): e.g., Bacillus anthracis.",
      "   • Curved/Comma-shaped rods: e.g., Vibrio cholerae.",
      "3. Spiral (Helical cells):",
      "   • Rigid helical: e.g., Spirillum volutans.",
      "   • Flexible, undulating spirochetes: e.g., Treponema pallidum (Syphilis)."
    ],
    "tip": "أشكال وترتيب البكتيريا: Cocci (سلاسل Streptococci أو عناقيد Staphylococci), Bacilli (عصويات مثل E. coli و Bacillus), Spiral (لولبية مثل Treponema)."
  },
  {
    "id": "meq_gov_micro_3",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Micro MEQ",
    "q": "Compare plasmids and the bacterial chromosome in terms of structure, replication, and function.",
    "points": [
      "• Bacterial Chromosome (Nucleoid):",
      "  - Structure: Single, large, circular, double-stranded DNA molecule without a nuclear envelope.",
      "  - Replication: Replicates synchronously with bacterial cell division (essential for cell survival).",
      "  - Function: Carries essential housekeeping genes required for bacterial viability, metabolism, and growth.",
      "• Plasmids:",
      "  - Structure: Small, circular, extrachromosomal double-stranded DNA molecules.",
      "  - Replication: Autonomous, self-replicating independent of the main bacterial chromosome.",
      "  - Function: Non-essential for baseline viability, but confers selective survival advantages: antibiotic resistance (R-plasmids), toxin production, bacteriocins, and conjugative gene transfer (F-plasmids)."
    ],
    "tip": "المقارنة: Chromosome (جينات أساسية للحياة, انقسام متزامن) vs Plasmids (حمض نووي إضافي مستقل, ينقل مقاومة المضادات الحيوية R-factors والسموم)."
  },
  {
    "id": "meq_gov_micro_4",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Micro MEQ",
    "q": "Explain the structure of the bacterial ribosome and how it differs from the eukaryotic ribosome. Why is this difference clinically important?",
    "points": [
      "• Bacterial Ribosome Structure: 70S sedimentation coefficient, composed of two unequal ribonucleoprotein subunits:",
      "  - Large 50S subunit (contains 23S rRNA, 5S rRNA, and 34 proteins).",
      "  - Small 30S subunit (contains 16S rRNA and 21 proteins).",
      "• Difference from Eukaryotic Ribosome: Eukaryotic cytoplasmic ribosomes are 80S (composed of 60S + 40S subunits).",
      "• Clinical Importance (Selective Toxicity):",
      "  - Allows antibiotics to selectively target and inhibit bacterial 70S protein synthesis without affecting host human 80S ribosomes.",
      "  - Examples: Aminoglycosides (Gentamicin) and Tetracyclines bind the 30S subunit; Macrolides (Erythromycin) and Chloramphenicol inhibit the 50S subunit."
    ],
    "tip": "الأهمية الإكلينيكية لريبووسوم البكتيريا: البكتيريا 70S (50S+30S) بينما خلايا الإنسان 80S (60S+40S)، مما يحقق Selective Toxicity للمضادات الحيوية."
  },
  {
    "id": "meq_gov_micro_5",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Micro MEQ",
    "q": "List and describe the functions of the bacterial cytoplasmic membrane.",
    "points": [
      "1. Selective Permeability & Transport: Regulates solute entry and exit via specific permeases, ion channels, and active transport systems.",
      "2. Respiration & Energy (ATP) Generation: Houses electron transport chains, cytochromes, and ATP synthase (acts as functional equivalent of mitochondria).",
      "3. Biosynthetic Functions: Contains enzymes responsible for the synthesis of peptidoglycan, teichoic acids, outer membrane components, and capsular polysaccharides.",
      "4. Secretion: Directs secretion of extracellular hydrolytic enzymes, exotoxins, and virulence factors.",
      "5. DNA Segregation: Inward invaginations (Mesosomes) participate in chromosome attachment, replication, and septum formation during cell division."
    ],
    "tip": "وظائف الغشاء السيتوبلازمي البكتيري: Selective permeability, Energy generation/ATP (بديل الميتوكوندريا), Peptidoglycan synthesis, Exotoxin secretion."
  },
  {
    "id": "meq_gov_micro_6",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Micro MEQ",
    "q": "Describe the structure of peptidoglycan and explain its importance for bacterial survival.",
    "points": [
      "• Structure: Rigid, giant macromolecular sacculus consisting of:",
      "  1. Linear glycan strands: Alternating repeating disaccharide units of N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) linked by β(1→4) glycosidic bonds.",
      "  2. Tetrapeptide side chains attached to NAM residues (containing D- and L-amino acids like D-alanine).",
      "  3. Peptide cross-links (transpeptidation) connecting adjacent tetrapeptide chains, catalyzed by Transpeptidase (Penicillin-Binding Proteins - PBPs).",
      "• Importance for Bacterial Survival:",
      "  - Provides structural rigidity and confers bacterial morphology (rod, sphere, spiral).",
      "  - Counteracts high internal bacterial osmotic pressure (5-20 atmospheres), preventing osmotic lysis and cell rupture in hypotonic environments."
    ],
    "tip": "البيبتيدوجلايكان: يتكون من NAG و NAM بروابط β(1→4) وسلاسل ببتيدية متقاطعة بروابط Transpeptidation لحماية البكتيريا من الانفجار الإسموزي (Osmotic lysis)."
  },
  {
    "id": "meq_gov_micro_7",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Micro MEQ",
    "q": "Compare and contrast the cell walls of gram-positive and gram-negative bacteria.",
    "points": [
      "• Gram-Positive Cell Wall:",
      "  - Peptidoglycan: Very thick, multilayered (20-80 nm, up to 40 layers), forming ~50-90% of dry wall weight.",
      "  - Teichoic & Lipoteichoic Acids: Present (major surface antigens, promote adherence).",
      "  - Outer Membrane & Lipopolysaccharide (LPS): Completely ABSENT.",
      "  - Periplasmic Space: Narrow or absent.",
      "  - Susceptibility: Highly susceptible to penicillin and lysozyme digestion.",
      "• Gram-Negative Cell Wall:",
      "  - Peptidoglycan: Very thin, single/few layers (1-3 nm), representing only ~5-10% of dry weight.",
      "  - Outer Membrane: PRESENT (asymmetric bilayer: inner phospholipids, outer Lipopolysaccharide - LPS).",
      "  - Periplasmic Space: Wide, containing beta-lactamases and hydrolytic enzymes.",
      "  - Porin Proteins: Present in outer membrane for transport of hydrophilic nutrients.",
      "  - Teichoic Acids: Completely ABSENT."
    ],
    "tip": "المقارنة الذهبية: Gram-positive (Peptidoglycan سميك + Teichoic acids, No outer membrane) vs Gram-negative (Peptidoglycan رقيق + Outer membrane + LPS + Porins)."
  },
  {
    "id": "meq_gov_micro_8",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Micro MEQ",
    "q": "Describe the structure of lipopolysaccharide (LPS) and explain its role in disease.",
    "points": [
      "• Structure of LPS (Endotoxin): Located exclusively in the outer leaflet of the gram-negative outer membrane; composed of 3 structural domains:",
      "  1. Lipid A: Phosphorylated glucosamine disaccharide attached to long fatty acid chains; embedded in membrane; responsible for toxicity and endotoxic shock.",
      "  2. Core Oligosaccharide: Central polysaccharide chain (contains unique sugars like KDO).",
      "  3. O-Antigen (O-Specific Polysaccharide): Repeating hydrophilic polysaccharide units protruding outwards; major serological antigen used for strain identification.",
      "• Role in Disease (Endotoxin Shock):",
      "  - Released during bacterial cell lysis; binds CD14/TLR4 on macrophages.",
      "  - Triggers massive release of pro-inflammatory cytokines: IL-1 and TNF-α (inducing high fever, hypotension, DIC, endothelial damage, and septic shock)."
    ],
    "tip": "تركيب الـ LPS (الإندوتوكسين): Lipid A (المسؤول عن السمية والصدمة الإنتانية), Core polysaccharide, O-Antigen (لتحديد فصيلة البكتيريا). يحفز إفراز TNF-α و IL-1."
  },
  {
    "id": "meq_gov_micro_9",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Micro MEQ",
    "q": "Explain the structure, types, and functions of flagella and fimbriae (pili).",
    "points": [
      "• Flagella (Organ of Locomotion):",
      "  - Structure: Long, helical, whip-like filamentous appendages composed of the protein Flagellin (H-antigen), attached via a hook and basal body motor.",
      "  - Arrangements: Monotrichous (single polar), Lophotrichous (tuft at one pole), Amphitrichous (flagella at both poles), Peritrichous (surrounding entire cell).",
      "  - Function: Chemotaxis (swimming toward nutrients or away from repellents).",
      "• Fimbriae / Pili (Organ of Adherence):",
      "  - Structure: Short, straight, hair-like projections composed of Pilin protein.",
      "  - Types & Functions:",
      "    1. Common Pili (Fimbriae): Adherence to host mucosal epithelial cells (adhesins, critical for colonization and virulence, e.g., Neisseria gonorrhoeae).",
      "    2. Sex Pili (F-pili): Longer, specialized pili mediating bacterial conjugation and transfer of plasmid DNA."
    ],
    "tip": "Flagella (الحركة والسباحة, بروتين Flagellin / H-antigen) vs Fimbriae (الالتصاق بالغشاء المخاطي, والـ Sex pili لنقل البلازميد بالاقتران Conjugation)."
  },
  {
    "id": "meq_gov_micro_10",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Micro MEQ",
    "q": "Discuss the structure, resistance, and germination of bacterial endospores.",
    "points": [
      "• Structure: Highly dehydrated, dormant survival forms produced by Bacillus and Clostridium inside the cell. Layers from inside out: Core (DNA, ribosomes, Dipicolinic acid + Calcium), Inner membrane, Germ cell wall, Cortex (peptidoglycan), Keratin-like Protein Spore Coat, Exosporium.",
      "• Resistance Mechanism: Extremely resistant to heat, boiling, desiccation, UV radiation, and chemical disinfectants due to: 1. Dehydrated state; 2. Calcium dipicolinate; 3. Thick impermeable keratin-like protein coat; 4. SASPs protecting DNA.",
      "• Sporulation & Germination:",
      "  - Sporulation: Triggered by nutrient depletion (takes ~6-8 hours).",
      "  - Germination: Activated by heat/moisture/nutrients (alanine), rapidly transforming dormant spore back into a single metabolically active vegetative bacterium."
    ],
    "tip": "الأبواغ البكتيرية (Endospores): وسيلة بقاء وحماية وليست تكاثر. سر مقاومتها للحرارة هو Calcium dipicolinate والجفاف، وتتطلب التعقيم بـ Autoclave عند 121°C."
  },
  {
    "id": "meq_gov_micro_11",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Case Scenario MEQ",
    "q": "MEQ Case 1: A gram-positive bacterium is isolated from a wound. It has a thick peptidoglycan layer and teichoic acids. Describe its cell wall and list three functions of teichoic acids.",
    "points": [
      "a) Structure of Gram-Positive Cell Wall:",
      "   • Consists of a thick (20-80 nm), homogeneous peptidoglycan layer comprising multiple alternating NAG-NAM glycan chains densely cross-linked by pentaglycine bridges.",
      "   • Interwoven with polyol phosphate polymers (Teichoic acids and membrane-anchored Lipoteichoic acids).",
      "b) Three Functions of Teichoic Acids:",
      "   1. Antigenic Specificity: Acts as the major surface antigen of gram-positive bacteria for serological identification.",
      "   2. Adherence & Colonization: Binds specifically to fibronectin on mammalian host cell surfaces to facilitate tissue adherence.",
      "   3. Ion Regulation & Wall Integrity: Possesses a negative charge that binds and sequesters divalent cations (Mg2+, Ca2+) to maintain cell wall stability and regulate autolysins."
    ],
    "tip": "وظائف Teichoic acids في البكتيريا الموجبة: Major surface antigen, Adherence to host tissues (fibronectin), Binding Mg2+ & Ca2+ ions."
  },
  {
    "id": "meq_gov_micro_12",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Case Scenario MEQ",
    "q": "MEQ Case 2: A gram-negative bacterium causes septic shock in an ICU patient. Describe outer membrane structure, explain what LPS is, and state the function of porins.",
    "points": [
      "a) Structure of Outer Membrane: Asymmetric lipid bilayer situated external to the periplasmic space and thin peptidoglycan. The inner leaflet consists of phospholipids, while the outer leaflet is composed of Lipopolysaccharide (LPS).",
      "b) Lipopolysaccharide (LPS) as Endotoxin:",
      "   • LPS is an integral component of the gram-negative cell wall. It is called an 'endotoxin' because it remains anchored within the bacterial structure and is released upon cell lysis.",
      "   • Its Lipid A moiety stimulates macrophages via TLR4 to release excessive TNF-α, IL-1, and nitric oxide, leading to fever, hypotension, and septic shock.",
      "c) Porins and Their Function:",
      "   • Trimeric transmembrane protein channels spanning the outer membrane.",
      "   • Function: Form water-filled diffusion pores that allow passive influx of small hydrophilic nutrients, ions, and beta-lactam antibiotics (molecular weight ≤600-700 Da)."
    ],
    "tip": "في الصدمة الإنتانية للبكتيريا السالبة: الـ LPS هو الإندوتوكسين وجزؤه السام Lipid A يسبب إفراز TNF-α، والـ Porins هي القنوات التي تسمح بمرور المغذيات والمضادات الحيوية."
  },
  {
    "id": "meq_gov_micro_13",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Case Scenario MEQ",
    "q": "MEQ Case 3: A soil bacterium survives extreme heat and radiation. Name the structure responsible, describe its composition, and outline sporulation and germination.",
    "points": [
      "a) Structure Responsible: Bacterial Endospore (produced by genera Bacillus and Clostridium).",
      "b) Structure and Composition:",
      "   • Central core with condensed DNA, ribosomes, and high concentration of Calcium dipicolinate (10-15% dry weight).",
      "   • Surrounded by inner membrane, germ cell wall, thick Cortex of loosely cross-linked peptidoglycan, and an impermeable multi-layered Keratin-like protein Spore Coat.",
      "c) Steps of Sporulation (Triggered by starvation):",
      "   1. DNA replication and axial filament formation; 2. Asymmetric septation isolating DNA in forespore; 3. Engulfment of forespore by mother cell; 4. Cortex formation; 5. Spore coat deposition; 6. Mother cell lysis releasing mature endospore.",
      "d) Germination Process:",
      "   • Triggered by physical activation (sublethal heat) followed by binding of nutrients (e.g., L-alanine) to spore receptors, water uptake, enzymatic degradation of cortex, and emergence of a single vegetative bacterium."
    ],
    "tip": "تكوين الأبواغ (Sporulation) يبدأ بنقص الغذاء، والإنبات (Germination) يعيد تحويل البوغ لخلية بكتيرية نشطة عند توفر الرطوبة والغذاء."
  },
  {
    "id": "meq_gov_micro_14",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Case Scenario MEQ",
    "q": "MEQ Case 4: A pathogenic bacterium is motile and adheres to host cells. Name two external structures involved, describe their roles, and differentiate capsule from slime layer.",
    "points": [
      "a) Two External Structures Involved: Flagella (for motility) and Fimbriae / Pili (for adherence).",
      "b) Flagella Structure & Function: Helical filaments composed of flagellin protein driven by a proton-motive force rotary motor in the cell membrane; provides purposeful directional swimming (chemotaxis) toward mucosal surfaces.",
      "c) Fimbriae Structure & Function: Filamentous appendages with adhesive tip proteins (adhesins) that specifically attach to complementary host mucosal receptors, preventing clearance by fluid flow.",
      "d) Capsule vs Slime Layer (Glycocalyx):",
      "   • Capsule: Dense, well-organized gelatinous polysaccharide layer firmly attached to the cell wall; visualized by negative staining (India ink); functions as major anti-phagocytic virulence factor.",
      "   • Slime Layer: Loose, unorganized, amorphous, easily detached polysaccharide matrix; primarily promotes adherence and biofilm formation on medical devices (catheters, prosthetic valves)."
    ],
    "tip": "الفرق بين Capsule و Slime layer: الكبسولة منظمة وثابتة ومضادة للبلعمة (Antiphagocytic)، بينما السلايم طبقة هلامية رخوة مسؤولة عن تكوين البيوفيلم (Biofilm)."
  },
  {
    "id": "meq_gov_micro_15",
    "source": "essay_bank_gov_micro",
    "subject": "microbiology",
    "marks": "Comparative MEQ",
    "q": "MEQ Case 5: Compare prokaryotic and eukaryotic cells in terms of ribosome size, cytoplasmic membrane, genetic material, and explain the clinical relevance for chemotherapy.",
    "points": [
      "a) Ribosome Size: Prokaryotic ribosomes are 70S (50S + 30S subunits); eukaryotic ribosomes are 80S (60S + 40S subunits) in cytoplasm.",
      "b) Cytoplasmic Membrane Composition: Prokaryotic membranes lack sterols/cholesterol (except Mycoplasma) and house respiratory enzymes; eukaryotic membranes contain cholesterol and do not carry respiratory chains.",
      "c) Genetic Material Organization: Prokaryotes possess a single, circular, haploid chromosome in an unenclosed nucleoid (no histones, no nuclear membrane); eukaryotes possess multiple linear diploid chromosomes wound around histones within a double-membrane nucleus.",
      "d) Clinical Relevance for Chemotherapy (Selective Toxicity):",
      "   • Enables antimicrobial drugs to destroy bacteria without killing human cells (e.g., Penicillin targets peptidoglycan which humans lack; Aminoglycosides target 70S ribosomes leaving 80S intact; Antifungals target ergosterol which human membranes lack)."
    ],
    "tip": "الأساس العلمي لـ Selective Toxicity للمضادات الحيوية يعتمد على الفروق بين بدائيات وحقيقيات النواة (Peptidoglycan, 70S vs 80S, Sterols)."
  },
  {
    "id": "meq_gov_histo_1",
    "source": "essay_bank_gov_histo",
    "subject": "histology",
    "marks": "Histo Short Answer",
    "q": "Compare and contrast the direct and indirect methods of immunocytochemistry.",
    "points": [
      "• Direct Method:",
      "  - Uses a single primary antibody that is directly conjugated/labeled with a fluorescent dye or enzyme.",
      "  - Simpler protocol with fewer incubation and washing steps.",
      "  - Lower sensitivity because only a limited number of labeled antibodies bind to each antigen.",
      "• Indirect Method:",
      "  - Uses two antibodies: an unlabeled primary antibody that binds the tissue antigen, followed by a labeled secondary antibody directed against the primary antibody.",
      "  - Substantially higher sensitivity due to Signal Amplification (multiple secondary antibodies bind each primary antibody molecule).",
      "  - More versatile and cost-effective as one labeled secondary antibody can detect many different primary antibodies.",
      "• Common Feature: Both methods require fluorescence or light microscopy for visualization."
    ],
    "tip": "المقارنة بين طريقتي المناعة الهستولوجية: Direct (جسم مضاد أولي مصبوغ مباشرة, أقل حساسية) vs Indirect (أولي غير مصبوغ + ثانوي مصبوغ, يوفر تكبيراً للإشارة Signal Amplification)."
  },
  {
    "id": "meq_gov_histo_2",
    "source": "essay_bank_gov_histo",
    "subject": "histology",
    "marks": "Histo Short Answer",
    "q": "Explain the principle and applications of cell and tissue culture.",
    "points": [
      "• Principle:",
      "  - Involves isolation and maintenance of living cells, tissues, or organs outside their natural in vivo environment in an artificial nutrient-rich culture medium under strictly sterile (aseptic) conditions and controlled temperature (37°C) and CO2.",
      "• Key Applications:",
      "  1. Direct Microscopic Observation: Allows real-time visualization of cellular behavior, division, motility, and differentiation.",
      "  2. Pharmacological & Toxicological Testing: Enables testing the efficacy and cytotoxicity of novel drugs, chemicals, or hormones on specific cell lines before animal testing.",
      "  3. Vaccine & Biopharmaceutical Production: Used to propagate viruses and bacteria for vaccine manufacture, and recombinant therapeutic proteins.",
      "  4. Karyotyping & Cytogenetics: Provides dividing cells (lymphocytes, fibroblasts) arrested at metaphase for chromosomal analysis."
    ],
    "tip": "أهمية زراعة الخلايا والأنسجة (Tissue Culture): دراسة سلوك الخلايا الحية, اختبار الأدوية والسمية, تصنيع اللقاحات, وتحضير الخلايا لعمل الكاريوتايبينج."
  },
  {
    "id": "meq_gov_histo_3",
    "source": "essay_bank_gov_histo",
    "subject": "histology",
    "marks": "Histo Short Answer",
    "q": "Differentiate between orthochromasia and metachromasia in histological staining.",
    "points": [
      "• Orthochromasia:",
      "  - Definition: Staining of tissue components in the exact same color as that of the dye solution used.",
      "  - Example: Toluidine blue stains ordinary tissue structures and background in BLUE.",
      "• Metachromasia:",
      "  - Definition: Staining of specific polyanionic tissue components in a DIFFERENT color from the original dye solution due to molecular polymerization of dye molecules.",
      "  - Classic Example: Toluidine Blue (a blue dye) stains the heparin-rich granules of Mast Cells in a PURPLE / REDDISH-VIOLET color.",
      "  - Mechanism: High density of closely spaced negative charges (sulfate/phosphate groups) causes stacking of dye cations (dimers and polymers), altering their light absorption spectrum."
    ],
    "tip": "الفرق بين Orthochromasia (تصبغ بنفس لون الصبغة الأزرق) و Metachromasia (تغير لون الصبغة إلى بنفسجي/أرجواني مثل حبيبات Mast cells مع صبغة Toluidine Blue)."
  },
  {
    "id": "meq_gov_histo_4",
    "source": "essay_bank_gov_histo",
    "subject": "histology",
    "marks": "Histo Short Answer",
    "q": "List five primary clinical indications for performing a karyotype analysis.",
    "points": [
      "1. Congenital Anomalies & Dysmorphic Features: Investigating suspected chromosomal syndromes (e.g., Down syndrome, Edwards, Patau) in newborns or children with developmental delay.",
      "2. Recurrent Spontaneous Abortions: Evaluating couples experiencing repeated pregnancy loss (≥2 miscarriages) to detect balanced translocations.",
      "3. Infertility Assessment: Investigating unexplained primary or secondary infertility in men or women (e.g., Klinefelter syndrome 47,XXY; Turner syndrome 45,X).",
      "4. Ambiguous Genitalia & Disorders of Sex Development (DSD): Determining genetic sex and sex chromosome complement in newborns with unclear external genitalia.",
      "5. Cancer Diagnosis, Prognosis & Therapy: Detecting acquired diagnostic or prognostic chromosomal aberrations in hematological malignancies (e.g., Philadelphia chromosome t(9;22) in CML) and solid tumors."
    ],
    "tip": "دواعي عمل الكاريوتايبينج الخمسة: 1. تشوهات المواليد والعيوب الخلقية; 2. الإجهاض المتكرر; 3. العقم عند الزوجين; 4. تحديد الجنس عند غموض الأعضاء التناسلية; 5. تشخيص ومتابعة أورام الدم والسرطان."
  },
  {
    "id": "meq_gov_histo_5",
    "source": "essay_bank_gov_histo",
    "subject": "histology",
    "marks": "Histo Short Answer",
    "q": "Describe the basic steps involved in obtaining a standard karyotype from a peripheral blood sample.",
    "points": [
      "1. Cell Collection: Peripheral blood sample is drawn in a heparinized tube; mononuclear white blood cells (lymphocytes) are separated.",
      "2. Cell Culture & Mitogenic Stimulation: Lymphocytes are incubated in a sterile nutrient medium containing Phytohemagglutinin (PHA) at 37°C for 48-72 hours to stimulate T-cell mitosis.",
      "3. Metaphase Arrest: Colchicine (or colcemid) is added to disrupt the mitotic spindle microtubules, arresting dividing cells at Metaphase (where chromosomes are most condensed).",
      "4. Hypotonic Treatment: Cells are treated with a dilute hypotonic KCl solution, causing them to swell osmotically and spread chromosomes apart without lysing.",
      "5. Fixation & Slide Preparation: Cells are fixed in Carnoy's fixative (methanol/acetic acid 3:1), dropped onto glass slides, and dried.",
      "6. Banding & Microscopy: Slides are stained using G-banding (Trypsin-Giemsa), visualized under high-resolution microscopy, photographed, and arranged into a standardized karyogram."
    ],
    "tip": "خطوات عمل الكاريوتايبينج: 1. جمع الخلايا, 2. تحفيز الانقسام بـ PHA, 3. إيقاف الخلايا عند Metaphase بواسطة Colchicine, 4. نفخ الخلايا بـ Hypotonic solution, 5. التثبيت والصبغ بـ G-banding."
  },
  {
    "id": "meq_gov_histo_6",
    "source": "essay_bank_gov_histo",
    "subject": "histology",
    "marks": "Histo Short Answer",
    "q": "Explain the technique of Fluorescence In Situ Hybridization (FISH) and name two specific clinical applications.",
    "points": [
      "• Technique Description:",
      "  - FISH utilizes single-stranded, fluorescently labeled DNA or RNA probes designed to hybridize with high specificity to complementary target DNA sequences directly on glass slide preparations of chromosomes or interphase nuclei.",
      "  - Can be performed on non-dividing (interphase) cells without prolonged tissue culture, with very high resolution for detecting micro-abnormalities below conventional G-banding resolution (<5 Mb).",
      "• Two Specific Clinical Applications:",
      "  1. Detection of Microdeletion Syndromes: e.g., identifying 22q11.2 microdeletion in DiGeorge syndrome, or 15q11-q13 deletion in Prader-Willi / Angelman syndromes.",
      "  2. Oncology / Cancer Translocations & Gene Amplifications: e.g., detecting the BCR-ABL translocation t(9;22) in Chronic Myeloid Leukemia (CML), or HER2/neu amplification in breast cancer."
    ],
    "tip": "تقنية FISH: استخدام مجسات DNA فلورية ملونة للكشف عن الطفرات الدقيقة. تطبيقاتها: متلازمة DiGeorge (22q11.2 deletion) وسرطان الدم CML (BCR-ABL translocation)."
  },
  {
    "id": "meq_gov_histo_7",
    "source": "essay_bank_gov_histo",
    "subject": "histology",
    "marks": "Histo Short Answer",
    "q": "Interpret the chromosome nomenclature 'Xp22.3'.",
    "points": [
      "• 'X': Refers to the specific human chromosome (Chromosome X, a sex chromosome).",
      "• 'p': Designates the short arm of the chromosome ('petit' arm), as opposed to 'q' (long arm).",
      "• '2': Refers to Region 2 on the short arm (regions are numbered sequentially from centromere outward to telomere).",
      "• '2': Refers to Band 2 within Region 2.",
      "• '.3': Designates Sub-band 3 within Band 22 (separated by a decimal point).",
      "• Summary: 'Xp22.3' describes a precise genomic address: Sub-band 3 of Band 2 in Region 2 on the short arm of the X chromosome."
    ],
    "tip": "تفسير تسمية الكروموسوم Xp22.3: الحرف X (الكروموسوم), الحرف p (الذراع القصير), الرقم 22 (المنطقة 2 والنطاق 2), والرقم .3 (النطاق الفرعي 3)."
  },
];
