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
    dateModified: "2026-09-09",
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
    longDescription: `**Diagnosticamos y damos seguimiento a diabetes, presión alta y colesterol alto con laboratorio en la clínica y consultas de control cada 3 meses, sin seguro y en español.** En Clínica Hispana Nueva Salud Lawndale puedes empezar el control el mismo día que llegas, de lunes a domingo de 9 AM a 9 PM.

## ¿Cómo sé si tengo diabetes, presión alta o colesterol alto?

Muchas veces no dan síntomas hasta que hay daño. Los valores que usamos para el diagnóstico son los de las guías médicas de Estados Unidos: glucosa en ayunas de 126 mg/dL o más, o A1C de 6.5 % o más, indican diabetes; presión de 130/80 o más en dos visitas indica hipertensión; colesterol LDL por encima de 100 a 160 mg/dL, según tu riesgo, requiere tratamiento. Un análisis de sangre y una toma de presión bastan para saberlo.

## ¿Qué incluye el control?

- **Primera consulta:** historial, examen físico, análisis de sangre (glucosa, A1C, lípidos, riñón) y examen de orina para proteína.
- **Plan de tratamiento:** medicamentos genéricos accesibles, metas personales de glucosa, presión y colesterol, y un plan de alimentación adaptado a la comida latina.
- **Consultas de seguimiento cada 3 meses** con A1C y ajuste de dosis; cada 6 a 12 meses, perfil de lípidos y función renal.
- **Revisión anual** de pies y referencia para examen de retina en pacientes con diabetes.
- **Recetas y refills** sin necesidad de una consulta completa cada vez [confirmar política de refills].

## ¿Cuáles son las metas del tratamiento?

Para la mayoría de los adultos: A1C por debajo de 7 %, presión por debajo de 130/80 y LDL por debajo de 100 mg/dL, o de 70 si ya tuviste un infarto o derrame. El médico ajusta las metas según tu edad y otras enfermedades.

## ¿Qué pasa si no me controlo?

La diabetes y la presión alta mal controladas dañan con los años el corazón, los riñones, los ojos y los nervios de los pies. La mayoría de esos daños se previene con un control constante, y muchos pacientes reducen sus medicamentos al mejorar su alimentación y su peso.

## ¿Cuánto cuesta el control de enfermedades crónicas?

La consulta cuesta $[confirmar] y los análisis de seguimiento tienen precio individual; el paquete de chequeo general con A1C aparece en nuestras promociones. Trabajamos con medicamentos genéricos de bajo costo.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We diagnose and manage diabetes, high blood pressure and high cholesterol with in-clinic lab work and follow-up visits every 3 months, no insurance needed and in Spanish or English.** At Clínica Hispana Nueva Salud Lawndale you can start your care the same day you walk in, Monday to Sunday from 9 AM to 9 PM.

## How do I know if I have diabetes, high blood pressure or high cholesterol?

They often cause no symptoms until damage is done. We use the diagnostic values from U.S. medical guidelines: fasting glucose of 126 mg/dL or more, or A1C of 6.5% or more, indicates diabetes; blood pressure of 130/80 or more at two visits indicates hypertension; LDL cholesterol above 100 to 160 mg/dL, depending on your risk, needs treatment. A blood test and a blood pressure reading are enough to find out.

## What does the care include?

- **First visit:** history, physical exam, blood tests (glucose, A1C, lipids, kidney) and a urine test for protein.
- **Treatment plan:** affordable generic medications, personal goals for glucose, blood pressure and cholesterol, and an eating plan adapted to Latino food.
- **Follow-up visits every 3 months** with A1C and dose adjustment; every 6 to 12 months, a lipid panel and kidney function.
- **Yearly foot check** and referral for a retina exam in patients with diabetes.
- **Prescriptions and refills** without a full visit every time [confirm refill policy].

## What are the treatment goals?

For most adults: A1C below 7%, blood pressure below 130/80 and LDL below 100 mg/dL, or below 70 if you have already had a heart attack or stroke. The doctor adjusts the goals to your age and other conditions.

## What happens if I don't manage them?

Poorly controlled diabetes and high blood pressure damage the heart, kidneys, eyes and foot nerves over the years. Most of that damage is prevented with steady control, and many patients cut back on medication as their diet and weight improve.

## How much does chronic disease care cost?

The visit costs $[confirm] and follow-up tests are priced individually; the general checkup package with A1C appears in our promotions. We work with low-cost generic medications.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "tiroides",
    dateModified: "2026-09-09",
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
    longDescription: `**Diagnosticamos hipotiroidismo e hipertiroidismo con un análisis de sangre (TSH, T4 libre y T3) y empezamos o ajustamos el tratamiento en la misma consulta.** En Clínica Hispana Nueva Salud Lawndale atendemos sin cita, en español y sin seguro, de lunes a domingo de 9 AM a 9 PM.

## ¿Qué síntomas indican un problema de tiroides?

- **Tiroides lenta (hipotiroidismo):** cansancio constante, aumento de peso sin cambiar la dieta, frío, piel seca, caída de cabello, estreñimiento, depresión y reglas abundantes. Es la forma más común, sobre todo en mujeres mayores de 40 años y después del embarazo.
- **Tiroides acelerada (hipertiroidismo):** pérdida de peso, palpitaciones, nerviosismo, temblor en las manos, calor, insomnio y ojos saltones.

Un bulto en el cuello o dificultad para tragar requieren un ultrasonido de tiroides, que también hacemos en la clínica.

## ¿Qué análisis hacemos?

1. **TSH:** la prueba de detección principal. Valores por encima de 4.5 mUI/L sugieren hipotiroidismo y por debajo de 0.4 hipertiroidismo.
2. **T4 libre y T3:** confirman el diagnóstico y miden la gravedad.
3. **Anticuerpos anti-TPO:** cuando se sospecha tiroiditis de Hashimoto, la causa más frecuente de hipotiroidismo.
4. **Ultrasonido de tiroides:** si hay nódulos o crecimiento de la glándula.

No necesitas ayuno. El resultado de TSH tarda [confirmar] días.

## ¿Cuál es el tratamiento?

El hipotiroidismo se trata con levotiroxina, una pastilla diaria en ayunas, 30 a 60 minutos antes del desayuno y lejos del calcio y el hierro. La dosis se ajusta con una TSH de control cada 6 a 8 semanas hasta llegar a la meta, y después cada 6 a 12 meses. El hipertiroidismo se trata con metimazol y control cada 4 a 6 semanas; los casos complejos se refieren a endocrinología.

## ¿Debo revisarme la tiroides si estoy embarazada?

Sí, si tienes síntomas, antecedentes familiares o ya tomas levotiroxina: en el embarazo la dosis suele necesitar un aumento del 25 al 30 % y controles cada 4 semanas. También recomendamos la prueba a mujeres con infertilidad o abortos repetidos.

## ¿Cuánto cuesta el examen de tiroides?

El perfil tiroideo (TSH, T4 libre y T3) cuesta $[confirmar]; la consulta y el ultrasonido tienen precio aparte. Pago en efectivo o tarjeta.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We diagnose hypothyroidism and hyperthyroidism with a blood test (TSH, free T4 and T3) and start or adjust treatment at the same visit.** At Clínica Hispana Nueva Salud Lawndale we see you without an appointment, in Spanish or English and without insurance, Monday to Sunday from 9 AM to 9 PM.

## Which symptoms point to a thyroid problem?

- **Underactive thyroid (hypothyroidism):** constant tiredness, weight gain without diet changes, feeling cold, dry skin, hair loss, constipation, depression and heavy periods. It is the most common form, especially in women over 40 and after pregnancy.
- **Overactive thyroid (hyperthyroidism):** weight loss, palpitations, nervousness, hand tremor, feeling hot, insomnia and bulging eyes.

A lump in the neck or trouble swallowing calls for a thyroid ultrasound, which we also do in the clinic.

## Which tests do we run?

1. **TSH:** the main screening test. Values above 4.5 mIU/L suggest hypothyroidism and below 0.4 hyperthyroidism.
2. **Free T4 and T3:** confirm the diagnosis and measure severity.
3. **Anti-TPO antibodies:** when Hashimoto's thyroiditis, the most common cause of hypothyroidism, is suspected.
4. **Thyroid ultrasound:** if there are nodules or an enlarged gland.

No fasting needed. TSH results take [confirm] days.

