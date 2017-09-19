import React, { Component } from 'react'

class ApEntry extends Component {
    render() {
        return (
            <div className="apEntry">
                <h2>Manager's Approval Confirmation</h2>
                <ul>
                    {
                        this.props.apEntryList.map((item, i, arr) => {
                            return (
                                <div>
                                    <li key={i}>
                                        <h5>Name: {item.name}</h5>
                                        <h5>Date: {item.date}</h5>
                                        <h5>Miles: {item.miles}</h5>
                                        <h5>Refund: ${item.refund}</h5>
                                        <label><h5>Manager's Approval</h5></label>
                                        <input type="checkbox" name="managersApproval" value={item.managersApproval}/>
                                        <h5>MA: {item.managersApproval}</h5> console.log({item.managersApproval});
                                        <button onClick={() => this.props.moveToPay(i, item)}>Submit</button></li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ApEntry;