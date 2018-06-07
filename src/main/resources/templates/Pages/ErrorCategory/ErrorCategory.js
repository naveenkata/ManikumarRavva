import React, { Component } from 'react';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import { Dropdown } from 'primereact/components/dropdown/Dropdown';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';
import { Dialog } from 'primereact/components/dialog/Dialog';
import error_category from './error_category';
import 'font-awesome/css/font-awesome.min.css';
import { Calendar } from 'primereact/components/calendar/Calendar';
import axios from 'axios';

import '../../css/errorCategory.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';




class ErrorCategory extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            row: {  categoryId:'',description: '', targetDate: '', createdDate: '', updatedDate: '', createdBy: '', updatedBy: '', status: '' },
            selectedRow: -1
        };
        axios.get('/ErrorCategory/load').then
            (response => {
                this.setState({ data: response.data });
            }

            )

        // this.changeStatus = this.changeStatus.bind(this);
        // this.changeDescription = this.changeDescription.bind(this);        
        this.onRowSelect = this.onRowSelect.bind(this);
        this.save = this.save.bind(this);
        // this.changeUpdatedby = this.changeUpdatedby.bind(this);
        // this.changeCreatedby = this.changeCreatedby.bind(this);
    }




    // onEditorValueChange(props, value) {
    //     let updatedData = [...props.value];
    //     updatedData[props.rowIndex][props.field] = value;

    //     this.setState({ data: updatedData });
    // }

    // inputTextEditor(props, field) {
    //     return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
    // }

    // changeDescription(props) {

    //     return this.inputTextEditor(props, 'description');

    // }

    //  changeUpdatedby(props)
    //   {
    //     return this.inputTextEditor(props,'updatedBy');
    //   }

    // changeCreatedby(props)
    // {
    //   return this.inputTextEditor(props,'createdBy');
    // }

    /*changeStatus(props) {
        let status = [
            { label: 'In Active', value: 'In Active' },
            { label: 'Active', value: 'Active' }

        ];

        return (
            <Dropdown value={this.state.data[props.rowIndex].status} options={status}
                onChange={(e) => { this.onEditorValueChange(props, e.value) }} style={{ width: '100%' }} />
        );
    }*/

    addNew() {
        this.newRow = true;
        this.setState({
            row: { categoryId:'',description: '', targetDate: '', createdDate: '', updatedDate: '', createdBy: '', updatedBy: '', status: '' },
            displayDialog: true,

        });
    }

    // formatDate(date) {
    //     let month = '' + (date.getMonth() + 1);
    //     let day = '' + date.getDate();
    //     let year = date.getFullYear();

    //     if (month.length < 2) month = '0' + month;
    //     if (day.length < 2) day = '0' + day;

    //     return [day, month, year].join('/');
    // }

    updateProperty(property, value) {
        let row = this.state.row;
        row[property] = value;
        this.setState({ row: row });
    }

    // convertDate(date) {
    //     var year = date.getFullYear();
    //     var month = date.getMonth();
    //     var day = date.getDate();

    //     if (day < 10)
    //         day = '0' + day;
    //     if (month < 10)
    //         month = '0' + month;
    //     return month + "/" + day + "/" + year;
    // }

    save() {
        let data = [...this.state.data];
        if (this.newRow) {
            // var date = this.convertDate(new Date());
            // this.state.row.createdDate = date;
            // this.state.row.updatedDate = date;
            //   data.push(this.state.row);
            axios.post('/ErrorCategory/add',this.state.row).then(
                (response)=>{
                    this.state.data.push(response.data);
                    this.setState((data)=>{this.state.data = data});
                }
            )
        
        }
        else{
            axios.put('/ErrorCategory/update',this.state.row).then(
                (response)=>{
                    if(response.data)
                    {
                    this.state.data.push(this.state.row);
                    this.setState((data)=>{this.state.data = data});
                    }else{
                        prompt("Update unsuccessfull");
                    }
                }
            )

        }
           // data[this.findSelectedRowIndex()] = this.state.row;
        this.setState({ data: data, selectedRow: null, row: null, displayDialog: false });
    }

    // delete() {
    //     let index = this.findSelectedRowIndex();
    //     this.setState({
    //         data: this.state.data.filter((val, i) => i !== index),
    //         selectedRow: null,
    //         row: null,
    //         displayDialog: false
    //     });
    // }

    findSelectedRowIndex() {
        debugger;
        return this.state.data.indexOf(this.state.selectedRow);
    }

    export() {
        this.dt.exportCSV();
    }

    onRowSelect(e) {
        this.newRow = false;
        this.setState({
            displayDialog: true,
            row: Object.assign({}, e),
            selectedRow: e
        });
        debugger;
    }


    render() {
        let dialogFooter = <div className="ui-dialog-buttonpane ui-helper-clearfix">
            <Button label={this.newRow ? "Create" : "update"} icon="fa-check" onClick={this.save} />
        </div>;
        let status = [
            { label: 'InActive', value: 'InActive' },
            { label: 'Active', value: 'Active' }

        ];

        return (
            <div className="card">


                <div className="card-body">
                    <div className="col-12">
                        <div className="row">
                            <div>
                                <h4>Error Category</h4>
                            </div>
                        </div>
                        <div className="row ">

                            <div className="ui-helper-clearfix col-12" >
                                <Button style={{ float: 'right', color: 'black', backgroundColor: 'white' }} onClick={this.export.bind(this)}><span class="fa-upload ui-button-icon ui-c fa fa-fw ui-button-icon-left"></span></Button>
                                <Button style={{ float: 'right', color: 'black', backgroundColor: 'white' }} onClick={this.addNew.bind(this)}><span class="fa-plus ui-button-icon ui-c fa fa-fw ui-button-icon-left"></span>Add</Button>
                            </div>
                        </div>
                        <div className="content-section implementation row">
                            <DataTable id="table" paginator={true} rows={10} value={this.state.data} responsive={true} ref={(el) => { this.dt = el; }}
                                onSelectionChange={(e) => { this.setState({ selectedRow: e.data }); }} rowsPerPageOptions={[5, 10, 20]}  >

                                <Column field="description" header={<h6>Description<span className="fa fa-fw fa-pencil" /></h6>} />
                                <Column field="targetDate" header={<h6>Target Date</h6>} />
                                <Column field="createdDate" header={<h6>Created Date</h6>} />
                                <Column field="updatedDate" header={<h6>Updated Date</h6>} />
                                <Column field="createdBy" header={<h6>Created By</h6>} />
                                <Column field="updatedBy" header={<h6>Updated By</h6>} />
                                <Column field="status" header={<h6>Status<span className="fa fa-fw fa-pencil" /></h6>} />
                                <Column field="" header={<h6>Action</h6>} body={(e) => { return <button onClick={this.onRowSelect.bind(this, e)}><i className="fa fa-fw fa-pencil" ></i> </button> }} />
                            </DataTable>


                            <Dialog visible={this.state.displayDialog} header="Create new entry" modal={true} footer={dialogFooter} onHide={() => this.setState({ displayDialog: false })}>
                                {this.state.row && <div className="ui-grid ui-grid-responsive ui-fluid" >
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4" style={{ padding: '4px 10px' }}><label htmlFor="description">Description</label></div>
                                        <div className="ui-grid-col-8" style={{ padding: '4px 10px' }}>
                                            <InputText id="description" onChange={(e) => { this.updateProperty('description', e.target.value) }} value={this.state.row.description} />
                                        </div>
                                    </div>
                                    {/*<div className="ui-grid-row">
                                        <div className="ui-grid-col-4" style={{ padding: '4px 10px' }}><label htmlFor="targetDate">Target Date</label></div>
                                        <div className="ui-grid-col-8" style={{ padding: '4px 10px' }}>
                                            <Calendar dateFormat="dd/mm/yy" value={this.state.row.targetDate} onChange={(e) => { this.updateProperty('targetDate', e.value) }}></Calendar>
                                        </div>
                                    </div>*/}
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4" style={{ padding: '4px 10px' }}><label htmlFor="status">Status</label></div>
                                        <div className="ui-grid-col-8" style={{ padding: '4px 10px' }}>
                                            <Dropdown style={{ width: '100%' }} options={status} id="status" onChange={(e) => { this.updateProperty('status', e.value) }} value={this.state.row.status} />
                                        </div>
                                    </div>
                                </div>}
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default ErrorCategory;