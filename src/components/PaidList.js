import React, { Component } from 'react'

class PaidList extends Component {
    render() {
        return (
            <div className="paidList">
                <h2>Paid Items</h2>
                <ul>
                    {
                        this.props.paidItemsList.map((item, i, arr) => {
                            return (
                                <li key={i}><h4>Name: {item.name} Date: {item.date} Miles: {item.miles} Refund: ${item.refund}</h4></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PaidList;