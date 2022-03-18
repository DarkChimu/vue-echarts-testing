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
      ref="vChart2"
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
  name: 'HelloWorld',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
  },
  data() {
    return {
      availableChartsType: ['bar', 'bar-lines', 'pie'],
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
            data: this.backendData[0],
          },
        ],
      }
    },

    chartOptionsBarWithLines() {
      return {
        title: {
          text: 'Tipo Bar-Lines',
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
            data: this.backendData[0],
          },
          {
            name: 'B',
            type: 'line',
            data: this.backendData[1],
          },
          {
            name: 'C',
            type: 'line',
            data: this.backendData[2],
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
          this.availableChartsType.indexOf(this.selectedType) + 1 > 2
            ? 0
            : this.availableChartsType.indexOf(this.selectedType) + 1
        ]

      this.$refs.vChart.setOption(
        this.selectedType === 'bar'
          ? this.chartOptionsBar
          : this.selectedType === 'pie'
          ? this.chartOptionsPie
          : this.chartOptionsBarWithLines,
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
