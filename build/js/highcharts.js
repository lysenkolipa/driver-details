
Highcharts.chart('highchart', {
    chart: {
        type: 'column',
        width: 850,
        height: 200,
        marginLeft: 200

    },
    title: {
        text: 'Driver <br/>Contribution<br/> to sales Growth',
        align:'left',
        verticalAlign: 'top',
        layout: 'vertical',
        rotation: 0,
        offset: 400,
        y: 10,
        x: 10,
        style: {
            fontSize:13,
            fontWeight: 700,
        },
    },
    xAxis: {
        categories: ['2013', '2014', '2015', '2016', '2017F', '2018F']
    },
    yAxis: {
        lineWidth:1,
        tickWidth:1,
        min: 0,
        title: {
            align: 'high',
            offset: 0,
            rotation: 0,
            y: 160,
            x:-20,
            text: 'Driver Change<br/>(CAGR)',
            style: {
                opacity: 0.5,
                color: '#626970',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 10,
                fontWeight: 700,
            },

        },
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    legend: {
        title: {
            text: 'Growth<br/> (CAGR)<br/>',
            style: {
                color: '#626970',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
            }
        },
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        shadow: true,
        x: -10,
        y: 30

    },
    credits: {
        enabled: false,
    },
    series: [{
        color: '#ecf0f7',
        maxPointWidth: 20,
        borderRadiusTopLeft: 5,
        borderRadiusTopRight: 5,
        name: '13/15',
        data: [0.06, 0.1, 1.08, 1.9, 1.12, 1.25]
    },  {
        color: '#44b3c2',
        maxPointWidth: 20,
        borderRadiusBottomLeft: 5,
        borderRadiusBottomRight: 5,
        name: '15/18F',
        data: [0.06, 1.07, 2.08, 1.4, 0.12, 1.7]
    }]
});


Highcharts.chart('highchart1', {
    chart: {
        type: 'column',
        width: 850,
        height: 200,
        marginLeft: 200

    },
    title: {
        text: 'Absolute',
        align:'left',
        verticalAlign: 'top',
        layout: 'vertical',
        rotation: 0,
        offset: 400,
        y: 10,
        x: 10,
        style: {
            fontSize:13,
            fontWeight: 700,
        },
    },
    xAxis: {
        categories: ['2013', '2014', '2015', '2016', '2017F', '2018F']
    },
    yAxis: {
        lineWidth:1,
        tickWidth:1,
        min: 0,
        title: {
            align: 'high',
            offset: 0,
            rotation: 0,
            x:-30,
            y: 160,
            text: 'Change',
            style: {
                opacity: 0.5,
                color: '#626970',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 10,
                fontWeight: 700,
            },

        },
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    legend: {
        shadow: true,
        title: {
            text: 'Change',
            style: {
                color: '#626970',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
            }
        },
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -10,
        y: 30

    },
    credits: {
        enabled: false,
    },
    series: [{
        color: '#ecf0f7',
        maxPointWidth: 20,
        borderRadiusTopLeft: 5,
        borderRadiusTopRight: 5,
        name: '13/15',
        data: [0.06, 0.1, 1.08, 1.9, 1.12, 1.25]
    },  {
        color: '#44b3c2',
        maxPointWidth: 20,
        borderRadiusBottomLeft: 5,
        borderRadiusBottomRight: 5,
        name: '15/18F',
        data: [0.06, 1.07, 2.08, 1.4, 0.12, 1.7]
    }]
});