## What is the treatment?

Hypothyroidism is treated with levothyroxine, one daily pill on an empty stomach, 30 to 60 minutes before breakfast and away from calcium and iron. The dose is adjusted with a follow-up TSH every 6 to 8 weeks until you reach the goal, then every 6 to 12 months. Hyperthyroidism is treated with methimazole and checks every 4 to 6 weeks; complex cases are referred to endocrinology.

## Should I check my thyroid if I'm pregnant?

Yes, if you have symptoms, family history or already take levothyroxine: during pregnancy the dose usually needs a 25 to 30% increase and checks every 4 weeks. We also recommend the test for women with infertility or repeated miscarriages.

## How much does a thyroid test cost?

The thyroid panel (TSH, free T4 and T3) costs $[confirm]; the visit and ultrasound are priced separately. Cash and cards accepted.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "alergias",
    dateModified: "2026-09-09",
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
    longDescription: `**Tratamos rinitis alérgica, alergias en la piel y reacciones leves a alimentos o picaduras, sin cita y en español.** En Clínica Hispana Nueva Salud Lawndale identificamos qué desencadena tus síntomas y te damos un tratamiento para controlarlos, de lunes a domingo de 9 AM a 9 PM.

## ¿Cómo sé si es alergia o resfriado?

La alergia produce estornudos en serie, comezón en nariz, ojos y paladar, lagrimeo y congestión que dura semanas, sin fiebre. El resfriado dura de 7 a 10 días, puede dar fiebre y dolor de cuerpo. En Houston los picos de polen son de febrero a mayo (robles) y de septiembre a noviembre (ambrosía); si tus síntomas coinciden con esas fechas, casi seguro es alergia.

## ¿Qué alergias atendemos?

- **Rinitis alérgica:** por polen, polvo, ácaros, moho o mascotas.
- **Alergias en la piel:** urticaria (ronchas), dermatitis de contacto y eccema.
- **Reacciones leves** a alimentos, medicamentos o picaduras de insecto.
- **Asma alérgica leve:** en coordinación con el manejo de enfermedades respiratorias.

Las reacciones graves con dificultad para respirar, hinchazón de labios o lengua o mareo son una emergencia: llama al 911 o ve a la sala de emergencias más cercana.

## ¿Hacen pruebas de alergia?

Ofrecemos análisis de sangre para IgE específica frente a los alérgenos más comunes de Houston [confirmar panel disponible y tiempo de resultado]. No realizamos pruebas cutáneas de punción; si las necesitas, te referimos a un alergólogo.

## ¿Cuál es el tratamiento?

1. **Evitar el desencadenante:** te damos una lista práctica según tu alergia.
2. **Antihistamínicos de segunda generación** que no dan sueño.
3. **Spray nasal de corticoide** para la congestión persistente.
4. **Cremas o antihistamínicos** para la piel.
5. **Referencia a inmunoterapia** (vacunas de alergia) cuando los síntomas no se controlan.

## ¿Cuánto cuesta?

La consulta cuesta $[confirmar]. El panel de sangre para alergias tiene un costo adicional que te informamos antes de tomarlo.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We treat allergic rhinitis, skin allergies and mild reactions to foods or insect bites, without an appointment and in Spanish or English.** At Clínica Hispana Nueva Salud Lawndale we identify what triggers your symptoms and give you a treatment to control them, Monday to Sunday from 9 AM to 9 PM.

## How do I know if it's an allergy or a cold?

Allergies cause bursts of sneezing, itching in the nose, eyes and roof of the mouth, watery eyes and congestion that lasts weeks, without fever. A cold lasts 7 to 10 days and may cause fever and body aches. In Houston, pollen peaks run February to May (oak) and September to November (ragweed); if your symptoms match those dates, it is almost certainly an allergy.

## Which allergies do we treat?

- **Allergic rhinitis:** from pollen, dust, dust mites, mold or pets.
- **Skin allergies:** hives, contact dermatitis and eczema.
- **Mild reactions** to foods, medications or insect bites.
- **Mild allergic asthma:** coordinated with respiratory illness care.

Severe reactions with difficulty breathing, swelling of the lips or tongue, or dizziness are an emergency: call 911 or go to the nearest emergency room.

## Do you do allergy testing?

We offer blood tests for specific IgE against the most common Houston allergens [confirm available panel and turnaround]. We do not perform skin prick tests; if you need them, we refer you to an allergist.

## What is the treatment?

1. **Avoid the trigger:** we give you a practical list based on your allergy.
2. **Second-generation antihistamines** that don't cause drowsiness.
3. **Steroid nasal spray** for persistent congestion.
4. **Creams or antihistamines** for the skin.
5. **Referral for immunotherapy** (allergy shots) when symptoms are not controlled.

## How much does it cost?

The visit costs $[confirm]. The allergy blood panel has an additional cost that we tell you before drawing it.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "enfermedades-respiratorias",
    dateModified: "2026-09-09",
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
    longDescription: `**Hacemos pruebas rápidas de influenza y COVID-19 con resultado en 15 minutos y tratamos gripe, tos, bronquitis y sinusitis el mismo día, sin cita.** En Clínica Hispana Nueva Salud Lawndale atendemos a niños y adultos en español, de lunes a domingo de 9 AM a 9 PM, sin seguro.

## ¿Es gripe, COVID, resfriado o alergia?

Los cuatro pueden dar congestión y tos, pero se distinguen: la influenza empieza de golpe con fiebre alta, dolor de cuerpo y cansancio intenso; el COVID-19 puede dar fiebre, tos seca, dolor de garganta y pérdida del olfato; el resfriado es más leve y sin fiebre alta; la alergia da estornudos y comezón sin fiebre. La prueba rápida evita adivinar: en 15 minutos sabes si es influenza A o B, COVID-19 o ninguno.

## ¿Qué tratamos?

- **Influenza:** antiviral (oseltamivir) si empezaste con síntomas hace menos de 48 horas, más medicamento para la fiebre y el malestar.
- **COVID-19:** manejo de síntomas y, en personas de riesgo, antiviral en los primeros 5 días.
- **Bronquitis y tos persistente:** evaluación de los pulmones, inhalador si hay silbido y jarabe según el tipo de tos.
- **Sinusitis:** descongestionantes, lavados nasales y antibiótico solo si los síntomas duran más de 10 días o empeoran.
- **Faringitis:** prueba de estreptococo cuando hay placas o fiebre sin tos.

Los antibióticos no sirven contra virus; los recetamos solo cuando hay una infección bacteriana confirmada o muy probable.

## ¿Cuándo venir el mismo día?

Fiebre de 39 °C o más que no baja, dificultad para respirar, dolor en el pecho, labios morados, tos con sangre, o síntomas que empeoran después de haber mejorado. En bebés menores de 3 meses con fiebre, o en cualquier persona con falta de aire severa, acude a emergencias.

## ¿Qué incluye la consulta?

1. Toma de signos vitales y saturación de oxígeno.
2. Revisión de garganta, oídos, nariz y pulmones.
3. Prueba rápida de influenza y COVID-19 con hisopado nasal, resultado en 15 minutos.
4. Receta, justificante médico para el trabajo o la escuela si lo necesitas, e indicaciones para no contagiar en casa.

## ¿Cuánto cuesta?

La consulta cuesta $[confirmar] y la prueba combinada de flu y COVID $[confirmar]. Pago en efectivo o tarjeta.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We run rapid influenza and COVID-19 tests with results in 15 minutes and treat flu, cough, bronchitis and sinusitis the same day, no appointment needed.** At Clínica Hispana Nueva Salud Lawndale we see children and adults in Spanish or English, Monday to Sunday from 9 AM to 9 PM, without insurance.

## Is it the flu, COVID, a cold or allergies?

All four can cause congestion and cough, but they differ: influenza starts suddenly with high fever, body aches and intense fatigue; COVID-19 may cause fever, dry cough, sore throat and loss of smell; a cold is milder with no high fever; allergies cause sneezing and itching without fever. The rapid test removes the guesswork: in 15 minutes you know whether it is influenza A or B, COVID-19 or neither.

## What do we treat?

- **Influenza:** an antiviral (oseltamivir) if symptoms started less than 48 hours ago, plus medication for fever and discomfort.
- **COVID-19:** symptom management and, for people at risk, an antiviral within the first 5 days.
- **Bronchitis and lingering cough:** lung evaluation, an inhaler if there is wheezing and a syrup suited to the type of cough.
- **Sinusitis:** decongestants, nasal rinses and antibiotics only if symptoms last more than 10 days or get worse.
- **Sore throat:** strep test when there are white patches or fever without cough.

