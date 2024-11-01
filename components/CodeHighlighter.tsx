"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import parse, { domToReact, Element, DOMNode } from "html-react-parser";

interface CodeHighlighterProps {
  content: string;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({ content }) => {
  const parseHTML = (html: string) => {
    return parse(html, {
      replace: (node) => {
        if (node instanceof Element && node.name === "pre") {
          const language =
            node.attribs?.["data-enlighter-language"] || "plaintext";

          // Приведение `node.children` к `DOMNode[]`
          const code = domToReact(node.children as DOMNode[]);

          // Проверяем, является ли `code` строкой
          if (typeof code === "string") {
            return (
              <SyntaxHighlighter language={language} style={atomDark}>
                {code}
              </SyntaxHighlighter>
            );
          }
        }
        return undefined; // Оставляем другие узлы без изменений
      },
    });
  };

  return <>{parseHTML(content)}</>;
};

export default CodeHighlighter;
