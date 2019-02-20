import React, { Component } from 'react';

import './App.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const graphData=[{
    name:"2018",data: [{
            "month": 1,
            "totalHMR": 3844953.789999998,
            "totalMachines": 25674
        },
        {
            "month": 2,
            "totalHMR": 381223.789999998,
            "totalMachines": 21274
        },
        {
            "month": 3,
            "totalHMR": 3853453.789999998,
            "totalMachines": 23374
        },
        {
          "month": 4,
          "totalHMR": 3253453.789999998,
          "totalMachines": 23374
        },
        {
          "month": 5,
          "totalHMR": 3453453.789999998,
          "totalMachines": 23374
      }
    ]},
    {name:"2017",data: [{
            "month": 1,
            "totalHMR": 3124953.789999998,
            "totalMachines": 25187
        },
        {
            "month": 2,
            "totalHMR": 122353.789999998,
            "totalMachines": 1187
        },
        {
            "month": 3,
            "totalHMR": 785553.789999998,
            "totalMachines": 67287
        },
          {
            "month": 4,
            "totalHMR": 785553.789999998,
            "totalMachines": 67287
        },
        {
          "month": 5,
          "totalHMR": 785553.789999998,
          "totalMachines": 67287
      }
    ]
}]



class App extends Component {

  constructor(props){
    super(props);
    this.state={
      series:[]
    }
  }


  componentDidMount(){
    this.setState({
      series:graphData
    })
  }

  render() {
    let series=this.state.series;
    return (
      <div className="app">

        <div className="row mb20">
          MACHINE UTILIZATION
        </div>

        <div className="card mb20">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <label>Split by:</label>
                <select class="form-control">
                  <option>state</option>
                  <option>2</option>
                </select>
              
              </div>
              <div className="col">
              <label>Machine type:</label>
                <select className="form-control" >
                  <option>all</option>
                  <option>2</option>
                </select>
              </div>
              <div className="col">
              <label>Duration:</label>
                <select className="form-control" >
                  <option>yearly</option>
                  <option>2</option>
                </select>
              </div>
              <div className="col">
              <label>Period:</label>
                <select className="form-control" >
                  <option>2019</option>
                  <option>2</option>
                </select>
              </div>
              <div className="col">
              <button type="button" class="btn btn-success">DOWNLOAD</button>
              </div>
            </div>
          </div>
        </div>  


        <div className="card">
          <div className="card-body">
            <LineChart width={600} height={300}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="month" type="category" allowDuplicatedCategory={false} />
            <YAxis dataKey="totalHMR"/>
            <Tooltip/>
            <Legend />
            {series.map(s => (
              <Line dataKey="totalHMR" data={s.data} name={s.name} key={s.name} />
            ))}
          </LineChart> 
        </div>
        </div>     
      </div>
    );
  }
}

export default App;
