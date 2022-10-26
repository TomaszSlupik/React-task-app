import React from "react";
import "./EditEvent.css"
import isValidNumber from "../utils/utils";
import { parseInputAsNumber } from "../utils/utils";
import PropTypes  from "prop-types";

function EditEvent (props) {
    return (
        <div>
            <div className="box">
                <div className="boxflex">
                    <div className="header">Edytowanie formularza</div>

                    <label htmlFor="name">Nazwa</label>
                    <input type="text" id="name" name="name" value={props.name} onChange={(e)=> props.onInputChnage({[e.target.name] : [e.target.value]})}/>

                    <label htmlFor="hour">Godzina</label>
                    <input type="tel" id="hour" name="hour" value={props.hour === -1 ? "" : props.hour} onChange={(e)=> props.onInputChnage({[e.target.name] : parseInputAsNumber(e.target.value)})} onKeyPress={e => isValidNumber(e)}/>

                    <label htmlFor="minute">Minuty</label>
                    <input type="tel" id="minute" name="minute" value={props.minute === -1 ? "" : props.minute} onChange={(e) => props.onInputChnage({[e.target.name] : parseInputAsNumber(e.target.value)})} onKeyPress={e=>isValidNumber(e)}/>

                    <div className="boxrow">
                        <button className="btn btn-danger">Cancel</button>
                        <button className="btn btn-success" onClick={()=> props.onSave()}>Ok</button>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

EditEvent.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
    onInputChnage: PropTypes.func, 
    onSave: PropTypes.func
}

export default EditEvent