Antibiotics do not work against viruses; we prescribe them only when a bacterial infection is confirmed or very likely.

## When should I come in the same day?

Fever of 102 °F or higher that won't come down, difficulty breathing, chest pain, blue lips, coughing up blood, or symptoms that worsen after improving. For babies under 3 months with fever, or anyone with severe shortness of breath, go to the emergency room.

## What does the visit include?

1. Vital signs and oxygen saturation.
2. Throat, ear, nose and lung exam.
3. Rapid influenza and COVID-19 test with a nasal swab, results in 15 minutes.
4. Prescription, a doctor's note for work or school if you need it, and instructions to avoid spreading it at home.

## How much does it cost?

The visit costs $[confirm] and the combined flu and COVID test $[confirm]. Cash and cards accepted.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-fisico-escolar",
    dateModified: "2026-09-09",
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
    longDescription: `**Hacemos exámenes físicos para escuela, deportes, campamentos y guarderías sin cita, en 20 a 30 minutos, y llenamos y firmamos el formulario que te pide la institución.** En Clínica Hispana Nueva Salud Lawndale atendemos a niños y adolescentes en español, de lunes a domingo de 9 AM a 9 PM.

## ¿Qué formulario necesito?

- **Deportes escolares en Texas (UIL):** el formulario de evaluación física de preparticipación de la UIL, obligatorio cada año para practicar deportes de 7.º a 12.º grado. Debe firmarlo un médico, asistente médico o enfermera practicante.
- **Escuela, guardería o Head Start:** el formulario de examen físico de la institución más el registro de vacunas.
- **Campamentos, ligas y trabajo de verano:** el formulario propio de cada programa.

Trae el formulario impreso o en el teléfono; si tu escuela no te dio uno, te entregamos una constancia médica general.

## ¿Qué revisa el examen?

1. Peso, talla, índice de masa corporal y presión arterial.
2. Visión y audición.
3. Corazón y pulmones, con preguntas sobre desmayos o dolor en el pecho al hacer ejercicio.
4. Abdomen, columna, articulaciones y fuerza muscular.
5. Historial de lesiones, conmociones, asma, alergias y medicamentos.

Si detectamos un soplo cardiaco, presión alta o una lesión que no ha sanado, indicamos qué estudio hace falta antes de autorizar el deporte.

## ¿Qué debo traer?

- Identificación del padre o tutor y del estudiante
- Formulario de la escuela o equipo, con la parte del historial ya llenada por los padres
- Cartilla de vacunación o registro de ImmTrac2
- Lentes, si los usa, y lista de medicamentos

## ¿Incluye vacunas?

El examen físico y las vacunas son servicios distintos. Si el registro escolar exige vacunas que faltan, aplicamos influenza y Tdap en la misma visita [confirmar otras vacunas disponibles]; las demás te indicamos dónde conseguirlas.

## ¿Cuánto cuesta el examen físico escolar o deportivo?

El examen con formulario firmado cuesta $[confirmar]. Pago en efectivo o tarjeta, sin seguro. En julio y agosto la demanda es alta: ven temprano para evitar espera.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We do physicals for school, sports, camps and daycare without an appointment, in 20 to 30 minutes, and complete and sign the form your institution requires.** At Clínica Hispana Nueva Salud Lawndale we see children and teens in Spanish or English, Monday to Sunday from 9 AM to 9 PM.

## Which form do I need?

- **Texas school sports (UIL):** the UIL pre-participation physical evaluation form, required every year to play sports in grades 7 through 12. It must be signed by a physician, physician assistant or nurse practitioner.
- **School, daycare or Head Start:** the institution's physical exam form plus the immunization record.
- **Camps, leagues and summer jobs:** each program's own form.

Bring the form printed or on your phone; if your school did not give you one, we provide a general medical certificate.

## What does the exam check?

1. Weight, height, body mass index and blood pressure.
2. Vision and hearing.
3. Heart and lungs, with questions about fainting or chest pain during exercise.
4. Abdomen, spine, joints and muscle strength.
5. History of injuries, concussions, asthma, allergies and medications.

If we find a heart murmur, high blood pressure or an injury that has not healed, we tell you which test is needed before clearing the student for sports.

## What should I bring?

- Parent or guardian ID and the student's ID
- School or team form, with the history section already filled in by the parents
- Vaccination card or ImmTrac2 record
- Glasses, if worn, and list of medications

## Does it include vaccines?

The physical and vaccines are separate services. If school enrollment requires missing vaccines, we give flu and Tdap at the same visit [confirm other vaccines available]; for the rest we tell you where to get them.

## How much does a school or sports physical cost?

The exam with signed form costs $[confirm]. Cash and cards accepted, no insurance needed. Demand is high in July and August: come early to avoid waiting.

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
    dateModified: "2026-09-09",
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
    longDescription: `**Confirmamos el embarazo con una prueba de orina en 5 minutos o un análisis de sangre cuantitativo, y te damos la constancia médica y la orientación para los siguientes pasos.** En Clínica Hispana Nueva Salud Lawndale atendemos sin cita, en español y con privacidad, de lunes a domingo de 9 AM a 9 PM.

## ¿Cuándo puedo hacerme la prueba?

La prueba de orina en clínica detecta la hormona hCG desde el primer día de retraso de la regla, unas 2 semanas después de la concepción. El análisis de sangre cuantitativo la detecta desde 7 a 10 días después de la concepción, incluso antes del retraso, y mide la cantidad exacta de hormona.

## ¿Qué incluye la visita?

1. **Prueba de orina** con resultado en 5 minutos, o **prueba de sangre** con resultado en [confirmar] horas.
2. **Consulta médica** para calcular las semanas de embarazo y la fecha probable de parto a partir de tu última regla.
3. **Constancia de embarazo** para tu trabajo, escuela, Medicaid o WIC.
4. **Análisis iniciales** si lo deseas: grupo sanguíneo, hemoglobina, glucosa, VIH, sífilis y hepatitis B, los mismos que pide el control prenatal.
5. **Ultrasonido** para confirmar que el embarazo está en el útero y ver el latido, a partir de las 6 semanas [confirmar disponibilidad de ultrasonido obstétrico].

## ¿Qué hago después de confirmar el embarazo?

Empieza a tomar ácido fólico (400 microgramos al día), evita alcohol, tabaco y medicamentos sin consultar, y programa tu primera cita prenatal antes de la semana 12. Te orientamos sobre dónde recibir control prenatal en Houston, incluidas opciones sin seguro y Medicaid para embarazadas.

## ¿Cuándo venir de inmediato?

Sangrado con dolor abdominal fuerte, dolor en un solo lado del abdomen, mareo o desmayo pueden indicar un embarazo ectópico o una pérdida: ven el mismo día o acude a emergencias.

## ¿La prueba es confidencial?

Sí. El resultado se entrega solo a ti. Si eres menor de edad, te explicamos tus opciones con respeto y sin juicios.

## ¿Cuánto cuesta la prueba de embarazo?

Prueba de orina con consulta: $[confirmar]. Prueba de sangre cuantitativa: $[confirmar]. Pago en efectivo o tarjeta.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We confirm pregnancy with a urine test in 5 minutes or a quantitative blood test, and give you a medical letter and guidance on next steps.** At Clínica Hispana Nueva Salud Lawndale we see you without an appointment, in Spanish or English and with privacy, Monday to Sunday from 9 AM to 9 PM.

## When can I take the test?

The clinic urine test detects the hCG hormone from the first day of a missed period, about 2 weeks after conception. The quantitative blood test detects it from 7 to 10 days after conception, even before a missed period, and measures the exact hormone level.

## What does the visit include?

1. **Urine test** with results in 5 minutes, or **blood test** with results in [confirm] hours.
2. **Medical visit** to calculate how many weeks pregnant you are and your due date from your last period.
3. **Proof of pregnancy letter** for work, school, Medicaid or WIC.
4. **Initial labs** if you wish: blood type, hemoglobin, glucose, HIV, syphilis and hepatitis B, the same ones prenatal care requires.
5. **Ultrasound** to confirm the pregnancy is in the uterus and see the heartbeat, from 6 weeks on [confirm obstetric ultrasound availability].

