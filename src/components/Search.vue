<template>
    <div class="m-5">
        <div class="row m-2 justify-content-center">
            <div class="col-md-6">
                <input type="text" class="form-control float-right" v-model="keyword"/>
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-primary float-left" v-on:click="do_search">Search</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4" v-for="city in cities" :key="'city_weather'+city.woeid">
                <weather :city="city.title" :woeid="city.woeid"></weather>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Weather from './Weather'

// Put path to weather.php file here
// let baseUrl = 'http://clweather.test/weather.php?'
let baseUrl = 'http://localhost/weather.php?'

export default {
  name: 'Main',
  data () {
    return {
      keyword: this.$route.params.keyword,
      cities: []
    }
  },
  methods: {
    do_search: function () {
      let url = baseUrl + 'command=search&keyword=' + this.keyword
      let vm = this
      axios
        .get(url)
        .then(response => response.data)
        .then(function (response) {
          vm.cities = response
        })
    }
  },
  mounted () {
    this.do_search()
  },
  components: {
    'weather': Weather
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
