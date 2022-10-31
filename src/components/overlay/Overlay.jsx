import { Component } from 'react';
import './Overlay.css'


class Overlay extends Component {
    constructor() {
       super()
       this.state = {
        visible: false
       } 

       this.toggleVisible = this.toggleVisible.bind(this)
    }

    toggleVisible () {
        this.setState(prevState => {
            return {
                visible: !prevState.visible
            }
        })
    }

    render () {
        const overlayClass = 
        this.state.visible === true ? "overlaymodal overlaymodalVisible" : "overlaymodal"


        return (
            <div className='overlay'>
                <span onClick={()=> this.toggleVisible()}> info</span>
                <div className={overlayClass}>
                    <div className="backoverlay" onClick={()=>this.toggleVisible()}>
                    <i className="times icon"></i>
                    </div>
                    <div className="overlaymodalbox">
                    <div className='overlaytitle'>{this.props.children}</div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Overlay