## What should I do after confirming?

Start folic acid (400 micrograms a day), avoid alcohol, tobacco and unprescribed medications, and schedule your first prenatal visit before week 12. We guide you on where to get prenatal care in Houston, including options without insurance and Medicaid for pregnant women.

## When should I come in right away?

Bleeding with strong abdominal pain, pain on one side of the abdomen, dizziness or fainting may indicate an ectopic pregnancy or a miscarriage: come in the same day or go to the emergency room.

## Is the test confidential?

Yes. The result is given only to you. If you are a minor, we explain your options with respect and without judgment.

## How much does a pregnancy test cost?

Urine test with visit: $[confirm]. Quantitative blood test: $[confirm]. Cash and cards accepted.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "anticonceptivos",
    dateModified: "2026-09-09",
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
    longDescription: `**Te ayudamos a elegir y empezar tu método anticonceptivo el mismo día: pastillas, inyección trimestral, parche, anillo o implante, con consulta en español y sin seguro.** En Clínica Hispana Nueva Salud Lawndale atendemos sin cita, de lunes a domingo de 9 AM a 9 PM, con privacidad.

## ¿Qué métodos ofrecemos?

| Método | Cómo se usa | Efectividad con uso típico |
|---|---|---|
| Pastillas | Una cada día a la misma hora | 93 % |
| Inyección (Depo-Provera) | Cada 12 a 13 semanas en la clínica | 96 % |
| Parche o anillo | Semanal o mensual | 93 % |
| Implante subdérmico | Dura 3 años | Más del 99 % |
| DIU | Dura de 3 a 10 años | Más del 99 % (te referimos para colocación) [confirmar si se coloca en clínica] |
| Píldora del día siguiente | Hasta 72 a 120 horas después | Emergencia, no de uso regular |

Ningún método hormonal protege contra infecciones de transmisión sexual; para eso, condón.

## ¿Cómo elegimos el método?

En la consulta revisamos tu presión arterial, si fumas, tu edad, migrañas, antecedentes de trombosis y si estás amamantando. Por ejemplo, las pastillas combinadas no se recomiendan si fumas y tienes más de 35 años o tienes migraña con aura; en esos casos la minipíldora, la inyección o el implante son más seguros.

## ¿Cuándo empieza a proteger?

Si empiezas las pastillas, el parche o el anillo en los primeros 5 días de la regla, protegen de inmediato; si empiezas otro día, usa condón 7 días. La inyección protege desde el primer día si se aplica en los primeros 7 días de la regla. El implante protege a las 24 horas en las mismas condiciones.

## ¿Qué incluye la visita?

1. Consulta y prueba de embarazo si hay dudas.
2. Toma de presión y revisión de contraindicaciones.
3. Aplicación de la inyección o colocación del implante en la misma visita [confirmar disponibilidad del implante], o receta de pastillas, parche o anillo.
4. Cita de seguimiento a los 3 meses y refills sin consulta completa.

## ¿Cuánto cuestan los anticonceptivos?

Consulta: $[confirmar]. Inyección trimestral: $[confirmar]. Implante: $[confirmar]. Las pastillas se compran en farmacia con nuestra receta, con genéricos desde $[confirmar] al mes.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We help you choose and start your birth control the same day: pills, the 3-month shot, patch, ring or implant, with a visit in Spanish or English and no insurance needed.** At Clínica Hispana Nueva Salud Lawndale we see you without an appointment, Monday to Sunday from 9 AM to 9 PM, with privacy.

## Which methods do we offer?

| Method | How it's used | Typical-use effectiveness |
|---|---|---|
| Pills | One every day at the same time | 93% |
| Shot (Depo-Provera) | Every 12 to 13 weeks at the clinic | 96% |
| Patch or ring | Weekly or monthly | 93% |
| Implant | Lasts 3 years | Over 99% |
| IUD | Lasts 3 to 10 years | Over 99% (we refer you for placement) [confirm if placed in clinic] |
| Morning-after pill | Up to 72 to 120 hours after | Emergency use, not regular |

No hormonal method protects against sexually transmitted infections; for that, use condoms.

## How do we choose the method?

At the visit we check your blood pressure, whether you smoke, your age, migraines, history of blood clots and whether you are breastfeeding. For example, combined pills are not recommended if you smoke and are over 35 or have migraine with aura; in those cases the minipill, the shot or the implant are safer.

## When does it start working?

If you start pills, the patch or the ring within the first 5 days of your period, they protect right away; if you start on another day, use condoms for 7 days. The shot protects from day one if given within the first 7 days of your period. The implant protects after 24 hours under the same conditions.

## What does the visit include?

1. Visit and a pregnancy test if there is any doubt.
2. Blood pressure check and review of contraindications.
3. The shot or implant placed at the same visit [confirm implant availability], or a prescription for pills, patch or ring.
4. Follow-up at 3 months and refills without a full visit.

## How much does birth control cost?

Visit: $[confirm]. 3-month shot: $[confirm]. Implant: $[confirm]. Pills are bought at a pharmacy with our prescription, with generics from $[confirm] a month.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "extraccion-implantes",
    dateModified: "2026-09-09",
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
    longDescription: `**Retiramos el implante anticonceptivo subdérmico (Nexplanon o similar) en una visita de unos 20 minutos, con anestesia local y sin cita.** En Clínica Hispana Nueva Salud Lawndale lo hace personal médico, en español, de lunes a domingo de 9 AM a 9 PM.

## ¿Cuándo hay que retirar el implante?

El implante Nexplanon está aprobado por 3 años; pasado ese tiempo deja de proteger y debe retirarse o cambiarse. También se retira antes si deseas embarazarte, si tienes sangrados irregulares que no toleras, o por indicación médica. Puedes quedar embarazada desde la primera semana después del retiro.

## ¿Cómo es el procedimiento?

1. Localizamos el implante por palpación en la cara interna del brazo. Si no se palpa, te referimos a un ultrasonido antes de intentar retirarlo.
2. Aplicamos anestesia local en la zona.
3. Hacemos una incisión de 2 a 3 milímetros y extraemos el implante con una pinza.
4. Cerramos con cinta adhesiva estéril y colocamos un vendaje compresivo.

No hace falta suturar en la mayoría de los casos. El procedimiento dura entre 10 y 20 minutos y sales caminando.

## ¿Qué debo traer?

- Identificación con foto
- La tarjeta o fecha de colocación del implante, si la tienes
- Lista de medicamentos, sobre todo anticoagulantes

## ¿Cómo cuidar el brazo después?

Mantén el vendaje compresivo 24 horas y la cinta estéril de 3 a 5 días. Es normal un moretón y molestia leve durante una semana. Acude si hay sangrado que no para, pus, fiebre o enrojecimiento que se extiende.

## ¿Puedo ponerme uno nuevo el mismo día?

Sí, si quieres seguir con el mismo método, podemos colocar un implante nuevo en la misma incisión [confirmar disponibilidad del implante en clínica]. Si prefieres otro método, te orientamos sobre pastillas, inyección o DIU en la misma consulta.

## ¿Cuánto cuesta retirar el implante?

La extracción cuesta $[confirmar] e incluye la consulta, la anestesia y el material. Pago en efectivo o tarjeta, sin seguro.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We remove the contraceptive implant (Nexplanon or similar) in a visit of about 20 minutes, with local anesthesia and no appointment.** At Clínica Hispana Nueva Salud Lawndale it is done by medical staff, in Spanish or English, Monday to Sunday from 9 AM to 9 PM.

## When should the implant be removed?

Nexplanon is approved for 3 years; after that it no longer protects and must be removed or replaced. It is also removed earlier if you want to get pregnant, if you have irregular bleeding you cannot tolerate, or on medical advice. You can become pregnant as early as the first week after removal.

## How is the procedure done?

1. We locate the implant by feeling the inner side of the arm. If it cannot be felt, we refer you for an ultrasound before attempting removal.
2. We apply local anesthesia to the area.
3. We make a 2 to 3 millimeter incision and pull the implant out with forceps.
4. We close with sterile adhesive strips and apply a pressure bandage.

Stitches are not needed in most cases. The procedure takes 10 to 20 minutes and you walk out.

## What should I bring?

- Photo ID
- The implant card or insertion date, if you have it
- List of medications, especially blood thinners

## How do I care for the arm afterwards?

