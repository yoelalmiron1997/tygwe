<template>
  <div class="container">
    <div class="phrase-container">
      {{ numberRandom() }}
      <p class="phrase" :class="state">Frase: "{{ phrases[number] }}"</p>
    </div>

    <div class="video-container">
      <video autoplay controls class="video" src="../assets/video.mp4"></video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Presentation',

  data: function () {
    return {
      number: 0,
      state: '',
      phrases: ['Son nuestras elecciones las que muestran lo que somos, mucho más que nuestras habilidades.',
        'Nuestras vidas no sólo se miden en años, se miden en las vidas de aquellos que impactamos.',
        'Una mente necesita de los libros igual que una espada de una piedra de amoldar, para conservar el filo.'],
    }
  },

  methods: {
    numberRandom: function () {
      this.number = Math.floor(Math.random() * (3));
      this.state = 'phrase' + this.number;
    },
  }
}
</script>

<style scoped>
.phrase-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
}

.phrase {
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  color: rgb(0, 0, 0);
}

.phrase.phrase0 {
  text-shadow: 2px 2px 2px rgb(250, 7, 7);
}

.phrase.phrase1 {
  text-shadow: 5px -5px #86d6d3;
}

.phrase.phrase2 {
  text-shadow: -1px 0 rgb(247, 93, 234), 1px 0 rgb(247, 93, 234), 0 1px rgb(247, 93, 234), 0 -1px rgb(247, 93, 234);
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
}

.video {
  max-width: 100%;
  max-height: 100%;
  border: 3px solid black;
  border-radius: 5px;
}
</style>