<template>
  <div class="container">
    <section class="presentation">
      <img class="presentation__photo" src="https://i.ya-webdesign.com/images/avatar-png-1.png" />
      <h2 class="presentation__title">Presentación</h2>
      <p
        class="presentation__content"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illo odio voluptate officia amet iusto, dicta molestias cumque earum esse a incidunt recusandae dolorem dolores blanditiis nobis. Eveniet, nihil voluptatum.</p>
      <p
        class="presentation__content"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illo odio voluptate officia amet iusto, dicta molestias cumque earum esse.</p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.presentation {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 180px 0 180px 0;
  text-align: center;

  &__photo {
    display: block;
    position: absolute;
    top: -120px;
    left: calc(50% - 120px);
    width: 240px;
    height: 240px;
    border: 20px solid #fff;
    border-radius: 50%;
  }
  &__title {
    color: #2b2b2b;
    font-size: 2.8rem;
  }
  &__content {
    color: #686868;
    font-size: 1.6rem;
  }
}
</style>