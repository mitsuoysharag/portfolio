<template>
  <div class="avatar">
    <div v-for="(e, e_idx) in emotions" :key="e_idx">
      <img v-show="e === emotion" class="avatar__image" :src="require(`@/assets/avatar/${e}.png`)" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    emotions: [
      "angry",
      "blink",
      "happy",
      "love",
      "normal",
      "sad",
      "talk",
      "wink"
    ],
    emotion: "normal"
  })
};
</script>

<style lang='scss' scoped>
.avatar {
  background: #7354f1;
  &__image {
    display: block;
    margin: 0 auto;
    height: 25vh;
    max-height: 140px;
  }
}
</style>