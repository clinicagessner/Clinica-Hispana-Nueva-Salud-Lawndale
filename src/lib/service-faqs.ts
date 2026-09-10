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
      { question: "¿Qué prueba se usa para revisar la tiroides?", answer: "Usamos principalmente la TSH y, si es necesario, T3 y T4 para evaluar cómo funciona tu tiroides." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "What test is used to check the thyroid?", answer: "We mainly use TSH and, if needed, T3 and T4 to evaluate how your thyroid is working." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿Hacen prueba de flu y de COVID el mismo día?", answer: "Sí, hacemos pruebas rápidas de influenza y COVID y te damos el resultado y el tratamiento el mismo día." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Do you test for flu and COVID the same day?", answer: "Yes, we run rapid flu and COVID tests and give you the result and treatment the same day." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿Cuánto tardan los resultados del cultivo vaginal?", answer: "Aproximadamente [confirmar] días. Te llamamos con el resultado y, si hay infección, te enviamos la receta sin necesidad de otra consulta." },
    ],
    faqsEn: [
      { question: "At what age and how often should I get a Pap smear?", answer: "From age 21. Ages 21 to 29 every 3 years; ages 30 to 65 every 3 years, or every 5 years combined with an HPV test. With previous abnormal results, the interval is shorter." },
      { question: "Can I get a Pap smear during my period?", answer: "It is better to wait until it ends, because blood can affect the sample. If you have infection symptoms, come anyway and we see you the same day." },
      { question: "How long do vaginal culture results take?", answer: "About [confirm] days. We call you with the result and, if there is an infection, we send the prescription without another visit." },
    ],
  },
  "prueba-embarazo": {
    faqs: [
      { question: "¿Qué tan confiable es la prueba de embarazo?", answer: "Nuestras pruebas son confiables y las confirma personal médico; también podemos orientarte sobre los siguientes pasos." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "How reliable is the pregnancy test?", answer: "Our tests are reliable and confirmed by medical staff; we can also guide you on next steps." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
    ],
  },
  "anticonceptivos": {
    faqs: [
      { question: "¿Qué métodos anticonceptivos ofrecen?", answer: "Ofrecemos orientación, pastillas anticonceptivas e inyección, y te ayudamos a elegir el método adecuado para ti." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "What contraceptive methods do you offer?", answer: "We offer guidance, birth control pills and the injection, and help you choose the right method for you." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿Qué incluye el examen del hombre?", answer: "Incluye antígeno prostático (PSA), nivel de testosterona y un chequeo general, con resultados explicados en español." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "What does the men's exam include?", answer: "It includes prostate antigen (PSA), testosterone level and a general checkup, with results explained in Spanish." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿Cuándo hace falta un urocultivo?", answer: "Cuando la infección se repite, no mejora en 72 horas, o si estás embarazada, eres hombre o tienes diabetes. Tarda [confirmar] días e indica el antibiótico más efectivo." },
      { question: "¿Una infección urinaria se quita sola?", answer: "Rara vez, y sin tratamiento puede subir al riñón. Con fiebre, escalofríos o dolor en la espalda baja, ven el mismo día." },
    ],
    faqsEn: [
      { question: "How long does the urine test take?", answer: "Minutes. We do the dipstick and microscope test in the clinic, so the doctor decides the treatment during the same visit." },
      { question: "When is a urine culture needed?", answer: "When the infection keeps coming back, does not improve within 72 hours, or if you are pregnant, male or diabetic. It takes [confirm] days and shows the most effective antibiotic." },
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
      { question: "¿Tengo que regresar para leer la prueba de TB?", answer: "Sí, la prueba cutánea (PPD) se lee entre 48 y 72 horas después de aplicarla; te damos la cita de lectura." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Do I have to come back to read the TB test?", answer: "Yes, the skin test (PPD) is read 48 to 72 hours after it's placed; we schedule your reading appointment." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
    ],
  },
  "enfermedades-transmision-sexual": {
    faqs: [
      { question: "¿Las pruebas son confidenciales?", answer: "Sí, todas las pruebas de STD son completamente confidenciales y se realizan con respeto y sin juicios." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Is the testing confidential?", answer: "Yes, all STD testing is completely confidential and done with respect and without judgment." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
    ],
  },
  "examen-alcohol-drogas": {
    faqs: [
      { question: "¿Entregan documentación para el trabajo?", answer: "Sí, te entregamos la documentación del resultado para tu empleador o trámite." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Do you provide documentation for work?", answer: "Yes, we give you documentation of the result for your employer or paperwork." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
    ],
  },
  "electrocardiograma": {
    faqs: [
      { question: "¿El electrocardiograma duele?", answer: "No, es un estudio rápido y sin dolor; solo se colocan electrodos en la piel por unos minutos." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Does the EKG hurt?", answer: "No, it's a fast, painless test; electrodes are simply placed on the skin for a few minutes." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
    ],
  },
  "ultrasonido": {
    faqs: [
      { question: "¿El ultrasonido tiene radiación?", answer: "No, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Does ultrasound use radiation?", answer: "No, ultrasound uses no radiation, so it's safe even during pregnancy." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿El examen I-693 se entrega el mismo día?", answer: "El examen físico y las vacunas se hacen el mismo día. El sobre sellado se entrega cuando llega el resultado de la prueba de tuberculosis, en unos [confirmar] días." },
      { question: "¿Necesito la vacuna contra COVID-19 para el I-693?", answer: "No. Desde el 20 de enero de 2025 USCIS ya no la exige. Sí revisamos MMR, Tdap, varicela, hepatitis B e influenza en temporada." },
    ],
    faqsEn: [
      { question: "How do I verify the doctor is an authorized Civil Surgeon?", answer: "In the official USCIS \"Find a Doctor\" tool on uscis.gov, searching by ZIP code 77023. Only a designated Civil Surgeon can sign the I-693." },
      { question: "Is the I-693 delivered the same day?", answer: "The physical exam and vaccines are done the same day. The sealed envelope is delivered when the TB test result arrives, in about [confirm] days." },
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
      { question: "¿Atienden heridas sin cita?", answer: "Sí, atendemos cortes y heridas sin cita previa; entre más pronto, menor el riesgo de infección." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Do you treat wounds without an appointment?", answer: "Yes, we treat cuts and wounds on a walk-in basis; the sooner, the lower the risk of infection." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿Qué pasa con el lunar o quiste que retiran?", answer: "Si tiene aspecto sospechoso, se envía a biopsia y te llamamos con el resultado en unos [confirmar] días." },
      { question: "¿Puedo volver a trabajar el mismo día?", answer: "Sí, en trabajos de oficina. Si tu trabajo exige esfuerzo con la zona operada, espera 24 a 48 horas." },
    ],
    faqsEn: [
      { question: "Does mole removal leave a scar?", answer: "A small mark that fades over months. With fine stitches and good care it is usually barely visible; for the face we refer you to plastic surgery." },
      { question: "What happens to the removed mole or cyst?", answer: "If it looks suspicious, it is sent for biopsy and we call you with the result in about [confirm] days." },
      { question: "Can I go back to work the same day?", answer: "Yes, for desk jobs. If your job involves strain on the treated area, wait 24 to 48 hours." },
    ],
  },
  "drenaje-abscesos": {
    faqs: [
      { question: "¿El drenaje de un absceso duele?", answer: "Se realiza con anestesia local para reducir las molestias y aliviar el dolor del absceso rápidamente." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Does abscess drainage hurt?", answer: "It's done with local anesthesia to reduce discomfort and quickly relieve the abscess pain." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
    ],
  },
  "unas-encarnadas": {
    faqs: [
      { question: "¿Cómo tratan la uña encarnada?", answer: "Con un procedimiento sencillo y anestesia local retiramos la porción encarnada para aliviar el dolor el mismo día." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "How do you treat an ingrown toenail?", answer: "With a simple procedure and local anesthesia we remove the ingrown portion to relieve pain the same day." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
    ],
  },
  "farmacia": {
    faqs: [
      { question: "¿Puedo surtir mi receta en la clínica?", answer: "Sí, al terminar tu consulta surtimos tu receta en nuestra farmacia, sin tener que ir a otro lugar." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Can I fill my prescription at the clinic?", answer: "Yes, after your visit we fill your prescription at our pharmacy, with no need to go elsewhere." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
    ],
  },
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
