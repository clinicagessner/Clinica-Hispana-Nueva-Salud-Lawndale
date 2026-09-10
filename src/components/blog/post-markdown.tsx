import type { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = { content: string; locale: string };

// Render del cuerpo de los posts con react-markdown + GFM: el parser manual
// anterior no soportaba tablas (se veían como texto con barras) y anidaba
// <h3> dentro de <p>. Se conservan las dos reglas propias: la `# Title`
// inicial se omite (la página ya emite el h1 del frontmatter) y los enlaces
// internos sin prefijo de idioma se reescriben en inglés.
export function PostMarkdown({ content, locale }: Props) {
  const prefix = locale === "es" ? "" : `/${locale}`;
  const body = content.replace(/^\s*#\s+.+\r?\n+/, "");

  const components: ComponentProps<typeof ReactMarkdown>["components"] = {
    a: ({ href = "", children, ...rest }) => {
      const internal = href.startsWith("/");
      return (
        <a
          href={internal ? `${prefix}${href}` : href}
          {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          {...rest}
        >
          {children}
        </a>
      );
    },
    table: ({ children, ...rest }) => (
      <div className="overflow-x-auto my-6">
        <table {...rest}>{children}</table>
      </div>
    ),
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {body}
    </ReactMarkdown>
  );
}
