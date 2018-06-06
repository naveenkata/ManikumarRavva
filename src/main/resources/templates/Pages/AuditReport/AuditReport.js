import React, { Component } from 'react';
import { Chart } from 'primereact/components/chart/Chart';


import '../../css/auditReport.css';

class AuditReport extends Component {


  constructor(props) {
    super(props);
    this.state = { hideOrVisible: 'hide', totalMembers: '', goodMembers: '', auditMembers: '', totalGoodMembers: '', missingInHPS: '', ptdMismatchMembers: '', missingInRMS: '' };
  }
  getStateData(stateCode, data) {
    this.setState({ hideOrVisible: 'hide' })
    if (data !== undefined) {
      data.dataset.map((m) => {
        if (m.stateCode === stateCode) {
          this.setState({ totalMembers: m.data.TotalMembers, goodMembers: m.data.GoodMembers, auditMembers: m.data.AuditReportMembers,auditGoodMembers: m.data.AuditReportGoodMembers,missingInHPS: m.data.MissingInHPS,ptdMismatchMembers: m.data.PTDMismatchMembers,missingInRMS: m.data.MissingInRMS  })

        }
        return 0;
      })
    }
  }

  componentWillMount() {

    

    var data = {
      "dataset": [
        {
          "stateCode": "IL",
          "data":
            {
              "stateCode": "IL",
              "TotalMembers": 211545,
              "GoodMembers": 208429,
              "AuditReportMembers": 78427,
              "AuditReportGoodMembers": 75311,
              "MissingInHPS": 575,
              "PTDMismatchMembers": 1005,
              "MissingInRMS": 1074
            }
        }, {
          "stateCode": "NM",
          "data":
            {
              "stateCode": "NM",
              "TotalMembers": 5236,
              "GoodMembers": 5155,
              "AuditReportMembers": 4114,
              "AuditReportGoodMembers": 4033,
              "MissingInHPS": 32,
              "PTDMismatchMembers": 14,
              "MissingInRMS": 28
            }
        }, {
          "stateCode": "OK",
          "data":
            {
              "stateCode": "OK",
              "TotalMembers": 99237,
              "GoodMembers": 96325,
              "AuditReportMembers": 38597,
              "AuditReportGoodMembers": 35685,
              "MissingInHPS": 279,
              "PTDMismatchMembers": 1816,
              "MissingInRMS": 582
            }
        }, {
          "stateCode": "TX",
          "data":
            {
              "stateCode": "TX",
              "TotalMembers": 239701,
              "GoodMembers": 233291,
              "AuditReportMembers": 151972,
              "AuditReportGoodMembers": 145562,
              "MissingInHPS": 1425,
              "PTDMismatchMembers": 2883,
              "MissingInRMS": 1575
            }
        }, {
          "stateCode": "MT",
          "data":
            {
              "stateCode": "MT",
              "TotalMembers": 15376,
              "GoodMembers": 15115,
              "AuditReportMembers": 9853,
              "AuditReportGoodMembers": 9592,
              "MissingInHPS": 126,
              "PTDMismatchMembers": 16,
              "MissingInRMS": 238
            }
        }
      ]

    };
    this.getStateData("IL", data)

  }

  getMissingChart(hideOrVisible) {

    this.setState({ hideOrVisible: 'visible' })


  }

