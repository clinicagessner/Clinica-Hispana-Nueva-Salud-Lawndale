import type { Service, Promotion, ContactInfo, SiteConfig, SocialLinks, FAQItem } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Clínica Hispana Nueva Salud Lawndale",
  shortName: "Clínica Nueva Salud Lawndale",
  tagline: "Clínica hispana en Houston, TX — Atención médica 100% en español",
  description: "Clínica médica hispana en Houston, TX. Atención profesional en español, sin cita previa, atendemos a pacientes sin seguro. Medicina familiar, exámenes de inmigración, laboratorio y más.",
  // Configurable por entorno (NEXT_PUBLIC_SITE_URL); fallback al dominio de producción.
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.nuevasaludlawndale.com",
  locale: "es-MX",
  logoUrl: "/images/logo.webp",
};

export const CONTACT_INFO: ContactInfo = {
  address: "7040 Lawndale St # B",
  city: "Houston",
  state: "TX",
  zip: "77023",
  phone: "+18325304188",
  // Formato sin prefijo "+1 " para que el swap.js de CallRail (DNI) detecte y
  // reemplace el número visible por uno del Website pool. El "+1" rompía la detección.
  phoneFormatted: "(832) 530-4188",
  // WhatsApp — número EXCLUSIVO para chat. Nunca usarlo en tel:, NAP, schema.org,
  // footer, contacto ni metadata. El teléfono de llamadas sigue siendo `phone`,
  // y el swap de CallRail solo debe actuar sobre ese.
  whatsapp: "13462221006", // E.164 sin "+", listo para wa.me
  whatsappDisplay: "(346) 222-1006",
  email: "nuevasaludlawndale@gmail.com",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 9:00 AM - 9:00 PM",
  // URLs ancladas al Place ID real del GBP (exactas, independientes del nombre del listado).
  // Google Business Profile renombrado a "Clínica Hispana Nueva Salud Lawndale" (2026-08-26); NAP consistente con el sitio.
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=7040+Lawndale+St+%23+B+Houston+TX+77023&query_place_id=ChIJ-RGohMW9QIYRMsoC5OO7apg",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=7040+Lawndale+St+%23+B,+Houston,+TX+77023&t=m&z=17&ie=UTF8&iwloc=&output=embed",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJ-RGohMW9QIYRMsoC5OO7apg",
  placeId: "ChIJ-RGohMW9QIYRMsoC5OO7apg",
  coordinates: {
    lat: 29.7169134,
    lng: -95.2967503,
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/NuevaSaludLawndale",
  instagram: "https://www.instagram.com/nuevasaludlawndale/",
};

// Datos de reviews de respaldo (fallback si Google Places API falla en build).
// Valores reales del GBP a 2026-09-08; el rating/conteo en vivo llega vía GOOGLE_PLACE_ID.
export const GOOGLE_REVIEWS_DATA = {
  totalReviews: 107,
  averageRating: 4.7,
  placeId: "ChIJ-RGohMW9QIYRMsoC5OO7apg",
};

// Bloques de copy reutilizados (marca Nueva Salud Lawndale / East End Houston).
const WHY_ES = `## ¿Por qué elegir Clínica Hispana Nueva Salud Lawndale?

Somos una clínica hispana y latina en Houston: te atendemos 100% en español, sin cita previa y sin necesidad de seguro. Encuentra un centro médico cerca de ti en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.`;

const WHY_EN = `## Why choose Clínica Hispana Nueva Salud Lawndale?

We are a Hispanic and Latino clinic in Houston: we care for you 100% in Spanish, with no appointment needed and no insurance needed. Find a medical center near you at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.`;

const PAYMENT_ES = `## Seguros y formas de pago

No trabajamos con seguros médicos: manejamos precios accesibles y transparentes de pago directo, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.`;

const PAYMENT_EN = `## Insurance and payment

We do not work with health insurance: we offer affordable, transparent self-pay pricing and accept cash and cards. Ask us about the cost of your service before your visit.`;

const AREAS_ES = `## Áreas que servimos

Atendemos a pacientes del East End de Houston y áreas cercanas: Eastwood, Segundo Barrio, Magnolia Park, Forest Hill, Gulfgate, Idylwild y Manchester, y recibimos pacientes de toda el área metropolitana de Houston, TX.`;

const AREAS_EN = `## Areas we serve

We care for patients across the East End of Houston and nearby areas: Eastwood, Segundo Barrio, Magnolia Park, Forest Hill, Gulfgate, Idylwild and Manchester, and welcome patients from across the greater Houston, TX metro area.`;

export const SERVICES: Service[] = [
  {
    slug: "condiciones-cronicas",
    dateModified: "2026-06-10",
    id: "condiciones-cronicas",
    image: "/images/services/condiciones-cronicas.webp",
    shortTitle: "Crónicas",
    order: 1,
    category: "medicina-general",
    icon: "Activity",
    highlighted: true,
    title: "Control de Diabetes, Hipertensión y Colesterol",
    titleEn: "Diabetes, Hypertension & Cholesterol Care",
    shortDescription:
      "Exámenes y control de diabetes, presión alta y dislipidemias (colesterol y triglicéridos), con seguimiento cercano.",
    shortDescriptionEn:
      "Testing and management of diabetes, high blood pressure and dyslipidemia (cholesterol and triglycerides), with close follow-up.",
    description:
      "Control de diabetes, hipertensión y dislipidemias en Houston, TX. Laboratorio y seguimiento en español, sin necesidad de seguro.",
    descriptionEn:
      "Diabetes, hypertension and dyslipidemia management in Houston, TX. Lab work and follow-up in Spanish, no insurance needed.",
    keywords: [
      "control de diabetes houston",
      "doctor diabetes español houston",
      "control de presion alta houston",
      "colesterol alto tratamiento houston",
    ],
    keywordsEn: [
      "diabetes management houston",
      "high blood pressure doctor houston",
      "cholesterol management houston",
      "chronic disease clinic houston",
    ],
    features: [
      "Diagnóstico y monitoreo de laboratorio",
      "Control de glucosa, presión y colesterol",
      "Ajuste de medicamentos",
      "Plan de alimentación y hábitos",
    ],
    featuresEn: [
      "Diagnosis and lab monitoring",
      "Glucose, blood pressure and cholesterol control",
      "Medication adjustment",
      "Nutrition and lifestyle plan",
    ],
    longDescription: `Las enfermedades crónicas como la diabetes, la hipertensión y las dislipidemias (colesterol y triglicéridos altos) se controlan mejor con seguimiento constante. En Clínica Hispana Nueva Salud Lawndale diseñamos un plan claro y te acompañamos paso a paso, en español.

## ¿Qué incluye?

- Evaluación inicial y exámenes de laboratorio
- Monitoreo de glucosa, presión arterial, colesterol y triglicéridos
- Ajuste de medicamentos según tu evolución
- Plan de alimentación y actividad física
- Educación sobre tu condición en tu idioma

## Por qué es importante el control

Una diabetes, presión o colesterol mal controlados dañan con el tiempo el corazón, los riñones, los ojos y los nervios. Un buen seguimiento previene complicaciones y mejora tu calidad de vida.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Chronic conditions like diabetes, hypertension and dyslipidemia (high cholesterol and triglycerides) are best controlled with consistent follow-up. At Clínica Hispana Nueva Salud Lawndale we design a clear plan and support you every step of the way, in Spanish.

## What's included?

- Initial evaluation and lab work
- Monitoring of glucose, blood pressure, cholesterol and triglycerides
- Medication adjustment based on your progress
- Nutrition and physical-activity plan
- Education about your condition in your language

## Why control matters

Poorly managed diabetes, blood pressure or cholesterol damage the heart, kidneys, eyes and nerves over time. Good follow-up prevents complications and improves your quality of life.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "tiroides",
    dateModified: "2026-09-08",
    id: "tiroides",
    image: "/images/services/tiroides.webp",
    shortTitle: "Tiroides",
    order: 2,
    category: "medicina-general",
    icon: "Thermometer",
    title: "Exámenes y Tratamiento de la Tiroides",
    titleEn: "Thyroid Testing & Treatment in Houston | Walk-In Clinic",
    shortDescription:
      "Diagnóstico y tratamiento de enfermedades de la tiroides (hipotiroidismo e hipertiroidismo) con seguimiento en español.",
    shortDescriptionEn:
      "Diagnosis and treatment of thyroid conditions (hypothyroidism and hyperthyroidism) with follow-up in Spanish.",
    description:
      "Exámenes y tratamiento de la tiroides en Houston, TX. Pruebas de laboratorio y control en español, sin necesidad de seguro.",
    descriptionEn:
      "Thyroid testing and treatment in Houston, TX. Lab tests and follow-up in Spanish, no insurance needed.",
    keywords: [
      "tiroides houston",
      "examen de tiroides houston",
      "hipotiroidismo tratamiento houston",
      "doctor tiroides español houston",
    ],
    keywordsEn: [
      "thyroid testing houston",
      "thyroid doctor houston",
      "hypothyroidism treatment houston",
      "thyroid clinic houston",
    ],
    features: [
      "Pruebas de función tiroidea (TSH, T3, T4)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Tratamiento y ajuste de medicamentos",
      "Seguimiento en español",
    ],
    featuresEn: [
      "Thyroid function tests (TSH, T3, T4)",
      "Diagnosis of hypo- and hyperthyroidism",
      "Treatment and medication adjustment",
      "Follow-up in Spanish",
    ],
    longDescription: `La tiroides regula tu energía, tu peso y tu ánimo. Cuando funciona de más o de menos aparecen síntomas que afectan tu día a día. En Clínica Hispana Nueva Salud Lawndale evaluamos tu tiroides con análisis de laboratorio y te damos el tratamiento adecuado.

## ¿Qué incluye?

- Evaluación de síntomas
- Pruebas de función tiroidea (TSH, T3, T4)
- Diagnóstico de hipotiroidismo o hipertiroidismo
- Inicio y ajuste del tratamiento
- Seguimiento periódico

## Síntomas frecuentes

Cansancio, cambios de peso sin explicación, caída del cabello, frío o calor excesivo, nerviosismo o tristeza. Si los notas, una prueba sencilla puede dar la respuesta.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `The thyroid regulates your energy, weight and mood. When it works too much or too little, symptoms appear that affect your daily life. At Clínica Hispana Nueva Salud Lawndale we evaluate your thyroid with lab work and provide the right treatment.

## What's included?

- Symptom evaluation
- Thyroid function tests (TSH, T3, T4)
- Diagnosis of hypothyroidism or hyperthyroidism
- Treatment start and adjustment
- Periodic follow-up

## Common symptoms

Fatigue, unexplained weight changes, hair loss, feeling too cold or too hot, nervousness or sadness. If you notice them, a simple test can give the answer.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "alergias",
    dateModified: "2026-09-08",
    id: "alergias",
    image: "/images/services/alergias.webp",
    shortTitle: "Alergias",
    order: 3,
    category: "medicina-general",
    icon: "Leaf",
    title: "Exámenes y Tratamiento de Alergias",
    titleEn: "Allergy Testing & Treatment in Houston | Walk-In Clinic",
    shortDescription:
      "Evaluación y tratamiento de alergias estacionales, respiratorias y de la piel, con atención en español.",
    shortDescriptionEn:
      "Evaluation and treatment of seasonal, respiratory and skin allergies, with care in Spanish.",
    description:
      "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, sin necesidad de seguro.",
    descriptionEn:
      "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, no insurance needed.",
    keywords: [
      "alergias houston",
      "tratamiento de alergias houston",
      "doctor de alergias español houston",
      "examen de alergias houston",
    ],
    keywordsEn: [
      "allergy treatment houston",
      "allergy testing houston",
      "allergy doctor houston",
      "allergy clinic houston",
    ],
    features: [
      "Evaluación de síntomas y desencadenantes",
      "Tratamiento de alergias respiratorias y de piel",
      "Manejo de rinitis y congestión",
      "Atención en español",
    ],
    featuresEn: [
      "Evaluation of symptoms and triggers",
      "Treatment of respiratory and skin allergies",
      "Management of rhinitis and congestion",
      "Care in Spanish",
    ],
    longDescription: `Las alergias pueden afectar tu respiración, tu piel y tu descanso. En Clínica Hispana Nueva Salud Lawndale identificamos qué las provoca y te ayudamos a controlarlas para que recuperes tu bienestar.

## ¿Qué incluye?

- Evaluación de síntomas y posibles desencadenantes
- Tratamiento de alergias estacionales y respiratorias
- Manejo de rinitis, estornudos y congestión
- Atención de alergias en la piel (ronchas, comezón)
- Recomendaciones para evitar las crisis

## Cuándo consultar

Estornudos frecuentes, ojos llorosos, comezón, ronchas o congestión que no mejora son señales de alergia. Un tratamiento adecuado marca la diferencia.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Allergies can affect your breathing, your skin and your rest. At Clínica Hispana Nueva Salud Lawndale we identify what triggers them and help you control them so you feel well again.

## What's included?

- Evaluation of symptoms and possible triggers
- Treatment of seasonal and respiratory allergies
- Management of rhinitis, sneezing and congestion
- Care for skin allergies (hives, itching)
- Recommendations to avoid flare-ups

## When to seek care

Frequent sneezing, watery eyes, itching, hives or congestion that won't improve are signs of allergy. The right treatment makes the difference.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "enfermedades-respiratorias",
    dateModified: "2026-06-11",
    id: "enfermedades-respiratorias",
    image: "/images/services/enfermedades-respiratorias.webp",
    shortTitle: "Respiratorias",
    order: 4,
    category: "medicina-general",
    icon: "Wind",
    title: "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    titleEn: "Flu & COVID Testing and Respiratory Illness Care",
    shortDescription:
      "Pruebas de detección de influenza (flu) y COVID, y tratamiento de gripe, tos y enfermedades respiratorias.",
    shortDescriptionEn:
      "Influenza (flu) and COVID detection testing, plus treatment of flu, cough and respiratory illnesses.",
    description:
      "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    descriptionEn:
      "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    keywords: [
      "prueba de covid houston",
      "prueba de flu houston",
      "tratamiento gripe houston",
      "enfermedades respiratorias houston",
    ],
    keywordsEn: [
      "covid test houston",
      "flu test houston",
      "flu treatment houston",
      "respiratory illness houston",
    ],
    features: [
      "Prueba rápida de flu y COVID",
      "Diagnóstico el mismo día",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "Rapid flu and COVID testing",
      "Same-day diagnosis",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish",
    ],
    longDescription: `Cuando empiezan la fiebre, la tos o el malestar, saber si es flu o COVID ayuda a tratarte a tiempo. En Clínica Hispana Nueva Salud Lawndale hacemos pruebas rápidas y te damos tratamiento el mismo día, sin cita.

## ¿Qué incluye?

- Prueba rápida de influenza (flu)
- Prueba de COVID-19
- Evaluación de síntomas respiratorios
- Tratamiento de gripe, tos, bronquitis e infecciones de garganta
- Indicaciones de recuperación y cuidado

## No dejes que avance

Si la fiebre es alta, la tos no mejora o cuesta respirar, es mejor evaluarte. Un diagnóstico oportuno acorta la enfermedad y evita complicaciones.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `When fever, cough or discomfort begin, knowing whether it's flu or COVID helps treat you in time. At Clínica Hispana Nueva Salud Lawndale we run rapid tests and provide same-day treatment, no appointment needed.

## What's included?

- Rapid influenza (flu) test
- COVID-19 test
- Respiratory symptom evaluation
- Treatment of flu, cough, bronchitis and throat infections
- Recovery and care instructions

## Don't let it progress

If the fever is high, the cough won't improve or breathing is hard, it's best to get evaluated. Timely diagnosis shortens the illness and prevents complications.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-fisico-escolar",
    dateModified: "2026-06-11",
    id: "examen-fisico-escolar",
    image: "/images/services/examen-fisico-escolar.webp",
    shortTitle: "Físico Escolar",
    order: 5,
    category: "examenes",
    icon: "ClipboardList",
    title: "Chequeos Físicos Escolares y Deportivos",
    titleEn: "School & Sports Physical Exams",
    shortDescription:
      "Exámenes físicos para la escuela y los deportes, rápidos y con los formularios completados.",
    shortDescriptionEn:
      "Physical exams for school and sports, fast and with the forms completed.",
    description:
      "Chequeos físicos escolares y deportivos en Houston, TX. Rápidos, en español y sin necesidad de seguro.",
    descriptionEn:
      "School and sports physical exams in Houston, TX. Fast, in Spanish, no insurance needed.",
    keywords: [
      "examen fisico escolar houston",
      "physical para la escuela houston",
      "examen deportivo houston",
      "chequeo escolar houston",
    ],
    keywordsEn: [
      "school physical houston",
      "sports physical houston",
      "school physical exam houston",
      "kids physical houston",
    ],
    features: [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Formularios escolares y deportivos llenados",
      "Atención en español",
    ],
    featuresEn: [
      "Complete physical exam",
      "Vital-signs check",
      "School and sports forms completed",
      "Care in Spanish",
    ],
    longDescription: `Antes de inscribirse en la escuela o practicar un deporte, los niños y jóvenes necesitan un chequeo físico. En Clínica Hispana Nueva Salud Lawndale lo hacemos de forma rápida y completa, con todos los formularios listos.

## ¿Qué incluye?

- Examen físico general
- Revisión de signos vitales (peso, talla, presión)
- Evaluación de visión y audición
- Llenado de los formularios requeridos
- Recomendaciones de salud

## Para la escuela y el deporte

Cumple los requisitos de inscripción escolar y la evaluación para practicar deportes con seguridad. Trae el formulario de tu escuela o equipo y lo completamos.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Before enrolling in school or playing a sport, children and teens need a physical exam. At Clínica Hispana Nueva Salud Lawndale we do it quickly and thoroughly, with all the forms ready.

## What's included?

- General physical exam
- Vital-signs check (weight, height, blood pressure)
- Vision and hearing screening
- Completion of required forms
- Health recommendations

## For school and sports

Meet school enrollment requirements and the evaluation to play sports safely. Bring your school or team form and we'll complete it.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "ginecologia",
    dateModified: "2026-09-09",
    id: "ginecologia",
    image: "/images/services/ginecologia.webp",
    shortTitle: "Ginecología",
    order: 6,
    category: "salud-mujer",
    icon: "Flower2",
    highlighted: true,
    title: "Ginecología en Houston: Papanicolaou y Cultivos",
    titleEn: "Gynecology in Houston: Pap Smear & Cultures",
    shortDescription:
      "Papanicolaou, cultivos vaginales y tratamiento de infecciones vaginales, con privacidad y en español.",
    shortDescriptionEn:
      "Pap smear, vaginal cultures and treatment of vaginal infections, with privacy and in Spanish.",
    description:
      "Ginecología en Houston, TX: papanicolaou, cultivos vaginales y tratamiento de infecciones en una clínica hispana cerca de ti. En español, sin seguro.",
    descriptionEn:
      "Gynecology in Houston, TX: Pap smear, vaginal cultures and infection treatment at a Hispanic clinic near you. In Spanish, no insurance needed.",
    keywords: [
      "ginecologia houston",
      "ginecologo houston español",
      "papanicolaou houston",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston",
      "ginecologia cerca de mi houston",
    ],
    keywordsEn: [
      "gynecology houston",
      "gynecologist houston spanish",
      "pap smear houston",
      "vaginal culture houston",
      "vaginal infection treatment houston",
      "gynecology near me houston",
    ],
    features: [
      "Papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Atención privada en español",
    ],
    featuresEn: [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Private care in Spanish",
    ],
    longDescription: `**Atención ginecológica sin cita, en español y con privacidad: papanicolaou, cultivos vaginales y tratamiento de infecciones el mismo día.** En Clínica Hispana Nueva Salud Lawndale te atiende [confirmar: médica o médico] de lunes a domingo de 9 AM a 9 PM, sin necesidad de seguro.

## ¿Cada cuánto debo hacerme el papanicolaou?

Según las guías de prevención de Estados Unidos, de los 21 a los 29 años se recomienda un papanicolaou cada 3 años. De los 30 a los 65 años, cada 3 años, o cada 5 años si se combina con la prueba de VPH (virus del papiloma humano). Si tuviste un resultado anormal antes, el intervalo puede ser más corto. El papanicolaou detecta cambios en el cuello del útero años antes de que se conviertan en cáncer.

## ¿Qué incluye la consulta ginecológica?

- Papanicolaou (citología cervical) y, si corresponde, prueba de VPH
- Examen pélvico y de mamas
- Cultivo vaginal para identificar hongos, bacterias o tricomonas
- Tratamiento de infecciones vaginales y urinarias el mismo día
- Prueba de embarazo y orientación sobre anticonceptivos
- Referencia a ginecólogo especialista cuando el caso lo requiere

## ¿Cuándo llegan los resultados?

El cultivo vaginal tarda [confirmar] días y el papanicolaou entre [confirmar] días. Te llamamos cuando están listos y, si hay que tratar algo, te damos la receta sin una segunda consulta.

## ¿Qué síntomas justifican un cultivo vaginal?

Comezón, ardor, flujo con color o cantidad distinta a lo habitual, mal olor o dolor durante las relaciones. Cada infección tiene un tratamiento diferente: un hongo no se cura con el antibiótico de una vaginosis. El cultivo evita adivinar y repetir tratamientos que no funcionan.

## ¿Cómo prepararme para la cita?

- Evita duchas vaginales, óvulos y relaciones sexuales 48 horas antes del papanicolaou.
- Si es posible, ven cuando no tengas la menstruación.
- Trae tu identificación, la fecha de tu última regla y la lista de medicamentos.
- Si tomas anticonceptivos, trae la caja o el nombre.

## ¿Cuánto cuesta la consulta de ginecología?

La consulta cuesta $[confirmar]; el papanicolaou y el cultivo tienen un costo adicional que te informamos antes de realizarlos. Consulta nuestras promociones vigentes de salud íntima femenina y chequeo completo de la mujer.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**Walk-in gynecology care, in Spanish or English and with privacy: Pap smear, vaginal cultures and same-day treatment of infections.** At Clínica Hispana Nueva Salud Lawndale you are seen by [confirm: female or male physician] Monday to Sunday from 9 AM to 9 PM, no insurance needed.

## How often should I get a Pap smear?

Under U.S. preventive guidelines, women aged 21 to 29 should have a Pap smear every 3 years. From 30 to 65, every 3 years, or every 5 years when combined with an HPV (human papillomavirus) test. If you had an abnormal result before, the interval may be shorter. A Pap smear detects changes in the cervix years before they can become cancer.

## What does the gynecology visit include?

- Pap smear (cervical cytology) and, when appropriate, HPV test
- Pelvic and breast exam
- Vaginal culture to identify yeast, bacteria or trichomonas
- Same-day treatment of vaginal and urinary infections
- Pregnancy test and contraception counseling
- Referral to a gynecology specialist when the case requires it

## When do results come back?

The vaginal culture takes [confirm] days and the Pap smear [confirm] days. We call you when they are ready and, if something needs treatment, we send the prescription without a second visit.

## Which symptoms call for a vaginal culture?

Itching, burning, discharge that differs in color or amount from your usual, odor, or pain during sex. Each infection has a different treatment: yeast is not cured by the antibiotic used for bacterial vaginosis. The culture avoids guessing and repeating treatments that don't work.

## How do I prepare for the visit?

- Avoid douching, vaginal suppositories and sex for 48 hours before a Pap smear.
- If possible, come when you are not on your period.
- Bring your ID, the date of your last period and your list of medications.
- If you use birth control, bring the box or the name.

## How much does a gynecology visit cost?

The visit costs $[confirm]; the Pap smear and culture have an additional cost that we tell you before performing them. See our current women's intimate health and complete women's checkup promotions.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "prueba-embarazo",
    dateModified: "2026-06-11",
    id: "prueba-embarazo",
    image: "/images/services/prueba-embarazo.webp",
    shortTitle: "Embarazo",
    order: 7,
    category: "salud-mujer",
    icon: "Baby",
    title: "Examen y Diagnóstico de Embarazo",
    titleEn: "Pregnancy Testing & Confirmation",
    shortDescription:
      "Pruebas de embarazo confiables y orientación sobre tus siguientes pasos, en español.",
    shortDescriptionEn:
      "Reliable pregnancy tests and guidance on your next steps, in Spanish.",
    description:
      "Examen y diagnóstico de embarazo en Houston, TX. Pruebas confiables y orientación en español, sin necesidad de seguro.",
    descriptionEn:
      "Pregnancy testing and confirmation in Houston, TX. Reliable tests and guidance in Spanish, no insurance needed.",
    keywords: [
      "prueba de embarazo houston",
      "examen de embarazo houston",
      "confirmar embarazo houston",
      "test de embarazo español houston",
    ],
    keywordsEn: [
      "pregnancy test houston",
      "pregnancy confirmation houston",
      "confirm pregnancy houston",
      "pregnancy testing houston",
    ],
    features: [
      "Prueba de embarazo confiable",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español",
    ],
    featuresEn: [
      "Reliable pregnancy test",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish",
    ],
    longDescription: `Si crees que podrías estar embarazada, una prueba confiable te da tranquilidad y claridad. En Clínica Hispana Nueva Salud Lawndale realizamos pruebas de embarazo y te orientamos sobre lo que sigue, en español y sin juicios.

## ¿Qué incluye?

- Prueba de embarazo (orina o sangre)
- Confirmación médica del resultado
- Orientación sobre tus siguientes pasos
- Información sobre control prenatal y referencias

## Con confianza y respeto

Te explicamos el resultado con claridad y te acompañamos en la decisión que tomes, siempre con respeto y privacidad.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `If you think you might be pregnant, a reliable test gives you peace of mind and clarity. At Clínica Hispana Nueva Salud Lawndale we perform pregnancy tests and guide you on what comes next, in Spanish and without judgment.

## What's included?

- Pregnancy test (urine or blood)
- Medical confirmation of the result
- Guidance on your next steps
- Information on prenatal care and referrals

## With trust and respect

We explain the result clearly and support you in whatever decision you make, always with respect and privacy.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "anticonceptivos",
    dateModified: "2026-09-08",
    id: "anticonceptivos",
    image: "/images/services/anticonceptivos.webp",
    shortTitle: "Anticonceptivos",
    order: 8,
    category: "salud-mujer",
    icon: "Tablets",
    title: "Anticonceptivos en Houston: Pastillas, Inyección e Implante",
    titleEn: "Birth Control in Houston: Pills, Shot & Implant | Walk-In",
    shortDescription:
      "Orientación y métodos anticonceptivos (pastillas, inyección y más) para decidir con información, en español.",
    shortDescriptionEn:
      "Guidance and contraceptive methods (pills, injection and more) to decide with clear information, in Spanish.",
    description:
      "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, sin necesidad de seguro.",
    descriptionEn:
      "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, no insurance needed.",
    keywords: [
      "anticonceptivos houston",
      "metodos anticonceptivos houston",
      "inyeccion anticonceptiva houston",
      "pastillas anticonceptivas houston",
    ],
    keywordsEn: [
      "birth control houston",
      "contraception clinic houston",
      "birth control shot houston",
      "birth control pills houston",
    ],
    features: [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español",
    ],
    featuresEn: [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish",
    ],
    longDescription: `Decidir cuándo y cómo formar tu familia es tu derecho. En Clínica Hispana Nueva Salud Lawndale te damos información clara y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti.

## ¿Qué incluye?

- Consulta de orientación personalizada
- Información sobre los distintos métodos
- Pastillas anticonceptivas e inyección
- Inicio y seguimiento del método elegido
- Resolución de dudas y efectos secundarios

## Una decisión informada

Cada cuerpo y cada vida es distinta. Te ayudamos a comparar opciones según tu salud, tus planes y tu comodidad para que tomes la mejor decisión.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Deciding when and how to build your family is your right. At Clínica Hispana Nueva Salud Lawndale we give you clear, judgment-free information so you can choose the contraceptive method that best fits you.

## What's included?

- Personalized guidance visit
- Information about the different methods
- Birth control pills and injection
- Starting and following up on the chosen method
- Answers to questions and side effects

## An informed decision

Every body and every life is different. We help you compare options based on your health, your plans and your comfort so you make the best decision.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "extraccion-implantes",
    dateModified: "2026-09-08",
    id: "extraccion-implantes",
    image: "/images/services/extraccion-implantes.webp",
    shortTitle: "Implantes",
    order: 9,
    category: "salud-mujer",
    icon: "Bandage",
    title: "Extracción de Implantes Subdérmicos",
    titleEn: "Contraceptive Implant Removal in Houston | Walk-In Clinic",
    shortDescription:
      "Retiro seguro de implantes anticonceptivos subdérmicos del brazo, por personal capacitado.",
    shortDescriptionEn:
      "Safe removal of subdermal arm contraceptive implants by trained staff.",
    description:
      "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Sin necesidad de seguro.",
    descriptionEn:
      "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. No insurance needed.",
    keywords: [
      "extraccion de implante subdermico houston",
      "quitar implante del brazo houston",
      "retiro de implante anticonceptivo houston",
      "remover implante houston",
    ],
    keywordsEn: [
      "subdermal implant removal houston",
      "arm implant removal houston",
      "contraceptive implant removal houston",
      "birth control implant removal houston",
    ],
    features: [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado",
    ],
    featuresEn: [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained",
    ],
    longDescription: `Si llegó el momento de retirar tu implante subdérmico —porque caducó o porque deseas cambiar de método— en Clínica Hispana Nueva Salud Lawndale lo hacemos de forma segura, rápida y con cuidado.

## ¿Qué incluye?

- Evaluación y localización del implante
- Extracción ambulatoria con anestesia local
- Indicaciones claras de cuidado posterior
- Orientación sobre tus próximos pasos de planificación

## Un procedimiento sencillo

El retiro suele tomar pocos minutos y se realiza con una pequeña incisión. Te explicamos cada paso en español para que estés tranquila.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `If it's time to remove your subdermal implant —because it expired or you want to switch methods— at Clínica Hispana Nueva Salud Lawndale we do it safely, quickly and with care.

## What's included?

- Evaluation and location of the implant
- Outpatient removal with local anesthesia
- Clear after-care instructions
- Guidance on your next family-planning steps

## A simple procedure

Removal usually takes only a few minutes through a small incision. We explain every step in Spanish so you feel at ease.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "salud-hombre",
    dateModified: "2026-09-08",
    id: "salud-hombre",
    image: "/images/services/salud-hombre.webp",
    shortTitle: "Salud del Hombre",
    order: 10,
    category: "medicina-general",
    icon: "Mars",
    highlighted: true,
    title: "Exámenes del Hombre en Houston: PSA y Perfil Hormonal",
    titleEn: "Men's Health Exams in Houston: PSA & Hormone Panel",
    shortDescription:
      "Exámenes de salud del hombre: antígeno prostático (PSA), testosterona y chequeo general, en español.",
    shortDescriptionEn:
      "Men's health exams: prostate antigen (PSA), testosterone and general checkup, in Spanish.",
    description:
      "Exámenes del hombre en Houston, TX: PSA y perfil hormonal. Laboratorio y atención en español, sin necesidad de seguro.",
    descriptionEn:
      "Men's health exams in Houston, TX: PSA and hormone panel. Lab work and care in Spanish, no insurance needed.",
    keywords: [
      "examen del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "examen de testosterona houston",
    ],
    keywordsEn: [
      "mens health houston",
      "psa test houston",
      "prostate exam houston",
      "testosterone test houston",
    ],
    features: [
      "Antígeno prostático (PSA)",
      "Nivel de testosterona",
      "Chequeo general del hombre",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "Prostate antigen (PSA)",
      "Testosterone level",
      "General men's checkup",
      "Results explained in Spanish",
    ],
    longDescription: `La salud del hombre muchas veces se posterga. En Clínica Hispana Nueva Salud Lawndale facilitamos los exámenes que ayudan a detectar a tiempo cambios importantes, con resultados explicados en español.

## ¿Qué incluye?

- Examen de antígeno prostático (PSA)
- Medición del nivel de testosterona
- Chequeo general y de signos vitales
- Evaluación de síntomas urinarios o de energía
- Referencia a especialista si se requiere

## Por qué es importante

El PSA ayuda a vigilar la salud de la próstata y la testosterona influye en la energía, el ánimo y la salud general. Un control sencillo te da tranquilidad.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Men's health is often postponed. At Clínica Hispana Nueva Salud Lawndale we make it easy to get the exams that help catch important changes early, with results explained in Spanish.

## What's included?

- Prostate antigen (PSA) test
- Testosterone level measurement
- General checkup and vital signs
- Evaluation of urinary or energy symptoms
- Referral to a specialist if needed

## Why it matters

PSA helps monitor prostate health, and testosterone influences energy, mood and overall health. A simple check gives you peace of mind.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examenes-sangre",
    dateModified: "2026-09-08",
    id: "examenes-sangre",
    image: "/images/services/examenes-sangre.webp",
    shortTitle: "Lab. Sangre",
    order: 11,
    category: "laboratorio",
    icon: "FlaskConical",
    highlighted: true,
    title: "Análisis de Sangre en Houston | Laboratorio",
    titleEn: "Blood Tests in Houston | Affordable Lab in Spanish",
    shortDescription:
      "Análisis de sangre completos con resultados rápidos e interpretación en español, sin cita previa.",
    shortDescriptionEn:
      "Complete blood work with fast results and results explained in Spanish, no appointment needed.",
    description:
      "Análisis de sangre en Houston, TX: biometría, química, glucosa, colesterol y más. Resultados en español, sin necesidad de seguro.",
    descriptionEn:
      "Blood tests in Houston, TX: CBC, chemistry, glucose, cholesterol and more. Results in Spanish, no insurance needed.",
    keywords: [
      "examenes de sangre houston",
      "analisis de sangre houston",
      "laboratorio houston",
      "laboratorio cerca de mi houston",
    ],
    keywordsEn: [
      "blood test houston",
      "blood work houston",
      "lab near me houston",
      "clinical lab houston",
    ],
    features: [
      "Biometría y química sanguínea",
      "Glucosa, colesterol y triglicéridos",
      "Pruebas de tiroides, hígado y riñón",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "CBC and blood chemistry",
      "Glucose, cholesterol and triglycerides",
      "Thyroid, liver and kidney tests",
      "Results explained in Spanish",
    ],
    longDescription: `Un buen diagnóstico empieza con un buen laboratorio. En Clínica Hispana Nueva Salud Lawndale tomamos tus muestras en el momento y te explicamos los resultados en español, sin tecnicismos.

## ¿Qué incluye?

- Biometría hemática completa (conteo de células)
- Química sanguínea (glucosa, colesterol, triglicéridos)
- Pruebas de tiroides, hígado y riñón
- Paneles para chequeo general o seguimiento
- Resultados rápidos en la mayoría de los casos

## Para qué sirven

Los análisis ayudan a detectar problemas antes de que den síntomas, dar seguimiento a una condición crónica o completar un examen de trabajo o escuela.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `A good diagnosis starts with a good lab. At Clínica Hispana Nueva Salud Lawndale we draw your samples on the spot and explain your results in Spanish, without the jargon.

## What's included?

- Complete blood count (CBC)
- Blood chemistry (glucose, cholesterol, triglycerides)
- Thyroid, liver and kidney tests
- Panels for general checkups or follow-up
- Fast results in most cases

## Why they matter

Blood tests help detect problems before symptoms appear, follow up on a chronic condition or complete a work or school exam.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "infecciones-urinarias",
    dateModified: "2026-09-09",
    id: "infecciones-urinarias",
    image: "/images/services/infecciones-urinarias.webp",
    shortTitle: "Orina e ITU",
    order: 12,
    category: "tratamientos",
    icon: "Droplet",
    title: "Infecciones Urinarias en Houston: Examen y Tratamiento",
    titleEn: "Urinary Infections in Houston: Testing & Treatment",
    shortDescription:
      "Examen de orina y tratamiento de infecciones urinarias el mismo día, en español.",
    shortDescriptionEn:
      "Urinalysis and same-day urinary infection treatment, in Spanish.",
    description:
      "Tratamiento de infecciones urinarias y examen de orina el mismo día en una clínica hispana de Houston, TX. En español, sin necesidad de seguro.",
    descriptionEn:
      "Same-day urinary infection treatment and urinalysis at a Hispanic clinic in Houston, TX. In Spanish, no insurance needed.",
    keywords: [
      "infecciones urinarias houston",
      "examen de orina houston",
      "infeccion urinaria houston",
      "tratamiento infeccion urinaria houston",
      "doctor infeccion de orina houston",
      "clinica para infeccion urinaria cerca de mi",
    ],
    keywordsEn: [
      "urinary infections houston",
      "urinalysis houston",
      "urinary tract infection houston",
      "uti treatment houston",
      "uti doctor houston",
      "uti clinic near me houston",
    ],
    features: [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish",
    ],
    longDescription: `**Si tienes ardor al orinar o ganas constantes de ir al baño, te hacemos el examen de orina en el momento y, si hay infección, sales con tratamiento el mismo día.** En Clínica Hispana Nueva Salud Lawndale atendemos infecciones urinarias sin cita, de lunes a domingo de 9 AM a 9 PM, en español y sin seguro.

## ¿Cómo sé si tengo una infección urinaria?

Los síntomas más frecuentes son ardor o dolor al orinar, necesidad de orinar muchas veces y en poca cantidad, orina turbia, con sangre o con mal olor, y presión en la parte baja del abdomen. Si además tienes fiebre, escalofríos, náuseas o dolor en la espalda baja a un lado, la infección puede haber llegado al riñón: ven el mismo día.

## ¿Qué incluye la visita?

1. **Examen general de orina** con tira reactiva y microscopio: el resultado está en minutos.
2. **Evaluación médica** de tus síntomas, tu historial y tus medicamentos.
3. **Tratamiento el mismo día:** receta de antibiótico según el tipo de infección y tu historial, más medicamento para el ardor si lo necesitas.
4. **Urocultivo** cuando la infección se repite, no mejora con el tratamiento, o si estás embarazada, eres hombre o tienes diabetes. El resultado tarda [confirmar] días e indica qué antibiótico funciona mejor.

## ¿En cuánto tiempo mejora?

Con el antibiótico correcto, el ardor suele mejorar en 24 a 48 horas. Es importante terminar todo el tratamiento aunque ya te sientas bien; dejarlo a medias es la causa más común de que la infección regrese. Si a las 72 horas no mejoras, vuelve para revisar el cultivo y cambiar el antibiótico.

## ¿Por qué me repiten las infecciones urinarias?

Dos o más infecciones en seis meses se consideran recurrentes. Las causas más comunes son no tomar suficiente agua, aguantar la orina, la actividad sexual, la menopausia, la diabetes mal controlada y cálculos en el riñón. En la consulta buscamos la causa y, si hace falta, pedimos análisis de sangre o un ultrasonido.

## ¿Cómo prevenirlas?

- Toma entre 6 y 8 vasos de agua al día y no aguantes las ganas de orinar.
- Orina después de las relaciones sexuales.
- Límpiate de adelante hacia atrás.
- Evita duchas vaginales y jabones perfumados en la zona íntima.
- Si tienes diabetes, mantén la glucosa controlada.

## ¿Cuánto cuesta?

La consulta con examen de orina cuesta $[confirmar]. El urocultivo tiene un costo adicional que te informamos antes de tomarlo. Pago en efectivo o tarjeta.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**If you have burning when you urinate or a constant urge to go, we run the urine test on the spot and, if there is an infection, you leave with treatment the same day.** At Clínica Hispana Nueva Salud Lawndale we treat urinary tract infections without an appointment, Monday to Sunday from 9 AM to 9 PM, in Spanish or English and without insurance.

## How do I know if I have a UTI?

The most common symptoms are burning or pain when urinating, needing to urinate often and in small amounts, cloudy urine, blood in the urine or a strong odor, and pressure in the lower abdomen. If you also have fever, chills, nausea or pain in your lower back on one side, the infection may have reached the kidney: come in the same day.

## What does the visit include?

1. **Urinalysis** with dipstick and microscope: results in minutes.
2. **Medical evaluation** of your symptoms, history and medications.
3. **Same-day treatment:** an antibiotic prescription based on the type of infection and your history, plus medication for the burning if you need it.
4. **Urine culture** when the infection keeps coming back, does not improve with treatment, or if you are pregnant, male or diabetic. The result takes [confirm] days and shows which antibiotic works best.

## How soon will I feel better?

With the right antibiotic, burning usually improves within 24 to 48 hours. It is important to finish the full course even if you feel fine; stopping early is the most common reason infections come back. If you are not better after 72 hours, come back so we can check the culture and change the antibiotic.

## Why do my UTIs keep coming back?

Two or more infections in six months are considered recurrent. The most common causes are not drinking enough water, holding urine, sexual activity, menopause, poorly controlled diabetes and kidney stones. During the visit we look for the cause and, if needed, order blood tests or an ultrasound.

## How can I prevent them?

- Drink 6 to 8 glasses of water a day and don't hold your urine.
- Urinate after sex.
- Wipe from front to back.
- Avoid douching and scented soaps in the intimate area.
- If you have diabetes, keep your glucose under control.

## How much does it cost?

The visit with urinalysis costs $[confirm]. The urine culture has an additional cost that we tell you before collecting it. Cash and cards accepted.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-heces",
    dateModified: "2026-09-08",
    id: "examen-heces",
    image: "/images/services/examen-heces.webp",
    shortTitle: "Heces",
    order: 13,
    category: "laboratorio",
    icon: "TestTubes",
    title: "Examen de Heces en Houston | Parásitos y Sangre Oculta",
    titleEn: "Stool Test in Houston | Parasites & Occult Blood, Walk-In",
    shortDescription:
      "Análisis de heces fecales para detectar infecciones y problemas digestivos, en español.",
    shortDescriptionEn:
      "Stool analysis to detect infections and digestive problems, in Spanish.",
    description:
      "Exámenes de heces fecales en Houston, TX. Detección de parásitos e infecciones, en español, sin necesidad de seguro.",
    descriptionEn:
      "Stool tests in Houston, TX. Detection of parasites and infections, in Spanish, no insurance needed.",
    keywords: [
      "examen de heces houston",
      "analisis de heces fecales houston",
      "examen de parasitos houston",
      "laboratorio heces houston",
    ],
    keywordsEn: [
      "stool test houston",
      "stool analysis houston",
      "parasite test houston",
      "stool lab houston",
    ],
    features: [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish",
    ],
    longDescription: `Los problemas digestivos a veces tienen una causa que solo un análisis de heces puede revelar. En Clínica Hispana Nueva Salud Lawndale realizamos exámenes de heces fecales para encontrar el origen y darte el tratamiento correcto.

## ¿Qué incluye?

- Análisis general de heces fecales
- Detección de parásitos
- Identificación de infecciones intestinales
- Evaluación de sangre oculta cuando se requiere
- Resultados explicados en español

## Cuándo es útil

Diarrea persistente, dolor abdominal, gases, cambios en las evacuaciones o pérdida de peso sin explicación. El examen ayuda a un diagnóstico preciso.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Digestive problems sometimes have a cause that only a stool test can reveal. At Clínica Hispana Nueva Salud Lawndale we perform stool tests to find the source and give you the right treatment.

## What's included?

- General stool analysis
- Parasite detection
- Identification of intestinal infections
- Occult-blood evaluation when needed
- Results explained in Spanish

## When it helps

Persistent diarrhea, abdominal pain, gas, changes in bowel movements or unexplained weight loss. The test helps with an accurate diagnosis.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "prueba-strep",
    dateModified: "2026-09-08",
    id: "prueba-strep",
    image: "/images/services/prueba-strep.webp",
    shortTitle: "Strep",
    order: 14,
    category: "laboratorio",
    icon: "TestTube",
    title: "Prueba de Estreptococo (Strep Test)",
    titleEn: "Rapid Strep Test in Houston | Walk-In, Results in Minutes",
    shortDescription:
      "Prueba rápida de estreptococo (strep) para el dolor de garganta, con resultado el mismo día.",
    shortDescriptionEn:
      "Rapid strep test for sore throat, with same-day result.",
    description:
      "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, sin necesidad de seguro.",
    descriptionEn:
      "Strep test in Houston, TX. Fast result and treatment in Spanish, no insurance needed.",
    keywords: [
      "prueba de estreptococo houston",
      "strep test houston",
      "prueba de garganta houston",
      "dolor de garganta doctor houston",
    ],
    keywordsEn: [
      "strep test houston",
      "rapid strep test houston",
      "sore throat test houston",
      "strep throat doctor houston",
    ],
    features: [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish",
    ],
    longDescription: `No todo dolor de garganta es igual: la faringitis por estreptococo necesita tratamiento específico. En Clínica Hispana Nueva Salud Lawndale hacemos la prueba rápida de strep y te damos el resultado y el tratamiento el mismo día.

## ¿Qué incluye?

- Prueba rápida de estreptococo (hisopado de garganta)
- Resultado en pocos minutos
- Evaluación del dolor de garganta
- Tratamiento adecuado si el resultado es positivo
- Indicaciones de recuperación

## Cuándo hacerla

Dolor de garganta fuerte, fiebre, dificultad para tragar o placas blancas en las amígdalas, sobre todo en niños. La prueba evita tratamientos innecesarios.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Not every sore throat is the same: strep throat needs specific treatment. At Clínica Hispana Nueva Salud Lawndale we run the rapid strep test and give you the result and treatment the same day.

## What's included?

- Rapid strep test (throat swab)
- Result in minutes
- Sore-throat evaluation
- Appropriate treatment if the result is positive
- Recovery instructions

## When to get it

Severe sore throat, fever, trouble swallowing or white patches on the tonsils, especially in children. The test avoids unnecessary treatments.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "prueba-tuberculosis",
    dateModified: "2026-09-08",
    id: "prueba-tuberculosis",
    image: "/images/services/prueba-tuberculosis.webp",
    shortTitle: "Tuberculosis",
    order: 15,
    category: "laboratorio",
    icon: "ShieldPlus",
    title: "Examen de Tuberculosis (TB) en Houston | Prueba PPD Sin Cita",
    titleEn: "TB Test in Houston (PPD Skin Test) | Walk-In, No Insurance",
    shortDescription:
      "Prueba de tuberculosis (PPD) para trabajo, escuela o trámites, con lectura en español.",
    shortDescriptionEn:
      "Tuberculosis (PPD) test for work, school or paperwork, with reading in Spanish.",
    description:
      "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, sin necesidad de seguro.",
    descriptionEn:
      "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, no insurance needed.",
    keywords: [
      "examen de tuberculosis houston",
      "prueba ppd houston",
      "prueba de tb houston",
      "tb test español houston",
    ],
    keywordsEn: [
      "tuberculosis test houston",
      "ppd test houston",
      "tb test houston",
      "tb skin test houston",
    ],
    features: [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español",
    ],
    featuresEn: [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish",
    ],
    longDescription: `Muchos trabajos y escuelas piden una prueba de tuberculosis al día. En Clínica Hispana Nueva Salud Lawndale la aplicamos y leemos el resultado, con todo explicado en español.

## ¿Qué incluye?

- Prueba cutánea de tuberculosis (PPD)
- Cita de lectura del resultado (48–72 horas después)
- Documentación del resultado para tu trámite
- Orientación si el resultado requiere seguimiento

## Para qué la piden

Empleos de salud, escuelas, trámites y voluntariado suelen requerir una prueba de TB vigente. Te ayudamos a cumplir el requisito sin complicaciones.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Many jobs and schools require an up-to-date tuberculosis test. At Clínica Hispana Nueva Salud Lawndale we administer it and read the result, with everything explained in Spanish.

## What's included?

- Tuberculosis skin test (PPD)
- Result-reading appointment (48–72 hours later)
- Documentation of the result for your paperwork
- Guidance if the result needs follow-up

## Why it's required

Healthcare jobs, schools, paperwork and volunteering often require a current TB test. We help you meet the requirement without hassle.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "enfermedades-transmision-sexual",
    dateModified: "2026-06-11",
    id: "enfermedades-transmision-sexual",
    image: "/images/services/enfermedades-transmision-sexual.webp",
    shortTitle: "STD",
    order: 16,
    category: "laboratorio",
    icon: "ShieldCheck",
    title: "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    titleEn: "Sexually Transmitted Disease (STD) Testing",
    shortDescription:
      "Pruebas de enfermedades de transmisión sexual confidenciales y sin juicios, con tratamiento.",
    shortDescriptionEn:
      "Confidential, judgment-free sexually transmitted disease testing, with treatment.",
    description:
      "Pruebas de ETS/STD confidenciales en Houston, TX. Resultados y tratamiento en español, sin necesidad de seguro.",
    descriptionEn:
      "Confidential STD testing in Houston, TX. Results and treatment in Spanish, no insurance needed.",
    keywords: [
      "prueba std houston",
      "examen de transmision sexual houston",
      "prueba ets confidencial houston",
      "clinica std español houston",
    ],
    keywordsEn: [
      "std testing houston",
      "std test near me houston",
      "confidential std clinic houston",
      "sti testing houston",
    ],
    features: [
      "Pruebas confidenciales y sin juicios",
      "Evaluación de síntomas y riesgo",
      "Tratamiento disponible",
      "Atención en español",
    ],
    featuresEn: [
      "Confidential, judgment-free testing",
      "Symptom and risk assessment",
      "Treatment available",
      "Care in Spanish",
    ],
    longDescription: `Cuidar tu salud sexual es un acto de responsabilidad. En Clínica Hispana Nueva Salud Lawndale ofrecemos pruebas de enfermedades de transmisión sexual de forma confidencial y respetuosa, con tratamiento cuando es necesario.

## ¿Qué incluye?

- Evaluación de síntomas y factores de riesgo
- Pruebas de las infecciones más comunes
- Análisis de laboratorio
- Tratamiento y orientación si el resultado es positivo
- Total confidencialidad

## Cuándo hacerte la prueba

Si tuviste contacto de riesgo, tienes síntomas o simplemente quieres estar tranquilo, hacerte la prueba es la mejor decisión. La detección temprana facilita el tratamiento.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Taking care of your sexual health is an act of responsibility. At Clínica Hispana Nueva Salud Lawndale we offer confidential, respectful testing for sexually transmitted diseases, with treatment when needed.

## What's included?

- Symptom and risk-factor assessment
- Testing for the most common infections
- Laboratory analysis
- Treatment and guidance if the result is positive
- Complete confidentiality

## When to get tested

If you had a risky encounter, have symptoms or simply want peace of mind, getting tested is the best decision. Early detection makes treatment easier.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-alcohol-drogas",
    dateModified: "2026-09-08",
    id: "examen-alcohol-drogas",
    image: "/images/services/examen-alcohol-drogas.webp",
    shortTitle: "Alcohol y Drogas",
    order: 17,
    category: "examenes",
    icon: "Beaker",
    title: "Examen de Alcohol y Drogas en Houston | Laboral y DOT",
    titleEn: "Drug & Alcohol Testing in Houston | Employment & DOT",
    shortDescription:
      "Pruebas de alcohol y drogas para trabajo y trámites, rápidas y con documentación.",
    shortDescriptionEn:
      "Alcohol and drug testing for work and paperwork, fast and with documentation.",
    description:
      "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, sin necesidad de seguro.",
    descriptionEn:
      "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, no insurance needed.",
    keywords: [
      "examen de drogas houston",
      "prueba de alcohol y drogas houston",
      "drug test houston español",
      "examen de drogas para trabajo houston",
    ],
    keywordsEn: [
      "drug test houston",
      "alcohol and drug test houston",
      "employment drug test houston",
      "drug screening houston",
    ],
    features: [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado",
    ],
    featuresEn: [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation",
    ],
    longDescription: `Muchos empleos y trámites requieren una prueba de alcohol y drogas. En Clínica Hispana Nueva Salud Lawndale la realizamos de forma rápida y te entregamos la documentación que necesitas.

## ¿Qué incluye?

- Prueba de detección de drogas
- Prueba de alcohol
- Proceso ágil y discreto
- Documentación del resultado para tu empleador o trámite

## Para trabajo y trámites

Atendemos solicitudes de empleo, requisitos laborales y trámites personales. Te explicamos el proceso en español para que llegues tranquilo.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Many jobs and processes require an alcohol and drug test. At Clínica Hispana Nueva Salud Lawndale we perform it quickly and give you the documentation you need.

## What's included?

- Drug screening test
- Alcohol test
- Quick, discreet process
- Result documentation for your employer or paperwork

## For work and paperwork

We handle job applications, workplace requirements and personal paperwork. We explain the process in Spanish so you arrive with peace of mind.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "electrocardiograma",
    dateModified: "2026-09-08",
    id: "electrocardiograma",
    image: "/images/services/electrocardiograma.webp",
    shortTitle: "EKG",
    order: 18,
    category: "laboratorio",
    icon: "HeartPulse",
    title: "Electrocardiograma (EKG) en Houston | Sin Cita, en Español",
    titleEn: "EKG Test in Houston | Walk-In, No Insurance Needed",
    shortDescription:
      "Electrocardiograma (EKG) rápido y sin dolor para evaluar la salud de tu corazón, en español.",
    shortDescriptionEn:
      "Fast, painless electrocardiogram (EKG) to evaluate your heart health, in Spanish.",
    description:
      "Electrocardiograma EKG en Houston, TX, rápido y sin dolor. Resultados y atención en español, sin necesidad de seguro.",
    descriptionEn:
      "Electrocardiogram EKG in Houston, TX, fast and painless. Results and care in Spanish, no insurance needed.",
    keywords: [
      "electrocardiograma houston",
      "ekg houston español",
      "examen del corazon houston",
      "ecg houston",
    ],
    keywordsEn: [
      "electrocardiogram houston",
      "ekg houston",
      "heart test houston",
      "ecg houston spanish",
    ],
    features: [
      "Estudio rápido y sin dolor",
      "Evaluación del ritmo cardiaco",
      "Útil para exámenes médicos",
      "Resultados en español",
    ],
    featuresEn: [
      "Fast and painless test",
      "Heart-rhythm evaluation",
      "Useful for medical exams",
      "Results in Spanish",
    ],
    longDescription: `El electrocardiograma (EKG) registra la actividad eléctrica de tu corazón en pocos minutos y sin ninguna molestia. En Clínica Hispana Nueva Salud Lawndale lo realizamos como parte de chequeos y exámenes médicos.

## ¿Qué incluye?

- Estudio del ritmo y la actividad del corazón
- Interpretación por personal médico
- Útil para exámenes de trabajo, deporte o cirugía
- Resultados explicados en español

## Cuándo se recomienda

Si tienes palpitaciones, presión alta, dolor en el pecho o necesitas un examen médico completo, el EKG aporta información valiosa sobre tu corazón.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `The electrocardiogram (EKG) records your heart's electrical activity in just a few minutes with no discomfort. At Clínica Hispana Nueva Salud Lawndale we perform it as part of checkups and medical exams.

## What's included?

- Study of your heart's rhythm and activity
- Interpretation by medical staff
- Useful for work, sports or surgery exams
- Results explained in Spanish

## When it's recommended

If you have palpitations, high blood pressure, chest discomfort or need a complete medical exam, the EKG provides valuable information about your heart.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "ultrasonido",
    dateModified: "2026-09-08",
    id: "ultrasonido",
    image: "/images/services/ultrasonido.webp",
    shortTitle: "Ultrasonido",
    order: 19,
    category: "laboratorio",
    icon: "ScanLine",
    title: "Ultrasonido en Houston | Ecografía Abdominal y de Embarazo",
    titleEn: "Ultrasound in Houston | Abdominal & Pregnancy Sonogram",
    shortDescription:
      "Ultrasonidos diagnósticos y de embarazo con equipo moderno y atención en español.",
    shortDescriptionEn:
      "Diagnostic and pregnancy ultrasounds with modern equipment and care in Spanish.",
    description:
      "Ultrasonido y ecografía en Houston, TX: abdominal, pélvico y de embarazo. En español, sin necesidad de seguro.",
    descriptionEn:
      "Ultrasound and sonography in Houston, TX: abdominal, pelvic and pregnancy. In Spanish, no insurance needed.",
    keywords: [
      "ultrasonido houston",
      "ecografia houston español",
      "ultrasonido de embarazo houston",
      "sonograma houston",
    ],
    keywordsEn: [
      "ultrasound houston",
      "sonogram houston",
      "pregnancy ultrasound houston",
      "abdominal ultrasound houston",
    ],
    features: [
      "Ultrasonido abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Equipo moderno",
      "Atención en español",
    ],
    featuresEn: [
      "Abdominal and pelvic ultrasound",
      "Pregnancy ultrasound",
      "Modern equipment",
      "Care in Spanish",
    ],
    longDescription: `El ultrasonido es una herramienta segura y sin dolor que nos permite ver el interior de tu cuerpo para diagnosticar con precisión. En Clínica Hispana Nueva Salud Lawndale contamos con equipo moderno y personal que te explica todo en español.

## ¿Qué incluye?

- Ultrasonido abdominal (hígado, vesícula, riñones)
- Ultrasonido pélvico
- Ultrasonido de embarazo (control y seguimiento)
- Evaluación de tiroides y tejidos blandos

## Sin radiación y sin dolor

A diferencia de los rayos X, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo. El estudio es rápido y no requiere preparación complicada.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Ultrasound is a safe, painless tool that lets us see inside your body for an accurate diagnosis. At Clínica Hispana Nueva Salud Lawndale we have modern equipment and staff who explain everything in Spanish.

## What's included?

- Abdominal ultrasound (liver, gallbladder, kidneys)
- Pelvic ultrasound
- Pregnancy ultrasound (monitoring and follow-up)
- Thyroid and soft-tissue evaluation

## No radiation, no pain

Unlike X-rays, ultrasound uses no radiation, so it's safe even during pregnancy. The study is quick and requires little preparation.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-dot",
    dateModified: "2026-09-09",
    id: "examen-dot",
    image: "/images/services/examen-dot.webp",
    shortTitle: "Examen DOT",
    order: 20,
    category: "examenes",
    icon: "Truck",
    highlighted: true,
    title: "Examen Físico DOT en Houston | Licencia CDL",
    titleEn: "DOT Physical Exam in Houston | CDL License",
    shortDescription:
      "Examen físico DOT para conductores comerciales (CDL), con certificado el mismo día.",
    shortDescriptionEn:
      "DOT physical exam for commercial drivers (CDL), with same-day certificate.",
    description:
      "Examen físico DOT en Houston, TX para licencia CDL, certificado el mismo día y en español. Sin necesidad de seguro.",
    descriptionEn:
      "DOT physical exam in Houston, TX for CDL license, same-day certificate, in Spanish. No insurance needed.",
    keywords: [
      "examen dot houston",
      "examen fisico dot houston español",
      "examen cdl houston",
      "dot physical houston español",
    ],
    keywordsEn: [
      "dot physical houston",
      "dot exam houston",
      "cdl physical houston",
      "dot medical exam houston",
    ],
    features: [
      "Certificado DOT el mismo día",
      "Para licencia CDL",
      "Proceso rápido",
      "Atención en español",
    ],
    featuresEn: [
      "Same-day DOT certificate",
      "For CDL license",
      "Fast process",
      "Care in Spanish",
    ],
    longDescription: `**El examen físico DOT es el chequeo médico que exige la FMCSA (Administración Federal de Seguridad de Autotransportes) para conducir un vehículo comercial en Estados Unidos.** En Clínica Hispana Nueva Salud Lawndale lo realiza un examinador médico certificado e inscrito en el Registro Nacional de la FMCSA (NRCME) [confirmar nombre y número de registro]. Sales con tu certificado médico (formulario MCSA-5876) el mismo día, sin cita y en español.

## ¿Quién necesita el examen DOT?

Lo necesitas si manejas un vehículo de más de 10,001 libras en comercio interestatal, un autobús de 16 o más pasajeros, o transportas materiales peligrosos (HAZMAT). Aplica para sacar la licencia CDL por primera vez y para cada renovación del certificado médico. Muchas empresas también lo piden para conductores intraestatales en Texas.

## ¿Qué revisa el examen DOT?

1. **Visión:** al menos 20/40 en cada ojo, con o sin lentes, y campo visual de 70 grados por ojo.
2. **Audición:** escuchar un susurro a 5 pies de distancia, con o sin audífono.
3. **Presión arterial y pulso:** con menos de 140/90 el certificado dura 2 años; entre 140/90 y 159/99 dura 1 año; de 160/100 a 179/109 se emite un certificado temporal de 3 meses mientras se controla.
4. **Examen de orina:** glucosa, proteína y sangre. **No es prueba de drogas**; esa la pide tu empleador por separado y la hacemos en la misma visita si la necesitas.
5. **Examen físico e historial:** corazón, pulmones, abdomen, hernias, reflejos, columna, medicamentos actuales y cirugías previas.

El examen completo toma entre 30 y 45 minutos.

## ¿Qué debo traer?

- Identificación con foto y tu licencia de conducir actual
- Lentes o audífonos, si los usas
- Lista de medicamentos con dosis
- Si tienes diabetes, presión alta, apnea del sueño o problemas del corazón: tus últimos resultados o una carta de tu médico. Así evitas una segunda visita.

## ¿Cuánto cuesta el examen DOT en Houston?

El examen DOT en nuestra clínica cuesta $[confirmar precio] e incluye el examen completo, el análisis de orina y el certificado MCSA-5876. Se paga en efectivo o tarjeta. Muchas empresas de transporte reembolsan el costo.

## ¿Cuánto dura el certificado médico DOT?

Hasta 2 años. Con presión alta controlada o diabetes sin insulina suele ser de 1 año. Renueva con al menos 2 semanas de anticipación para no quedarte sin poder trabajar. Desde el 23 de junio de 2025 los examinadores certificados envían el resultado por vía electrónica al Registro Nacional de la FMCSA, que lo transmite al Texas DPS, así que en la mayoría de los casos ya no tienes que entregar la tarjeta en papel.

## ¿Qué pasa si no paso el examen?

Presión muy alta, visión por debajo de 20/40 o diabetes con insulina no significan un "no" definitivo. Te explicamos qué documento o tratamiento necesitas y cuándo volver. Si usas insulina, la FMCSA acepta el formulario MCSA-5870 llenado por tu médico tratante, y con él puedes certificarte por hasta 1 año.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**The DOT physical is the medical exam required by the FMCSA (Federal Motor Carrier Safety Administration) to drive a commercial vehicle in the United States.** At Clínica Hispana Nueva Salud Lawndale it is performed by a certified medical examiner listed on the FMCSA National Registry (NRCME) [confirm name and registry number]. You leave with your Medical Examiner's Certificate (form MCSA-5876) the same day, no appointment needed, in Spanish or English.

## Who needs a DOT physical?

You need one if you drive a vehicle over 10,001 lb in interstate commerce, a bus with 16 or more passengers, or you haul hazardous materials (HAZMAT). It applies when you get your CDL for the first time and every time your medical certificate is renewed. Many companies also require it for intrastate drivers in Texas.

## What does the DOT exam check?

1. **Vision:** at least 20/40 in each eye, with or without glasses, and a 70-degree field of vision per eye.
2. **Hearing:** hear a forced whisper from 5 feet away, with or without a hearing aid.
3. **Blood pressure and pulse:** under 140/90 gives a 2-year certificate; 140/90 to 159/99 gives 1 year; 160/100 to 179/109 gives a one-time 3-month certificate while it is brought under control.
4. **Urinalysis:** glucose, protein and blood. **It is not a drug test**; your employer orders that separately, and we can do it during the same visit if you need it.
5. **Physical exam and history:** heart, lungs, abdomen, hernias, reflexes, spine, current medications and past surgeries.

The full exam takes 30 to 45 minutes.

## What should I bring?

- Photo ID and your current driver's license
- Glasses or hearing aids, if you use them
- List of medications with doses
- If you have diabetes, high blood pressure, sleep apnea or heart problems: your latest results or a letter from your doctor. This avoids a second visit.

## How much does a DOT physical cost in Houston?

The DOT physical at our clinic costs $[confirm price] and includes the full exam, the urinalysis and the MCSA-5876 certificate. Cash and cards accepted. Many trucking companies reimburse the cost.

## How long is the DOT medical certificate valid?

Up to 2 years. With controlled high blood pressure or non-insulin diabetes it is usually 1 year. Renew at least 2 weeks before it expires so you don't lose work days. Since June 23, 2025, certified examiners submit results electronically to the FMCSA National Registry, which forwards them to Texas DPS, so in most cases you no longer need to hand in the paper card.

## What if I don't pass?

Very high blood pressure, vision below 20/40 or insulin-treated diabetes do not mean a permanent "no". We explain which document or treatment you need and when to come back. If you use insulin, the FMCSA accepts form MCSA-5870 completed by your treating doctor, and with it you can be certified for up to 1 year.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examenes-inmigracion",
    dateModified: "2026-06-10",
    id: "examenes-inmigracion",
    image: "/images/services/examenes-inmigracion.webp",
    shortTitle: "Inmigración",
    order: 21,
    category: "examenes",
    icon: "ClipboardCheck",
    title: "Examen Médico de Inmigración I-693",
    titleEn: "Immigration Medical Exam I-693",
    shortDescription:
      "Examen médico de inmigración con médico autorizado por USCIS y el Formulario I-693 sellado.",
    shortDescriptionEn:
      "Immigration medical exam with a USCIS-authorized physician and the sealed Form I-693.",
    description:
      "Examen médico de inmigración I-693 en Houston, TX con médico autorizado por USCIS. Vacunas y formulario sellado.",
    descriptionEn:
      "I-693 immigration medical exam in Houston, TX with a USCIS-authorized physician. Vaccines and sealed form.",
    keywords: [
      "examen de inmigracion houston",
      "examen medico i-693 houston",
      "civil surgeon houston español",
      "medico autorizado uscis houston",
    ],
    keywordsEn: [
      "immigration medical exam houston",
      "i-693 exam houston",
      "civil surgeon houston",
      "uscis authorized doctor houston",
    ],
    features: [
      "Médico autorizado (civil surgeon)",
      "Formulario I-693 sellado",
      "Vacunas requeridas disponibles",
      "Proceso explicado en español",
    ],
    featuresEn: [
      "Authorized civil surgeon",
      "Sealed Form I-693",
      "Required vaccines available",
      "Process explained in Spanish",
    ],
    longDescription: `El examen médico de inmigración (Formulario I-693) es un requisito para el ajuste de estatus. En Clínica Hispana Nueva Salud Lawndale lo realizamos con un médico autorizado por USCIS (civil surgeon) y te entregamos el formulario sellado listo para enviar.

## ¿Qué incluye?

- Revisión de historial médico y de vacunas
- Examen físico completo
- Pruebas requeridas por USCIS (incluida la de tuberculosis)
- Aplicación de las vacunas que te falten
- Formulario I-693 completado y sellado en sobre oficial

## Qué traer a tu cita

Identificación con foto, registro de vacunas si lo tienes y cualquier documento médico relevante. Te explicamos todo el proceso en español para que llegues tranquilo.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `The immigration medical exam (Form I-693) is required for adjustment of status. At Clínica Hispana Nueva Salud Lawndale we perform it with a USCIS-authorized physician (civil surgeon) and give you the sealed form ready to submit.

## What's included?

- Review of medical and vaccination history
- Complete physical exam
- USCIS-required tests (including tuberculosis)
- Administration of any missing vaccines
- Form I-693 completed and sealed in the official envelope

## What to bring

Photo ID, your vaccination record if you have it and any relevant medical documents. We explain the entire process in Spanish so you arrive with peace of mind.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "vacunas",
    dateModified: "2026-06-11",
    id: "vacunas",
    image: "/images/services/vacunas.webp",
    shortTitle: "Vacunas",
    order: 22,
    category: "tratamientos",
    icon: "Syringe",
    title: "Vacunas contra la Influenza y Toxoide Tetánico",
    titleEn: "Flu and Tetanus (Tdap) Vaccines",
    shortDescription:
      "Vacuna contra la influenza (flu) y toxoide tetánico, aplicadas por personal médico, en español.",
    shortDescriptionEn:
      "Influenza (flu) vaccine and tetanus toxoid, administered by medical staff, in Spanish.",
    description:
      "Vacunas de flu y toxoide tetánico en Houston, TX. Aplicación por personal médico en español, sin necesidad de seguro.",
    descriptionEn:
      "Flu and tetanus vaccines in Houston, TX. Administered by medical staff in Spanish, no insurance needed.",
    keywords: [
      "vacuna de la flu houston",
      "vacuna contra la influenza houston",
      "toxoide tetanico houston",
      "vacuna del tetano houston",
    ],
    keywordsEn: [
      "flu shot houston",
      "flu vaccine houston",
      "tetanus shot houston",
      "tdap vaccine houston",
    ],
    features: [
      "Vacuna contra la influenza (flu)",
      "Toxoide tetánico",
      "Aplicación por personal médico",
      "Atención en español",
    ],
    featuresEn: [
      "Influenza (flu) vaccine",
      "Tetanus toxoid",
      "Administered by medical staff",
      "Care in Spanish",
    ],
    longDescription: `Las vacunas son una de las formas más sencillas de cuidar tu salud. En Clínica Hispana Nueva Salud Lawndale aplicamos la vacuna contra la influenza y el toxoide tetánico de forma segura y rápida.

## ¿Qué incluye?

- Vacuna anual contra la influenza (flu)
- Toxoide tetánico (refuerzo del tétanos)
- Aplicación por personal médico
- Orientación sobre cuándo aplicar refuerzos
- Atención en español

## Por qué vacunarte

La vacuna de la flu reduce el riesgo de enfermarte de gravedad en temporada de gripe, y el toxoide tetánico te protege ante cortes y heridas. Pregúntanos cuál te conviene.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Vaccines are one of the simplest ways to protect your health. At Clínica Hispana Nueva Salud Lawndale we administer the influenza vaccine and tetanus toxoid safely and quickly.

## What's included?

- Annual influenza (flu) vaccine
- Tetanus toxoid (tetanus booster)
- Administered by medical staff
- Guidance on when boosters are due
- Care in Spanish

## Why get vaccinated

The flu vaccine lowers your risk of getting seriously ill during flu season, and the tetanus toxoid protects you from cuts and wounds. Ask us which one you need.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "sueros-vitaminados",
    dateModified: "2026-09-09",
    id: "sueros-vitaminados",
    image: "/images/services/sueros-vitaminados.webp",
    shortTitle: "Sueros IV",
    order: 23,
    category: "tratamientos",
    icon: "Droplets",
    title: "Sueros Vitaminados en Houston Sin Cita | Terapia IV",
    titleEn: "Vitamin IV Drips in Houston | Walk-In Hydration Therapy",
    shortDescription:
      "Sueros vitaminados intravenosos para hidratación y energía, aplicados por personal médico.",
    shortDescriptionEn:
      "Intravenous vitamin drips for hydration and energy, administered by medical staff.",
    description:
      "Sueros vitaminados e hidratación IV en Houston East End. Sin cita, sin seguro, aplicados por personal médico en español. Lunes a domingo 9 AM–9 PM.",
    descriptionEn:
      "Vitamin IV drips and hydration therapy in Houston East End. Walk-in, no insurance needed, given by medical staff. Open Mon–Sun 9 AM–9 PM.",
    keywords: [
      "sueros vitaminados houston",
      "terapia iv houston",
      "suero de vitaminas houston",
      "hidratacion intravenosa houston",
    ],
    keywordsEn: [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv hydration houston",
      "vitamin drip houston",
    ],
    features: [
      "Hidratación intravenosa",
      "Vitaminas y minerales",
      "Aplicación por personal médico",
      "Atención en español",
    ],
    featuresEn: [
      "Intravenous hydration",
      "Vitamins and minerals",
      "Administered by medical staff",
      "Care in Spanish",
    ],
    longDescription: `**Un suero vitaminado es una infusión intravenosa de suero fisiológico con vitaminas y minerales, aplicada por personal médico en 30 a 60 minutos.** En Clínica Hispana Nueva Salud Lawndale lo recibes sin cita, todos los días de 9 AM a 9 PM, después de una evaluación breve que confirma que es adecuado para ti.

## ¿Qué sueros ofrecemos?

- **Hidratación:** suero fisiológico o solución con electrolitos para deshidratación por calor, vómito, diarrea o exceso de alcohol.
- **Energía y defensas:** vitamina C, complejo B (B1, B6, B12) y zinc, para cansancio prolongado o después de una gripe.
- **Recuperación muscular:** magnesio y complejo B, para calambres y fatiga tras trabajo físico intenso.
- **Personalizado:** el médico ajusta la fórmula según tus síntomas y tus análisis. [confirmar lista exacta de sueros y componentes]

Cada aplicación incluye evaluación médica, toma de signos vitales, la infusión y monitoreo durante todo el proceso.

## ¿Cuánto cuesta un suero vitaminado en Houston?

Los sueros cuestan desde $[confirmar precio] según la fórmula. El precio incluye la evaluación, el material y la aplicación. Pago en efectivo o tarjeta; no necesitas seguro médico.

## ¿Cuándo puede ayudar un suero?

Puede ayudar cuando llevas días con cansancio, después de una deshidratación fuerte, en periodos de mucho trabajo físico o tras una enfermedad que te dejó débil. Un suero no sustituye una consulta: si el cansancio dura más de dos semanas, pedimos análisis de sangre para buscar la causa, por ejemplo anemia, tiroides o diabetes.

## ¿Quién no debe recibir un suero vitaminado?

No lo aplicamos, o lo ajustamos, si tienes insuficiencia cardiaca, enfermedad renal, presión muy alta sin control, embarazo o alergia a alguno de los componentes. Por eso la evaluación previa es obligatoria y forma parte del servicio.

## ¿Cómo es la visita?

1. Llegas sin cita y te registras con una identificación.
2. El médico revisa tus síntomas, tus medicamentos y tus signos vitales.
3. Se coloca una vía en el brazo y la infusión dura entre 30 y 60 minutos en un sillón cómodo.
4. Sales el mismo día y puedes conducir; te recomendamos tomar agua el resto del día.

Los efectos secundarios más comunes son leves: sabor metálico, sensación de calor o una pequeña molestia en el sitio de la aguja.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**A vitamin IV drip is an intravenous infusion of saline with vitamins and minerals, given by medical staff over 30 to 60 minutes.** At Clínica Hispana Nueva Salud Lawndale you can get one without an appointment, every day from 9 AM to 9 PM, after a brief evaluation that confirms it is right for you.

## Which IV drips do we offer?

- **Hydration:** saline or electrolyte solution for dehydration from heat, vomiting, diarrhea or too much alcohol.
- **Energy and immunity:** vitamin C, B complex (B1, B6, B12) and zinc, for lasting fatigue or after the flu.
- **Muscle recovery:** magnesium and B complex, for cramps and fatigue after heavy physical work.
- **Custom:** the doctor adjusts the formula to your symptoms and lab results. [confirm exact list of drips and ingredients]

Every session includes a medical evaluation, vital signs, the infusion and monitoring throughout.

## How much does a vitamin IV cost in Houston?

Drips start at $[confirm price] depending on the formula. The price includes the evaluation, supplies and administration. Cash and cards accepted; no insurance needed.

## When can an IV drip help?

It can help when you have felt tired for days, after severe dehydration, during periods of hard physical work or after an illness that left you weak. A drip does not replace a visit: if fatigue lasts more than two weeks, we order blood tests to look for the cause, such as anemia, thyroid problems or diabetes.

## Who should not get a vitamin IV?

We do not give it, or we adjust it, if you have heart failure, kidney disease, uncontrolled high blood pressure, pregnancy or an allergy to any ingredient. That is why the evaluation is required and included in the service.

## What is the visit like?

1. Walk in without an appointment and check in with an ID.
2. The doctor reviews your symptoms, medications and vital signs.
3. An IV line is placed in your arm and the infusion takes 30 to 60 minutes in a comfortable chair.
4. You leave the same day and can drive; we recommend drinking water for the rest of the day.

The most common side effects are mild: a metallic taste, a feeling of warmth or slight discomfort at the needle site.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "suturas-heridas",
    dateModified: "2026-09-08",
    id: "suturas-heridas",
    image: "/images/services/suturas-heridas.webp",
    shortTitle: "Suturas",
    order: 24,
    category: "tratamientos",
    icon: "Scissors",
    title: "Suturas de Heridas en Houston | Puntos Sin Cita, Sin Seguro",
    titleEn: "Stitches for Cuts in Houston | Walk-In Wound Suturing",
    shortDescription:
      "Suturas (puntos) para cerrar heridas de forma segura, sin cita previa y en español.",
    shortDescriptionEn:
      "Sutures (stitches) to close wounds safely, walk-ins welcome and in Spanish.",
    description:
      "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, sin necesidad de seguro.",
    descriptionEn:
      "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, no insurance needed.",
    keywords: [
      "suturas houston",
      "puntos para herida houston",
      "cerrar herida houston",
      "doctor para cortadas houston",
    ],
    keywordsEn: [
      "wound suturing houston",
      "stitches houston",
      "laceration repair houston",
      "cut treatment houston",
    ],
    features: [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions",
    ],
    longDescription: `Una herida que no cierra bien puede infectarse o dejar cicatriz. En Clínica Hispana Nueva Salud Lawndale cerramos cortes y heridas con suturas de forma segura, sin cita y con atención en español.

## ¿Qué incluye?

- Evaluación y limpieza de la herida
- Cierre con suturas (puntos)
- Aplicación de anestesia local
- Indicaciones de cuidado y signos de alarma
- Retiro de puntos cuando corresponde

## Cuándo acudir

Cortes profundos, heridas que sangran o no cierran solas, o que tienen bordes abiertos. Atender pronto reduce el riesgo de infección y mejora la cicatrización.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `A wound that doesn't close well can get infected or leave a scar. At Clínica Hispana Nueva Salud Lawndale we close cuts and wounds with sutures safely, no appointment needed and with care in Spanish.

## What's included?

- Wound evaluation and cleaning
- Closure with sutures (stitches)
- Local anesthesia
- Care instructions and warning signs
- Suture removal when appropriate

## When to come in

Deep cuts, wounds that bleed or won't close on their own, or that have open edges. Treating them promptly reduces the risk of infection and improves healing.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "curacion-heridas",
    dateModified: "2026-09-08",
    id: "curacion-heridas",
    image: "/images/services/curacion-heridas.webp",
    shortTitle: "Curación",
    order: 25,
    category: "tratamientos",
    icon: "Bandage",
    title: "Curación de Heridas en Houston | Limpieza y Vendaje Sin Cita",
    titleEn: "Wound Care in Houston | Cleaning & Dressing, Walk-In Clinic",
    shortDescription:
      "Limpieza, curación y cambio de vendajes de heridas para una buena cicatrización, en español.",
    shortDescriptionEn:
      "Cleaning, wound care and dressing changes for proper healing, in Spanish.",
    description:
      "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, sin necesidad de seguro.",
    descriptionEn:
      "Wound care in Houston, TX. Cleaning and dressings in Spanish, no insurance needed.",
    keywords: [
      "curacion de heridas houston",
      "cura de heridas houston",
      "cambio de vendaje houston",
      "limpieza de herida houston",
    ],
    keywordsEn: [
      "wound care houston",
      "wound dressing houston",
      "dressing change houston",
      "wound cleaning houston",
    ],
    features: [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español",
    ],
    featuresEn: [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish",
    ],
    longDescription: `Una buena curación evita infecciones y ayuda a que la herida sane más rápido. En Clínica Hispana Nueva Salud Lawndale limpiamos, curamos y vendamos tus heridas, y te seguimos hasta que cicatricen.

## ¿Qué incluye?

- Limpieza y desinfección de la herida
- Aplicación de apósitos y vendajes
- Cambio periódico de vendajes
- Vigilancia de signos de infección
- Indicaciones de cuidado en casa

## Para todo tipo de heridas

Heridas postoperatorias, úlceras, quemaduras leves o heridas que tardan en sanar. Te ayudamos con curaciones regulares para una mejor recuperación.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Good wound care prevents infections and helps the wound heal faster. At Clínica Hispana Nueva Salud Lawndale we clean, treat and dress your wounds, and follow you until they heal.

## What's included?

- Wound cleaning and disinfection
- Application of dressings and bandages
- Periodic dressing changes
- Monitoring for signs of infection
- Home-care instructions

## For all kinds of wounds

Post-surgical wounds, ulcers, minor burns or wounds that are slow to heal. We help with regular dressing changes for a better recovery.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "cirugias-menores",
    dateModified: "2026-09-08",
    id: "cirugias-menores",
    image: "/images/services/cirugias-menores.webp",
    shortTitle: "Cirugías Menores",
    order: 26,
    category: "tratamientos",
    icon: "Stethoscope",
    title: "Cirugías Menores en Houston | Quistes, Lipomas y Lunares",
    titleEn: "Minor Surgery in Houston | Cyst, Lipoma & Mole Removal",
    shortDescription:
      "Procedimientos de cirugía menor ambulatoria (lunares, quistes, lipomas) con anestesia local.",
    shortDescriptionEn:
      "Minor outpatient surgical procedures (moles, cysts, lipomas) with local anesthesia.",
    description:
      "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, sin necesidad de seguro.",
    descriptionEn:
      "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, no insurance needed.",
    keywords: [
      "cirugia menor houston",
      "quitar lunar houston",
      "extraccion de quiste houston",
      "cirugia ambulatoria houston",
    ],
    keywordsEn: [
      "minor surgery houston",
      "mole removal houston",
      "cyst removal houston",
      "lipoma removal houston",
    ],
    features: [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado",
    ],
    featuresEn: [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained",
    ],
    longDescription: `Muchos problemas de piel y tejidos blandos se resuelven con un procedimiento sencillo. En Clínica Hispana Nueva Salud Lawndale realizamos cirugías menores ambulatorias con anestesia local, en un mismo día.

## ¿Qué incluye?

- Evaluación del lunar, quiste o lesión
- Procedimiento ambulatorio con anestesia local
- Extracción de lunares, quistes y lipomas
- Indicaciones claras de cuidado posterior
- Retiro de puntos cuando corresponde

## Rápido y seguro

La mayoría de estos procedimientos toman poco tiempo y no requieren hospitalización. Te explicamos cada paso en español para que estés tranquilo.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Many skin and soft-tissue problems are solved with a simple procedure. At Clínica Hispana Nueva Salud Lawndale we perform minor outpatient surgery with local anesthesia, in a single day.

## What's included?

- Evaluation of the mole, cyst or lesion
- Outpatient procedure with local anesthesia
- Removal of moles, cysts and lipomas
- Clear after-care instructions
- Suture removal when appropriate

## Fast and safe

Most of these procedures take little time and don't require hospitalization. We explain every step in Spanish so you feel at ease.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "drenaje-abscesos",
    dateModified: "2026-09-08",
    id: "drenaje-abscesos",
    image: "/images/services/drenaje-abscesos.webp",
    shortTitle: "Abscesos",
    order: 27,
    category: "tratamientos",
    icon: "Droplet",
    title: "Drenaje de Abscesos en Houston | Atención Sin Cita, Español",
    titleEn: "Abscess Drainage in Houston | Walk-In, No Insurance Needed",
    shortDescription:
      "Drenaje de abscesos e infecciones de piel para aliviar el dolor y favorecer la curación.",
    shortDescriptionEn:
      "Drainage of abscesses and skin infections to relieve pain and promote healing.",
    description:
      "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, sin necesidad de seguro.",
    descriptionEn:
      "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, no insurance needed.",
    keywords: [
      "drenaje de absceso houston",
      "drenar absceso houston",
      "infeccion de piel houston",
      "tratamiento de absceso houston",
    ],
    keywordsEn: [
      "abscess drainage houston",
      "drain abscess houston",
      "skin infection houston",
      "boil treatment houston",
    ],
    features: [
      "Drenaje del absceso",
      "Limpieza y desinfección",
      "Anestesia local",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Abscess drainage",
      "Cleaning and disinfection",
      "Local anesthesia",
      "After-care instructions",
    ],
    longDescription: `Un absceso es una acumulación de pus que causa dolor e hinchazón y necesita drenarse. En Clínica Hispana Nueva Salud Lawndale lo tratamos de forma segura para aliviar la molestia y prevenir que la infección avance.

## ¿Qué incluye?

- Evaluación del absceso o infección de piel
- Drenaje con anestesia local
- Limpieza y desinfección de la zona
- Tratamiento de la infección cuando se requiere
- Indicaciones de cuidado y seguimiento

## No lo dejes pasar

Un bulto rojo, caliente y doloroso, a veces con fiebre, necesita atención. Drenarlo a tiempo evita complicaciones y alivia el dolor rápidamente.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `An abscess is a buildup of pus that causes pain and swelling and needs to be drained. At Clínica Hispana Nueva Salud Lawndale we treat it safely to relieve the discomfort and prevent the infection from spreading.

## What's included?

- Evaluation of the abscess or skin infection
- Drainage with local anesthesia
- Cleaning and disinfection of the area
- Treatment of the infection when needed
- Care and follow-up instructions

## Don't let it go

A red, warm, painful lump, sometimes with fever, needs attention. Draining it in time prevents complications and relieves pain quickly.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "unas-encarnadas",
    dateModified: "2026-09-08",
    id: "unas-encarnadas",
    image: "/images/services/unas-encarnadas.webp",
    shortTitle: "Uñas Encarnadas",
    order: 28,
    category: "tratamientos",
    icon: "Footprints",
    title: "Uña Encarnada en Houston | Extracción Sin Cita, en Español",
    titleEn: "Ingrown Toenail Removal in Houston | Walk-In, No Insurance",
    shortDescription:
      "Tratamiento de uñas encarnadas para aliviar el dolor y prevenir infecciones, en español.",
    shortDescriptionEn:
      "Ingrown toenail treatment to relieve pain and prevent infection, in Spanish.",
    description:
      "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, sin necesidad de seguro.",
    descriptionEn:
      "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, no insurance needed.",
    keywords: [
      "uña encarnada houston",
      "extraccion de uña encarnada houston",
      "tratamiento uña encarnada houston",
      "doctor para uña encarnada houston",
    ],
    keywordsEn: [
      "ingrown toenail houston",
      "ingrown toenail removal houston",
      "ingrown nail treatment houston",
      "toenail doctor houston",
    ],
    features: [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions",
    ],
    longDescription: `Una uña encarnada puede doler mucho e infectarse si no se trata. En Clínica Hispana Nueva Salud Lawndale la atendemos con un procedimiento sencillo y anestesia local para aliviarte el mismo día.

## ¿Qué incluye?

- Evaluación de la uña y el dedo
- Procedimiento con anestesia local
- Extracción de la porción encarnada de la uña
- Tratamiento de la infección si la hay
- Indicaciones de cuidado para evitar que regrese

## Cuándo acudir

Dolor, enrojecimiento, hinchazón o pus alrededor de la uña, sobre todo del dedo gordo del pie. Atenderla pronto evita una infección mayor.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `An ingrown toenail can hurt a lot and get infected if untreated. At Clínica Hispana Nueva Salud Lawndale we treat it with a simple procedure and local anesthesia to relieve you the same day.

## What's included?

- Evaluation of the nail and toe
- Procedure with local anesthesia
- Removal of the ingrown portion of the nail
- Treatment of the infection if present
- Care instructions to prevent recurrence

## When to come in

Pain, redness, swelling or pus around the nail, especially the big toe. Treating it promptly prevents a larger infection.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "farmacia",
    dateModified: "2026-09-08",
    id: "farmacia",
    image: "/images/services/farmacia.webp",
    shortTitle: "Farmacia",
    order: 29,
    category: "tratamientos",
    icon: "Pill",
    title: "Farmacia en Houston East End | Medicamentos en Español",
    titleEn: "Pharmacy in Houston East End | Spanish-Speaking Staff",
    shortDescription:
      "Recoge tus medicamentos al terminar la consulta, sin ir a otra farmacia.",
    shortDescriptionEn:
      "Pick up your medications right after your visit — no second stop.",
    description:
      "Farmacia en Houston, TX dentro de la clínica. Surtimos tu receta al terminar la consulta, atención en español.",
    descriptionEn:
      "Pharmacy in Houston, TX inside the clinic. We fill your prescription right after your visit, service in Spanish.",
    keywords: [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "surtir receta houston",
    ],
    keywordsEn: [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "fill prescription houston",
    ],
    features: [
      "Surtido de tu receta al instante",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Asesoría sobre tus medicamentos en español",
    ],
    featuresEn: [
      "Prescriptions filled on the spot",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medications",
      "Guidance about your medications in Spanish",
    ],
    longDescription: `Al terminar tu consulta en Clínica Hispana Nueva Salud Lawndale puedes recoger tus medicamentos en nuestra propia farmacia, sin tener que ir a otro lugar. Es la comodidad de resolver todo en una sola visita, con atención en español.

## ¿Qué incluye?

- Surtido de tu receta justo al terminar la consulta
- Medicamentos de marca y genéricos
- Medicamentos de venta libre (OTC) para gripe, dolor, alergias y más
- Asesoría del personal sobre cómo tomar tus medicamentos
- Resurtido de recetas

## ¿Por qué usar nuestra farmacia?

Te ahorras una segunda parada: el médico te atiende, te receta y recoges tu medicamento en el mismo lugar. Te explicamos en español la dosis, los horarios y los cuidados.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `After your visit at Clínica Hispana Nueva Salud Lawndale you can pick up your medications at our own pharmacy, without going anywhere else. It's the convenience of getting everything done in a single visit, with service in Spanish.

## What's included?

- Your prescription filled right after your visit
- Brand-name and generic medications
- Over-the-counter (OTC) medications for colds, pain, allergies and more
- Staff guidance on how to take your medications
- Prescription refills

## Why use our pharmacy?

You skip the second stop: the doctor sees you, writes your prescription, and you pick up your medication in the same place. We explain the dosage, schedule and precautions in Spanish.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
];

// Promociones vigentes. Cada slug = nombre del archivo en
// public/images/promotions/<slug>.webp y ancla de deep-link en /promociones.
// El precio vive en el flyer; aquí es solo un dato de texto. Copy factual,
// sin claims médicos (Google Ads salud): términos sensibles solo en el cuerpo,
// nunca en title/description/keywords de metadata.
export const PROMOTIONS: Promotion[] = [
  {
    slug: "chequeo-general-completo",
    title: "Chequeo General Completo",
    titleEn: "Complete General Checkup",
    price: "$99",
    blurb:
      "Cuídate hoy, vive mejor mañana. Un chequeo general completo con valor regular de $250, ahora por solo $99 y con la consulta médica gratis. Incluye examen general de sangre, A1C (hemoglobina glicosilada) y examen general de orina, con resultados rápidos y atención personalizada.",
    blurbEn:
      "Take care of yourself today, live better tomorrow. A complete general checkup regularly valued at $250, now for only $99 with a free medical consultation. Includes a general blood test, A1C (glycated hemoglobin) and a general urine test, with fast results and personalized care.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "General blood test",
      "A1C (glycated hemoglobin)",
      "General urine test",
      "Free medical consultation",
    ],
    alt: "Flyer de la promoción Chequeo General Completo por $99 con consulta gratis en Clínica Hispana Nueva Salud Lawndale, Houston",
    altEn: "Complete General Checkup promotion flyer for $99 with free consultation at Clínica Hispana Nueva Salud Lawndale, Houston",
  },
  {
    slug: "salud-intima-femenina",
    title: "Salud Íntima Femenina",
    titleEn: "Women's Intimate Health",
    price: "$69",
    blurb:
      "¿Picazón, flujo o mal olor? No lo ignores: pueden ser señales de una infección. Esta evaluación incluye un cultivo íntimo, consulta médica y examen de orina sin costo adicional, con atención profesional y discreta todos los días.",
    blurbEn:
      "Itching, discharge or odor? Don't ignore it — these can be signs of an infection. This evaluation includes an intimate culture test, a medical consultation and a urine test at no extra cost, with professional, discreet care every day.",
    includes: [
      "Cultivo íntimo",
      "Consulta médica",
      "Examen de orina sin costo adicional",
    ],
    includesEn: [
      "Intimate culture test",
      "Medical consultation",
      "Urine test at no extra cost",
    ],
    alt: "Flyer de la promoción Salud Íntima Femenina por $69 en Clínica Hispana Nueva Salud Lawndale, Houston",
    altEn: "Women's Intimate Health promotion flyer for $69 at Clínica Hispana Nueva Salud Lawndale, Houston",
  },
  {
    slug: "perfil-hormonal-masculino",
    title: "Perfil Hormonal Masculino",
    titleEn: "Men's Hormone Panel",
    price: "$200",
    blurb:
      "Un perfil hormonal pensado para hombres que desean evaluar su salud hormonal. Útil cuando aparecen señales como fatiga y cansancio, cambios en la masa muscular, estrés e irritabilidad, problemas de sueño o aumento de grasa corporal. Exámenes confiables, resultados precisos y atención profesional.",
    blurbEn:
      "A hormone panel designed for men who want to evaluate their hormonal health. Useful when signs appear such as fatigue and low energy, changes in muscle mass, stress and irritability, sleep problems or increased body fat. Reliable tests, precise results and professional care.",
    includes: [
      "Evaluación de desequilibrios hormonales",
      "Fatiga, cansancio y energía",
      "Cambios en masa muscular y peso",
      "Estrés, sueño y bienestar general",
    ],
    includesEn: [
      "Hormonal imbalance evaluation",
      "Fatigue, low energy and stamina",
      "Changes in muscle mass and weight",
      "Stress, sleep and overall well-being",
    ],
    alt: "Flyer de la promoción Perfil Hormonal Masculino por $200 en Clínica Hispana Nueva Salud Lawndale, Houston",
    altEn: "Men's Hormone Panel promotion flyer for $200 at Clínica Hispana Nueva Salud Lawndale, Houston",
  },
  {
    slug: "general-sangre-vitamina-b12",
    title: "General de Sangre + Vitamina B12",
    titleEn: "Blood Panel + Vitamin B12",
    price: "$99",
    blurb:
      "Promoción especial que combina un examen general de sangre con una inyección de Vitamina B12. Una forma práctica de revisar tu estado general de salud y apoyar tus niveles de energía y bienestar.",
    blurbEn:
      "A special promotion that combines a general blood panel with a Vitamin B12 injection. A practical way to review your overall health and support your energy and well-being.",
    includes: [
      "Examen general de sangre",
      "Inyección de Vitamina B12",
      "Resultados el mismo día",
    ],
    includesEn: [
      "General blood panel",
      "Vitamin B12 injection",
      "Same-day results",
    ],
    alt: "Flyer de la promoción General de Sangre más Vitamina B12 por $99 en Clínica Hispana Nueva Salud Lawndale, Houston",
    altEn: "Blood Panel plus Vitamin B12 promotion flyer for $99 at Clínica Hispana Nueva Salud Lawndale, Houston",
  },
  {
    slug: "examen-testosterona",
    title: "Revisa tu Testosterona",
    titleEn: "Check Your Testosterone",
    price: "$79",
    blurb:
      "¿Cansancio, poca energía, menos deseo sexual o dificultad con la erección? Un examen de testosterona te ayuda a saber si tus niveles hormonales tienen que ver. Paquete con valor regular de $220, ahora por solo $79: incluye examen de testosterona, examen de orina y consulta médica gratis.",
    blurbEn:
      "Tiredness, low energy, reduced sex drive or difficulty with erections? A testosterone test helps you find out whether your hormone levels play a role. A package regularly valued at $220, now for only $79: includes a testosterone test, a urine test and a free medical consultation.",
    includes: [
      "Examen de testosterona",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Testosterone test",
      "Urine test",
      "Free medical consultation",
    ],
    alt: "Flyer de la promoción Revisa tu Testosterona por $79 con consulta gratis en Clínica Hispana Nueva Salud Lawndale, Houston",
    altEn: "Check Your Testosterone promotion flyer for $79 with free consultation at Clínica Hispana Nueva Salud Lawndale, Houston",
  },
  {
    slug: "chequeo-completo-mujer",
    title: "Chequeo Completo de la Mujer",
    titleEn: "Complete Women's Checkup",
    price: "$179",
    blurb:
      "Un chequeo pensado para el cuidado de la mujer, con valor regular de $300 y ahora por solo $179. Incluye ultrasonido pélvico, papanicolaou, examen de orina y consulta médica gratis, con atención profesional y en español todos los días.",
    blurbEn:
      "A checkup designed for women's care, regularly valued at $300 and now for only $179. Includes a pelvic ultrasound, a Pap smear, a urine test and a free medical consultation, with professional, Spanish-speaking care every day.",
    includes: [
      "Ultrasonido pélvico",
      "Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
    alt: "Flyer de la promoción Chequeo Completo de la Mujer por $179 con consulta gratis en Clínica Hispana Nueva Salud Lawndale, Houston",
    altEn: "Complete Women's Checkup promotion flyer for $179 with free consultation at Clínica Hispana Nueva Salud Lawndale, Houston",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "cita-previa",
    question: "faq.q1",
    answer: "faq.a1",
  },
  {
    id: "sin-seguro",
    question: "faq.q2",
    answer: "faq.a2",
  },
  {
    id: "espanol",
    question: "faq.q3",
    answer: "faq.a3",
  },
  {
    id: "horarios",
    question: "faq.q4",
    answer: "faq.a4",
  },
  {
    id: "formas-pago",
    question: "faq.q5",
    answer: "faq.a5",
  },
  {
    id: "planes-pago",
    question: "faq.q6",
    answer: "faq.a6",
  },
  {
    id: "ubicacion-houston",
    question: "faq.q7",
    answer: "faq.a7",
  },
  {
    id: "examen-inmigracion",
    question: "faq.q8",
    answer: "faq.a8",
  },
  {
    id: "tiempo-espera",
    question: "faq.q9",
    answer: "faq.a9",
  },
  {
    id: "estacionamiento",
    question: "faq.q10",
    answer: "faq.a10",
  },
  {
    id: "clinica-cerca-de-mi",
    question: "faq.q11",
    answer: "faq.a11",
  },
  {
    id: "medico-primario",
    question: "faq.q12",
    answer: "faq.a12",
  },
];

export const NAV_ITEMS = [
  { label: "nav.services", href: "/services" },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/#contact" },
];

