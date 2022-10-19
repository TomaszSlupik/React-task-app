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
                <i class="times icon" onClick={()=>props.onRemove(props.id)}></i>
                </div>
            </div>
            
        </div>
    )
}

CountDown.propTypes = {
    name: PropTypes.string,

    
}

export default CountDown


