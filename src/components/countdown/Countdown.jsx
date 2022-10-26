import React from "react";
import PropTypes  from "prop-types";
import styles from "./Countdown.module.css"
import "../../../node_modules/semantic-ui-css/semantic.css"


function CountDown (props) {
    return (
        <div className={styles.boxcount}>
            <div className={styles.box}>
                <div>{props.name}</div><strong className={styles.timeHourMinute}>{props.hour}: {props.minute}</strong>
                <div className={styles.delete}>
                <i className="times icon" onClick={()=>props.onRemove(props.id)}></i>
                </div>
                <div className={styles.edit}>
                <i className="edit icon" onClick={()=>props.onEdit(props.id)}></i>
                </div>
            </div>
            
        </div>
    )
}

CountDown.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func
}

export default CountDown


