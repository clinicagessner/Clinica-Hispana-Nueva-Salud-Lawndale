import { getTranslations } from "next-intl/server";

// Bloque de definición de la entidad: un solo párrafo de hechos verificables
// (qué es, dónde, horario, condiciones, idiomas, servicios) que los motores de
// búsqueda y las IAs pueden citar tal cual. Sin lenguaje publicitario.
export async function AboutClinic() {
  const t = await getTranslations("about");

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-cyan-warm border-y border-slate-light"
    >
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="mx-auto max-w-3xl">
          <h2
            id="about-heading"
            className="text-xs font-bold uppercase tracking-widest text-blue-dark mb-3"
          >
            {t("heading")}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-primary">
            {t("body")}
          </p>
        </div>
      </div>
    </section>
  );
}
