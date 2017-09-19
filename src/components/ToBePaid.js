import React, { Component } from 'react'

class ToBePaid extends Component {
    render() {
        return (
            <div className="toBePaid">
                <h2>To Be Paid</h2>
                <ul>
                    {
                        this.props.toBePaidList.map((item, i, arr) => {
                            return (
                                <li onClick={() => this.props.moveToPaidList(i, item)} key={i}><h4>Name: {item.name} Date: {item.date} Miles: {item.miles} Refund: ${item.refund}</h4></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ToBePaid;