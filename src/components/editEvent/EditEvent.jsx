import React from "react";
import "./EditEvent.css"

function EditEvent (props) {
    return (
        <div>
            <div className="box">
                <div className="boxflex">
                    <div className="header">Edytowanie formularza</div>

                    <label htmlFor="name">Nazwa</label>
                    <input type="text" id="name" name="name" onChange={(e)=> props.onInputChnage({[e.target.name] : [e.target.value]})}/>

                    <label htmlFor="hour">Godzina</label>
                    <input type="tel" id="hour" name="hour" onChange={(e)=> props.onInputChnage({[e.target.name] : [e.target.value]})}/>

                    <label htmlFor="minute">Minuty</label>
                    <input type="tel" id="minute" name="minute" onChange={(e) => props.onInputChnage({[e.target.name] : [e.target.value]})}/>

                    <div className="boxrow">
                        <button className="btn btn-danger">Cancel</button>
                        <button className="btn btn-success" onClick={()=> props.onSave()}>Ok</button>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default EditEvent