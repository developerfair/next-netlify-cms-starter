import React from "react";
import MarkdownToJSX from "markdown-to-jsx";

export const Markdown: React.FC = ({ children }) =>
  children ? <MarkdownToJSX>{String(children)}</MarkdownToJSX> : null;
