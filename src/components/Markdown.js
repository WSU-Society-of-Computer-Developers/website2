import React from "react";
import Markdown from "markdown-to-jsx/dist/index.js";

const Div = ({ children, ...props }) => <div {...props}>{children}</div>;

export default function md({ children }) {
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: Div,
            props: { className: "text-3xl font-bold my-2" },
          },
          h2: {
            component: Div,
            props: { className: "text-2xl font-bold my-2" },
          },
          h3: {
            component: Div,
            props: { className: "text-xl font-bold my-2" },
          },
          h4: {
            component: Div,
            props: { className: "text-lg font-bold my-2" },
          },
          h5: {
            component: Div,
            props: { className: "text-md font-bold my-2" },
          },
          h6: {
            component: Div,
            props: { className: "text-sm font-bold my-2" },
          },
          p: { component: Div, props: { className: "text-base my-2" } },
          blockquote: {
            component: Div,
            props: { className: "border-l-4 border-gray-400 pl-2" },
          },
          code: {
            component: Div,
            props: { className: "text-base bg-gray-800 text-white p-1" },
          },
          pre: {
            component: Div,
            props: { className: "text-base bg-gray-800 text-white p-1" },
          },
          img: { component: Div, props: { className: "w-full" } },
          hr: {
            component: Div,
            props: { className: "border-gray-700 border-1 my-3" },
          },
          a: {
            component: "a",
            props: { className: "text-teal-400 hover:underline" },
          },
          ul: {
            component: "ul",
            props: { className: "list-disc list-inside" },
          },
          ol: {
            component: "ol",
            props: { className: "list-decimal list-inside" },
          },
          li: { component: "li", props: { className: "text-base" } },
        },
      }}
    >
      {children.toString()}
    </Markdown>
  );
}
