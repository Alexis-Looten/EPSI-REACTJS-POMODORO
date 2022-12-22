import { useState, useEffect } from "react";
import useTimerParser from "./useTimerParser";
import useDateFormat from "./useDateFormat";

function Effect(){

    const [clock, setClock] = useState(0);

    const [toggle, setToggle] = useState(false)
    const [dateSort, setDateSort] = useState(false)
    const [timerSort, setTimerSort] = useState(false)

    const [dateList, setdateList] = useState([]);

    useEffect( () => {
        const interval = setInterval( () => {
            setClock(clock => clock + 1);
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const toggler = () => {
        if (toggle === true) {
            setdateList(current => [...current, {date: Date(), timer: clock}]);
        }
        setToggle(!toggle);
        setClock(0);

    }

    const SortByDateUp = () => {
        console.log(dateList[0].date)
        setdateList(dateList => dateList.sort((a, b) =>  Date.parse(a.date) - Date.parse(b.date)))
        setDateSort(!dateSort);
    }

    const SortByDateDown = () => {
        console.log(dateList[0].date)
        setdateList(dateList => dateList.sort((a, b) =>  Date.parse(b.date) - Date.parse(a.date)))
        setDateSort(!dateSort);
    }

    const SortByTimerUp = () => {
        setdateList(dateList => dateList.sort((a, b) => a.timer - b.timer))
        setTimerSort(!timerSort);
    }

    const SortByTimerDown = () => {
        setdateList(dateList => dateList.sort((a, b) => b.timer - a.timer))
        setTimerSort(!timerSort);
    }

    const {parseSecondtoHMS} = useTimerParser();
    const {formatedDate} = useDateFormat();

    return (
        <>
            <h1 class="center">Pomodoro Timer</h1>
            <div class="center">
                {toggle? parseSecondtoHMS(clock): parseSecondtoHMS(0)}
            </div>
            <div class="center_btn">
                <button class="btn_start" onClick={toggler}>Start</button>
                
            </div>

            <div class= "center_table">
            <table class="minimalistBlack">
                <thead>
                <tr>
                    <th>
                        Date <button class="btn_sort" onClick={SortByDateUp}>△</button><button class="btn_sort" onClick={SortByDateDown}>▽</button>
                    </th>
                    <th>
                        Time <button class="btn_sort" onClick={SortByTimerUp}>△</button><button class="btn_sort" onClick={SortByTimerDown}>▽</button>
                    </th>
                </tr>
                </thead>
                <tbody>

                {dateList.map((element, index) => {
                    return (
                        <tr key={index}>
                            <td>{formatedDate(element.date)}</td>
                            <td>{parseSecondtoHMS(element.timer)}</td>
                        </tr>
                    );
                })}
                
                </tbody>
            </table>
            </div>             
            
        </>
    )
}
export default Effect;