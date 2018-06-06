import React, { Component } from 'react';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Button } from 'primereact/components/button/Button';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';

class Table extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {props:props,data:props.value.data};
    }

     export() {
        this.dt.exportCSV();
    }

    render()
    {
        var Export =<Button style={{ float: 'right', color: 'black', backgroundColor: 'white' }}  onClick={this.export.bind(this)}><span class="fa-upload ui-button-icon ui-c fa fa-fw ui-button-icon-left"></span></Button>;
        var add = <Button style={{ float: 'right', color: 'black', backgroundColor: 'white' }}><span class="fa-plus ui-button-icon ui-c fa fa-fw ui-button-icon-left"></span>Add</Button>;             
        let keys = Object.keys(this.state.data[0]);
        let i = 0;
        let dynamicColumns = keys.map((col) => {
            return <Column  field={col} header={col}/>;
        });


        return(
            <DataTable value={this.state.data} rows={this.props.value.rows} paginator={this.props.value.paginator} header={this.props.value.export?Export:''}ref={(el) => { this.dt = el; }}>
                {dynamicColumns}
            </DataTable>
        );
    }


}

export default Table;