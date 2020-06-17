<template>
  <div>
    <Chatbot />
    <Header />
    <Presentation />
    <Skills />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Chatbot from "@/components/Chatbot";
import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default {
  components: {
    Chatbot,
    Header,
    Presentation,
    Skills,
    Projects,
    Footer
  }
};
</script>

<style lang="scss" scoped>
</style>
