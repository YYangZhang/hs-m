<template>
  <div id="app" class="fullscreen">
     <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>

export default {
  name: "App",
  data() {
    return {
      exclude: ""
    };
  },

};
</script>
<style>
</style>
