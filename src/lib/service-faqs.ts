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
      { question: "¿Cada cuánto debo hacerme exámenes de control?", answer: "Depende de tu condición; por lo general cada 3 a 6 meses para diabetes, presión o colesterol. Te damos un plan de seguimiento personalizado." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "How often should I get control labs?", answer: "It depends on your condition; usually every 3 to 6 months for diabetes, blood pressure or cholesterol. We give you a personalized follow-up plan." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿Tratan alergias en la piel y respiratorias?", answer: "Sí, evaluamos y tratamos alergias respiratorias (rinitis, congestión) y de la piel (ronchas, comezón)." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Do you treat both skin and respiratory allergies?", answer: "Yes, we evaluate and treat respiratory allergies (rhinitis, congestion) and skin allergies (hives, itching)." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿Llenan el formulario de la escuela o el equipo?", answer: "Sí, trae el formulario de tu escuela o equipo deportivo y lo completamos durante la visita." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Do you fill out the school or team form?", answer: "Yes, bring your school or sports-team form and we complete it during the visit." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿Duele la extracción del implante?", answer: "Se realiza con anestesia local, por lo que las molestias son mínimas. El procedimiento toma pocos minutos." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Does implant removal hurt?", answer: "It's done with local anesthesia, so discomfort is minimal. The procedure takes just a few minutes." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿En cuánto tiempo entregan los resultados?", answer: "En la mayoría de los casos los resultados están listos el mismo día o muy pronto, y te los explicamos en español." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "How soon are results ready?", answer: "In most cases results are ready the same day or very soon, and we explain them to you in Spanish." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿Cómo se toma la muestra de heces?", answer: "Te entregamos un recipiente e instrucciones claras para recolectar la muestra en casa y traerla a la clínica." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "How is the stool sample collected?", answer: "We give you a container and clear instructions to collect the sample at home and bring it to the clinic." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
    ],
  },
  "prueba-strep": {
    faqs: [
      { question: "¿Cuánto tarda el resultado del strep test?", answer: "La prueba rápida de estreptococo da resultado en pocos minutos durante tu visita." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "How long does the strep test take?", answer: "The rapid strep test gives a result in just a few minutes during your visit." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿El médico está autorizado por USCIS?", answer: "Sí, el examen lo realiza un médico autorizado (civil surgeon) y te entregamos el Formulario I-693 sellado." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Is the doctor authorized by USCIS?", answer: "Yes, the exam is performed by an authorized civil surgeon and we give you the sealed Form I-693." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
    ],
  },
  "vacunas": {
    faqs: [
      { question: "¿Qué vacunas aplican?", answer: "Aplicamos la vacuna contra la influenza (flu) y el toxoide tetánico; pregúntanos cuál te conviene." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Which vaccines do you give?", answer: "We administer the influenza (flu) vaccine and tetanus toxoid; ask us which one you need." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
      { question: "¿Hacen cambios de vendaje y seguimiento?", answer: "Sí, limpiamos, curamos y cambiamos los vendajes, y damos seguimiento hasta que la herida cicatrice." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "Do you do dressing changes and follow-up?", answer: "Yes, we clean, treat and change the dressings, and follow up until the wound heals." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
    ],
  },
  "cirugias-menores": {
    faqs: [
      { question: "¿Qué cirugías menores realizan?", answer: "Realizamos extracción de lunares, quistes y lipomas, entre otros procedimientos ambulatorios con anestesia local." },
      { question: "¿Necesito cita previa?", answer: "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario." },
      { question: "¿Atienden a pacientes sin seguro?", answer: "Sí. Atendemos sin necesidad de seguro, con precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita." },
    ],
    faqsEn: [
      { question: "What minor surgeries do you perform?", answer: "We perform removal of moles, cysts and lipomas, among other outpatient procedures with local anesthesia." },
      { question: "Do I need an appointment?", answer: "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time." },
      { question: "Do you accept patients without insurance?", answer: "Yes. We see patients without insurance, with affordable and transparent pricing. Ask us about the cost before your visit." },
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
