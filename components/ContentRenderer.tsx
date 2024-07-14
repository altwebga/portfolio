import React from "react";
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
} from "html-react-parser";
import { Code } from "@nextui-org/code";

interface ContentRendererProps {
  content: string;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === "code") {
        return (
          <Code className="whitespace-pre-line px-4 my-4" size="md">
            {domToReact(domNode.children as Element[])}
          </Code>
        );
      }
    },
  };

  return <div>{parse(content, options)}</div>;
};

export default ContentRenderer;
