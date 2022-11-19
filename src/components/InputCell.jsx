import "./styles/MultiInput.css";

function InputCell({schedule, setSchedule, rowIndex, multiple=true, ...props}) {

    const items = multiple
        ? schedule.changes[rowIndex][props.name]
        : [schedule.changes[rowIndex][props.name]];

    function getChildIndex(child) {
        return Array.from(child.parentNode.children).indexOf(child);
    }

    function addCellItem(e) {
        const itemContainer = e.target.parentNode;
        const itemIndex = getChildIndex(itemContainer);
        const newSchedule = structuredClone(schedule);
        newSchedule.changes[rowIndex][props.name].splice(itemIndex + 1, 0, "");
        setSchedule(newSchedule);
    }

    function tryDeleteCellItem(e) {
        const itemContainer = e.target.parentNode;
        if (e.target.value === "" && itemContainer.parentNode.childElementCount > 1) {
            const itemIndex = getChildIndex(itemContainer);
            const newSchedule = structuredClone(schedule);
            newSchedule.changes[rowIndex][props.name].splice(itemIndex, 1);
            setSchedule(newSchedule);
        }
    }

    function updateCellItem(e) {
        const input = e.target;
        if (multiple) {
            const itemIndex = getChildIndex(input.parentNode);
            schedule.changes[rowIndex][input.name][itemIndex] = input.value;
        } else
            schedule.changes[rowIndex][input.name] = input.value;
    }

    function tryFocusOut(e) {
        if (e.which == 13) e.target.blur();
    }

    return (
        <td className={props.name}>
        {items.map((item, index) =>
            <div className="item-container" key={index}>
                <input type="text" autoComplete="off" defaultValue={item}
                       onBlur={updateCellItem} onChange={tryDeleteCellItem}
                       onKeyUp={tryFocusOut} {...props}/>
                {multiple ? <div className="add-item" onClick={addCellItem}/> : ""}
            </div>
        )}
        </td>
    );
}

export default InputCell;
