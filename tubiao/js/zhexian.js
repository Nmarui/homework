var myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
    title: {
        text: 'JavaScript语言排名变化'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['JavaScript语言排名变化']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ["2000","2005","2010","2015","2020"]
    },
    yAxis: {
        type: 'value',
        boundaryGap: false,
        data: ['2','4','6','8','10']
    },
    series: [
        {
            name:'JavaScript语言排名变化',
            type:'line',
            stack: '所占比例',
            data:["6","9","8","8","7"]
        }
    ]
});