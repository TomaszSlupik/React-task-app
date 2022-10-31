import React from "react";
import PropTypes  from "prop-types";
import styles from "./Countdown.module.css"
import "../../../node_modules/semantic-ui-css/semantic.css"
import { hourMinutesToSeconds, secondsToHourMinuteSecond } from "../utils/utils";
import Overlay from "../overlay/Overlay";

function CountDown (props) {
    const eventInSecond = hourMinutesToSeconds(props.hour, props.minute)
    const nowInSecond = hourMinutesToSeconds(props.timeNow.hour, props.timeNow.minute) + props.timeNow.second

    const diff = eventInSecond - nowInSecond
    const diffText = diff > 0 ? secondsToHourMinuteSecond(diff) : 'jutro'
    return (
        <div className={styles.boxcount}>
            <div className={styles.box}>
                <div>{props.name}</div><strong className={styles.timeHourMinute}>{diffText}</strong>
                <div className={styles.delete}>
                <i className="times icon" onClick={()=>props.onRemove(props.id)}></i>
                </div>
                <div className={styles.edit}>
                <i className="edit icon" onClick={()=>props.onEdit(props.id)}></i>
                </div>
                <Overlay>
                    <h1>{props.name}</h1>
                    <p>{props.hour.toString().padStart(2,0)}:{props.minute.toString().padStart(2,0)}</p>
                </Overlay>
            </div>
            
        </div>
    )
}

CountDown.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
    timeNow: PropTypes.shape({
        hour: PropTypes.number,
        mnute: PropTypes.number,
        second: PropTypes.number
    })
}

export default CountDown


