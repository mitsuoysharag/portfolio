<template>
  <section class="skills">
    <div class="container pa-0">
      <h2 class="skills__title">Conocimientos</h2>
      <div class="skills__body">
        <!-- Skill -->
        <div class="row">
          <div class="col-12 col-md-6" v-for="(skill, idx) in skills" :key="idx">
            <section class="skill">
              <img class="skill__image" :src="skill.image" />
              <div class="skill__body">
                <h3 class="skill__title">{{skill.title}}</h3>
                <div class="skill__items">
                  <span class="skill__item" v-for="(item, idx) in skill.items" :key="idx">{{item}}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        image: require("@/assets/skills/web.png"),
        title: "Desarrollo Web",
        items: ["HTML", "CSS3", "Javascript"]
      },
      {
        image: require("@/assets/skills/frontend.png"),
        title: "Frontend Frameworks",
        items: ["HTML", "CSS3", "Javascript"]
      },
      {
        image: require("@/assets/skills/backend.png"),
        title: "Backend Frameworks",
        items: ["HTML", "CSS3", "Javascript"]
      },
      {
        image: require("@/assets/skills/mobile.png"),
        title: "Desarrollo Móvil",
        items: ["HTML", "CSS3", "Javascript"]
      },
      {
        image: require("@/assets/skills/service.png"),
        title: "Servicios Web",
        items: ["HTML", "CSS3", "Javascript"]
      },
      {
        image: require("@/assets/skills/database.png"),
        title: "Base de Datos",
        items: ["HTML", "CSS3", "Javascript"]
      }
    ]
  })
};
</script>

<style lang='scss' scoped>
.skills {
  padding: 120px 20px 120px;
  background: #4b22f4;
  color: #fff;
  &__title {
    max-width: 1000px;
    margin: 0 auto 60px;
    font-size: 3.5rem;
  }
  &__body {
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
  }
}
.skill {
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  &__image {
    height: 65px;
    width: 65px;
    margin: 20px 28px 0 0;
  }
  &__body {
  }
  &__title {
    margin: 10px 0;
    font-size: 1.45rem;
  }
  &__items {
  }
  &__item {
    margin-right: 8px;
    padding: 6px 12px;
    background: #fff;
    color: #4b22f4;
    font-size: 0.85rem;
    font-weight: bold;
    border-radius: 20px;
  }
}
// Small devices (landscape phones, 576px and up)
@media (max-width: 768px) {
  .skills {
    &__title {
      margin-left: 0;
      text-align: center;
    }
    &__body {
      width: min-content;
    }
  }
}
</style>