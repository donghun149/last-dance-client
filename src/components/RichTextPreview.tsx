import React from "react";
import {marked} from "marked";

interface PreviewProps {
  value: string;
  style: React.CSSProperties;
}

const RichTextPreview = ({value, style}: PreviewProps) => {
  const html = marked(value);
  return (
      <div
          style={{
            ...style,
            border: "1px solid gray",
            overflow: "auto",
            padding: "10px",
            ...style,
          }}
          dangerouslySetInnerHTML={{__html: html}}
      />
  );
};
export default RichTextPreview;