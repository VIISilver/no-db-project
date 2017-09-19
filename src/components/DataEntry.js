import React, { Component } from 'react'

class DataEntry extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            date: "",
            milesDriven: 0,
            managersApproval: false
        }
    }

    render() {
        return (
            <div className='input_container'>
                <h4>Employee Name</h4>
                <input type='text' value={this.state.name} onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    })
                }}/>
                <h4>Date</h4>
                <input type='date' value={this.state.date} onChange={(i) =>{
                    this.setState({
                        date: i.target.value
                    })
                }}/>
                <h4>Miles Driven</h4>
                <input type='number' value={this.state.milesDriven} onChange={(j) =>{
                    this.setState({
                        milesDriven: j.target.value
                    })
                }}/>
                <button onClick={() => this.props.enterData(this.state.name, this.state.date, this.state.milesDriven, this.state.managersApproval)}>Submit</button>
            </div>
        )
    }
}
export default DataEntry;