  render() {
    var lineData = {

      labels: ["4/12", "4/18", "4/24", "4/30"],
      datasets: [{
        data: [797, 814, 850, 575],
        label: "Issue Members",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: [127, 177, 250, 350],
        label: "Resolved Members",
        borderColor: "#23f689",
        fill: false
      }, {
        data: [620, 620, 664, 500],
        label: "Continuing Members",
        borderColor: "#f62389",
        fill: false
      }, {
        data: [177, 194, 186, 75],
        label: "New Members",
        borderColor: "#8923f6",
        fill: false
      }]
    };

    var pieData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
    var data = {
      "dataset": [
        {
          "stateCode": "IL",
          "data":
            {
              "stateCode": "IL",
              "TotalMembers": 211545,
              "GoodMembers": 208429,
              "AuditReportMembers": 78427,
              "AuditReportGoodMembers": 75311,
              "MissingInHPS": 575,
              "PTDMismatchMembers": 1005,
              "MissingInRMS": 1074
            }
        }, {
          "stateCode": "NM",
          "data":
            {
              "stateCode": "NM",
              "TotalMembers": 5236,
              "GoodMembers": 5155,
              "AuditReportMembers": 4114,
              "AuditReportGoodMembers": 4033,
              "MissingInHPS": 32,
              "PTDMismatchMembers": 14,
              "MissingInRMS": 28
            }
        }, {
          "stateCode": "OK",
          "data":
            {
              "stateCode": "OK",
              "TotalMembers": 99237,
              "GoodMembers": 96325,
              "AuditReportMembers": 38597,
              "AuditReportGoodMembers": 35685,
              "MissingInHPS": 279,
              "PTDMismatchMembers": 1816,
              "MissingInRMS": 582
            }
        }, {
          "stateCode": "TX",
          "data":
            {
              "stateCode": "TX",
              "TotalMembers": 239701,
              "GoodMembers": 233291,
              "AuditReportMembers": 151972,
              "AuditReportGoodMembers": 145562,
              "MissingInHPS": 1425,
              "PTDMismatchMembers": 2883,
              "MissingInRMS": 1575
            }
        }, {
          "stateCode": "MT",
          "data":
            {
              "stateCode": "MT",
              "TotalMembers": 15376,
              "GoodMembers": 15115,
              "AuditReportMembers": 9853,
              "AuditReportGoodMembers": 9592,
              "MissingInHPS": 126,
              "PTDMismatchMembers": 16,
              "MissingInRMS": 238
            }
        }
      ]

    };
    return (

      <div className="container-fluid">

        <br />
        <div className="card"  >
          <div className="card-body">
            <div style={{ backgroundColor: '#F5F5F5', paddingTop: '12px' }}>
              <div className="row" >
                <div className="col-xl-4 col-lg-6 col-md-8">
                  <div className="form-group row">
                    <label className="col-xl-4 col-lg-3 col-md-4 col-sm-3 col-form-label" > Select Date:</label>
                    <div className="col-xl-7 col-lg-7 col-md-6 col-sm-7 col-9">
                      <input className="form-control" type="date" id="select-date-input" />


                    </div>
                    <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">

                      <span className="input-group-prepend">
                        <span className="fa fa-calendar fa-2x"></span>
                      </span>

                    </div>
                  </div>
                </div>
                <div className="col-xl-1 col-lg-2 col-md-2">
                  <a id="showLink" className="btn btn-primary" style={{ backgroundColor: '#337ab7', color: 'white' }}>Submit</a>
                </div>
              </div>
            </div>
            <br />
            <div className="row" >
              <div className="col-lg-7">
                <div id="stateList">
                  <ul className="nav nav-pills nav-justified" role="tablist">
                    <li className="nav-item" >
                      <a className="nav-link border active" data-toggle="tab" href="javascript:void(0);" onClick={() => this.getStateData('IL', data)}>Illinois</a>
                    </li>
                    <li className="nav-item" >
                      <a className="nav-link border" data-toggle="tab" href="javascript:void(0);" onClick={() => this.getStateData('OK', data)}>Oklahoma</a>
                    </li>
                    <li className="nav-item" >
                      <a className="nav-link border" data-toggle="tab" href="javascript:void(0);" onClick={() => this.getStateData('NM', data)}>New Mexico</a>
                    </li>
                    <li className="nav-item" >
                      <a className="nav-link border" data-toggle="tab" href="javascript:void(0);" onClick={() => this.getStateData('TX', data)}>Texas</a>
                    </li>
                    <li className="nav-item" >
                      <a className="nav-link border" data-toggle="tab" href="javascript:void(0);" onClick={() => this.getStateData('MT', data)}>Montana</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <div className="row data">
              <div className="col-lg-4">
                <div>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <div className="row">

                        <div className="col-6">
                          <label className="float-left">Total members </label>
                        </div>
                        <div className="col-1">:</div>
                        <div className="col-4">
                          <span id="TotalMembers">{this.state.totalMembers}</span>
                        </div>

                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">

                        <div className="col-6">
                          <label className="float-left">Good members </label>
                        </div>
                        <div className="col-1">:</div>
                        <div className="col-4">
                          <span id="GoodMembers">{this.state.goodMembers}</span>
                        </div>

                      </div>

                    </li>
                    <li className="list-group-item">
                      <div className="row">

                        <div className="col-6">
                          <label className="float-left">Good members % </label>
                        </div>
                        <div className="col-1">:</div>
                        <div className="col-4">
                          <span id="GoodMembersPercent"></span>
                        </div>

                      </div>

                    </li>
                    <li className="list-group-item">
                      <div className="row">

                        <div className="col-6">
                          <label className="float-left">Audit members </label>
                        </div>
                        <div className="col-1">:</div>
                        <div className="col-4">
                          <span id="AuditMembers">{this.state.auditMembers}</span>
                        </div>

                      </div>

                    </li>
                    <li className="list-group-item">
                      <div className="row">

                        <div className="col-6">
                          <label className="float-left">Audit Good members </label>
                        </div>
                        <div className="col-1">:</div>
                        <div className="col-4">
                          <span id="AuditGoodMembers">{this.state.auditGoodMembers}</span>
                        </div>
                      </div>

                    </li>
                    <li className="list-group-item">
                      <div className="row">

                        <div className="col-6">
                          <label className="float-left">Audit Good members % </label>
                        </div>
                        <div className="col-1">:</div>
                        <div className="col-4">
                          <span id="AuditGoodMembersPercent"></span>
                        </div>

                      </div>

                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <div className="col-lg-2 col-6">
                <br />
                <label>Missing In DP</label>
                <button type="button" className="btn btn-light btn-sm" data-toggle="modal" data-target="#missingInHPSModal">
                  <span className="fa fa-list-alt"></span>
                </button>
                <div onClick={() => this.getMissingChart('missingInHPS')} className="dot100 issuebucket dDot" id="MissingInHPS">{this.state.missingInHPS}</div>
              </div>
              <div className=" col-lg-2 col-6">
                <br />
                <label>PTD Mismatch </label>

                <button type="button" className="btn btn-light btn-sm" data-toggle="modal" data-target="#PTDMismatchModal">
                  <span className="fa fa-list-alt"></span>
                </button>
                <div onClick={() => this.getMissingChart('PTDMismatch')} className="dot100 issuebucket aDot" id="PTDMismatchMembers">{this.state.ptdMismatchMembers}</div>
              </div>
              <div className="col-lg-2 col-6">
                <br />
                <label>Missing In RMS </label>
                <button type="button" className="btn btn-light btn-sm" data-toggle="modal" data-target="#missingInRMSModal">
                  <span className="fa fa-list-alt"></span>
                </button>
                <div onClick={() => this.getMissingChart('missingInRMS')} className="dot100 issuebucket bDot" id="MissingInRMS">{this.state.missingInRMS}</div>
              </div>
              <div className="col-lg-2 col-6">
                <br />
                <label>Other Members</label>
                <button type="button" className="btn btn-light btn-sm" data-toggle="modal" data-target="#otherMembersModal">
                  <span className="fa fa-list-alt"></span>
                </button>
                <div onClick={() => this.getMissingChart('otherMembers')} className="dot100 issuebucket cDot" id="Other">0</div>
              </div>
            </div>
            <br />
            <br />
            <div className={(this.state.hideOrVisible === "hide") ? "d-none" : "d-block"}>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <Chart type="pie" data={pieData} />
                </div>
                <div className="col-lg-6 col-12">
                  <Chart type="line" data={lineData} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    );
  }
}

export default AuditReport;