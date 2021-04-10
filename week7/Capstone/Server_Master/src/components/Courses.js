import React, {Component} from "react"
import axios from "axios"
export default class  Courses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            courses: "",
            updates1: "",
            updates2: ""
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
  
    
    
    handleChange(e) {
    
        const {name, value} = e.target
        this.setState( ({[name]: value}))
    }
    
    handleSubmit(e) {
        e.preventDefault()
        const enroll= {
            courses: [this.state.updates1, this.state.updates2]
        }
        axios.post("/data", enroll)
        .then(res => this.props.getStudent())
        .catch(err => console.log(err))
        // this.setState({courses: [this.state.updates1, this.state.updates2], updates: ""}) 

    }
    
    
    render() {

    return (
        <div onSubmit= {this.handleSubmit}>

        <div id= "info">
            <input 
            type="text" 
            name="updates1" 
            
            onChange={this.handleChange}
            />
            <input 
            type="text" 
            name="updates2" 
           
            onChange={this.handleChange}
            />
            {/* <input 
            type="text" 
            name="courses" 
            value= {this.state.courses} 
            onChange={this.handleChange}
            /> */}
            {/* <input 
            type="text" 
            name="courses" 
            value= {this.state.courses} 
            onChange={this.handleChange}
            />
            <input 
            type="text" 
            name="courses" 
            value= {this.state.courses} 
            onChange={this.handleChange}
            /> */}

            <button></button>
        </div>

        </div>
    )

}
}

