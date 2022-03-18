const configs = {
  pie: {
    title: {
      text: 'Tipo Pie',
      subtext: '',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['A', 'B', 'C', 'D'],
    },
    series: [
      {
        name: 'Pie',
        type: 'pie',
        radius: ['20%', '60%'],
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'A' },
          { value: 310, name: 'B' },
          { value: 234, name: 'C' },
          { value: 135, name: 'D' },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  },
  bar: {
    title: {
      text: 'Tipo Bar',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      data: ['A', 'B', 'C'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      data: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'A',
        type: 'bar',
        data: [320, 332, 301, 334],
      },
    ],
  },
  'bar-lines': {
    title: {
      text: 'Tipo Bar-Lines',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
  },
}

export default configs
