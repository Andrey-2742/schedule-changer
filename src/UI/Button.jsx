import "./styles/Button.css";

function Button({text, img, download, upload, onClick}) {

    let classes = "button-standard";
    if (download) classes += " button-download";
    else if (upload) classes += " button-upload";

    return (
        <button className={classes} onClick={onClick}>
            {img ? <img src={img} alt=""/> : ""}
            <span>{text}</span>
        </button>
    );
}

export default Button;
