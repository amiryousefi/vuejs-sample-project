<template>
    <div class="mb-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <router-link to="/">
                    <a class="text-left d-block"> back</a>
                </router-link>
                <weather :woeid="this.$route.params.woeid" dailyDetails="true"></weather>
            </div>
        </div>
    </div>

</template>

<script>
import Weather from './Weather'
export default {
  name: 'WeatherDetails',
  components: {Weather},
  mounted () {
    console.log('REF WOEID', this.$route.params.woeid)
  }
}
</script>
