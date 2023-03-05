import React from "react";
import dynamic from "next/dynamic";

interface MarkdownEditorProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  // style: React.CSSProperties | undefined;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> =
    ({value, onChange}) => {
      return (
          <MarkdownEditorWrapper
              value={value}
              onChange={onChange}
              preview='live'
              highlightEnable={true}
              enableScroll={true}
              // @ts-ignore
              height="85vh"
          />
      )
    }

const MarkdownEditorWrapper = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => <div></div>,
});

export default MarkdownEditor