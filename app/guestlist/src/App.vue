<template>
  <div class="main">
    <Header></Header>
    <h1>{{title}}</h1>
    <Body></Body>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";

export default {
  data: function() {
    return {
      title: "Guest List"
    };
  },
  components: {
    Header,
    Body
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.main h1 {
  text-align: center;
  margin-top: 40px;
}
</style>
