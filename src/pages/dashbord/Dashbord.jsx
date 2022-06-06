import React from 'react'
import Chart from "react-apexcharts";

function Dashbord() {
    const series = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }]
    const options = {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    }

    const donutchart = {
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 150
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    }

    return (
        <div class="innerpage">
            <div className="row">
                <div className="col-lg-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Campaign Sent</h5>
                                    <h3 className="my-2 py-1">9,184</h3>
                                    <p className="mb-0 text-muted">
                                        <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 3.27%</span>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <div id="campaign-sent-chart" data-colors="#727cf5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Campaign Sent</h5>
                                    <h3 className="my-2 py-1">9,184</h3>
                                    <p className="mb-0 text-muted">
                                        <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 3.27%</span>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <div id="campaign-sent-chart" data-colors="#727cf5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Campaign Sent</h5>
                                    <h3 className="my-2 py-1">9,184</h3>
                                    <p className="mb-0 text-muted">
                                        <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 3.27%</span>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <div id="campaign-sent-chart" data-colors="#727cf5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6 col-xl-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Campaign Sent</h5>
                                    <h3 className="my-2 py-1">9,184</h3>
                                    <p className="mb-0 text-muted">
                                        <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold"></i> 3.27%</span>
                                    </p>
                                </div>
                                <div className="col-6">
                                    <div className="text-end">
                                        <div id="campaign-sent-chart" data-colors="#727cf5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6 col-xl-7">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <Chart options={options} series={series} type="area" height={320} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <Chart options={donutchart.options} series={donutchart.series} type="donut" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Dashbord