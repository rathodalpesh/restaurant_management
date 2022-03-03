<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body{
  padding: 0;
  margin: 0;
}

.logo {
  width: 100px;
}
.register input,
.login input {
  padding-left: 20px;
  display: block;
  width: 300px;
  height: 40px;
  border: 1px solid green;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
}
.register button,
.login button {
  width: 320px;
  height: 40px;
  border: 1px solid green;
  cursor: pointer;
  color: #fff;
  background-color: green;
}
</style>
