<script setup lang="ts">
import { computed } from "vue";

export interface IProps {
  title?: string;
  subtitle?: string;
  mediaHref?: string;
  supportingText?: string;
  buttonText?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  title: "Title",
  subtitle: "Subtitle",
});

const mediaBg = computed(() => ({
  backgroundImage: `url(${props.mediaHref})`,
}));
</script>

<template>
  <div class="card">
    <div class="media" :style="mediaBg" v-if="mediaHref"></div>
    <h4 class="titlte">{{ props.title }}</h4>
    <small>{{ props.subtitle }}</small>
    <p class="supporting-text">{{ supportingText }}</p>
    <div v-if="buttonText">
      <a href="#" class="material-button">{{ buttonText }}</a>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
.card {
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: rgb(150, 150, 150) 0px 1px 3px;
  width: 350px;
  padding: 0.8rem;
}
.media {
  height: 150px;
}
.title {
  margin-bottom: 0;
}

.material-button {
  color: purple;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s all linear;
}

.material-button:hover {
  background-color: rgba(76, 6, 141, 0.082);
}
</style>
