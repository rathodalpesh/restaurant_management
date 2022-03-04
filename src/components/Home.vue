<template>
  <Header />
  <h1>Hello {{ name }}, Welcome on Home Page</h1>
  <br />
  <table border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>Action</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td>
        <router-link :to="'/update/' + item.id">Update</router-link>&nbsp;
        <button type="button" v-on:click="updateRes(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  methods: {
    async updateRes(id) {      
      let result = await axios.delete("http://localhost:3000/restaurant/"+id);
      if(result.status == 200 ){
        this.load();
      }
    },
    async load() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }

      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurants = result.data;
    },
  },
  mounted() {
    this.load();
  },
};
</script>
<style scoped>
td {
  width: 260px;
  height: 40px;
}
</style>
