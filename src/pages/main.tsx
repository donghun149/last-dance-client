import React, {useState} from "react";
import 'react-quill/dist/quill.snow.css'
import RichTextEditor from "../components/RichTextEditor";

interface Props {
}

const MobileAdaptivePage: React.FC<Props> = () => {
  const [content, setContent] = useState("");

  return (
      <div style={{
        display: "flex",
        flexDirection: "row",
        width: "1000px",
        margin: "0 auto",
        minHeight: "100vh"
      }}>
        <div style={{flex: 8, borderRight: "1px solid #D5D5D5", textAlign: "left"}}>
          <CompanyTitle title="COMPANY"/>
          <RichTextEditor value={content} onChange={setContent}
                          style={{width: "500px", height: "500px", marginTop: "50px"}}/>
        </div>
        <div style={{flex: 2, paddingTop: "50px", display: "flex", flexDirection: "column"}}>
          <Menu title="워크샵"/>
          <Menu title="직책"/>
          <Menu title="명함"/>
          <Menu title="대표"/>
          <Menu title="휴가"/>
          <Menu title="출퇴근"/>
        </div>
      </div>
  );
};

interface MenuProps {
  title: string;
}

const Menu: React.FC<MenuProps> = ({title}) => {
  return (
      <div style={{
        fontSize: "26px",
        lineHeight: "26px",
        backgroundColor: "white",
        marginBottom: "20px",
        paddingLeft: "10px",
        fontWeight: "bold",
        cursor: "pointer"
      }}>
        {title}
      </div>
  );
};

interface CompanyTitleProps {
  title: string;
}

const CompanyTitle: React.FC<CompanyTitleProps> = ({title}) => {
  return (
      <h1 style={{
        fontSize: "50px",
        fontWeight: "bold",
        paddingTop: "50px"
      }}>
        {title}
      </h1>
  );
};

export default MobileAdaptivePage;
