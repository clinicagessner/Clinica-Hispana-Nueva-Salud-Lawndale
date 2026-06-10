interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQs {
  faqs: FAQ[];
  faqsEn: FAQ[];
}

export const SERVICE_FAQS: Record<string, ServiceFAQs> = {
  "medicina-familiar": {
    faqs: [
      { question: "¿Necesito seguro médico para ser atendido?", answer: "No, atendemos a todos los pacientes sin importar si tienen seguro médico o no. Ofrecemos precios accesibles para que pueda recibir la atención que necesita." },
      { question: "¿Aceptan pacientes sin cita previa?", answer: "Sí, contamos con servicio de walk-in para que pueda llegar sin cita y ser atendido el mismo día. Le recomendamos llegar temprano para reducir su tiempo de espera." },
      { question: "¿Atienden a niños y adultos mayores?", answer: "Sí, nuestra clínica atiende a pacientes de todas las edades, desde recién nacidos hasta adultos mayores. Nuestros médicos en Houston están capacitados para brindar atención integral a toda la familia." },
      { question: "¿Qué condiciones pueden tratar en medicina familiar?", answer: "Tratamos gripes, infecciones, dolores, alergias, presión alta, diabetes y mucho más. También realizamos exámenes físicos anuales, vacunas y referencias a especialistas cuando es necesario." },
    ],
    faqsEn: [
      { question: "Do I need health insurance to be seen?", answer: "No, we serve all patients regardless of insurance status. We offer affordable self-pay rates so you can access the care you need." },
      { question: "Do you accept walk-in patients?", answer: "Yes, we welcome walk-in patients and do our best to see you the same day. Arriving early helps minimize your wait time." },
      { question: "Do you treat children and elderly patients?", answer: "Absolutely. Our Houston clinic provides care for patients of all ages, from newborns to seniors. Our family medicine doctors are trained to address the health needs of your entire family." },
      { question: "What conditions does family medicine cover?", answer: "We treat colds, infections, allergies, minor injuries, high blood pressure, diabetes, and more. We also provide annual physicals, vaccinations, and specialist referrals when needed." },
    ],
  },
  "examenes-inmigracion": {
    faqs: [
      { question: "¿Qué es el formulario I-693 y para qué sirve?", answer: "El formulario I-693 es el informe médico requerido por USCIS para solicitar la residencia permanente (Green Card). Debe ser completado por un médico autorizado conocido como Civil Surgeon." },
      { question: "¿La clínica tiene un Civil Surgeon autorizado por USCIS?", answer: "Sí, contamos con un Civil Surgeon certificado por USCIS en Houston para realizar los exámenes médicos de inmigración. Su documentación cumplirá con todos los requisitos oficiales." },
      { question: "¿Qué incluye el examen médico de inmigración?", answer: "El examen incluye historial médico, revisión física completa, prueba de tuberculosis, análisis de sangre y verificación del esquema de vacunación. El proceso generalmente se completa en una o dos visitas." },
      { question: "¿Cuánto tiempo tarda en estar lista la documentación?", answer: "En la mayoría de los casos entregamos los resultados y el formulario I-693 sellado el mismo día. Le recomendamos llamar con anticipación para coordinar su cita." },
    ],
    faqsEn: [
      { question: "What is the I-693 form and why do I need it?", answer: "Form I-693 is the medical examination report required by USCIS as part of the Green Card application process. It must be completed and signed by a USCIS-designated Civil Surgeon." },
      { question: "Is your clinic a USCIS-designated Civil Surgeon?", answer: "Yes, our Houston clinic has a USCIS-authorized Civil Surgeon on staff to perform immigration medical exams. Your documentation will meet all official USCIS requirements." },
      { question: "What does the immigration medical exam include?", answer: "The exam includes a full physical, tuberculosis test, required blood work, a review of your vaccination history, and completion of the sealed I-693 form. Most patients finish in one to two visits." },
      { question: "How long does it take to get the sealed I-693 form?", answer: "In most cases, we can have your completed and sealed I-693 ready the same day. Call ahead to schedule your appointment and help speed up the process." },
    ],
  },
  "enfermedades-transmision-sexual": {
    faqs: [
      { question: "¿Las pruebas de ETS son confidenciales?", answer: "Sí, todas las pruebas y resultados son completamente confidenciales. Su privacidad es nuestra prioridad y su información nunca será compartida sin su consentimiento." },
      { question: "¿Puedo recibir tratamiento el mismo día?", answer: "En muchos casos sí. Si el resultado está disponible durante su visita, nuestro médico puede prescribir tratamiento ese mismo día." },
      { question: "¿Hacen prueba de VIH?", answer: "Sí, ofrecemos pruebas de VIH junto con detección de gonorrea, clamidia, sífilis, hepatitis B y C, y otras infecciones. Algunos resultados están disponibles el mismo día." },
      { question: "¿Necesito hacer una cita?", answer: "Puede llegar sin cita a nuestra clínica en Houston. Si prefiere más privacidad o evitar esperas, puede llamar para programar una cita." },
    ],
    faqsEn: [
      { question: "Are STD tests confidential?", answer: "Yes, all testing and results are completely confidential. Your privacy is our top priority and your information will never be shared without your consent." },
      { question: "Can I get treated the same day as my test?", answer: "In many cases, yes. If results are available during your visit and treatment is appropriate, our doctor can prescribe medication that same day." },
      { question: "Do you offer HIV testing?", answer: "Yes, we provide HIV testing along with screening for gonorrhea, chlamydia, syphilis, hepatitis B and C, and other STIs. Some results are available the same day." },
      { question: "Do I need an appointment?", answer: "You are welcome to walk in to our Houston clinic for STD testing. You can also call ahead to schedule an appointment if you prefer." },
    ],
  },
  "urologia": {
    faqs: [
      { question: "¿Los servicios de urología son solo para hombres?", answer: "No, la urología trata condiciones del tracto urinario tanto en hombres como en mujeres. Atendemos infecciones urinarias, problemas de vejiga, cálculos renales y más." },
      { question: "¿Qué síntomas deben llevarme a consultar?", answer: "Consulte si tiene ardor al orinar, necesidad frecuente de ir al baño, sangre en la orina, dolor en la zona baja o problemas de próstata." },
      { question: "¿Realizan exámenes de próstata?", answer: "Sí, ofrecemos exámenes de próstata incluyendo análisis de PSA en sangre. Se recomienda que los hombres mayores de 50 años se realicen este examen anualmente." },
      { question: "¿Tratan infecciones urinarias recurrentes?", answer: "Sí, evaluamos y tratamos infecciones urinarias recurrentes para identificar la causa y prevenir que sigan ocurriendo." },
    ],
    faqsEn: [
      { question: "Is urology only for men?", answer: "No, urology addresses urinary tract conditions in both men and women. We treat UTIs, bladder issues, kidney stones, and more for patients of all genders." },
      { question: "What symptoms should prompt a urology visit?", answer: "See a urologist if you experience burning during urination, frequent urges, blood in your urine, pelvic pain, or prostate-related symptoms." },
      { question: "Do you perform prostate exams?", answer: "Yes, we offer prostate exams including PSA blood tests. Men over 50, or younger men with risk factors, should have this screening annually." },
      { question: "Do you treat recurring UTIs?", answer: "Yes, we evaluate and treat recurrent UTIs to identify the underlying cause and help prevent future infections." },
    ],
  },
  "condiciones-cronicas": {
    faqs: [
      { question: "¿Puedo controlar mi diabetes sin seguro médico?", answer: "Sí, ofrecemos manejo de diabetes a precios accesibles sin importar si tiene seguro. Nuestros médicos le ayudan con medicación, dieta y monitoreo." },
      { question: "¿Con qué frecuencia debo venir para el manejo de mi presión arterial?", answer: "Generalmente recomendamos visitas cada 1 a 3 meses hasta estabilizarla, y luego cada 3 a 6 meses para seguimiento." },
      { question: "¿Qué análisis incluye el seguimiento de colesterol?", answer: "Realizamos un panel lipídico completo que mide colesterol total, LDL, HDL y triglicéridos. Con los resultados, su médico ajusta el tratamiento." },
      { question: "¿Pueden manejar varias condiciones crónicas al mismo tiempo?", answer: "Sí, nuestros médicos están capacitados para manejar múltiples condiciones crónicas simultáneamente, como diabetes e hipertensión combinadas." },
    ],
    faqsEn: [
      { question: "Can I manage my diabetes without health insurance?", answer: "Yes, we offer affordable diabetes management regardless of insurance status. Our doctors help with medication, dietary guidance, and regular monitoring." },
      { question: "How often do I need to come in for blood pressure management?", answer: "We typically recommend every 1 to 3 months until it stabilizes, then every 3 to 6 months for ongoing follow-up." },
      { question: "What does cholesterol follow-up testing include?", answer: "We run a full lipid panel measuring total cholesterol, LDL, HDL, and triglycerides. Your doctor will review results and provide personalized recommendations." },
      { question: "Can you manage multiple chronic conditions at once?", answer: "Yes, our physicians are experienced in managing multiple chronic conditions simultaneously, such as combined diabetes and hypertension." },
    ],
  },
  "laboratorio": {
    faqs: [
      { question: "¿Los resultados de laboratorio están disponibles el mismo día?", answer: "Muchos de nuestros análisis ofrecen resultados el mismo día, incluyendo glucosa, hemograma completo y pruebas de orina. Algunos estudios especializados pueden tardar uno o dos días adicionales." },
      { question: "¿Necesito ayunar antes de hacerme un análisis de sangre?", answer: "Depende del tipo de análisis. Para glucosa en ayunas, colesterol y triglicéridos se requieren 8 a 12 horas de ayuno." },
      { question: "¿Puedo hacerme análisis sin orden médica?", answer: "Sí, puede solicitar ciertos análisis directamente sin una orden médica previa. También contamos con médicos disponibles para interpretar sus resultados." },
      { question: "¿Qué tipos de análisis realizan?", answer: "Realizamos hemograma completo, glucosa, colesterol, función renal y hepática, hormonas, análisis de orina, pruebas de embarazo, VIH, hepatitis y muchos más." },
    ],
    faqsEn: [
      { question: "Are lab results available the same day?", answer: "Many of our tests offer same-day results, including blood glucose, complete blood count, and urinalysis. More specialized tests may take one to two additional business days." },
      { question: "Do I need to fast before a blood test?", answer: "It depends on the test. Fasting glucose, cholesterol, and triglyceride panels typically require 8 to 12 hours of fasting." },
      { question: "Can I request lab tests without a doctor's order?", answer: "Yes, at our Houston clinic you can request certain lab tests directly without a prior doctor's order. We also have physicians available to review your results." },
      { question: "What types of lab tests do you offer?", answer: "We offer complete blood counts, glucose, cholesterol, kidney and liver function panels, hormones, urinalysis, pregnancy tests, HIV, hepatitis screening, and much more." },
    ],
  },
  "ultrasonido": {
    faqs: [
      { question: "¿Es seguro el ultrasonido y duele?", answer: "Sí, el ultrasonido es completamente seguro y utiliza ondas de sonido, no radiación. No es invasivo ni doloroso." },
      { question: "¿Necesito prepararme antes de un ultrasonido?", answer: "Para ultrasonidos abdominales se recomienda ayunar de 4 a 6 horas. Para pélvicos, puede necesitar llegar con la vejiga llena. Le informaremos al hacer su cita." },
      { question: "¿Qué órganos pueden examinarse con ultrasonido?", answer: "Podemos examinar abdomen (hígado, vesícula, riñones, páncreas), tiroides, pelvis femenina (útero y ovarios) y tejidos blandos en general." },
      { question: "¿Cuándo estarán listos los resultados?", answer: "Las imágenes son interpretadas por el médico generalmente el mismo día o dentro de 24 horas." },
    ],
    faqsEn: [
      { question: "Is an ultrasound safe and does it hurt?", answer: "Yes, ultrasound is completely safe as it uses sound waves, not radiation. The procedure is non-invasive and painless." },
      { question: "Do I need to prepare before an ultrasound?", answer: "For abdominal ultrasounds, fasting for 4 to 6 hours is usually recommended. Pelvic ultrasounds may require a full bladder. We will give you specific instructions." },
      { question: "What organs can be examined with ultrasound?", answer: "We can image the abdomen (liver, gallbladder, kidneys, pancreas), thyroid, female pelvis (uterus and ovaries), and soft tissues." },
      { question: "When will my ultrasound results be ready?", answer: "The imaging is interpreted by our physician, typically the same day or within 24 hours." },
    ],
  },
  "ginecologia": {
    faqs: [
      { question: "¿A partir de qué edad debo hacerme el Papanicolaou?", answer: "Se recomienda comenzar a los 21 años y repetirlo cada 3 años si los resultados son normales. Después de los 30, se puede combinar con una prueba de VPH cada 5 años." },
      { question: "¿Ofrecen atención prenatal?", answer: "Sí, brindamos atención prenatal con revisiones periódicas, ultrasonidos y análisis de laboratorio." },
      { question: "¿Realizan exámenes de mama?", answer: "Sí, realizamos el examen clínico de mama como parte de su revisión ginecológica anual. Si detectamos algo, le referiremos para una mamografía." },
      { question: "¿Puedo consultar sin haber tenido relaciones sexuales?", answer: "Sí, absolutamente. La ginecología no es exclusiva de mujeres sexualmente activas. Atendemos irregularidades menstruales, dolores pélvicos y otros problemas de salud femenina." },
    ],
    faqsEn: [
      { question: "At what age should I start getting Pap smears?", answer: "It is recommended to begin at age 21 and repeat every 3 years if results are normal. After age 30, a Pap smear combined with an HPV test can be done every 5 years." },
      { question: "Do you offer prenatal care?", answer: "Yes, we provide prenatal care throughout your pregnancy, including regular check-ups, ultrasounds, and lab work." },
      { question: "Do you perform breast exams?", answer: "Yes, a clinical breast exam is included as part of your annual gynecological visit. If we detect anything, we will refer you for a mammogram." },
      { question: "Can I see a gynecologist if I have never been sexually active?", answer: "Yes, absolutely. Gynecology is not limited to sexually active women. We care for irregular periods, pelvic pain, and other women's health issues." },
    ],
  },
  "planificacion-familiar": {
    faqs: [
      { question: "¿Qué métodos anticonceptivos ofrecen?", answer: "Ofrecemos píldoras, inyecciones, parche, implante subdérmico y condones. Su médico le ayudará a elegir el más adecuado según su historial médico y estilo de vida." },
      { question: "¿El implante anticonceptivo es seguro?", answer: "Sí, el implante subdérmico es seguro y muy eficaz. Es una pequeña varilla que se coloca debajo de la piel del brazo y previene el embarazo por hasta 3 años." },
      { question: "¿Pueden ayudarme si quiero quedar embarazada en el futuro?", answer: "Por supuesto. Le asesoramos para elegir un método anticonceptivo reversible compatible con sus planes a futuro." },
    ],
    faqsEn: [
      { question: "What birth control methods do you offer?", answer: "We offer pills, injections, the patch, subdermal implants, and condoms. Your doctor will help you choose the best option based on your medical history and lifestyle." },
      { question: "Is the birth control implant safe?", answer: "Yes, the subdermal implant is safe and highly effective. It is a small rod inserted under the skin of your upper arm that prevents pregnancy for up to 3 years." },
      { question: "Can you help me if I want to get pregnant someday?", answer: "Absolutely. We will help you select a reversible contraceptive method that aligns with your future family plans." },
    ],
  },
  "vacunas-anticonceptivas": {
    faqs: [
      { question: "¿Con qué frecuencia necesito la inyección Depo-Provera?", answer: "La inyección se aplica cada 3 meses (12 semanas). En nuestra clínica en Houston le enviamos un recordatorio para que no se le pase la fecha." },
      { question: "¿Duele la inyección anticonceptiva?", answer: "La inyección puede causar una leve molestia momentánea, similar a cualquier vacuna. El procedimiento toma menos de 5 minutos." },
      { question: "¿Cuándo empieza a hacer efecto?", answer: "Si se aplica durante los primeros 5 días del ciclo menstrual, es efectiva de inmediato. Si no, se recomienda método de barrera adicional durante los primeros 7 días." },
      { question: "¿Qué efectos secundarios puede causar?", answer: "Los efectos más comunes incluyen cambios en el ciclo menstrual y aumento de peso leve. Nuestros médicos pueden orientarle sobre si este método es adecuado para usted." },
    ],
    faqsEn: [
      { question: "How often do I need the Depo-Provera shot?", answer: "The injection is given every 3 months (12 weeks). At our Houston clinic, we will send you a reminder so you never miss your appointment." },
      { question: "Does the birth control shot hurt?", answer: "The injection may cause brief, mild discomfort similar to any vaccine. The process takes less than 5 minutes." },
      { question: "When does the shot start working?", answer: "If given within the first 5 days of your menstrual cycle, it is effective immediately. Otherwise, a backup method is recommended for the first 7 days." },
      { question: "What are the side effects?", answer: "Common side effects include irregular periods and slight weight gain. Our Houston doctors can help determine if this is the right option for you." },
    ],
  },
  "extraccion-implantes": {
    faqs: [
      { question: "¿Cuánto tiempo tarda la extracción del implante?", answer: "El procedimiento dura entre 15 y 20 minutos. Se realiza bajo anestesia local, por lo que no sentirá dolor." },
      { question: "¿Es dolorosa la extracción?", answer: "No, se aplica anestesia local antes del procedimiento. Solo sentirá una pequeña punción inicial. Después puede haber sensibilidad leve por uno o dos días." },
      { question: "¿Cuándo puedo quedar embarazada después de retirar el implante?", answer: "La fertilidad puede regresar muy rápidamente después de la extracción, a veces en cuestión de días." },
      { question: "¿Necesito cita para la extracción?", answer: "Recomendamos agendar una cita para la extracción del implante. Puede llamarnos para coordinar un horario conveniente." },
    ],
    faqsEn: [
      { question: "How long does implant removal take?", answer: "The removal procedure takes about 15 to 20 minutes. It is performed under local anesthesia, so you will not feel pain." },
      { question: "Is the implant removal painful?", answer: "No, local anesthesia is applied before the procedure. You will only feel a small initial pinch. Some mild soreness may follow for a day or two." },
      { question: "How soon can I get pregnant after removal?", answer: "Fertility can return very quickly after removal, sometimes within days." },
      { question: "Do I need an appointment for removal?", answer: "Yes, we recommend scheduling an appointment for implant removal. Call us to coordinate a convenient time." },
    ],
  },
  "electrocardiograma": {
    faqs: [
      { question: "¿Qué es un electrocardiograma y para qué sirve?", answer: "Un EKG es un estudio indoloro que registra la actividad eléctrica del corazón. Se usa para detectar arritmias, infartos o problemas cardíacos. Resultados disponibles de inmediato." },
      { question: "¿Duele o tiene algún riesgo?", answer: "No, el EKG es completamente indoloro y no emite electricidad al cuerpo. Solo se colocan electrodos adhesivos en la piel y dura entre 5 y 10 minutos." },
      { question: "¿Necesito prepararme antes del EKG?", answer: "No se requiere preparación especial. Se recomienda evitar cremas o lociones en el pecho el día del estudio." },
      { question: "¿Cuándo recibo los resultados?", answer: "Los resultados del EKG están disponibles de forma inmediata. Nuestro médico los revisará con usted en la misma consulta." },
    ],
    faqsEn: [
      { question: "What is an EKG and what is it used for?", answer: "An EKG is a painless test that records the heart's electrical activity. It detects arrhythmias, heart attacks, or other cardiac conditions. Results are available immediately." },
      { question: "Is an EKG painful or risky?", answer: "No, an EKG is completely painless and does not deliver any electricity to your body. Adhesive electrodes are placed on your skin and the test takes 5 to 10 minutes." },
      { question: "Do I need to prepare for an EKG?", answer: "No special preparation is required. Avoid applying lotions or creams on your chest the day of the test." },
      { question: "How soon will I get my EKG results?", answer: "EKG results are available immediately. Our doctor will review them with you during the same visit." },
    ],
  },
  "enfermedades-respiratorias": {
    faqs: [
      { question: "¿Tratan la gripe, bronquitis y COVID-19?", answer: "Sí, atendemos gripe, bronquitis, COVID-19 y asma. Contamos con nebulizadores en clínica para tratamiento inmediato." },
      { question: "¿Hacen pruebas de COVID-19?", answer: "Sí, realizamos pruebas de COVID-19 en nuestra clínica de Houston. Si es positiva, el médico le indicará el tratamiento correspondiente." },
      { question: "¿Cuándo debo ir a la clínica por síntomas respiratorios?", answer: "Si tiene fiebre, tos, dificultad para respirar o síntomas de gripe, puede acudir sin necesidad de ir a urgencias. Si hay dificultad respiratoria severa, llame al 911." },
      { question: "¿Ofrecen nebulizaciones?", answer: "Sí, contamos con nebulizadores para tratamiento inmediato de broncoespasmo, asma y otras condiciones respiratorias agudas." },
    ],
    faqsEn: [
      { question: "Do you treat flu, bronchitis, and COVID-19?", answer: "Yes, we treat respiratory illnesses including the flu, bronchitis, COVID-19, and asthma. We have nebulizers on-site for immediate treatment." },
      { question: "Do you offer COVID-19 testing?", answer: "Yes, we offer COVID-19 testing at our Houston clinic. If positive, the doctor will provide a treatment plan and guidance." },
      { question: "When should I visit for respiratory symptoms?", answer: "If you have fever, cough, mild to moderate difficulty breathing, or flu symptoms, you can visit our clinic. For severe breathing difficulty, call 911." },
      { question: "Do you offer nebulizer treatments?", answer: "Yes, we have nebulizers on-site for immediate treatment of bronchospasm, asthma, and other acute respiratory conditions." },
    ],
  },
  "infecciones-urinarias": {
    faqs: [
      { question: "¿Cómo sé si tengo una infección urinaria?", answer: "Los síntomas más comunes incluyen ardor al orinar, necesidad frecuente de ir al baño, orina turbia o con mal olor, y dolor en la parte baja del abdomen." },
      { question: "¿Hacen el análisis de orina en la clínica?", answer: "Sí, realizamos el análisis de orina directamente en nuestra clínica. Los resultados están disponibles en minutos y le prescribimos antibióticos el mismo día." },
      { question: "¿Necesito cita para una infección urinaria?", answer: "No, aceptamos pacientes de walk-in. También puede agendar cita por teléfono para reducir el tiempo de espera." },
      { question: "¿En cuánto tiempo hacen efecto los antibióticos?", answer: "La mayoría de los pacientes comienzan a sentir mejoría dentro de las primeras 24 a 48 horas. Es importante completar todo el ciclo de antibióticos." },
    ],
    faqsEn: [
      { question: "How do I know if I have a UTI?", answer: "Common symptoms include burning when urinating, frequent urge to urinate, cloudy or foul-smelling urine, and lower abdominal pain." },
      { question: "Is the urinalysis done at the clinic?", answer: "Yes, we perform the urinalysis right at our clinic. Results are available within minutes and antibiotics are prescribed the same day." },
      { question: "Do I need an appointment for a UTI?", answer: "No, we accept walk-in patients. You can also schedule by phone to reduce your wait time." },
      { question: "How quickly do antibiotics work for a UTI?", answer: "Most patients feel better within 24 to 48 hours. It is important to complete the full antibiotic course even if symptoms improve sooner." },
    ],
  },
  "infecciones-vaginales": {
    faqs: [
      { question: "¿Tratan candidiasis y vaginosis bacteriana?", answer: "Sí, tratamos infecciones vaginales incluyendo candidiasis (hongos) y vaginosis bacteriana. La consulta es completamente confidencial." },
      { question: "¿Cómo sé si tengo una infección vaginal?", answer: "Síntomas como flujo inusual, picazón, mal olor o ardor pueden indicar una infección. Nuestros médicos realizan evaluación y pruebas para darle el tratamiento correcto." },
      { question: "¿La consulta es privada y confidencial?", answer: "Sí, toda consulta relacionada con infecciones vaginales es estrictamente confidencial. Nuestro personal atiende con respeto y discreción." },
      { question: "¿Recibiré tratamiento el mismo día?", answer: "En la mayoría de los casos sí. Si el diagnóstico es claro, prescribimos el tratamiento en la misma visita." },
    ],
    faqsEn: [
      { question: "Do you treat yeast infections and bacterial vaginosis?", answer: "Yes, we treat vaginal infections including yeast infections and bacterial vaginosis. All consultations are completely confidential." },
      { question: "How do I know if I have a vaginal infection?", answer: "Symptoms like unusual discharge, itching, odor, or burning can indicate an infection. Our doctors will evaluate you and run tests to ensure correct treatment." },
      { question: "Is the consultation private and confidential?", answer: "Yes, all consultations are strictly confidential. Our staff handles these cases with respect and discretion." },
      { question: "Will I receive treatment the same day?", answer: "In most cases, yes. If the diagnosis is clear, we prescribe treatment during the same visit." },
    ],
  },
  "examen-dot": {
    faqs: [
      { question: "¿Qué incluye el examen físico DOT?", answer: "Evalúa visión, audición, presión arterial, corazón, pulmones, sistema nervioso y análisis de orina. Es certificado por FMCSA y obligatorio para la licencia CDL." },
      { question: "¿Están certificados como examinadores FMCSA?", answer: "Sí, nuestros médicos están registrados en el Registro Nacional de Examinadores Médicos de la FMCSA." },
      { question: "¿Necesito hacer ayuno para el examen DOT?", answer: "No se requiere ayuno. Traiga sus lentes o audífonos si los usa, lista de medicamentos actuales y su licencia." },
      { question: "¿Recibo el certificado el mismo día?", answer: "Sí, si cumple con todos los requisitos, recibe el Certificado Médico del Conductor el mismo día." },
    ],
    faqsEn: [
      { question: "What does the DOT physical exam include?", answer: "It evaluates vision, hearing, blood pressure, heart, lungs, nervous system, and urinalysis. It is FMCSA-certified and required for a CDL license." },
      { question: "Are your doctors certified FMCSA medical examiners?", answer: "Yes, our doctors are registered in the FMCSA National Registry of Certified Medical Examiners." },
      { question: "Do I need to fast for the DOT exam?", answer: "Fasting is not required. Bring your glasses or hearing aids if you use them, a list of current medications, and your license." },
      { question: "Will I get my certificate the same day?", answer: "Yes, if you meet all requirements, you will receive your Medical Examiner Certificate the same day." },
    ],
  },
  "examenes-generales": {
    faqs: [
      { question: "¿Qué tipos de exámenes físicos ofrecen?", answer: "Ofrecemos exámenes para empleo, escuela, deportes, revisiones anuales, campamentos y solicitudes de visa." },
      { question: "¿Cuánto tiempo tarda un examen físico?", answer: "Un examen físico general toma entre 30 y 45 minutos. Si requiere análisis de laboratorio adicionales, puede tomar un poco más." },
      { question: "¿Necesito traer algún documento?", answer: "Traiga su identificación, tarjeta de seguro si tiene, y cualquier formulario que su empleador, escuela o institución le haya proporcionado." },
      { question: "¿Me entregan los formularios completados el mismo día?", answer: "Sí, en la mayoría de los casos completamos y entregamos los formularios el mismo día de la consulta." },
    ],
    faqsEn: [
      { question: "What types of physical exams do you offer?", answer: "We offer exams for employment, school, sports, annual wellness, summer camps, and visa applications." },
      { question: "How long does a physical exam take?", answer: "A general physical typically takes 30 to 45 minutes. Additional lab work may take a bit longer." },
      { question: "What documents should I bring?", answer: "Bring your ID, insurance card if you have one, and any forms from your employer, school, or organization that need to be completed." },
      { question: "Will I receive completed forms the same day?", answer: "Yes, in most cases we complete and provide forms the same day of your visit." },
    ],
  },
  "dolores-musculares": {
    faqs: [
      { question: "¿Tratan dolores de espalda y cuello?", answer: "Sí, atendemos dolores musculares y articulares incluyendo espalda baja, cuello, hombros, rodillas y otras áreas." },
      { question: "¿Qué tratamientos ofrecen para el dolor?", answer: "Ofrecemos evaluación médica, inyecciones para el dolor y referidos a fisioterapia cuando es necesario." },
      { question: "¿Las inyecciones para el dolor duelen?", answer: "Se aplica anestesia local antes de la inyección para minimizar la molestia. La mayoría reporta alivio significativo dentro de horas o días." },
      { question: "¿Cuándo debo buscar atención por dolor muscular?", answer: "Busque atención si el dolor es intenso, persiste por más de una semana, viene con entumecimiento o debilidad, o limita sus actividades diarias." },
    ],
    faqsEn: [
      { question: "Do you treat back and neck pain?", answer: "Yes, we treat muscle and joint pain including lower back, neck, shoulders, knees, and other areas." },
      { question: "What treatments do you offer for pain?", answer: "We offer medical evaluation, pain injections, and physical therapy referrals when needed." },
      { question: "Do pain injections hurt?", answer: "Local anesthesia is applied before the injection to minimize discomfort. Most patients report significant relief within hours or days." },
      { question: "When should I seek care for muscle pain?", answer: "Seek care if pain is severe, persists more than a week, is accompanied by numbness or weakness, or limits your daily activities." },
    ],
  },
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
