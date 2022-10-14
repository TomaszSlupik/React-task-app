import React from "react";
import CountDown from "./components/countdown/Countdown";
import { Component } from "react";
import "./App.css"
import EditEvent from "./components/editEvent/EditEvent";


class App extends Component {

    constructor() {
        super()
        this.state = {
            events: [
                {id:1, name: "śniadanie", time: "07:00"},
                {id:2, name: "obiad", time: "15:00"},
                {id:3, name: "kolacja", time: "20:00"},

            ]
        }
    }

    render()
    {
        
         const events = this.state.events.map(el => {
            return  <CountDown key={el.id} name={el.name} time={el.time}/> }
        )
    return (  
    <div>
        <EditEvent onSave={()=> alert('Wysłana funnkcja do dziecka')} />
        <div>{events} </div>
    </div>
    )
    }
}



export default App