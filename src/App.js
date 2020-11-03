import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

const data = 
{ 
  overView: { deviceName: "GlennFamilyHome", status: "Available", lastUpdate: "2020-10-27 16:34:00" },
  outageSummary: { dayTotal: 0, weekTotal: 10, monthTotal: 20, grandTotal: 40},
  bandwidthSummary: 
  [ 
    {timeOfDay: "6am-12pm", day: 50000000, wk: 400000, mon: 6000000, yr: 6000000 },
    {timeOfDay: "12pm-6pm", day: 50000000, wk: 400000, mon: 6000000, yr: 6000000 },
    {timeOfDay: "6pm-12am", day: 50000000, wk: 400000, mon: 6000000, yr: 6000000 },
    {timeOfDay: "12am-6am", day: 50000000, wk: 400000, mon: 8000000, yr: 6000000 }
  ]
}

class Overview extends React.Component {

 
  render() {
    return  <div class="App-header">
      <div class="rTable">       
          <div class="rTableRow">
            <div class="rTableTitleCell">Device Name:</div>
            <div class="rTableDataCell">{this.state.overView.deviceName}</div>
          </div>
          <div class="rTableRow">
            <div class="rTableTitleCell">Status:</div>
            <div class="rTableDataCell">{this.state.overView.status}</div>
          </div>
        <div class="rTableRow">
            <div class="rTableTitleCell">Last Update:</div>
            <div class="rTableDataCell">{this.state.overView.lastUpdate}</div>
        </div>
      </div>
    </div>
  }
}

class OutageSummary extends React.Component {
  render() {
    return <div class="Second-header">
    <div class="rTable">       
        <div class="rTableRow">
          <div class="rTableTitleCell">Day Total:</div>
          <div class="rTableDataCell">{this.props.outageSummary.dayTotal}</div>
        </div>
        <div class="rTableRow">
          <div class="rTableTitleCell">Week Total:</div>
          <div class="rTableDataCell">{this.props.outageSummary.weekTotal}</div>
        </div>
       <div class="rTableRow">
          <div class="rTableTitleCell">Month Total:</div>
          <div class="rTableDataCell">{this.props.outageSummary.monthTotal}</div>
       </div>
       <div class="rTableRow">
          <div class="rTableTitleCell">Recorded Total:</div>
          <div class="rTableDataCell">{this.props.outageSummary.grandTotal}</div>
       </div>
    </div>
  </div>
  }
}


class BandwidthItem extends React.Component {
  render() {
    return 
  }
}

class BandwidthSummary extends React.Component {
  render() {
    const bandwidthSummary = this.props.bandwidthSummary;
    
    const bandwidths = this.props.bandwidthSummary.map((bs) => <div class="rTableRow">
      <div class="rTableCell">{bs.timeOfDay}</div>
      <div class="rTableCell">{bs.day}</div>
      <div class="rTableCell">{bs.wk}</div>
      <div class="rTableCell">{bs.mon}</div>
      <div class="rTableCell">{bs.yr}</div>
    </div>
    );

    return  (
        <div class="rTable"> 
          <div class="rTableRow">
            <div class="rTableHead">Time of Day</div>
            <div class="rTableHead">Day</div>
            <div class="rTableHead">Week</div>
            <div class="rTableHead">Month</div>
            <div class="rTableHead">Year</div>
          </div>
          {bandwidths}
        </div>
    );
  }
}



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      overView: { deviceName: "GlennFamilyHome", status: "OffLine", lastUpdate: "" },
      outageSummary: { dayTotal: 0, weekTotal: 0, monthTotal: 0, grandTotal: 0},
      bandwidthSummary:[]     
    };
  }

  componentDidMount() {
    this.setState(
      {
        overView: data.overView,
        outageSummary: data.outageSummary,
        bandwidthSummary: data.bandwidthSummary
      }
    )
    /*
    fetch("https://")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            overView: result.overView,
            outageSummary: result.outageSummary,
            bandwidthSummary: result.bandwidthSummary
          });
        },
        (error) => {
          this.setState({
            error
          });
          
        }
      )
    */
  }


  render() {
    return (
      <div className="App">

        <div class="App-title">       
            <h1>NetMon Customer Portal</h1>
        </div>
        <Overview overView={this.state.overView} />

        <div class="App-title">       
          <h2>Outage Events</h2>
        </div>
        <OutageSummary outageSummary={this.state.outageSummary} />
    
        <div class="App-title">       
            <h2>Bandwidth Averages</h2>
        </div>

        <div class="Second-header">
          <BandwidthSummary bandwidthSummary={this.state.bandwidthSummary}/>
        </div>

      </div>


    );
  }
}

export default withAuthenticator(App);
