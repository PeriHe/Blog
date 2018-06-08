<template>
  <div id="app">
    <header-nav></header-nav>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/header'
import Tab from './components/tab/tab'
import Artical from './views/artical/artical'
import TimeLine from './views/timeLine/timeLine'
import About from './views/about/about'


export default {
  name: 'App',
  components: {
    headerNav: Header,
    tab: Tab,
    artical: Artical,
    timeLine: TimeLine,
    about:About
  }
}
</script>

<style>
  #app{
    max-width: 50rem;
    margin: 2rem auto;
    padding:1rem 5rem;
    min-height: 100rem;
    background-color:rgba(255, 255, 255, 0.9);
  }
</style>
