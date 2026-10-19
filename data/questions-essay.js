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
  }
];
