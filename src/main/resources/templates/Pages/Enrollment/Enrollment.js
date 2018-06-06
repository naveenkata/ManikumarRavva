import React, { Component } from 'react';
import { Column } from 'primereact/components/column/Column';
import { DataTable } from 'primereact/components/datatable/DataTable';
import enrollment_data from './enrollment-transaction-summary';


class Enrollment extends Component {


    constructor(props) {
        super(props);
          this.state = {
               json :enrollment_data
          };
    }

    showContent() { 
       //  this.setEnrollGrid();
        // createChartData(data);
    }

componentDidMount()
{
     this.showContent();
}

 

//    setEnrollGrid() {
//        var gridData = this.state.json;
//        $("#enrollTabId").empty();
//        for (var i = 0; i < gridData.length; i++) {
//            $("#enrollTabId").append('<tr> <td>' + gridData[i].source + '</td> <td>' + gridData[i].destination + '</td><td>' + gridData[i].triggered + ' </td> <td><a href="#" onclick = "setDataTounreachedTransactions()" >' + gridData[i].reached + '</a></td> <td>' + gridData[i].success +
//             '</td><td> <a href="#" onclick="drill(&quot;' + gridData[i].source + '&quot;,&quot;' + gridData[i].destination + '&quot;)">' + gridData[i].errored + '</a></td><td>'+  gridData[i].OutStandingIssueCount +'</td></tr>')
//        }
//
//
//    }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="panel panel-default dashboardItem">
            <div className=" card panel-body" style={{padding : "16px"}}>
               <div className="row " style={{backgroundColor: "#F5F5F5", paddingTop: "12px"}}>
                <div className='col-xs-12 col-md-4 '>
                    <div className="form-group row">
                      <div className=" col-2">
                        <label className="control-label" for="startdate">Start date:</label>
                        </div>
                        <div className='input-group date col-10' id='datetimepicker1'>
                            <input type='date' className="form-control" id="startDate" />
                            <span className="input-group-addon">
                                <span className="fa fa-calendar"></span>
                            </span>
                        </div>
                    </div>
                </div>



                <div className='col-xs-12 col-md-4'>
                    <div className="form-group row">
                      <div className=" col-2">
                        <label className="control-label" for="enddate">End date:</label>
                        </div>
                        <div className='input-group date col-10' id='datetimepicker2'>
                            <input type='date' className="form-control" id="endDate" />
                            <span className="input-group-addon">
                                <span className="fa fa-calendar"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <button className="btn btn-primary" type="submit" onclick="searchClick()">
                        <span className="glyphicon glyphicon-search"></span> Search</button>

                </div>

            </div>
           <br/><br/>
            <div className="row">
                <div className="col-10">
                    <h4 style={{float:"left"}}>Enrollment Transaction Summary</h4>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-default btn-sm" onclick="enrollmentFlow()" title="Enrollment Flow">
                        <span className="fa fa-question-circle"></span>
                    </button>
                </div>
            </div>
            <br/>
            
                <div className="row dashboardMain">
                <div className="col-xs-12 col-lg-6 ">




                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Source</th>
                                    <th>Destination</th>
                                    <th>Triggered</th>
                                    <th>Reached</th>
                                    <th>Success</th>
                                    <th>Errored</th>
                                    <th>Outstanding Issues count </th>
                                </tr>
                            </thead>
                            <tbody id="enrollTabId"></tbody>
                        </table>
                    </div>


                </div>


                <div class="col-xs-12 col-lg-6 ">



                    <div id="enrollChartId"></div>




                </div>

            </div>
            
            <br/>
            </div>
            
        </div>
       </div>
     </div>
    );
  }
}

export default Enrollment;

