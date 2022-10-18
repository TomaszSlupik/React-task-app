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
                {id:0, name: "śniadanie", hour: "07", minute: "00"},
                {id:1, name: "obiad", hour: "15", minute: "00"},
                {id:2, name: "kolacja", hour: "20", minute: "00"},

            ],
            editedEvents: {
                id:3, name: "", hour: "", minute: ""
            }
        }
        this.handleEditEvent = this.handleEditEvent.bind(this)
        this.addEvent = this.addEvent.bind(this)
    }

    handleEditEvent (val) {
        this.setState(prevState =>{
            return {
                editedEvents: Object.assign(prevState.editedEvents, val)
            }
        })
    }

    addEvent () {
        this.setState(prevState => ({
            events: [...prevState.events, prevState.editedEvents],
            editedEvents: {
                id:3, name: "", hour: "", minute: ""
            }
        }))
    }

    render()
    {
        
         const events = this.state.events.map(el => {
            return  <CountDown key={el.id} name={el.name} hour={el.hour} minute={el.minute}/> }
        )
    return (  
    <div>
        <EditEvent 
        onInputChnage={val=>this.handleEditEvent(val)} 
        onSave={()=> this.addEvent()} />
        <div>{events} </div>
    </div>
    )
    }
}



export default App