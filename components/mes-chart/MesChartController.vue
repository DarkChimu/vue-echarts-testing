<template>
  <v-row>
    <v-col cols="6">
      <MesChart
        :type="selectedType"
        :options="selectedType === 'pie' ? null : chartOptions"
      />
    </v-col>
    <v-col cols="6">
      <v-select
        :items="availableTypes"
        v-model="selectedType"
        placeholder="Select chart type"
        outlined
        clearable
      />
      <v-switch
        v-if="selectedType === 'bar'"
        v-model="useLines"
        @change="setOnLines"
        :hide-details="false"
        inset
        label="Lineas"
      />
      <v-text-field
        v-model="objetiveValue"
        aria-placeholder="Objetive value"
        outlined
        label="Objetive value"
      />
    </v-col>
  </v-row>
</template>

<script>
import MesChart from './MesChart.vue'

const CHART_OPTIONS_DEFAULT = {
  title: {
    text: '',
    subtext: '',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: [],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {
        show: true,
        title: 'Save',
      },
    },
  },
  xAxis: {
    type: 'category',
    data: [],
  },
  yAxis: {
    type: 'value',
  },
  series: [],
}

export default {
  name: 'MesChartController',
  components: {
    MesChart,
  },

  data() {
    return {
      useLines: false,
      availableTypes: ['pie', 'bar', 'bar-lines'],
      selectedType: 'bar',
      objetiveValue: '',
      chartOptions: {}
    }
  },
  mounted() {
    this.prepareConfig()
  },
  methods: {
    prepareConfig() {
      this.chartOptions = {
        legend: {
          data: ['A', 'B', 'C'],
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
          {
            name: 'B',
            type: 'line',
            data: [250, 120, 10, 40],
          },
          {
            name: 'C',
            type: 'line',
            data: [50, 50, 50, 50],
          },
        ],
      }
    },
    setOnLines() {
      this.chartOptions.series.forEach((s) => {
        if (s.name !== 'B') {
          s.type = this.useLines ? 'line' : 'bar'
        }
      })
    },
  },
}
</script>