Keep the pressure bandage on for 24 hours and the sterile strips for 3 to 5 days. A bruise and mild soreness for a week are normal. Come in if there is bleeding that does not stop, pus, fever or spreading redness.

## Can I get a new one the same day?

Yes, if you want to continue with the same method, we can place a new implant through the same incision [confirm implant availability at the clinic]. If you prefer another method, we discuss pills, the shot or an IUD during the same visit.

## How much does implant removal cost?

Removal costs $[confirm] and includes the visit, anesthesia and supplies. Cash and cards accepted, no insurance needed.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "salud-hombre",
    dateModified: "2026-09-09",
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
    longDescription: `**Chequeo de salud para hombres con análisis de sangre: PSA para la próstata, perfil hormonal, glucosa, colesterol y función renal, con resultados explicados en español.** En Clínica Hispana Nueva Salud Lawndale atendemos sin cita, de lunes a domingo de 9 AM a 9 PM, sin seguro y con privacidad.

## ¿Qué revisa el chequeo del hombre?

- **PSA (antígeno prostático):** detección temprana de problemas de próstata. Se recomienda conversar sobre la prueba a partir de los 50 años, o desde los 45 si tienes antecedentes familiares de cáncer de próstata.
- **Perfil hormonal:** testosterona total y, si hace falta, libre, LH y prolactina, cuando hay cansancio, baja de deseo sexual, pérdida de masa muscular o dificultad de erección.
- **Glucosa y A1C, colesterol y triglicéridos:** los hombres hispanos tienen mayor riesgo de diabetes y enfermedad cardiaca.
- **Función renal y hepática, biometría** y presión arterial.
- **Pruebas de ETS** si hay riesgo o síntomas, con confidencialidad.

## ¿Qué significa un PSA alto?

Un PSA por encima de 4 ng/mL, o que sube rápido entre un año y otro, requiere evaluación. No siempre es cáncer: la próstata crecida (hiperplasia benigna), una infección o haber eyaculado en las 48 horas previas también lo elevan. Si el resultado es alto, repetimos la prueba y te referimos a urología para decidir si hace falta una biopsia.

## ¿Cuándo revisar la testosterona?

Cuando hay síntomas persistentes: cansancio, poca energía, baja de deseo, dificultad de erección, pérdida de fuerza o ánimo bajo. La muestra se toma entre 7 y 10 de la mañana, en ayunas, y un resultado bajo se confirma con una segunda prueba otro día. El tratamiento de reemplazo hormonal solo se indica con dos resultados bajos y síntomas, y siempre con control de PSA y hematocrito.

## ¿Cómo prepararme?

Ayuno de 8 a 12 horas para glucosa y lípidos; sin ejercicio intenso, ciclismo ni eyaculación en las 48 horas previas al PSA; muestra de hormonas antes de las 10 AM. Trae tu identificación y la lista de medicamentos.

## ¿Cuándo llegan los resultados?

Glucosa, lípidos y biometría el mismo día [confirmar]; PSA y perfil hormonal en [confirmar] días. Te llamamos y el médico te explica cada valor.

## ¿Cuánto cuesta el chequeo del hombre?

Consulta: $[confirmar]. PSA: $[confirmar]. El paquete de perfil hormonal masculino y la promoción de testosterona aparecen en nuestras promociones vigentes con precio publicado.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**Men's health checkup with blood work: PSA for the prostate, hormone panel, glucose, cholesterol and kidney function, with results explained in Spanish or English.** At Clínica Hispana Nueva Salud Lawndale we see you without an appointment, Monday to Sunday from 9 AM to 9 PM, no insurance needed and with privacy.

## What does the men's checkup include?

- **PSA (prostate-specific antigen):** early detection of prostate problems. A conversation about the test is recommended from age 50, or from 45 with a family history of prostate cancer.
- **Hormone panel:** total testosterone and, if needed, free testosterone, LH and prolactin, when there is fatigue, low sex drive, loss of muscle mass or erection difficulty.
- **Glucose and A1C, cholesterol and triglycerides:** Hispanic men have a higher risk of diabetes and heart disease.
- **Kidney and liver function, CBC** and blood pressure.
- **STD testing** when there is risk or symptoms, confidentially.

## What does a high PSA mean?

A PSA above 4 ng/mL, or one that rises quickly from one year to the next, needs evaluation. It is not always cancer: an enlarged prostate (benign hyperplasia), an infection or ejaculation within the previous 48 hours also raise it. If the result is high, we repeat the test and refer you to urology to decide whether a biopsy is needed.

## When should testosterone be checked?

When symptoms persist: fatigue, low energy, low sex drive, erection difficulty, loss of strength or low mood. The sample is drawn between 7 and 10 AM, fasting, and a low result is confirmed with a second test on another day. Hormone replacement is only indicated with two low results plus symptoms, and always with PSA and hematocrit monitoring.

## How do I prepare?

Fast 8 to 12 hours for glucose and lipids; no intense exercise, cycling or ejaculation in the 48 hours before the PSA; hormone sample before 10 AM. Bring your ID and list of medications.

## When are results ready?

Glucose, lipids and CBC the same day [confirm]; PSA and hormone panel in [confirm] days. We call you and the doctor explains each value.

## How much does the men's checkup cost?

Visit: $[confirm]. PSA: $[confirm]. The men's hormone panel package and the testosterone promotion appear in our current promotions with published prices.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examenes-sangre",
    dateModified: "2026-09-09",
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
    longDescription: `**Hacemos análisis de sangre sin cita ni orden médica, con toma de muestra en la clínica y resultados explicados en español.** En Clínica Hispana Nueva Salud Lawndale atendemos de lunes a domingo de 9 AM a 9 PM; los exámenes más comunes se entregan el mismo día [confirmar cuáles].

## ¿Qué análisis hacemos?

- **Biometría hemática completa (CBC):** anemia, infecciones y plaquetas.
- **Química sanguínea (CMP):** glucosa, riñón, hígado y electrolitos.
- **Perfil de lípidos:** colesterol total, LDL, HDL y triglicéridos.
- **Hemoglobina glicosilada (A1C):** promedio de glucosa de los últimos 3 meses.
- **Perfil tiroideo:** TSH, T3 y T4.
- **Otros:** vitamina B12, vitamina D, ácido úrico, PSA, hormonas, embarazo, ETS y tuberculosis en sangre.

Si no sabes qué análisis necesitas, el médico te orienta en la misma visita según tus síntomas y tu edad.

## ¿Tengo que venir en ayunas?

Sí para glucosa, perfil de lípidos y química completa: entre 8 y 12 horas sin comer, solo agua. Para biometría, tiroides, A1C, B12 o PSA no necesitas ayuno. Si tomas medicamentos, tómalos con agua salvo que el médico indique lo contrario.

## ¿Cuándo llegan los resultados?

Glucosa, A1C, biometría y química suelen estar el mismo día [confirmar]. Perfiles hormonales, vitamina D y pruebas especiales se envían a laboratorio externo y tardan de [confirmar] días. Te llamamos cuando estén listos y te explicamos cada valor en consulta o por teléfono.

## ¿Cada cuánto debo hacerme un chequeo de sangre?

Las guías de prevención de Estados Unidos recomiendan revisar el colesterol cada 4 a 6 años a partir de los 20 años, la glucosa desde los 35 años o antes si hay sobrepeso o antecedentes familiares, y cada año si ya tienes diabetes, presión alta o colesterol alto. Un chequeo anual básico detecta problemas antes de que den síntomas.

## ¿Cuánto cuesta un análisis de sangre?

Cada examen tiene precio individual desde $[confirmar]; los paquetes de chequeo general, perfil hormonal y sangre con vitamina B12 aparecen en nuestras promociones vigentes. Pago en efectivo o tarjeta, sin seguro.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We run blood tests without an appointment or a doctor's order, with sample collection in the clinic and results explained in Spanish or English.** At Clínica Hispana Nueva Salud Lawndale we are open Monday to Sunday from 9 AM to 9 PM; the most common tests are delivered the same day [confirm which].

## Which tests do we run?

- **Complete blood count (CBC):** anemia, infections and platelets.
- **Comprehensive metabolic panel (CMP):** glucose, kidney, liver and electrolytes.
- **Lipid panel:** total cholesterol, LDL, HDL and triglycerides.
- **Hemoglobin A1C:** average glucose over the last 3 months.
- **Thyroid panel:** TSH, T3 and T4.
- **Others:** vitamin B12, vitamin D, uric acid, PSA, hormones, pregnancy, STDs and TB blood test.

