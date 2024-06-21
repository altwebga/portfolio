"use client";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";

interface MdxContentProps {
  source: MDXRemoteSerializeResult;
}

const components = {
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt || "Изображение"}
      className="rounded-lg shadow-lg"
    />
  ),
  a: (props: any) => (
    <Link {...props} className="text-blue-500 hover:underline" />
  ),
  h1: (props: any) => (
    <h1 {...props} className="text-3xl font-bold my-4">
      {props.children}
    </h1>
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-2xl font-bold my-4">
      {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 {...props} className="text-xl font-bold my-4">
      {props.children}
    </h3>
  ),
  ul: (props: any) => (
    <ul {...props} className="list-disc list-inside my-4">
      {props.children}
    </ul>
  ),
  ol: (props: any) => (
    <ol {...props} className="list-decimal list-inside my-4">
      {props.children}
    </ol>
  ),
  li: (props: any) => (
    <li {...props} className="my-2">
      {props.children}
    </li>
  ),
  p: (props: any) => (
    <p {...props} className="my-2">
      {props.children}
    </p>
  ),
};

const MdxContent = ({ source }: MdxContentProps) => {
  return (
    <div className="prose lg:prose-xl">
      <MDXRemote {...source} components={components} />
    </div>
  );
};

export default MdxContent;
