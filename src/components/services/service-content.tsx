import type { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

// Render del longDescription de cada servicio con react-markdown + GFM.
// El parser manual anterior solo entendía "## ", "- " y "**Título**" en su
// propia línea: las negritas dentro de un párrafo salían con asteriscos, las
// listas numeradas como texto plano y las tablas no se renderizaban.
export function ServiceContent({ content, locale }: { content: string; locale: string }) {
  const prefix = locale === "es" ? "" : `/${locale}`;

  const components: ComponentProps<typeof ReactMarkdown>["components"] = {
    h2: ({ children }) => (
      <h2 className="text-xl md:text-2xl font-heading font-bold text-slate-dark flex items-center gap-2 mt-8 first:mt-0">
        <span className="size-1.5 rounded-full bg-blue-primary shrink-0" />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg md:text-xl font-heading font-bold text-slate-dark mt-6">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{children}</p>
    ),
    strong: ({ children }) => <strong className="font-semibold text-slate-dark">{children}</strong>,
    ul: ({ children }) => <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 ml-1">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-6 text-slate-600 text-sm md:text-base marker:font-semibold marker:text-blue-primary">
        {children}
      </ol>
    ),
    li: ({ children }) => {
      return (
        <li className="flex items-start gap-2.5 text-slate-600 text-sm md:text-base [ol_&]:block [ol_&]:pl-1">
          <CheckCircle className="size-4 text-blue-primary shrink-0 mt-1 [ol_&]:hidden" weight="fill" />
          <span>{children}</span>
        </li>
      );
    },
    a: ({ href = "", children }) => {
      const internal = href.startsWith("/");
      return (
        <a
          href={internal ? `${prefix}${href}` : href}
          className="text-blue-dark underline underline-offset-2 hover:text-blue-deep"
          {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </a>
      );
    },
    table: ({ children }) => (
      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base border-collapse">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-slate-light bg-cyan-bg px-3 py-2 text-left font-semibold text-slate-dark">{children}</th>
    ),
    td: ({ children }) => <td className="border border-slate-light px-3 py-2 align-top text-slate-600">{children}</td>,
  };

  return (
    <div className="space-y-5">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
