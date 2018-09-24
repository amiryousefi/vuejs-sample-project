<template>
    <div class="card mb-5">
        <div class="card-header">{{city}}</div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-8">
                    <h1>Temp. {{Number((the_temp).toFixed(1))}} ۟ C</h1>
                    <span>Max temp. <span class="text-danger">{{Number((max_temp).toFixed(1))}}</span></span>
                    <br>
                    <span>Min temp. <span
                        class="text-primary">{{Number((min_temp).toFixed(1))}}</span></span>
                </div>
                <div class="col-md-4">
                    <img :src="'https://www.metaweather.com/static/img/weather/'+icon+'.svg'"
                         class="img-thumbnail"/>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import axios from 'axios'

let baseUrl = 'http://clweather.test/weather.php?'
export default {
  name: 'Weather',
  data () {
    return {
      the_temp: 0,
      min_temp: 0,
      max_temp: 0,
      icon: '-'
    }
  },
  props: {
    city: {
      type: String,
      required: true
    }
  },
  methods: {
    get_woeid () {
      let url = baseUrl + 'command=search&keyword=' + this.city
      let vm = this
      axios
        .get(url)
        .then(response => response.data)
        .then(function (response) {
          let woeid = response[0]['woeid']
          vm.get_weather(woeid)
        })
    },
    get_weather (woeid) {
      let url = baseUrl + 'command=location&woeid=' + woeid
      let vm = this
      axios
        .get(url)
        .then(response => response.data)
        .then(function (response) {
          let weather = response.consolidated_weather
          let todayWeather = weather[0]
          vm.the_temp = todayWeather.the_temp
          vm.min_temp = todayWeather.min_temp
          vm.max_temp = todayWeather.max_temp
          vm.icon = todayWeather.weather_state_abbr
        })
    },
    read () {
      this.get_woeid()
    }
  },
  mounted () {
    this.read()
  }
}
</script>
