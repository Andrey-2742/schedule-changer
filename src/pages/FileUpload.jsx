import { useState } from "react";
import Button from "../UI/Button";
import LinkButton from "../UI/LinkButton";
import "../UI/styles/Input.css";
import "./styles/FileUpload.css"

function FileUpload({accept, quantity, title}) {

    const [uploaded, setUploaded] = useState(false);
    const [files, setFiles] = useState(Array(quantity))

    function upload(e) {
        console.log(files)
        e.preventDefault();
        setUploaded(true);
    }

    function updateFiles(e, i) {
        const newFiles = [...files]
        newFiles[i] = e.target.files[0]
        setFiles(newFiles)
    }

    return (
        <div className="upload-page">
            <span className="title">{uploaded ? "Отправлено" : title}</span>
            {uploaded ? "" :
            <form className="upload-form" onSubmit={upload}>
                {[...Array(quantity).keys()].map(i =>
                    <input type="file" className="input-standard" accept={accept} required={i === 0}
                           onChange={e => updateFiles(e, i)} key={i}/>
                )}
                <Button img="https://img.icons8.com/ios-glyphs/30/000000/upload--v1.png"
                        text="Загрузить" upload/>
            </form>
            }
            <LinkButton to="/" text="Назад"/>
        </div>
    );
}

export default FileUpload;
