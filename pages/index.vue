<template>
  <div>
    <v-btn
      class="primary"
      @click="
        type = type === 'pie' ? 'bar' : type === 'bar' ? 'bar-lines' : 'pie'
      "
    >
      Cambiar
    </v-btn>
    <v-switch
      v-if="type === 'bar'"
      v-model="useLines"
      @change="setOnLines"
      :hide-details="false"
      inset
      label="Lineas"
    />
    <ReactiveChart
      :type="type"
      :options="type === 'pie' ? null : chartOptions"
    />
  </div>
</template>

<script>
import ReactiveChart from '../components/reactive-chart/index.vue'
export default {
  components: {
    ReactiveChart,
  },

  data() {
    return {
      type: 'bar',
      useLines: false,
      availableTypes: ['pie', 'bar', 'bar-lines'],
      chartOptions: {
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
      },
    }
  },
  methods: {
    setOnLines() {
      this.chartOptions.series.forEach(s => {
        if (s.name !== 'B') {
          s.type = this.useLines ? 'line' : 'bar'
        }
      })
    },
  }
}
</script>
