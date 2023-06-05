import { useState } from "react";
import  ReactMarkdown  from "react-markdown";
const Markdown = () => {
    const [markText, setMarkText] = useState('### *Welcome to the code editor!*')
    return (
        <div id="edito">
            <h2>Editor</h2>
            <textarea id="editor" value={markText} onChange={(e)=>{setMarkText(e.target.value)}}></textarea>
            <h2>Preview</h2>
            <div id="preview">
              <ReactMarkdown>{markText}</ReactMarkdown>
            </div>
        </div>
    );
};
 
export default Markdown;