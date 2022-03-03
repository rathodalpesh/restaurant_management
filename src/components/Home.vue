<template>
  <Header />
  <h1>Hello {{ name }}, Welcome on Home Page</h1>
  <br>
  <table border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>{{item.contact}}</td>
    </tr>
  </table>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
  name: "Home",
  components:{
      Header
  },
  data() {
    return {
      name:'',
      restaurants:[],
    }
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    let result = await axios.get('http://localhost:3000/restaurant');
    this.restaurants = result.data;
  },
};
</script>
<style scoped>
td{
  width: 160px;
  height: 40px;
  
}
</style>