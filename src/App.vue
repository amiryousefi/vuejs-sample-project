<template>
    <Main></Main>
</template>

<script>
import Weather from './components/Weather'
import Main from './components/Main'
export default {
  name: 'App',
  components: {Weather, Main}
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
