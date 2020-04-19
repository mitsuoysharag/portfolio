<template>
  <header id="header">
    <section class="info">
      <h2 class="info__name">Mitsuo Yshara G.</h2>
      <p class="info__description">Desarrollador Web</p>
    </section>
  </header>
</template>

<script>
export default {
  data: () => ({
    speed: 2
  }),
  mounted() {
    let isMobile = window.matchMedia("only screen and (max-width: 768px)")
      .matches;
    if (!isMobile) {
      var header = document.getElementById("header");
      window.addEventListener("scroll", () => {
        var yPos = window.pageYOffset / this.speed;
        var coords = `center calc(${yPos}px)`;
        header.style.backgroundPosition = coords;
      });
    }
  }
};
</script>

<style lang='scss' scoped>
#header {
  height: 800px;
  background: linear-gradient(
      to right,
      rgba(21, 0, 112, 0.95) 0%,
      rgba(21, 0, 112, 0.9) 100%
    ),
    url("https://redislabs.com/wp-content/uploads/2019/09/blog-async.jpeg");
  background-size: cover;
  background-position: center 0;
  //
  display: flex;
  justify-content: center;
  align-items: center;
}

.info {
  margin: 20px;
  margin-bottom: 80px;
  padding: 14px 48px;
  color: #fff;
  text-align: center;
  border: 3px solid #fff;

  &__name {
    margin: 24px 0 8px;
    font-size: 2.8rem;
  }
  &__description {
    margin-top: 0;
    font-size: 1.6rem;
  }
}
</style>