If you don't know which test you need, the doctor guides you at the same visit based on your symptoms and age.

## Do I need to fast?

Yes for glucose, lipid panel and full metabolic panel: 8 to 12 hours without food, water only. For CBC, thyroid, A1C, B12 or PSA no fasting is needed. If you take medications, take them with water unless the doctor says otherwise.

## When are results ready?

Glucose, A1C, CBC and metabolic panel are usually ready the same day [confirm]. Hormone panels, vitamin D and special tests go to an outside lab and take [confirm] days. We call you when they are ready and explain each value at a visit or by phone.

## How often should I get blood work?

U.S. preventive guidelines recommend checking cholesterol every 4 to 6 years from age 20, glucose from age 35 or earlier with overweight or family history, and yearly if you already have diabetes, high blood pressure or high cholesterol. A basic annual checkup finds problems before they cause symptoms.

## How much does a blood test cost?

Each test is priced individually from $[confirm]; the general checkup, hormone panel and blood-plus-B12 packages appear in our current promotions. Cash and cards accepted, no insurance needed.

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
    dateModified: "2026-09-09",
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
    longDescription: `**El examen de heces detecta parásitos, infecciones intestinales y sangre oculta que no se ve a simple vista.** En Clínica Hispana Nueva Salud Lawndale recibes el frasco, entregas la muestra y te explicamos el resultado en español, sin cita y sin seguro.

## ¿Cuándo se necesita un examen de heces?

Cuando hay diarrea de más de 3 días, dolor o inflamación abdominal, gases persistentes, moco o sangre en las evacuaciones, pérdida de peso sin causa, o después de un viaje con sospecha de parásitos. También se pide para trámites de trabajo en cocinas y para revisar a los niños con dolor de estómago frecuente.

## ¿Qué pruebas hacemos?

- **Coproparasitoscópico:** busca huevos y parásitos como giardia, amebas, áscaris y oxiuros. Se recomienda en serie de 3 muestras de días distintos para mayor sensibilidad.
- **Coprocultivo:** identifica bacterias como salmonella, shigella o E. coli cuando hay fiebre o diarrea con sangre.
- **Sangre oculta en heces:** detecta sangrado del tubo digestivo que puede indicar úlceras, pólipos o, en mayores de 45 años, ser parte del tamizaje de cáncer de colon.
- **Examen general de heces:** consistencia, pH, grasa y leucocitos.

## ¿Cómo recoger la muestra?

1. Recoge la muestra en el frasco estéril que te damos, sin que toque el agua del inodoro ni la orina.
2. Llena aproximadamente un tercio del frasco.
3. Entrégala en la clínica dentro de las 2 horas; si no puedes, guárdala en el refrigerador un máximo de 24 horas.
4. Para sangre oculta, evita carne roja, ibuprofeno y vitamina C en dosis altas 3 días antes.

## ¿Cuándo llegan los resultados?

El examen general y el parasitoscópico tardan [confirmar] días; el coprocultivo [confirmar] días. Te llamamos con el resultado y, si hay parásito o infección, te damos la receta en la misma llamada o en consulta.

## ¿Cuánto cuesta?

El examen de heces cuesta $[confirmar]; la serie de 3 muestras y el coprocultivo tienen precios distintos que te informamos al entregar el frasco.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**A stool test detects parasites, intestinal infections and hidden blood that cannot be seen with the naked eye.** At Clínica Hispana Nueva Salud Lawndale you pick up the container, drop off the sample and we explain the result in Spanish or English, no appointment and no insurance needed.

## When is a stool test needed?

When diarrhea lasts more than 3 days, with abdominal pain or bloating, persistent gas, mucus or blood in the stool, unexplained weight loss, or after travel with suspected parasites. It is also required for food-handler paperwork and to check children with frequent stomach aches.

## Which tests do we run?

- **Ova and parasite exam:** looks for eggs and parasites such as giardia, amoebas, roundworms and pinworms. A series of 3 samples from different days is recommended for better sensitivity.
- **Stool culture:** identifies bacteria such as salmonella, shigella or E. coli when there is fever or bloody diarrhea.
- **Fecal occult blood:** detects bleeding in the digestive tract that may indicate ulcers, polyps or, over age 45, be part of colon cancer screening.
- **General stool exam:** consistency, pH, fat and white blood cells.

## How do I collect the sample?

1. Collect the stool in the sterile container we give you, without letting it touch toilet water or urine.
2. Fill about a third of the container.
3. Bring it to the clinic within 2 hours; if you can't, refrigerate it for a maximum of 24 hours.
4. For occult blood, avoid red meat, ibuprofen and high-dose vitamin C for 3 days beforehand.

## When are results ready?

The general exam and the parasite exam take [confirm] days; the stool culture [confirm] days. We call you with the result and, if there is a parasite or infection, we give you the prescription on that call or at a visit.

## How much does it cost?

A stool test costs $[confirm]; the 3-sample series and the culture have different prices that we tell you when you pick up the container.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "prueba-strep",
    dateModified: "2026-09-09",
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
    longDescription: `**La prueba rápida de estreptococo dice en 5 a 10 minutos si tu dolor de garganta es por la bacteria Streptococcus del grupo A, que necesita antibiótico.** En Clínica Hispana Nueva Salud Lawndale la hacemos sin cita a niños y adultos, todos los días de 9 AM a 9 PM.

## ¿Cómo sé si es estreptococo o un virus?

La faringitis por estreptococo suele dar dolor de garganta intenso de inicio brusco, fiebre de 38 °C o más, placas blancas en las amígdalas, ganglios inflamados en el cuello y, en niños, dolor de estómago o vómito. Si hay tos, mocos y ronquera, lo más probable es un virus, y el antibiótico no ayuda. Solo la prueba lo confirma.

## ¿Cómo se hace la prueba?

1. Pasamos un hisopo por las amígdalas y la parte de atrás de la garganta; toma unos segundos y puede dar náusea leve.
2. El resultado rápido está en 5 a 10 minutos.
3. Si es positivo, empiezas el antibiótico en la misma visita.
4. Si es negativo pero los síntomas son muy sugestivos, en niños y adolescentes enviamos un cultivo de garganta, que tarda [confirmar] días.

## ¿Cuál es el tratamiento?

Amoxicilina o penicilina por 10 días; si eres alérgico, otra alternativa. Después de 24 horas de antibiótico ya no contagias y puedes volver a la escuela o al trabajo si no tienes fiebre. Es importante terminar los 10 días aunque te sientas bien, para evitar complicaciones como fiebre reumática.

## ¿Cuándo venir el mismo día?

- Fiebre alta con dolor de garganta y sin tos
- Dificultad para tragar saliva o para abrir la boca
- Sarpullido rojo y áspero en el cuerpo (escarlatina)
- Un contacto en casa o en la escuela con estreptococo confirmado

## ¿Cuánto cuesta la prueba de estreptococo?

La consulta con prueba rápida cuesta $[confirmar]. El cultivo de garganta, si se necesita, tiene costo adicional.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**The rapid strep test tells you in 5 to 10 minutes whether your sore throat is caused by group A Streptococcus bacteria, which need antibiotics.** At Clínica Hispana Nueva Salud Lawndale we test children and adults without an appointment, every day from 9 AM to 9 PM.

## How do I know if it's strep or a virus?

Strep throat usually causes an intense sore throat that starts suddenly, fever of 100.4 °F or higher, white patches on the tonsils, swollen neck glands and, in children, stomach pain or vomiting. If there is cough, runny nose and hoarseness, a virus is more likely and antibiotics won't help. Only the test confirms it.

## How is the test done?

1. We swab the tonsils and the back of the throat; it takes seconds and may cause brief gagging.
2. The rapid result is ready in 5 to 10 minutes.
3. If positive, you start antibiotics at the same visit.
4. If negative but symptoms strongly suggest strep, in children and teens we send a throat culture, which takes [confirm] days.

## What is the treatment?

Amoxicillin or penicillin for 10 days; an alternative if you are allergic. After 24 hours of antibiotics you are no longer contagious and can return to school or work if you have no fever. Finishing all 10 days matters even if you feel fine, to prevent complications such as rheumatic fever.

## When should I come in the same day?

