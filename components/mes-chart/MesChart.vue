<template>
  <v-chart
    ref="vChart"
    class="chart"
    :option="config"
    :loading="loading"
  />
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
  name: 'Chart',
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

  data() {
    return {
      loading: false,
    }
  },
  mounted() {},
  computed: {
    config: function () {
      this.loading = true
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
      this.loading = false
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
