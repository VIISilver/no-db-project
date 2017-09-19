import React, { Component } from 'react';
import './App.css';
import DataEntry from './components/DataEntry'
import ApEntry from './components/ApEntry'
import axios from 'axios';
import ToBePaid from './components/ToBePaid'
import PaidList from './components/PaidList'
import mileDeduction from './components/MileDeduction'


class App extends Component {
  constructor() {
    super();

    this.state = {
      apEntryList: [],
      toBePaidList: [],
      paidItemsList: [],
      managersApproval: false,
      baseURL: 'http://localhost:3000'
    }
    this.enterData = this.enterData.bind(this);
    this.moveToPay = this.moveToPay.bind(this);
    this.moveToPaidList = this.moveToPaidList.bind(this);
  }

  enterData(val, date, miles, ma) {
    var total = miles * mileDeduction;
    var round = Math.round(total) / 100;
    var apCopy = { name: val, date: date, miles: miles, refund: round, managersApproval: ma }
    console.log(apCopy);

    this.setState({
      apEntryList: [...this.state.apEntryList, apCopy]
    })
  }

  moveToPay(index, val) {
    var apEntryCopy = this.state.apEntryList.slice();
    apEntryCopy.splice(index, 1);

    var toPayCopy = this.state.toBePaidList.slice();
    toPayCopy.push(val);

    this.setState({
      apEntryList: apEntryCopy,
      toBePaidList: toPayCopy,
    })
  }

  moveToPaidList(index, val) {
    var toPayCopy = this.state.toBePaidList.slice();
    toPayCopy.splice(index, 1);

    var paidItemsCopy = this.state.paidItemsList.slice();
    paidItemsCopy.push(val);

    this.setState({
      toBePaidList: toPayCopy,
      paidItemsList: paidItemsCopy
    })
  }

  approvalReceived() {
    this.setState({
      managersApproval: true
    })
  }

  render() {
    console.log(this.state.apEntryList);

    return (
      <div>
          <h1>Mileage Reimbursement</h1>
          <DataEntry enterData={this.enterData} />
          <ApEntry apEntryList={this.state.apEntryList} moveToPay={this.moveToPay} />
          <ToBePaid toBePaidList={this.state.toBePaidList} moveToPaidList={this.moveToPaidList} />
          <PaidList paidItemsList={this.state.paidItemsList} />
        </div>
        );
  }
}

export default App;
