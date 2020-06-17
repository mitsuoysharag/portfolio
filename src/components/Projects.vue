<template>
  <section class="projects">
    <h2 class="projects__title">Proyectos</h2>
    <div class="container pa-0">
      <div class="row no-gutters">
        <div class="col-12 col-md-6 col-lg-4 pa-4" v-for="(project, idx) in projects" :key="idx">
          <section class="card">
            <div
              class="card__image"
              :style="{background: `url(${project.image})`, 'background-size': 'cover',  'background-position': 'center'}"
            ></div>
            <div class="card__body">
              <h3 class="card__title">{{project.title}}</h3>
              <p class="card__text">{{project.content}}</p>
              <div class="card__actions">
                <a class="button button--blue" :href="project.link" target="_blank">Visitar</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        image:
          "https://blog.desafiolatam.com/wp-content/uploads/2018/10/chatbot-y-humano.png",
        title: "Chatbot",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit id maiores hic ea nobis libero."
      },
      {
        image: require("@/assets/projects/braintutor.png"),
        title: "BrainTutor",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit id maiores hic ea nobis libero.",
        link: "https://braintutor.github.io/braintutor"
      },
      {
        image: "https://blog.desafiolatam.com/wp-content/uploads/2018/10/chatbot-y-humano.png",
        title: "MitJS",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit id maiores hic ea nobis libero."
      },
      {
        image: "https://miro.medium.com/max/1500/0*Kl0LELkpH8stg1ZQ.jpg",
        title: "Robot Invation",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit id maiores hic ea nobis libero."
      },
      {
        image: require("@/assets/projects/beinplace.png"),
        title: "Beinplace",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit id maiores hic ea nobis libero.",
        link: "https://beinplace.com.pe"
      },
      {
        image: require("@/assets/projects/belling.png"),
        title: "Belling",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit id maiores hic ea nobis libero."
      }
    ]
  })
};
</script>

<style lang='scss' scoped>
.projects {
  padding: 60px 10px 100px;

  &__title {
    margin-bottom: 72px;
    text-align: center;
    font-size: 3.5rem;
  }
}
</style>