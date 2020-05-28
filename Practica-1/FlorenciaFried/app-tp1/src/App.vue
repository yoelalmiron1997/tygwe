<template>
  <div id="app">
    <Header></Header>
    <Sidebar></Sidebar>
    <Principal></Principal>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Principal from './components/Principal';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Principal,
    Footer,
  }
}
</script>

<style>
</style>
