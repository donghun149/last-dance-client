import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from "next/router";
import MarkdownEditor from "../components/MarkdownEditor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

interface PostPageProps {
}

const PostEditPage: React.FC<PostPageProps> = () => {
  const router = useRouter()
  const [content, setContent] = useState<string | undefined>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('submit')
  }

  return (
      <Root onSubmit={handleSubmit}>
        <MarkdownEditor
            value={content}
            onChange={setContent}
        />
        <button type="submit">
          Submit
        </button>
      </Root>
  );
};

const Root = styled.form`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;
export default PostEditPage;
//
// const WritePage: React.FC<WritePageProps> = () => {
//   return (
//       <WritePageBlock>
//         <ActiveEditor />
//         <PublishScreen />
//       </WritePageBlock>
//   );
// };
//
// export default WritePage;