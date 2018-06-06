import React, { Component } from 'react';
import { Chart } from 'primereact/components/chart/Chart';
import './Home.css';
import Graph from './Graph.js';
import InterPieChart from './innerPieChart.js';

class Home extends Component {

  render() {
    var barData = {
      labels: ['RMC-RMS', 'HPS-RMC', 'RMS-ACS', 'RMS-RFS'],
      datasets: [
        {
          label: 'Triggered',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [13200, 13500, 11200, 14200]
        },
        {
          label: 'Reached',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [13105, 13135, 11105, 14105]
        },
        {
          label: 'Success',
          backgroundColor: '#fd7e14',
          borderColor: '#fd7414',
          data: [13105, 13135, 11105, 14005]
        },
        {
          label: 'Errored',
          backgroundColor: '#6f42c1',
          borderColor: '#6610f2ab',
          data: [9000, 3650, 900, 1900]
        }

      ]
    };
    var pieData = {
      labels: ['Good Members', 'Bad Members'],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: [
            "#008000a3",
            "#ff0000bd"
          ],
          hoverBackgroundColor: [
            "#008000",
            "#ff0000"
          ]
        }]
    };
    var RMCOptions = {
      title: {
        display: true,
        text: 'RMC',
        fontSize: 10
      },
      legend: {
        position: 'none'
      }
    };
    var RMSOptions = {
      title: {
        display: true,
        text: 'RMS',
        fontSize: 10
      },
      legend: {
        position: 'none'
      }
    };
    var HPSOptions = {
      title: {
        display: true,
        text: 'HPS',
        fontSize: 10
      },
      legend: {
        position: 'none'
      }
    };
    var ACSOptions = {
      title: {
        display: true,
        text: 'ACS',
        fontSize: 10
      },
      legend: {
        position: 'none'
      }
    };
    var RFSOptions = {
      title: {
        display: true,
        text: 'RFS',
        fontSize: 10
      },
      legend: {
        position: 'none'
      }
    };

    var barChartOptions = {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Members Count'
          }
        }]
      }
    };

    return (
      <div class="container-fluid">

        <div class="row">
          <Graph barData={barData} type={"bar"} options={barChartOptions} displayName="Enrollment Summary" />
          <Graph barData={barData} type={"bar"} options={barChartOptions} displayName="Member Update Transaction Summary" />
        </div>
        <div class="row">
          <Graph barData={pieData} type={"pie"} displayName="Member Health Summary" />
          <div class="col-md-6 col-lg-6 mt-2">
            <div class="card-deck h-100 pb-3">
              <div class="card">
                <div class="card-header">Application Health</div>
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-center">
                    <div class="p-1"><span class="border EnrollmentGreenlegend"></span></div>
                    <div class="p-1"><span><small>Good Members</small></span></div>

                    <div class="p-1"><span class="border EnrollmentRedlegend"></span></div>
                    <div class="p-1"><span><small>Bad Members</small></span></div>
                  </div>
                  <div class="row pt-5">
                    <InterPieChart pieData={pieData} options={RMCOptions} />
                    <InterPieChart pieData={pieData} options={RMSOptions} />
                    <InterPieChart pieData={pieData} options={HPSOptions} />
                  </div>
                  <div class="row">
                    <div class="col-md-4 col-lg-2"></div>
                    <InterPieChart pieData={pieData} options={ACSOptions} />
                    <InterPieChart pieData={pieData} options={RFSOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;