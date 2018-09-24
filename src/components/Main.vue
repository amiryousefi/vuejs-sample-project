<template>
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

</template>

<script>
import Weather from './Weather'
export default {
  name: 'Main',
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
