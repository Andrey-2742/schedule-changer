import InputCell from "./InputCell";
import "./styles/ScheduleTable.css";

function Table({schedule, setSchedule}) {

    function getRowIndex(row) {
        return Array.from(row.parentNode.children).indexOf(row);
    }

    function addRow() {
        const newSchedule = structuredClone(schedule);
        newSchedule.changes.push({
            group: "", lesson: "", subjectOrig: "", teacherOrig: "",
            subjectNew: "", teacherNew: "", room: ""
        });
        setSchedule(newSchedule);
    }

    function deleteRow(e) {
        const row = e.target.parentNode;
        if (row.parentNode.childElementCount > 1) {
            const index = getRowIndex(row);
            const newSchedule = structuredClone(schedule);
            newSchedule.changes.splice(index, 1);
            setSchedule(newSchedule);
        }
    }

    return (
      <table className="main-table" spellCheck="false">
        <thead>
            <tr>
                <th className="delete-row"/>
                <th className="group">Группа</th>
                <th className="lesson">№ пары</th>
                <th className="subjectOrig">Название дисциплины, МДК по расписанию</th>
                <th className="teacherOrig">ФИО преподавателя</th>
                <th className="subjectNew">Название дисциплины, МДК по замене</th>
                <th className="teacherNew">ФИО преподавателя</th>
                <th className="room">№ кабинета</th>
            </tr>
        </thead>
        <tbody>
        {schedule.changes.map((item, index) =>
            <tr key={Math.random()}>
                <td className="delete-row" onClick={deleteRow}/>
                <InputCell schedule={schedule} setSchedule={setSchedule} rowIndex={index}
                            name="group" list="groups" placeholder="Группа"/>
                <InputCell schedule={schedule} setSchedule={setSchedule} rowIndex={index}
                            name="lesson" placeholder="№ пары" multiple={false}/>
                <InputCell schedule={schedule} setSchedule={setSchedule} rowIndex={index}
                            name="subjectOrig" list="subjects"
                            placeholder="Название дисциплины, МДК по расписанию"/>
                <InputCell schedule={schedule} setSchedule={setSchedule} rowIndex={index}
                            name="teacherOrig" list="teachers" placeholder="ФИО преподавателя"/>
                <InputCell schedule={schedule} setSchedule={setSchedule} rowIndex={index}
                            name="subjectNew" list="subjects"
                            placeholder="Название дисциплины, МДК по замене"/>
                <InputCell schedule={schedule} setSchedule={setSchedule} rowIndex={index}
                            name="teacherNew" list="teachers" placeholder="ФИО преподавателя"/>
                <InputCell schedule={schedule} setSchedule={setSchedule} rowIndex={index}
                            name="room" placeholder="№ кабинета"/>
            </tr>
        )}
        </tbody>
        <tfoot>
            <tr>
                <td className="delete-row"/>
                <td className="add-row" colSpan="7" onClick={addRow}/>
            </tr>
        </tfoot>
      </table>
    );
}

export default Table;
