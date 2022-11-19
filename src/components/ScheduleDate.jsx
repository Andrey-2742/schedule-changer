import "../UI/styles/Input.css";
import "./styles/ScheduleDate.css";

function ScheduleDate({schedule, setSchedule}) {

    const monthName = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const weekDay = [
        "понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"
    ];
    
    function getDate() {
        return new Date(`${schedule.date.year}-${schedule.date.month}-${schedule.date.day}`)
            .toLocaleDateString('en-CA');
    }

    function changeDate(e) {
        const newSchedule = structuredClone(schedule);
        const newDate = new Date(e.target.value)
        newSchedule.date.year = newDate.getFullYear();
        newSchedule.date.month = newDate.getMonth() + 1;
        newSchedule.date.day = newDate.getDate();
        newSchedule.date.dayOfWeek = newDate.getDay() || 7;
        setSchedule(newSchedule);
    }
    
    function changeWeek(e) {
        const newSchedule = structuredClone(schedule);
        newSchedule.date.weekType = e.target.value;
        setSchedule(newSchedule);
    }

    return (
        <div className="main-date">
            <input type="date" className="date-picker input-standard" 
                   defaultValue={getDate()}
                   onChange={changeDate}/>
            Учебное отделение «БТМ»<br/>
            {`${schedule.date.day} ` +
             `${monthName[schedule.date.month - 1]} ` +
             `${schedule.date.year} года ` +
             `(${weekDay[schedule.date.dayOfWeek - 1]})`}<br/>
            (
            <select className="week input-standard" onChange={changeWeek} defaultValue={schedule.date.weekType}>
                <option value="четная неделя">четная неделя</option>
                <option value="нечетная неделя">нечетная неделя</option>
            </select>
            )
        </div>
    );
}

export default ScheduleDate;
