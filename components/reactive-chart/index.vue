<template>
  <v-chart ref="vChart" class="chart" :option="config" :manual-update="true" />
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
  ToolboxComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import configs from './configs'

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
  ToolboxComponent,
])
export default {
  name: 'ReactiveChart',
  components: {
    VChart,
  },
  props: {
    chartData: {
      type: Array,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    options: {
      type: Object,
      required: false,
      default: () => null,
    },
    props: {
      type: Object,
      required: false,
      default: () => null,
    },
  },
  computed: {
    config: function () {
      //console.log('=>', this.options)
      let currentConfig = { ...configs[this.type] }

      if (this.options) {
        currentConfig = { ...currentConfig, ...this.options }
      }

      console.log('=>', currentConfig)

      if (this.$refs.vChart) {
        this.$refs.vChart.clear()
        this.$refs.vChart.setOption(currentConfig, {
          replaceMerge: ['xAxis', 'yAxis', 'series', 'legend', 'title'],
          lazyUpdate: true,
        })
      }
        return currentConfig
    },
  },

  /*  watch: {
    options(newOptions) {
      if (newOptions) {
        console.log('cambio')
        this.$refs.vChart.setOption(this.config, {
          replaceMerge: ['xAxis', 'yAxis', 'series', 'legend', 'title'],
          lazyUpdate: true,
        })
      }
    },
  }, */
}
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
