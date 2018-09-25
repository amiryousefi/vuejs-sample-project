<template>
    <div class="card mb-5">
        <div class="card-header">
            <h5 class="float-left">
                <router-link :to="'/weather/'+city_woeid">
                    <a>{{city_name}}</a>
                </router-link>
            </h5>
            <h5 class="float-right">
                {{current_day}}
            </h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-2">
                    <img :src="icon_url"
                         class="img-thumbnail float-right"/>
                </div>
                <div class="col-md-10">
                    <div class="float-left">
                        <h1>Temp. {{Number((the_temp).toFixed(1))}} ۟ C</h1>
                        <span>Max temp. <span class="text-danger">{{Number((max_temp).toFixed(1))}}</span></span>
                        <br>
                        <span>Min temp. <span
                                class="text-primary">{{Number((min_temp).toFixed(1))}}</span></span>
                    </div>
                </div>

            </div>
            <div class="row" v-if="dailyDetails">
                <h3 class="m-2">Daily Weather</h3>
                <table class="table table-active table-bordered">
                    <th v-for="weather in dailyWeather" :key="'weather_day_'+weather.id">
                        {{day_name(weather.applicable_date)}}
                    </th>
                    <tr>
                        <td v-for="weather in dailyWeather" :key="'weather_detail_'+weather.id">
                            <img :src="weather_icon(weather.weather_state_abbr)"
                                 class="img-responsive"/>
                            <h6>Temp. {{Number(weather.the_temp).toFixed(1)}} ۟ C</h6>

                            <span>Max temp. <span class="text-danger">{{Number(weather.max_temp).toFixed(1)}}</span></span>
                            <br>
                            <span>Min temp. <span class="text-primary">{{Number(weather.min_temp).toFixed(1)}}</span></span>
                        </td>
                    </tr>
                </table>
            </div>

        </div>

    </div>

</template>

<script>
import axios from 'axios'

// Put path to weather.php file here
let baseUrl = 'http://clweather.test/weather.php?'
export default {
  name: 'Weather',
  data () {
    return {
      the_temp: 0,
      min_temp: 0,
      max_temp: 0,
      icon: '-',
      city_name: this.city,
      city_woeid: this.woeid,
      date: undefined,
      dailyWeather: []
    }
  },
  computed: {
    icon_url: function () {
      return this.weather_icon(this.icon)
    },
    current_day: function () {
      if (this.date !== undefined) {
        return this.day_name(this.date)
      } else {
        return '-'
      }
    }
  },
  props: {
    city: {
      type: String,
      required: false,
      default: '-'
    },
    woeid: {
      type: Number,
      required: false,
      default: undefined
    },
    dailyDetails: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    get_woeid () {
      let vm = this
      if (this.city_woeid !== undefined) {
        vm.get_weather(this.city_woeid)
      } else {
        let url = baseUrl + 'command=search&keyword=' + this.city_name
        axios
          .get(url)
          .then(response => response.data)
          .then(function (response) {
            let woeid = response[0]['woeid']
            vm.get_weather(woeid)
          })
      }
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
          vm.date = todayWeather.applicable_date
          vm.icon = todayWeather.weather_state_abbr
          vm.city_name = response.title
          vm.city_woeid = response.woeid
          vm.dailyWeather = weather
        })
    },
    day_name (dateString) {
      let dateParams = dateString.split('-')
      let date = new Date(dateParams[0], dateParams[1], dateParams[2])
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return days[date.getDay()]
    },
    weather_icon (weatherState) {
      return 'https://www.metaweather.com/static/img/weather/' + weatherState + '.svg'
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
