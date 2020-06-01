<template>
  <div id="app">
    <Header></Header>
    <Sidebar></Sidebar>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Footer,
  }
}
</script>

<style>
</style>
