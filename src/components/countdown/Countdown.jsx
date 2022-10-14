import React from "react";
import PropTypes  from "prop-types";
import styles from "./Countdown.module.css"


function CountDown (props) {
    return (
        <div className={styles.boxcount}>
            <div className={styles.box}>
                <div>{props.name}</div><strong>{props.time}</strong>
            </div>
            
        </div>
    )
}

CountDown.propTypes = {
    name: PropTypes.string,
    time: PropTypes.string
}

export default CountDown