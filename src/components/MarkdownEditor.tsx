import React from "react";
import dynamic from "next/dynamic";

interface MarkdownEditorProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  style: React.CSSProperties | undefined;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> =
    ({value, onChange, style}) => {
      return (
          <div style={style}>
            <MarkdownEditorWrapper
                style={{flex: 1}}
                value={value}
                onChange={onChange}
                preview='edit'
                highlightEnable={true}
                enableScroll={true}
            />
          </div>
      )
    }

const MarkdownEditorWrapper = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => <div></div>,
});

export default MarkdownEditor