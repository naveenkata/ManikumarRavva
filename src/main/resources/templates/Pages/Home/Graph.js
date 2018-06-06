import React, { Component } from 'react';
import { Chart } from 'primereact/components/chart/Chart';

class Graph extends Component {  
  render() {
    return (
    <div class="col-md-6 col-lg-6">
        <div class="card mb-3 mt-2">
            <div class="card-header">{this.props.displayName}</div>
            <div class="card-body">
            <Chart type={this.props.type} data={this.props.barData} options={this.props.barChartOptions} />
            </div>
        </div>
    </div>
    );
  }
}

export default Graph;

