<template>
  <div class="container">
    <aside class="sidebar">
      <div class="presentation">
        <button class="button" v-on:click="type = 'video'">
          VER PRESENTACIÓN
        </button>
      </div>

      <Cripto></Cripto>
    </aside>

    <div class="video-container">
      <video
        controls
        class="video"
        v-if="type === 'video'"
        src="../assets/video.mp4"
      ></video>
    </div>
  </div>
</template>

<script>

import Cripto from './Cripto';

export default {
  name: 'Sidebar',

  data: function(){
    return{
      type:'',
    }
  },

  components: {
    Cripto,
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 70vh;
}

.sidebar {
  width: 20%;
  background-color: black;
  height: 100%;
  color: #fff;
  float: left;
  padding-top: 30px;
}

.presentation {
  display: flex;
  justify-content: center;
}

.button {
  background-color: black;
  color: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 40px;
}

.button:hover {
  cursor: pointer;
}

.video-container {
  width: 80%;
  height: 70vh;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video {
  max-width: 100%;
  max-height: 80%;
  border: 3px solid black;
  border-radius: 5px;
}
</style>