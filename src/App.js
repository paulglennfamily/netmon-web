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
    {timeOfDay: "6am-12pm", average: 50000000, minimum: 400000, maximum: 6000000 },
    {timeOfDay: "12pm-6pm", average: 50000000, minimum: 400000, maximum: 6000000 },
    {timeOfDay: "6pm-12am", average: 50000000, minimum: 400000, maximum: 6000000 },
    {timeOfDay: "12am-6am", average: 50000000, minimum: 400000, maximum: 8000000 }
  ]
}

class Overview extends React.Component {
  render() {
    return  <div class="App-header">
      <div class="rTable">       
          <div class="rTableRow">
            <div class="rTableTitleCell">Device Name:</div>
            <div class="rTableDataCell">{this.props.overView.deviceName}</div>
          </div>
          <div class="rTableRow">
            <div class="rTableTitleCell">Status:</div>
            <div class="rTableDataCell">{this.props.overView.status}</div>
          </div>
        <div class="rTableRow">
            <div class="rTableTitleCell">Last Update:</div>
            <div class="rTableDataCell">{this.props.overView.lastUpdate}</div>
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
    <div class="rTableCell">{bs.average}</div>
    <div class="rTableCell">{bs.minimum}</div>
    <div class="rTableCell">{bs.maximum}</div>
  </div>
  );


    return  (
                <div class="rTable"> 
                  <div class="rTableRow">
                    <div class="rTableHead">Time of Day</div>
                    <div class="rTableHead">Average</div>
                    <div class="rTableHead">Minimum</div>
                    <div class="rTableHead">Maximum</div>
                  </div>
                  {bandwidths}
                </div>
          
            );

  }
}



function App() {
  return (
    <div className="App">

      <div class="App-title">       
          <h1>NetMon Customer Portal</h1>
      </div>
      <Overview overView={data.overView} />

      <div class="App-title">       
        <h2>Outage Events</h2>
      </div>
      <OutageSummary outageSummary={data.outageSummary} />
   
      <div class="App-title">       
          <h2>Bandwidth</h2>
      </div>

      <div class="Second-header">
        <BandwidthSummary bandwidthSummary={data.bandwidthSummary}/>
        

      </div>

    </div>


  );
}

export default withAuthenticator(App);
