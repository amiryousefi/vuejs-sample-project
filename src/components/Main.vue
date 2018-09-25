<template>
    <div class="m-5">
        <div class="row m-2 justify-content-center">
            <div class="col-md-6">
                <input type="text" class="form-control float-right" v-model="keyword"/>
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-primary float-left" v-on:click="$router.push('/search/' + keyword)">Search</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4">
                        <weather city="Istanbul"></weather>
                    </div>
                    <div class="col-md-4">
                        <weather city="Berlin"></weather>
                    </div>
                    <div class="col-md-4">
                        <weather city="London"></weather>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <weather city="Helsinki"></weather>
                    </div>
                    <div class="col-md-4">
                        <weather city="Dublin"></weather>
                    </div>
                    <div class="col-md-4">
                        <weather city="Vancouver"></weather>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Weather from './Weather'
export default {
  name: 'Main',
  data () {
    return {
      keyword: ''
    }
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
