// InlineCodeHighlight.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const InlineCodeHighlight = ({ language, children }) => (
  <SyntaxHighlighter language={language} style={okaidia}>
    {children}
  </SyntaxHighlighter>
);

export default InlineCodeHighlight;
