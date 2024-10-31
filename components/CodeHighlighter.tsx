"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// Импорт нужных языков
import "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import "react-syntax-highlighter/dist/cjs/languages/prism/css";
import "react-syntax-highlighter/dist/cjs/languages/prism/markup";
import "react-syntax-highlighter/dist/cjs/languages/prism/php";

interface CodeHighlighterProps {
  content: string;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({ content }) => {
  const parseHTML = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Проходим по всем дочерним элементам body и возвращаем их в виде JSX
    const elements = Array.from(doc.body.childNodes).map((node, index) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;

        // Если элемент является блоком кода с атрибутом data-enlighter-language
        if (
          element.tagName === "PRE" &&
          element.hasAttribute("data-enlighter-language")
        ) {
          const language =
            element.getAttribute("data-enlighter-language") || "plaintext";
          const code = element.textContent || "";

          return (
            <SyntaxHighlighter language={language} style={atomDark} key={index}>
              {code}
            </SyntaxHighlighter>
          );
        }

        // Для других HTML-элементов возвращаем их как есть
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: element.outerHTML }}
          />
        );
      }

      // Для текстовых узлов возвращаем текст
      if (node.nodeType === Node.TEXT_NODE) {
        return <span key={index}>{node.textContent}</span>;
      }

      return null;
    });

    return elements;
  };

  return <>{parseHTML(content)}</>;
};

export default CodeHighlighter;
