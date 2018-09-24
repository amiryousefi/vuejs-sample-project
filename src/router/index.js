import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Weather from '@/components/Weather'
import WeatherDetails from '@/components/WeatherDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/search/:keyword',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/weather/:woeid',
      name: 'WeatherDetails',
      component: WeatherDetails
    }
  ]
})
