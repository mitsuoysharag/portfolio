<template>
  <div>
    <Chatbot />
    <Header />
    <Presentation />
    <Skills />
    <Projects />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Chatbot from "@/components/Chatbot";

export default {
  components: {
    Header,
    Presentation,
    Skills,
    Projects,
    Chatbot
  }
};
</script>

<style lang="scss" scoped>
</style>
