<template>
  <div class="principal">
    <div class="video-container">
      <video
        class="video"
        v-if="type === 'video'"
        src="../assets/video.mp4"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Principal',

  props: {
    type: String,
  }

}
</script>

<style scoped>
.principal {
  width: 80%;
  height: 70vh;
  float: left;
}

.video-container {
  max-width: 100%;
  max-height: 100%;
  width: 600px;
  height: 400px;
  margin: 5px auto;
  position: relative;
}

.video {
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  position: absolute;
}
</style>