- High fever with sore throat and no cough
- Trouble swallowing saliva or opening the mouth
- A red, sandpaper-like rash on the body (scarlet fever)
- A household or school contact with confirmed strep

## How much does a strep test cost?

The visit with rapid test costs $[confirm]. A throat culture, if needed, has an additional cost.

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
    dateModified: "2026-09-09",
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
    longDescription: `**Realizamos el examen médico de inmigración (Formulario I-693) con un Civil Surgeon designado por USCIS y te entregamos el sobre sellado el mismo día en la mayoría de los casos.** En Clínica Hispana Nueva Salud Lawndale atendemos sin cita, en español, de lunes a domingo de 9 AM a 9 PM. Puedes verificar nuestra designación en la herramienta "Find a Doctor" de USCIS [confirmar nombre del Civil Surgeon].

## ¿Quién necesita el examen I-693?

Toda persona que solicita la residencia permanente (Green Card) desde dentro de Estados Unidos mediante el Formulario I-485, y en algunos casos de asilo, refugio o ajuste bajo programas especiales. Desde 2023, USCIS pide que el I-693 se presente junto con el I-485 o cuando el oficial lo solicite.

## ¿Qué incluye el examen?

1. **Revisión de historial médico** y examen físico general.
2. **Prueba de tuberculosis en sangre (IGRA)** para mayores de 2 años; si sale positiva, radiografía de tórax.
3. **Análisis de sangre para sífilis** (18 a 44 años) y **prueba de orina para gonorrea** (18 a 24 años).
4. **Revisión de vacunas** según tu edad: MMR, Tdap, varicela, hepatitis B, influenza en temporada y otras que apliquen. Aplicamos las que falten en la misma visita.
5. **Llenado y firma del Formulario I-693** (edición 01/20/2025) y entrega en sobre sellado.

El examen toma entre 1 y 2 horas. La prueba de tuberculosis tarda [confirmar] días, por lo que el sobre se entrega cuando llega ese resultado.

## ¿Qué debo traer?

- Pasaporte o identificación con foto vigente
- Cartilla o registros de vacunación, en cualquier idioma
- Historial médico relevante y lista de medicamentos
- Si tuviste tuberculosis o una prueba positiva antes: radiografías y tratamiento previos

## ¿Cuánto tiempo es válido el I-693?

Un I-693 firmado el 1 de noviembre de 2023 o después no tiene fecha de vencimiento fija: vale mientras la solicitud con la que lo presentaste siga pendiente. Si USCIS la niega o la retiras, necesitas un examen nuevo (política vigente desde el 11 de junio de 2025). No abras el sobre sellado: USCIS lo rechaza si llega abierto.

## ¿Cuánto cuesta el examen médico de inmigración?

El examen cuesta $[confirmar] e incluye la consulta, las pruebas de laboratorio requeridas y el formulario. Las vacunas que falten tienen costo aparte [confirmar]. Pago en efectivo o tarjeta.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We perform the immigration medical exam (Form I-693) with a USCIS-designated Civil Surgeon and hand you the sealed envelope the same day in most cases.** At Clínica Hispana Nueva Salud Lawndale we see you without an appointment, in Spanish or English, Monday to Sunday from 9 AM to 9 PM. You can verify our designation in the USCIS "Find a Doctor" tool [confirm Civil Surgeon name].

## Who needs the I-693 exam?

Anyone applying for permanent residence (Green Card) from inside the United States through Form I-485, and in some asylum, refugee or special-program adjustment cases. Since 2023, USCIS asks that the I-693 be filed together with the I-485 or when the officer requests it.

## What does the exam include?

1. **Medical history review** and general physical exam.
2. **TB blood test (IGRA)** for anyone over age 2; if positive, a chest X-ray.
3. **Syphilis blood test** (ages 18 to 44) and **gonorrhea urine test** (ages 18 to 24).
4. **Vaccine review** by age: MMR, Tdap, varicella, hepatitis B, seasonal flu and others that apply. We give any missing ones at the same visit.
5. **Completion and signature of Form I-693** (01/20/2025 edition) delivered in a sealed envelope.

The exam takes 1 to 2 hours. The TB test takes [confirm] days, so the envelope is delivered when that result arrives.

## What should I bring?

- Valid passport or photo ID
- Vaccination card or records, in any language
- Relevant medical history and list of medications
- If you had TB or a positive test before: previous X-rays and treatment records

## How long is the I-693 valid?

An I-693 signed on or after November 1, 2023 has no fixed expiration date: it stays valid while the application it was filed with is pending. If USCIS denies it or you withdraw it, you need a new exam (policy in effect since June 11, 2025). Do not open the sealed envelope: USCIS rejects it if it arrives opened.

## How much does the immigration medical exam cost?

The exam costs $[confirm] and includes the visit, the required lab tests and the form. Missing vaccines are billed separately [confirm]. Cash and cards accepted.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "vacunas",
    dateModified: "2026-09-09",
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
    longDescription: `**Aplicamos la vacuna contra la influenza (flu) y el toxoide tetánico (Td/Tdap) sin cita, a adultos y niños, todos los días de 9 AM a 9 PM.** En Clínica Hispana Nueva Salud Lawndale también revisamos y completamos las vacunas requeridas para el examen médico de inmigración I-693 [confirmar otras vacunas disponibles].

## ¿Cuándo debo ponerme la vacuna de la influenza?

Cada año, idealmente entre septiembre y octubre, antes de que empiece la temporada de gripe en Houston, que va de octubre a marzo. Se recomienda a partir de los 6 meses de edad, y en especial a mayores de 65 años, embarazadas, personas con diabetes, asma o enfermedades del corazón, y a quienes viven con ellas. La protección tarda unas 2 semanas en desarrollarse.

## ¿Cada cuánto se pone el tétanos?

Un refuerzo de Td o Tdap cada 10 años. Si tienes una herida sucia, profunda o con un objeto oxidado y tu última dosis fue hace más de 5 años, necesitas un refuerzo el mismo día. Tdap incluye protección contra tos ferina y se recomienda en cada embarazo, entre las semanas 27 y 36.

## ¿Qué vacunas pide USCIS para el I-693?

Según la edad: MMR (sarampión, paperas, rubéola), Tdap o Td, varicela, hepatitis B, influenza en temporada, polio y, en niños, las del esquema pediátrico. La vacuna contra COVID-19 ya no se exige desde el 20 de enero de 2025. Trae tu cartilla de vacunas en cualquier idioma: si tienes registro de una dosis, no la repetimos.

## ¿Qué debo traer?

- Identificación con foto
- Cartilla de vacunación o registro de ImmTrac2, si lo tienes
- Lista de alergias y medicamentos

## ¿Cuáles son los efectos secundarios?

Dolor o enrojecimiento en el brazo por 1 a 2 días, cansancio leve y a veces fiebre baja. No se puede contraer la gripe por la vacuna inyectable. No la aplicamos si tienes fiebre ese día o alergia grave confirmada a una dosis anterior.

## ¿Cuánto cuestan las vacunas?

Vacuna de influenza: $[confirmar]. Toxoide tetánico o Tdap: $[confirmar]. El precio incluye la aplicación y el registro de la dosis.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We give the influenza (flu) vaccine and tetanus toxoid (Td/Tdap) without an appointment, to adults and children, every day from 9 AM to 9 PM.** At Clínica Hispana Nueva Salud Lawndale we also review and complete the vaccines required for the I-693 immigration medical exam [confirm other vaccines available].

## When should I get the flu vaccine?

Every year, ideally in September or October, before Houston's flu season starts, which runs from October to March. It is recommended from 6 months of age, and especially for adults over 65, pregnant women, people with diabetes, asthma or heart disease, and those who live with them. Protection takes about 2 weeks to develop.

## How often do I need a tetanus shot?

A Td or Tdap booster every 10 years. If you have a dirty, deep or rusty-object wound and your last dose was more than 5 years ago, you need a booster the same day. Tdap includes whooping cough protection and is recommended during every pregnancy, between weeks 27 and 36.

## Which vaccines does USCIS require for the I-693?

By age: MMR (measles, mumps, rubella), Tdap or Td, varicella, hepatitis B, seasonal flu, polio and, for children, the pediatric schedule. The COVID-19 vaccine is no longer required since January 20, 2025. Bring your vaccination card in any language: if you have a record of a dose, we don't repeat it.

## What should I bring?

