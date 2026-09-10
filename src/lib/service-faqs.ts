interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQs {
  faqs: FAQ[];
  faqsEn: FAQ[];
}

export const SERVICE_FAQS: Record<string, ServiceFAQs> = {
  "condiciones-cronicas": {
    faqs: [
      { question: "¿Cada cuánto debo revisarme si tengo diabetes?", answer: "A1C cada 3 meses hasta alcanzar la meta y luego cada 6 meses; perfil de lípidos y riñón cada año; pies en cada consulta y retina una vez al año." },
      { question: "¿Puedo controlar la presión alta sin medicamentos?", answer: "En casos leves, sí: menos sal, bajar de peso, ejercicio y limitar el alcohol pueden bajar 5 a 10 puntos. Si la presión sigue en 130/80 o más, el medicamento previene daños." },
      { question: "¿Dan recetas de medicamentos genéricos?", answer: "Sí. Recetamos genéricos de bajo costo para diabetes, presión y colesterol, y te indicamos dónde conseguirlos al mejor precio." },
    ],
    faqsEn: [
      { question: "How often should I get checked if I have diabetes?", answer: "A1C every 3 months until you reach your goal and then every 6 months; lipid panel and kidney function yearly; feet at every visit and retina once a year." },
      { question: "Can I control high blood pressure without medication?", answer: "In mild cases, yes: less salt, weight loss, exercise and limiting alcohol can lower it 5 to 10 points. If it stays at 130/80 or higher, medication prevents damage." },
      { question: "Do you prescribe generic medications?", answer: "Yes. We prescribe low-cost generics for diabetes, blood pressure and cholesterol, and tell you where to get them at the best price." },
    ],
  },
  "tiroides": {
    faqs: [
      { question: "¿Necesito ayuno para el examen de tiroides?", answer: "No. TSH, T4 y T3 se pueden tomar a cualquier hora. Si ya tomas levotiroxina, toma la muestra antes de la pastilla del día." },
      { question: "¿Cada cuánto se revisa la TSH con tratamiento?", answer: "Cada 6 a 8 semanas al inicio o tras cambiar la dosis, y cada 6 a 12 meses cuando ya está estable." },
      { question: "¿El hipotiroidismo se cura?", answer: "La mayoría de los casos son permanentes y se controlan de por vida con levotiroxina. Con la dosis correcta los síntomas desaparecen y la vida es normal." },
    ],
    faqsEn: [
      { question: "Do I need to fast for a thyroid test?", answer: "No. TSH, T4 and T3 can be drawn at any time. If you already take levothyroxine, have the sample taken before that day's pill." },
      { question: "How often is TSH checked during treatment?", answer: "Every 6 to 8 weeks at the start or after a dose change, and every 6 to 12 months once stable." },
      { question: "Can hypothyroidism be cured?", answer: "Most cases are permanent and controlled for life with levothyroxine. With the right dose, symptoms disappear and life is normal." },
    ],
  },
  "alergias": {
    faqs: [
      { question: "¿Hacen pruebas de alergia en la piel?", answer: "No hacemos pruebas cutáneas de punción. Ofrecemos análisis de sangre para los alérgenos más comunes y, si necesitas pruebas cutáneas, te referimos a un alergólogo." },
      { question: "¿Qué antihistamínico no da sueño?", answer: "Los de segunda generación como loratadina, cetirizina o fexofenadina. El médico elige según tu edad, otros medicamentos y si estás embarazada." },
      { question: "¿Cuándo es una emergencia una alergia?", answer: "Si hay dificultad para respirar, hinchazón de labios, lengua o garganta, o mareo intenso. Llama al 911; no esperes a venir a la clínica." },
    ],
    faqsEn: [
      { question: "Do you do skin allergy tests?", answer: "We do not perform skin prick tests. We offer blood tests for the most common allergens and, if you need skin tests, we refer you to an allergist." },
      { question: "Which antihistamine won't make me drowsy?", answer: "Second-generation ones such as loratadine, cetirizine or fexofenadine. The doctor chooses based on your age, other medications and pregnancy." },
      { question: "When is an allergic reaction an emergency?", answer: "When there is difficulty breathing, swelling of the lips, tongue or throat, or severe dizziness. Call 911; do not wait to come to the clinic." },
    ],
  },
  "enfermedades-respiratorias": {
    faqs: [
      { question: "¿Cuánto tarda la prueba de flu y COVID?", answer: "15 minutos. Es un hisopado nasal que detecta influenza A, influenza B y COVID-19 en la misma muestra." },
      { question: "¿Dan justificante médico para el trabajo?", answer: "Sí. Si la consulta lo justifica, te entregamos una nota médica con los días de reposo el mismo día." },
      { question: "¿Cuándo sirve el antiviral para la gripe?", answer: "Cuando se empieza en las primeras 48 horas de síntomas. Reduce la duración y el riesgo de complicaciones, sobre todo en mayores de 65, embarazadas y personas con asma o diabetes." },
    ],
    faqsEn: [
      { question: "How long does the flu and COVID test take?", answer: "15 minutes. It is a nasal swab that detects influenza A, influenza B and COVID-19 from the same sample." },
      { question: "Do you provide a doctor's note for work?", answer: "Yes. If the visit justifies it, we give you a medical note with the days of rest the same day." },
      { question: "When does the flu antiviral help?", answer: "When started within the first 48 hours of symptoms. It shortens the illness and lowers the risk of complications, especially for adults over 65, pregnant women and people with asthma or diabetes." },
    ],
  },
  "examen-fisico-escolar": {
    faqs: [
      { question: "¿Hacen el examen físico de la UIL para deportes?", answer: "Sí. Trae el formulario de la UIL con la parte del historial llenada por los padres; lo completamos y firmamos en la misma visita." },
      { question: "¿Cuánto tarda el examen físico escolar?", answer: "Entre 20 y 30 minutos. Sales con el formulario firmado el mismo día." },
      { question: "¿El niño tiene que venir con un adulto?", answer: "Sí, un padre o tutor debe acompañar a los menores de 18 años y firmar el consentimiento y la parte del historial del formulario." },
    ],
    faqsEn: [
      { question: "Do you do the UIL sports physical?", answer: "Yes. Bring the UIL form with the history section completed by the parents; we finish and sign it at the same visit." },
      { question: "How long does a school physical take?", answer: "20 to 30 minutes. You leave with the signed form the same day." },
      { question: "Does the child need to come with an adult?", answer: "Yes, a parent or guardian must accompany anyone under 18 and sign the consent and the history section of the form." },
    ],
  },
  "ginecologia": {
    faqs: [
      { question: "¿A partir de qué edad y cada cuánto se hace el papanicolaou?", answer: "Desde los 21 años. De 21 a 29 cada 3 años; de 30 a 65 cada 3 años, o cada 5 si se combina con la prueba de VPH. Con resultados anormales previos, el intervalo es más corto." },
      { question: "¿Puedo hacerme el papanicolaou si tengo la regla?", answer: "Es mejor esperar a que termine, porque la sangre puede alterar la muestra. Si tienes síntomas de infección, ven de todos modos y te atendemos el mismo día." },
      { question: "¿Cuánto tardan los resultados del cultivo vaginal?", answer: "Unos días, porque se procesa en laboratorio. Te llamamos con el resultado y, si hay infección, te enviamos la receta sin necesidad de otra consulta." },
    ],
    faqsEn: [
      { question: "At what age and how often should I get a Pap smear?", answer: "From age 21. Ages 21 to 29 every 3 years; ages 30 to 65 every 3 years, or every 5 years combined with an HPV test. With previous abnormal results, the interval is shorter." },
      { question: "Can I get a Pap smear during my period?", answer: "It is better to wait until it ends, because blood can affect the sample. If you have infection symptoms, come anyway and we see you the same day." },
      { question: "How long do vaginal culture results take?", answer: "A few days, because it is processed at the lab. We call you with the result and, if there is an infection, we send the prescription without another visit." },
    ],
  },
  "prueba-embarazo": {
    faqs: [
      { question: "¿Desde cuándo detecta el embarazo la prueba de sangre?", answer: "Desde 7 a 10 días después de la concepción, antes del retraso de la regla. La de orina es confiable desde el primer día de retraso." },
      { question: "¿Me dan una constancia de embarazo?", answer: "Sí, el mismo día, con las semanas de gestación y la fecha probable de parto, válida para trabajo, escuela, Medicaid o WIC." },
      { question: "¿Hacen ultrasonido para confirmar el embarazo?", answer: "A partir de las 6 semanas se puede ver el saco y el latido. Antes de eso, la prueba de sangre es el método más preciso." },
    ],
    faqsEn: [
      { question: "How early does the blood test detect pregnancy?", answer: "From 7 to 10 days after conception, before a missed period. The urine test is reliable from the first day of a missed period." },
      { question: "Do you give a proof of pregnancy letter?", answer: "Yes, the same day, with weeks of gestation and due date, valid for work, school, Medicaid or WIC." },
      { question: "Do you do an ultrasound to confirm pregnancy?", answer: "From 6 weeks on, the sac and heartbeat can be seen. Before that, the blood test is the most accurate method." },
    ],
  },
  "anticonceptivos": {
    faqs: [
      { question: "¿Puedo empezar la inyección anticonceptiva el mismo día?", answer: "Sí. Si estás en los primeros 7 días de tu regla protege de inmediato; si no, usa condón 7 días. Hacemos prueba de embarazo antes si hay dudas." },
      { question: "¿Qué método puedo usar si estoy amamantando?", answer: "La minipíldora, la inyección, el implante o el DIU. Las pastillas combinadas con estrógeno se evitan las primeras 6 semanas después del parto." },
      { question: "¿Los anticonceptivos hormonales engordan?", answer: "Las pastillas, el parche y el anillo no producen aumento de peso significativo en los estudios. La inyección puede asociarse a un aumento de 2 a 3 kilos en algunas mujeres." },
    ],
    faqsEn: [
      { question: "Can I start the birth control shot the same day?", answer: "Yes. If you are within the first 7 days of your period it protects right away; if not, use condoms for 7 days. We do a pregnancy test first if there is any doubt." },
      { question: "Which method can I use while breastfeeding?", answer: "The minipill, the shot, the implant or an IUD. Combined pills with estrogen are avoided for the first 6 weeks after delivery." },
      { question: "Does hormonal birth control cause weight gain?", answer: "Pills, the patch and the ring do not cause significant weight gain in studies. The shot may be linked to a 4 to 6 pound gain in some women." },
    ],
  },
  "extraccion-implantes": {
    faqs: [
      { question: "¿Duele retirar el implante?", answer: "Solo el piquete de la anestesia local. Después de eso sientes presión, no dolor. La molestia leve del brazo dura unos días." },
      { question: "¿Cuándo puedo quedar embarazada después de retirarlo?", answer: "Desde la primera semana. Si no quieres embarazarte, empieza otro método el mismo día del retiro." },
      { question: "¿Qué pasa si el implante no se siente en el brazo?", answer: "No intentamos retirarlo a ciegas: te referimos a un ultrasonido para localizarlo y evitar dañar nervios o vasos." },
    ],
    faqsEn: [
      { question: "Does implant removal hurt?", answer: "Only the pinch of the local anesthetic. After that you feel pressure, not pain. Mild arm soreness lasts a few days." },
      { question: "How soon can I get pregnant after removal?", answer: "As early as the first week. If you don't want to get pregnant, start another method the same day it is removed." },
      { question: "What if the implant cannot be felt in the arm?", answer: "We do not attempt a blind removal: we refer you for an ultrasound to locate it and avoid damaging nerves or vessels." },
    ],
  },
  "salud-hombre": {
    faqs: [
      { question: "¿A qué edad debo hacerme el PSA?", answer: "Conversa con el médico sobre la prueba a partir de los 50 años, o desde los 45 si tu padre o hermano tuvieron cáncer de próstata. Con síntomas urinarios, a cualquier edad." },
      { question: "¿A qué hora se toma la muestra de testosterona?", answer: "Entre 7 y 10 de la mañana, en ayunas, porque el nivel baja durante el día. Un resultado bajo se confirma con una segunda muestra otro día." },
      { question: "¿El PSA alto significa cáncer?", answer: "No siempre. La próstata crecida, una infección o la eyaculación reciente también lo suben. Si está alto se repite y, si persiste, te referimos a urología." },
    ],
    faqsEn: [
      { question: "At what age should I get a PSA test?", answer: "Talk with the doctor about the test from age 50, or from 45 if your father or brother had prostate cancer. With urinary symptoms, at any age." },
      { question: "What time is the testosterone sample drawn?", answer: "Between 7 and 10 AM, fasting, because the level drops during the day. A low result is confirmed with a second sample on another day." },
      { question: "Does a high PSA mean cancer?", answer: "Not always. An enlarged prostate, an infection or recent ejaculation also raise it. If it is high we repeat it and, if it stays high, refer you to urology." },
    ],
  },
  "examenes-sangre": {
    faqs: [
      { question: "¿Necesito orden médica para hacerme análisis de sangre?", answer: "No. Puedes venir sin orden y el médico te indica qué exámenes convienen según tus síntomas, tu edad y tus antecedentes." },
      { question: "¿Cuántas horas de ayuno necesito?", answer: "Entre 8 y 12 horas para glucosa, colesterol y química completa. Puedes tomar agua. Biometría, tiroides, A1C y B12 no requieren ayuno." },
      { question: "¿Me explican los resultados?", answer: "Sí. Te llamamos cuando estén listos y el médico te explica cada valor en español, en consulta o por teléfono, y te dice si necesitas tratamiento." },
    ],
    faqsEn: [
      { question: "Do I need a doctor's order for blood tests?", answer: "No. You can walk in without an order and the doctor tells you which tests make sense for your symptoms, age and history." },
      { question: "How many hours do I need to fast?", answer: "8 to 12 hours for glucose, cholesterol and a full metabolic panel. Water is fine. CBC, thyroid, A1C and B12 need no fasting." },
      { question: "Will you explain my results?", answer: "Yes. We call you when they are ready and the doctor explains each value in Spanish or English, at a visit or by phone, and tells you whether you need treatment." },
    ],
  },
  "infecciones-urinarias": {
    faqs: [
      { question: "¿Cuánto tarda el resultado del examen de orina?", answer: "Minutos. Hacemos la tira reactiva y el microscopio en la clínica, así que el médico decide el tratamiento en la misma visita." },
      { question: "¿Cuándo hace falta un urocultivo?", answer: "Cuando la infección se repite, no mejora en 72 horas, o si estás embarazada, eres hombre o tienes diabetes. Tarda unos días e indica el antibiótico más efectivo." },
      { question: "¿Una infección urinaria se quita sola?", answer: "Rara vez, y sin tratamiento puede subir al riñón. Con fiebre, escalofríos o dolor en la espalda baja, ven el mismo día." },
    ],
    faqsEn: [
      { question: "How long does the urine test take?", answer: "Minutes. We do the dipstick and microscope test in the clinic, so the doctor decides the treatment during the same visit." },
      { question: "When is a urine culture needed?", answer: "When the infection keeps coming back, does not improve within 72 hours, or if you are pregnant, male or diabetic. It takes a few days and shows the most effective antibiotic." },
      { question: "Does a UTI go away on its own?", answer: "Rarely, and without treatment it can spread to the kidney. With fever, chills or lower back pain, come in the same day." },
    ],
  },
  "examen-heces": {
    faqs: [
      { question: "¿Cuánto tiempo puedo guardar la muestra de heces?", answer: "Entrégala dentro de 2 horas. Si no puedes, en el refrigerador aguanta hasta 24 horas; nunca la congeles." },
      { question: "¿Necesito 3 muestras para el examen de parásitos?", answer: "Una muestra detecta la mayoría de los casos, pero los parásitos se eliminan de forma intermitente; la serie de 3 muestras en días distintos aumenta la sensibilidad." },
      { question: "¿El examen de heces detecta cáncer de colon?", answer: "La prueba de sangre oculta detecta sangrado que puede venir de pólipos o tumores. Un resultado positivo no confirma cáncer, pero sí requiere una colonoscopia, a la que te referimos." },
    ],
    faqsEn: [
      { question: "How long can I keep the stool sample?", answer: "Bring it within 2 hours. If you can't, it keeps in the refrigerator for up to 24 hours; never freeze it." },
      { question: "Do I need 3 samples for the parasite test?", answer: "One sample detects most cases, but parasites are shed intermittently; a series of 3 samples on different days increases sensitivity." },
      { question: "Does a stool test detect colon cancer?", answer: "The occult blood test detects bleeding that may come from polyps or tumors. A positive result does not confirm cancer, but it does require a colonoscopy, which we refer you for." },
    ],
  },
  "prueba-strep": {
    faqs: [
      { question: "¿Cuánto tarda el resultado de la prueba de estreptococo?", answer: "Entre 5 y 10 minutos. Si es positivo, sales con la receta en la misma visita." },
      { question: "¿Cuándo puedo volver a la escuela o al trabajo?", answer: "Después de 24 horas de antibiótico y sin fiebre ya no contagias." },
      { question: "¿Los adultos también pueden tener estreptococo?", answer: "Sí, aunque es más frecuente entre 5 y 15 años. En adultos con dolor de garganta fuerte, fiebre y sin tos también hacemos la prueba." },
    ],
    faqsEn: [
      { question: "How long does the strep test take?", answer: "Between 5 and 10 minutes. If positive, you leave with the prescription at the same visit." },
      { question: "When can I go back to school or work?", answer: "After 24 hours of antibiotics and with no fever you are no longer contagious." },
      { question: "Can adults get strep throat too?", answer: "Yes, although it is most common between ages 5 and 15. We also test adults with a severe sore throat, fever and no cough." },
    ],
  },
  "prueba-tuberculosis": {
    faqs: [
      { question: "¿Cuándo tengo que volver para la lectura de la PPD?", answer: "Entre 48 y 72 horas después de la aplicación. Si pasan más de 72 horas sin lectura, hay que repetir la prueba." },
      { question: "¿Me vacunaron con BCG de niño, cuál prueba me conviene?", answer: "La prueba en sangre (IGRA). La vacuna BCG puede dar falso positivo en la PPD, pero no afecta la prueba en sangre." },
      { question: "¿Qué prueba de tuberculosis pide USCIS para el I-693?", answer: "La prueba en sangre IGRA para mayores de 2 años. Si sale positiva, se necesita una radiografía de tórax antes de completar el formulario." },
    ],
    faqsEn: [
      { question: "When do I come back for the PPD reading?", answer: "Between 48 and 72 hours after placement. If more than 72 hours pass without a reading, the test must be repeated." },
      { question: "I got the BCG vaccine as a child, which test should I take?", answer: "The blood test (IGRA). The BCG vaccine can cause a false positive on the PPD, but it does not affect the blood test." },
      { question: "Which TB test does USCIS require for the I-693?", answer: "The IGRA blood test for anyone over 2. If positive, a chest X-ray is required before the form can be completed." },
    ],
  },
  "enfermedades-transmision-sexual": {
    faqs: [
      { question: "¿Cuánto tiempo después de la relación puedo hacerme la prueba?", answer: "Gonorrea y clamidia desde 1 a 2 semanas; VIH con prueba de laboratorio desde 2 a 4 semanas; sífilis desde 3 a 6 semanas. Si fue antes, repetimos la prueba." },
      { question: "¿Los resultados son confidenciales?", answer: "Sí. Solo tú recibes el resultado, en persona o al teléfono que indiques. No compartimos información con empleadores ni con inmigración." },
      { question: "¿Mi pareja también tiene que tratarse?", answer: "Sí. Si no se trata, te vuelves a infectar. Podemos atender a tu pareja el mismo día, sin cita." },
    ],
    faqsEn: [
      { question: "How long after sex can I get tested?", answer: "Gonorrhea and chlamydia from 1 to 2 weeks; HIV with a lab test from 2 to 4 weeks; syphilis from 3 to 6 weeks. If it was earlier, we repeat the test." },
      { question: "Are results confidential?", answer: "Yes. Only you receive the result, in person or at the phone number you provide. We do not share information with employers or immigration." },
      { question: "Does my partner need treatment too?", answer: "Yes. If they are not treated, you get reinfected. We can see your partner the same day, no appointment needed." },
    ],
  },
  "examen-alcohol-drogas": {
    faqs: [
      { question: "¿Cuánto tarda el resultado de la prueba de drogas?", answer: "El resultado rápido en orina está en 10 a 15 minutos. Una confirmación de laboratorio, si se requiere, tarda unos días." },
      { question: "¿Hacen pruebas de drogas para DOT?", answer: "Sí, la prueba rápida en la misma visita del examen físico DOT. Trae el formulario de tu empresa y dinos si exige cadena de custodia federal." },
      { question: "¿Mis medicamentos recetados pueden dar positivo?", answer: "Sí, algunos analgésicos, ansiolíticos y medicamentos para el TDAH. Trae la receta y lo dejamos documentado en el resultado." },
    ],
    faqsEn: [
      { question: "How long does a drug test take?", answer: "The rapid urine result is ready in 10 to 15 minutes. Lab confirmation, if required, takes a few days." },
      { question: "Do you do DOT drug testing?", answer: "Yes, the rapid test at the same visit as the DOT physical. Bring your company's form and let us know if it requires federal chain of custody." },
      { question: "Can my prescription medications test positive?", answer: "Yes, some painkillers, anxiety medications and ADHD medications. Bring the prescription and we document it with the result." },
    ],
  },
  "electrocardiograma": {
    faqs: [
      { question: "¿El electrocardiograma duele?", answer: "No. Solo se colocan electrodos adhesivos en la piel; no hay agujas ni corriente. Dura unos 5 minutos." },
      { question: "¿Me entregan el resultado el mismo día?", answer: "Sí. El médico interpreta el trazado en la misma consulta y te da una copia impresa para tu expediente o tu empleador." },
      { question: "¿Un EKG normal descarta problemas del corazón?", answer: "Descarta arritmias e infartos en ese momento, pero no obstrucciones de las arterias en reposo. Con síntomas persistentes te referimos a una prueba de esfuerzo." },
    ],
    faqsEn: [
      { question: "Does an EKG hurt?", answer: "No. Only adhesive electrodes are placed on the skin; there are no needles or current. It takes about 5 minutes." },
      { question: "Do I get the result the same day?", answer: "Yes. The doctor interprets the tracing at the same visit and gives you a printed copy for your records or employer." },
      { question: "Does a normal EKG rule out heart problems?", answer: "It rules out arrhythmias and a heart attack at that moment, but not artery blockages at rest. With persistent symptoms we refer you for a stress test." },
    ],
  },
  "ultrasonido": {
    faqs: [
      { question: "¿Necesito ayuno para el ultrasonido abdominal?", answer: "Sí, de 6 a 8 horas, para que la vesícula esté llena y se vea bien. Puedes tomar agua." },
      { question: "¿Desde qué semana se ve el embarazo en el ultrasonido?", answer: "Desde las 6 semanas se ve el saco y el latido. Antes de eso, la prueba de sangre es más confiable." },
      { question: "¿El ultrasonido usa radiación?", answer: "No. Usa ondas de sonido, es seguro en el embarazo y se puede repetir sin riesgo." },
    ],
    faqsEn: [
      { question: "Do I need to fast for an abdominal ultrasound?", answer: "Yes, 6 to 8 hours, so the gallbladder is full and clearly visible. Water is fine." },
      { question: "From which week can pregnancy be seen on ultrasound?", answer: "From 6 weeks the sac and heartbeat are visible. Before that, the blood test is more reliable." },
      { question: "Does ultrasound use radiation?", answer: "No. It uses sound waves, is safe in pregnancy and can be repeated without risk." },
    ],
  },
  "examen-dot": {
    faqs: [
      { question: "¿El examen DOT incluye la prueba de drogas?", answer: "No. Son procesos separados: el examen DOT es físico. Si tu empresa también pide prueba de alcohol y drogas, la hacemos en la misma visita." },
      { question: "¿Puedo hacer el examen DOT si tengo diabetes?", answer: "Sí, si la controlas con dieta o pastillas. Si usas insulina, trae el formulario MCSA-5870 firmado por tu médico y podrás certificarte por hasta 1 año." },
      { question: "¿Cuánto dura el certificado DOT?", answer: "Hasta 2 años con presión y salud normales. Con presión alta controlada o diabetes suele ser de 1 año. Desde junio de 2025 el resultado se envía electrónicamente a la FMCSA y al Texas DPS." },
    ],
    faqsEn: [
      { question: "Does the DOT physical include a drug test?", answer: "No. They are separate: the DOT physical is a medical exam. If your company also requires alcohol and drug testing, we do it during the same visit." },
      { question: "Can I pass the DOT physical if I have diabetes?", answer: "Yes, if it is controlled with diet or pills. If you use insulin, bring form MCSA-5870 signed by your doctor and you can be certified for up to 1 year." },
      { question: "How long is the DOT certificate valid?", answer: "Up to 2 years with normal blood pressure and health. With controlled high blood pressure or diabetes it is usually 1 year. Since June 2025 the result is sent electronically to the FMCSA and Texas DPS." },
    ],
  },
  "examenes-inmigracion": {
    faqs: [
      { question: "¿Cómo verifico que el médico es Civil Surgeon autorizado?", answer: "En la herramienta oficial \"Find a Doctor\" de uscis.gov, buscando por código postal 77023. Solo un Civil Surgeon designado puede firmar el I-693." },
      { question: "¿El examen I-693 se entrega el mismo día?", answer: "El examen físico y las vacunas se hacen el mismo día. El sobre sellado se entrega cuando llega el resultado de la prueba de tuberculosis, en unos días." },
      { question: "¿Necesito la vacuna contra COVID-19 para el I-693?", answer: "No. Desde el 20 de enero de 2025 USCIS ya no la exige. Sí revisamos MMR, Tdap, varicela, hepatitis B e influenza en temporada." },
    ],
    faqsEn: [
      { question: "How do I verify the doctor is an authorized Civil Surgeon?", answer: "In the official USCIS \"Find a Doctor\" tool on uscis.gov, searching by ZIP code 77023. Only a designated Civil Surgeon can sign the I-693." },
      { question: "Is the I-693 delivered the same day?", answer: "The physical exam and vaccines are done the same day. The sealed envelope is delivered when the TB test result arrives, in a few days." },
      { question: "Do I need the COVID-19 vaccine for the I-693?", answer: "No. Since January 20, 2025 USCIS no longer requires it. We do review MMR, Tdap, varicella, hepatitis B and seasonal flu." },
    ],
  },
  "vacunas": {
    faqs: [
      { question: "¿En qué mes conviene ponerse la vacuna de la gripe?", answer: "En septiembre u octubre, antes de la temporada que en Houston va de octubre a marzo. Si se te pasó, vale la pena ponerla en cualquier mes de la temporada." },
      { question: "¿Necesito el tétanos si me corté con algo oxidado?", answer: "Si tu última dosis fue hace más de 5 años, sí, el mismo día. Si fue hace más de 10 años, lo necesitas aunque la herida esté limpia." },
      { question: "¿Aplican las vacunas que faltan para el I-693?", answer: "Sí, en la misma visita del examen de inmigración. Trae tu cartilla: las dosis registradas no se repiten." },
    ],
    faqsEn: [
      { question: "Which month is best for the flu shot?", answer: "September or October, before the season, which in Houston runs from October to March. If you missed it, it is still worth getting in any month of the season." },
      { question: "Do I need a tetanus shot if I cut myself on something rusty?", answer: "If your last dose was more than 5 years ago, yes, the same day. If it was more than 10 years ago, you need it even if the wound is clean." },
      { question: "Do you give the vaccines missing for the I-693?", answer: "Yes, at the same visit as the immigration exam. Bring your card: recorded doses are not repeated." },
    ],
  },
  "sueros-vitaminados": {
    faqs: [
      { question: "¿Cuánto dura la aplicación de un suero vitaminado?", answer: "Entre 30 y 60 minutos según la fórmula, más unos minutos de evaluación previa. Sales el mismo día y puedes conducir." },
      { question: "¿Necesito análisis antes de ponerme un suero?", answer: "No siempre. El médico te evalúa primero; si tienes cansancio de más de dos semanas o una condición como diabetes o enfermedad renal, sí pedimos análisis para elegir bien la fórmula." },
      { question: "¿Los sueros vitaminados curan la resaca o la gripe?", answer: "Alivian la deshidratación y el cansancio, pero no curan una infección. Si tienes fiebre o síntomas de gripe, primero te revisa el médico y decide si el suero conviene." },
    ],
    faqsEn: [
      { question: "How long does a vitamin IV take?", answer: "Between 30 and 60 minutes depending on the formula, plus a few minutes of evaluation beforehand. You leave the same day and can drive." },
      { question: "Do I need lab tests before an IV drip?", answer: "Not always. The doctor evaluates you first; if you have had fatigue for more than two weeks or a condition such as diabetes or kidney disease, we do order tests to choose the right formula." },
      { question: "Do vitamin IVs cure a hangover or the flu?", answer: "They relieve dehydration and fatigue, but they do not cure an infection. If you have a fever or flu symptoms, the doctor examines you first and decides whether a drip is appropriate." },
    ],
  },
  "suturas-heridas": {
    faqs: [
      { question: "¿Hasta cuántas horas después del corte se pueden poner puntos?", answer: "Idealmente dentro de las primeras 6 a 8 horas; en la cara hasta 24 horas. Después de ese tiempo el riesgo de infección sube y a veces la herida se deja cerrar sola." },
      { question: "¿Cuándo me quitan los puntos?", answer: "Cara 5 a 7 días, tronco y cuero cabelludo 7 a 10, brazos y piernas 10 a 14. Te damos la fecha exacta al salir." },
      { question: "¿Puedo mojar la herida con puntos?", answer: "Después de 24 horas puedes ducharte sin frotar y secar con toques. No nadar ni sumergirla hasta retirar los puntos." },
    ],
    faqsEn: [
      { question: "How many hours after a cut can stitches be placed?", answer: "Ideally within the first 6 to 8 hours; on the face up to 24 hours. After that the risk of infection rises and sometimes the wound is left to close on its own." },
      { question: "When are the stitches removed?", answer: "Face 5 to 7 days, trunk and scalp 7 to 10, arms and legs 10 to 14. We give you the exact date when you leave." },
      { question: "Can I get stitches wet?", answer: "After 24 hours you can shower without rubbing and pat dry. No swimming or soaking until the stitches are out." },
    ],
  },
  "curacion-heridas": {
    faqs: [
      { question: "¿Cada cuánto hay que cambiar el vendaje?", answer: "Normalmente cada 2 a 3 días, o antes si se moja o se ensucia. El médico te indica la frecuencia según el tipo de herida." },
      { question: "¿Puedo usar alcohol o agua oxigenada en la herida?", answer: "No. Dañan el tejido nuevo y retrasan la cicatrización. Lava con agua limpia o suero fisiológico y cubre con vendaje limpio." },
      { question: "¿Atienden úlceras de pie diabético?", answer: "Sí, en etapa inicial. Si hay hueso expuesto, mal olor intenso o la úlcera no mejora, te referimos a un especialista en heridas o al hospital." },
    ],
    faqsEn: [
      { question: "How often should the dressing be changed?", answer: "Usually every 2 to 3 days, or sooner if it gets wet or dirty. The doctor tells you the frequency based on the type of wound." },
      { question: "Can I use alcohol or hydrogen peroxide on the wound?", answer: "No. They damage new tissue and slow healing. Wash with clean water or saline and cover with a clean dressing." },
      { question: "Do you treat diabetic foot ulcers?", answer: "Yes, in the early stage. If there is exposed bone, a strong odor or the ulcer is not improving, we refer you to a wound specialist or the hospital." },
    ],
  },
  "cirugias-menores": {
    faqs: [
      { question: "¿Retirar un lunar deja cicatriz?", answer: "Queda una marca pequeña que se atenúa en meses. Con puntos finos y buen cuidado suele ser poco visible; en la cara te referimos a cirugía plástica." },
      { question: "¿Qué pasa con el lunar o quiste que retiran?", answer: "Si tiene aspecto sospechoso, se envía a biopsia y te llamamos con el resultado en unas semanas." },
      { question: "¿Puedo volver a trabajar el mismo día?", answer: "Sí, en trabajos de oficina. Si tu trabajo exige esfuerzo con la zona operada, espera 24 a 48 horas." },
    ],
    faqsEn: [
      { question: "Does mole removal leave a scar?", answer: "A small mark that fades over months. With fine stitches and good care it is usually barely visible; for the face we refer you to plastic surgery." },
      { question: "What happens to the removed mole or cyst?", answer: "If it looks suspicious, it is sent for biopsy and we call you with the result in a few weeks." },
      { question: "Can I go back to work the same day?", answer: "Yes, for desk jobs. If your job involves strain on the treated area, wait 24 to 48 hours." },
    ],
  },
  "drenaje-abscesos": {
    faqs: [
      { question: "¿Duele drenar un absceso?", answer: "Se aplica anestesia local; sientes el piquete y luego presión. El alivio del dolor por la presión del pus es inmediato." },
      { question: "¿Necesito antibiótico después del drenaje?", answer: "No siempre. Se receta si hay fiebre, enrojecimiento extendido, absceso grande, diabetes o defensas bajas. El drenaje completo es lo que cura." },
      { question: "¿Por qué me salen abscesos repetidos?", answer: "Puede ser por portar estafilococo en la piel, diabetes, sudoración y roce, o rasurado. Lo evaluamos y, si hace falta, hacemos cultivo y damos un plan de prevención." },
    ],
    faqsEn: [
      { question: "Does draining an abscess hurt?", answer: "Local anesthesia is applied; you feel the pinch and then pressure. Relief from the pus pressure is immediate." },
      { question: "Do I need antibiotics after drainage?", answer: "Not always. They are prescribed with fever, spreading redness, a large abscess, diabetes or a weak immune system. Complete drainage is what cures it." },
      { question: "Why do I keep getting abscesses?", answer: "It may be from carrying staph on the skin, diabetes, sweating and friction, or shaving. We evaluate it and, if needed, do a culture and give you a prevention plan." },
    ],
  },
  "unas-encarnadas": {
    faqs: [
      { question: "¿Duele el procedimiento de la uña encarnada?", answer: "Solo los dos piquetes de la anestesia en la base del dedo. Después de eso no sientes dolor y sales caminando." },
      { question: "¿Me quitan toda la uña?", answer: "No. Solo el borde lateral que se clava, normalmente 2 a 3 milímetros. La uña conserva su forma." },
      { question: "¿Cuánto tarda en volver a crecer la uña?", answer: "El borde retirado tarda de 3 a 4 meses. Si se aplicó fenol, ese borde ya no crece y el problema no vuelve por ese lado." },
    ],
    faqsEn: [
      { question: "Does the ingrown toenail procedure hurt?", answer: "Only the two anesthetic pinches at the base of the toe. After that you feel no pain and walk out." },
      { question: "Do you remove the whole nail?", answer: "No. Only the side edge that digs in, usually 2 to 3 millimeters. The nail keeps its shape." },
      { question: "How long does the nail take to grow back?", answer: "The removed edge takes 3 to 4 months. If phenol was applied, that edge no longer grows and the problem does not return on that side." },
    ],
  },
  "farmacia": {
    faqs: [
      { question: "¿Puedo surtir en la clínica una receta de otro médico?", answer: "No. Solo entregamos medicamentos recetados por nuestros médicos en la consulta del día." },
      { question: "¿Tienen medicamentos genéricos?", answer: "Sí, siempre que existan. Son el mismo principio activo a menor precio y te decimos el costo antes de pagar." },
      { question: "¿Qué pasa si no tienen mi medicamento?", answer: "Te entregamos la receta impresa para surtirla en cualquier farmacia y te indicamos dónde conseguirla al mejor precio." },
    ],
    faqsEn: [
      { question: "Can I fill a prescription from another doctor at the clinic?", answer: "No. We only provide medications prescribed by our doctors at that day's visit." },
      { question: "Do you have generic medications?", answer: "Yes, whenever they exist. Same active ingredient at a lower price, and we tell you the cost before you pay." },
      { question: "What if you don't have my medication?", answer: "We give you a printed prescription to fill at any pharmacy and tell you where to get it at the best price." },
    ],
  },
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
