<template>
  <div
    :class="{ 'video-modal': true, 'visible': video.headline }"
  >
    <div class="video-modal__background"></div>
    <div class="video-modal__card">
      <i class="close-icon" @click="closeModal"></i>
      <h3 class="text-center m-b-20">{{ video.headline }}</h3>
      <video class="video-modal__video" :poster="video.image" :src="video.video" autoplay muted></video>
    </div>
  </div>
</template>

<script>
export default {
  props: ['video'],
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
