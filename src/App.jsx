import React from "react";
import CountDown from "./components/countdown/Countdown";
import { Component } from "react";
import "./App.css"
import EditEvent from "./components/editEvent/EditEvent";
import uniqid from 'uniqid'


class App extends Component {

    constructor() {
        super()
        this.state = {
            now: {
                hour:new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds(),
            },
            events: [
                {id:0, name: "śniadanie", hour: 7, minute: 0},
                {id:1, name: "obiad", hour: 15, minute: 0},
                {id:2, name: "kolacja", hour: 20, minute: 0},

            ],
            editedEvents: {
                id:uniqid(), name: "", hour: -1, minute: -1
            }
        }
        this.timer = this.timer.bind(this)
        this.handleEditEvent = this.handleEditEvent.bind(this)
        this.addEvent = this.addEvent.bind(this)
        this.removeTask = this.removeTask.bind(this)
        this.editTask = this.editTask.bind(this)
        this.handleEditCancel = this.handleEditCancel.bind(this)
    }

    timer () {
        this.setState({
            now: {
                hour:new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds(),
            },
        })
    }

    componentDidMount(){
        const storageEvents = JSON.parse(localStorage.getItem("events")) || [];
        this.setState({events: storageEvents})
        const interwaliID = setInterval(this.timer, 1000);
        this.setState ({interwaliID: interwaliID})
    }

    handleEditEvent (val) {
        this.setState(prevState =>{
            return {
                editedEvents: Object.assign(prevState.editedEvents, val)
            }
        })
    }

    addEvent () {
        this.setState(prevState=>{
            const editEventExists = prevState.events.find(
                el=>el.id === prevState.editedEvents.id)

        let updateEvents;

        if (editEventExists) {
            updateEvents = prevState.events.map(el=>{
                if(el.id === prevState.editedEvents.id) return prevState.editedEvents
                else return el
            })
        } else {
            updateEvents = [...prevState.events, prevState.editedEvents]
        }

        return {
            events: updateEvents, 
            editedEvents: {id:uniqid(), name: "", hour: -1, minute: -1}
        }

        }, ()=> localStorage.setItem("events", JSON.stringify(this.state.events)))


        // this.setState(prevState => ({
        //     events: [...prevState.events, prevState.editedEvents],
        //     editedEvents: {
        //         id:uniqid(), name: "", hour: "", minute: ""
        //     }
        // }))
    }

    removeTask (id) {
        this.setState(prevState =>({
            events: prevState.events.filter(el => el.id !== id)
        }), ()=> localStorage.setItem("events", JSON.stringify(this.state.events)))
    }

    editTask (id) {
        this.setState(prevState => ({
            editedEvents: {...prevState.events[id]}
        }))
    }

    handleEditCancel () {
        this.setState({
            editedEvents: {id:uniqid(), name: "", hour: -1, minute: -1}
        })
    }
    

    render()
    {
        
         const events = this.state.events.map(el => {
            return  <CountDown key={el.id} id={el.id} name={el.name} hour={el.hour} minute={el.minute} onRemove={(id)=>this.removeTask(id)} onEdit={(id)=> this.editTask(id)}
            timeNow={this.state.now}/> }
        )
    return (  
    <div>
        <div>{events} </div>
        <EditEvent 
        onInputChnage={val=>this.handleEditEvent(val)} 
        onSave={()=> this.addEvent()} 
        onCancel={()=> this.handleEditCancel()}
        />
        
    </div>
    )
    }
}



export default App