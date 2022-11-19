import LinkButton from "../UI/LinkButton";
import "./styles/Footer.css";

function Footer({setLogged}) {

    function logout(e) {
        e.preventDefault();
        localStorage.removeItem("isLogged");
        setLogged(false);
    }

    return (
        <div className="main-footer">
            <div className="footer-section">
                <LinkButton to="/upload/img" text="Отправить"/>
                <LinkButton to="/upload/template" text="Обновить шаблон"/>
                <LinkButton to="/upload/bell" text="Обновить расписание звонков"/>
            </div>
            <div className="footer-section">
                <LinkButton to="/login" text="Выйти" onClick={logout}/>
            </div>
        </div>
    );
}

export default Footer;
