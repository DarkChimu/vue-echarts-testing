<template>
  <v-container>
    <v-row class="align-center">
      <v-col cols="2">
        <v-text-field v-model="chartTitle" autofocus></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn @click="updateChart" class="primary">Cambiar</v-btn>
      </v-col>
    </v-row>
    <v-chart
      ref="vChart3"
      class="chart"
      :option="chartOptionsBar"
      :manual-update="manualUpdate"
    />
  </v-container>
</template>

<script>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, BarChart, LineChart, ScatterChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'

use([
  GridComponent,
  CanvasRenderer,
  PieChart,
  BarChart,
  LineChart,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

export default {
  name: 'olCharts',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
  },
  data() {
    return {
      availableChartsType: ['bar', 'line', 'pie', 'scatter'],
      manualUpdate: false,
      chartTitle: 'Darkie',
      backendData: [
        [50, 65, 51, 30],
        [50, 50, 50, 50],
        [5, 20, 36, 10, 10, 20],
      ],
      selectedType: 'pie',
    }
  },

  computed: {
    chartOptionsPie() {
      return {
        title: {
          text: 'Tipo Pie',
          left: 'center',
          top: 'top',
          textStyle: {
            fontSize: 16,
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'horizontal',
          bottom: 'bottom',
          data: ['A', 'B', 'C', 'D'],
        },
        series: [
          {
            name: 'Pie',
            type: 'pie',
            radius: '55%',
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
      }
    },

    chartOptionsBar() {
      return {
        title: {
          text: 'Tipo Bar',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['A', 'B', 'C', 'D'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D'],
        },
        series: [
          {
            name: 'A',
            type: 'bar',
            data: [20, 30, 10, 50],
          },
          {
            name: 'B',
            type: 'bar',
            data: [40, 35, 20, 35],
          },
          {
            name: 'C',
            type: 'bar',
            data: [10, 25, 50, 35],
          },
          {
            name: 'D',
            type: 'bar',
            data: [30, 20, 40, 20],
          },
        ],
      }
    },

    chartOptionsline() {
      return {
        title: {
          text: 'Tipo Line',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['A', 'B', 'C', 'D'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'A',
            type: 'line',
            stack: 'a',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'B',
            type: 'line',
            stack: 'a',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'C',
            type: 'line',
            stack: 'a',
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: 'D',
            type: 'line',
            stack: 'a',
            data: [320, 332, 301, 334, 390, 330, 320],
          },
        ],
      }
    },
    chartOptionsScatter() {
      return {
        title: {
          text: 'Tipo Scatter',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: ['A', 'B', 'C', 'D'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D'],
        },
        series: [
          {
            name: 'A',
            type: 'scatter',
            stack: 'a',
            data: [
              [10.0, 8.04],
              [8.0, 6.95],
              [13.0, 7.58],
              [9.0, 8.81],
              [11.0, 8.33],
              [14.0, 9.96],
              [6.0, 7.24],
              [4.0, 4.26],
              [12.0, 10.84],
              [7.0, 4.82],
              [5.0, 5.68],
            ],
          },
          {
            name: 'B',
            type: 'scatter',
            stack: 'b',
            data: [
              [10.0, 9.14],
              [8.0, 8.14],
              [13.0, 8.74],
              [9.0, 8.77],
              [11.0, 9.26],
              [14.0, 8.10],
              [6.0, 6.13],
              [4.0, 3.10],
              [12.0, 9.13],
              [7.0, 7.26],
              [5.0, 4.74],
            ],
          },
          {
            name: 'C',
            type: 'scatter',
            stack: 'c',
            data: [
              [10.0, 7.46],
              [8.0, 6.77],
              [13.0, 12.74],
              [9.0, 7.11],
              [11.0, 7.81],
              [14.0, 8.84],
              [6.0, 6.08],
              [4.0, 5.39],
              [12.0, 8.15],
              [7.0, 6.42],
              [5.0, 5.73],
            ],
          },
          {
            name: 'D',
            type: 'scatter',
            stack: 'd',
            data: [
              [10.0, 8.30],
              [8.0, 7.08],
              [13.0, 8.84],
              [9.0, 8.77],
              [11.0, 8.31],
              [14.0, 9.96],
              [6.0, 7.24],
              [4.0, 4.26],
              [12.0, 10.84],
              [7.0, 4.82],
              [5.0, 4.68],
            ],
          },
        ],
      }
    },
  },
  methods: {
    updateChart() {
      this.manualUpdate = true

      this.selectedType =
        this.availableChartsType[
          this.availableChartsType.indexOf(this.selectedType) + 1
        ]

      this.$refs.vChart.setOption(
        this.selectedType === 'pie'
          ? this.chartOptionsPie
          : this.selectedType === 'bar'
          ? this.chartOptionsBar
          : this.selectedType === 'line'
          ? this.chartOptionsline
          : this.chartOptionsScatter,
        {
          replaceMerge: ['xAxis', 'yAxis', 'series', 'legend', 'title'],
          lazyUpdate: true,
        }
      )
    },
  },
}
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
