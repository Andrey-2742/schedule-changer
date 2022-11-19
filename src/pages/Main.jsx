import { useState, useEffect } from "react";
import ScheduleDate from "../components/ScheduleDate";
import ScheduleTable from "../components/ScheduleTable";
import Footer from "../components/Footer";
import Button from "../UI/Button";
import "./styles/Main.css";

function Main({setLogged}) {

    useEffect(() => {
        window.onbeforeunload = () => true;
        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [schedule, setSchedule] = useState({
        date: {
            year: tomorrow.getFullYear(),
            month: tomorrow.getMonth() + 1,
            day: tomorrow.getDate(),
            dayOfWeek: tomorrow.getDay() || 7,
            weekType: "нечетная неделя",
        },
        changes: [{
            group: [""], lesson: "", subjectOrig: [""], teacherOrig: [""],
            subjectNew: [""], teacherNew: [""], room: [""]
        }]
    });

    const groups = ["ОИБ415", "ЭБАС115д"];
    const teachers = ["ОИБ415", "ЭБАС115д"];
    const subjects = ["dhsflkhsdl dhsflkhsdl dhsflkhsdl dhsflkhsdl dhsflkhsdl", "sadsd"];
    const subjectCount = subjects.length;
    for (let i = 0; i < subjectCount; i++) {
        subjects.push("1 п/г " + subjects[i]);
    }
    for (let i = 0; i < subjectCount; i++) {
        subjects.push("2 п/г " + subjects[i]);
    }

    function download() {
        // Нумерация месяцев, дней месяца, дней недели с единицы 
        console.log(schedule)
    }

    return (
        <div className="main-page">
            <datalist id="groups">
                {groups.map((item, index) => 
                    <option value={item} key={index}/>
                )}
            </datalist>
            <datalist id="subjects">
                {subjects.map((item, index) => 
                    <option value={item} key={index}/>
                )}
            </datalist>
            <datalist id="teachers">
                {teachers.map((item, index) => 
                    <option value={item} key={index}/>
                )}
            </datalist>
            <ScheduleDate schedule={schedule} setSchedule={setSchedule}/>
            <ScheduleTable schedule={schedule} setSchedule={setSchedule}/>
            <Button img="https://img.icons8.com/ios-glyphs/30/000000/download--v1.png"
                    text="Скачать" download onClick={download}/>
            <Footer setLogged={setLogged}/>
        </div>
    );
}

export default Main;