- Photo ID
- Vaccination card or ImmTrac2 record, if you have one
- List of allergies and medications

## What are the side effects?

Arm soreness or redness for 1 to 2 days, mild tiredness and sometimes a low fever. You cannot get the flu from the injectable vaccine. We don't give it if you have a fever that day or a confirmed severe allergy to a previous dose.

## How much do vaccines cost?

Flu vaccine: $[confirm]. Tetanus toxoid or Tdap: $[confirm]. The price includes administration and dose registration.

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
    dateModified: "2026-09-09",
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
    longDescription: `**Limpiamos, desinfectamos y vendamos heridas, quemaduras leves y úlceras, y hacemos las curaciones de seguimiento hasta que cierran.** En Clínica Hispana Nueva Salud Lawndale atendemos sin cita, todos los días de 9 AM a 9 PM, en español y sin seguro.

## ¿Qué heridas atendemos?

- Cortadas y raspones que no necesitan puntos, o después de suturarlos
- Heridas postoperatorias que requieren cambio de vendaje
- Quemaduras de primer grado y de segundo grado pequeñas (menores que la palma de la mano)
- Úlceras de pie diabético y úlceras por presión en etapa inicial
- Heridas infectadas que necesitan limpieza y antibiótico

Quemaduras grandes, heridas profundas con sangrado que no para, o heridas en cara o articulaciones con pérdida de movimiento van a la sala de emergencias.

## ¿Cómo es una curación?

1. Retiramos el vendaje anterior y evaluamos el tamaño, la profundidad y los signos de infección.
2. Limpiamos con suero fisiológico y retiramos tejido muerto si lo hay.
3. Aplicamos el apósito adecuado: hidrocoloide, alginato, gasa con antibiótico o vendaje simple, según la herida.
4. Te damos instrucciones por escrito y la fecha de la siguiente curación, normalmente cada 2 a 3 días.

## ¿Necesito la vacuna del tétanos?

Sí, si tu última dosis fue hace más de 10 años, o hace más de 5 años y la herida está sucia o fue con un objeto oxidado. La aplicamos en la misma visita.

## ¿Cómo cuidar la herida en casa?

Lávate las manos antes de tocarla, mantén el vendaje limpio y seco, no uses alcohol ni agua oxigenada directamente sobre la herida porque retrasan la cicatrización, y no revientes las ampollas de una quemadura. Si tienes diabetes, revisa tus pies a diario.

## ¿Cuándo volver antes de la fecha?

Si aparece pus, mal olor, enrojecimiento que se extiende más de 2 centímetros del borde, fiebre, o si la herida no mejora en 7 días.

## ¿Cuánto cuesta?

La primera curación con evaluación cuesta $[confirmar]; las curaciones de seguimiento tienen un precio menor [confirmar]. El material está incluido.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We clean, disinfect and dress wounds, minor burns and ulcers, and do follow-up dressing changes until they close.** At Clínica Hispana Nueva Salud Lawndale we see you without an appointment, every day from 9 AM to 9 PM, in Spanish or English and without insurance.

## Which wounds do we treat?

- Cuts and scrapes that don't need stitches, or after stitching
- Post-surgical wounds that need dressing changes
- First-degree burns and small second-degree burns (smaller than the palm of the hand)
- Diabetic foot ulcers and early-stage pressure ulcers
- Infected wounds that need cleaning and antibiotics

Large burns, deep wounds with bleeding that won't stop, or wounds on the face or joints with loss of movement belong in the emergency room.

## What does wound care involve?

1. We remove the old dressing and assess size, depth and signs of infection.
2. We clean with saline and remove dead tissue if present.
3. We apply the right dressing: hydrocolloid, alginate, antibiotic gauze or a simple bandage, depending on the wound.
4. You get written instructions and the date of the next dressing change, usually every 2 to 3 days.

## Do I need a tetanus shot?

Yes, if your last dose was more than 10 years ago, or more than 5 years ago and the wound is dirty or was caused by a rusty object. We give it during the same visit.

## How do I care for the wound at home?

Wash your hands before touching it, keep the dressing clean and dry, don't put alcohol or hydrogen peroxide directly on the wound because they slow healing, and don't pop burn blisters. If you have diabetes, check your feet every day.

## When should I come back early?

If there is pus, a bad smell, redness spreading more than 2 centimeters from the edge, fever, or if the wound is not improving after 7 days.

## How much does it cost?

The first visit with evaluation costs $[confirm]; follow-up dressing changes have a lower price [confirm]. Supplies are included.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "cirugias-menores",
    dateModified: "2026-09-09",
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
    longDescription: `**Retiramos lunares, quistes sebáceos, lipomas, verrugas y otras lesiones de piel en un procedimiento ambulatorio de 20 a 45 minutos con anestesia local.** En Clínica Hispana Nueva Salud Lawndale lo hace personal médico, en español, y sales caminando el mismo día.

## ¿Qué procedimientos hacemos?

- **Quistes sebáceos y epidermoides:** extracción completa con su cápsula para que no vuelvan a salir.
- **Lipomas:** bultos de grasa bajo la piel, generalmente en espalda, brazos o cuello.
- **Lunares y verrugas:** retiro por rasurado o extirpación; si el lunar tiene aspecto sospechoso se envía a biopsia.
- **Uñas encarnadas, abscesos y suturas:** ver sus páginas específicas.

No hacemos procedimientos que requieran anestesia general ni lesiones en la cara que precisen cirujano plástico; en esos casos te referimos.

## ¿Cómo es la visita?

1. El médico revisa la lesión, su tamaño y su ubicación, y decide si se puede retirar en clínica.
2. Se limpia la zona y se aplica anestesia local; solo sientes el piquete inicial.
3. Se retira la lesión y, si hace falta, se cierra con puntos.
4. Recibes indicaciones por escrito y la fecha para retirar los puntos, normalmente entre 7 y 14 días.

## ¿Cuándo conviene retirar un lunar?

Cuando cambia de tamaño, color o forma, tiene bordes irregulares, mide más de 6 milímetros, sangra o pica. Estas señales no siempre son cáncer, pero justifican retirarlo y analizarlo. El resultado de la biopsia tarda [confirmar] días.

## ¿Qué cuidados necesito después?

Mantén la herida seca 24 a 48 horas, cambia el vendaje a diario y evita esfuerzo con esa parte del cuerpo hasta retirar los puntos. Acude si hay sangrado abundante, pus, fiebre o enrojecimiento que crece.

## ¿Cuánto cuesta una cirugía menor?

El precio depende del tipo y tamaño de la lesión: desde $[confirmar]. Incluye anestesia, material, retiro de puntos y, si aplica, el envío a biopsia [confirmar si la biopsia tiene costo aparte].

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `**We remove moles, sebaceous cysts, lipomas, warts and other skin lesions in an outpatient procedure of 20 to 45 minutes under local anesthesia.** At Clínica Hispana Nueva Salud Lawndale it is done by medical staff, in Spanish or English, and you walk out the same day.

## Which procedures do we perform?

- **Sebaceous and epidermoid cysts:** complete removal with the capsule so they don't come back.
- **Lipomas:** fatty lumps under the skin, usually on the back, arms or neck.
- **Moles and warts:** shave or excision removal; a suspicious-looking mole is sent for biopsy.
- **Ingrown toenails, abscesses and stitches:** see their own pages.

We do not perform procedures that require general anesthesia or facial lesions that need a plastic surgeon; in those cases we refer you.

## What is the visit like?

1. The doctor examines the lesion, its size and location, and decides whether it can be removed in clinic.
2. The area is cleaned and local anesthesia is applied; you only feel the initial pinch.
3. The lesion is removed and, if needed, closed with stitches.
4. You receive written instructions and the date to remove the stitches, usually 7 to 14 days later.

## When should a mole be removed?

When it changes in size, color or shape, has irregular edges, measures more than 6 millimeters, bleeds or itches. These signs are not always cancer, but they justify removing and analyzing it. Biopsy results take [confirm] days.

## What care do I need afterwards?

Keep the wound dry for 24 to 48 hours, change the dressing daily and avoid strain on that body part until the stitches are out. Come in if there is heavy bleeding, pus, fever or spreading redness.

## How much does minor surgery cost?

The price depends on the type and size of the lesion: from $[confirm]. It includes anesthesia, supplies, stitch removal and, when applicable, sending the sample for biopsy [confirm whether biopsy is billed separately].

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

