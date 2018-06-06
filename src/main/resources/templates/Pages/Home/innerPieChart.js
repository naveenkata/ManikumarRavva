import React, { Component } from 'react';
import { Chart } from 'primereact/components/chart/Chart';

class InterPieChart extends Component {
    render() {
        return (
            <div class="col-md-4 col-lg-4">
                <Chart type="pie" data={this.props.pieData} options={this.props.options} />
            </div>
        );
    }
}

export default InterPieChart;

