import React, {useState} from "react";
import dynamic from "next/dynamic";

interface RichTextProps {
  value: string;
  onChange: (value: string) => void;
  style: React.CSSProperties;
}

const RichTextEditor = ({value, onChange, style}: RichTextProps) => {
  const [content, setContent] = useState(value);

  const handleChange = (value: string) => {
    setContent(value);
    onChange(value);
  };

  return (
      <QuillWrapper
          value={content}
          onChange={handleChange}
          style={style}
          theme="snow"
      />
  );
};

const QuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <div></div>,
});

export default RichTextEditor