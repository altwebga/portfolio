import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";

type Props = { markdown: string; className?: string };

export function Markdown({ markdown, className }: Props) {
  return (
    <article className={className ?? "prose"}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
        components={{
          a: (props) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
          img: ({ src, alt }) => {
            if (!src) return null;
            return (
              <Image
                src={src as string}
                alt={alt ?? ""}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
