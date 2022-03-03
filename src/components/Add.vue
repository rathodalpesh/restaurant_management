<template>
  <Header />
  <h1>Add Page</h1>
</template>
<script>
import Header from './Header.vue'
export default {
  name: "Add",
  components:{
      Header
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
