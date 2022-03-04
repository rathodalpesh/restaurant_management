<template>
  <Header />
  <h1>Add Restaurant Page</h1>
  <form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurants.name">
    <input type="text" name="address" placeholder="Enter Address" v-model="restaurants.address">
    <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurants.contact">
    <button type="button" v-on:click="addRes">Add Restaurant</button>
  </form>
</template>
<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
  name: "Add",
  components:{
      Header
  },
  data() {
    return {
      restaurants:{
        name:'',
        address:'',
        contact:''
      }
    }
  },
  methods: {
    async addRes(){

        let result = await axios.post("http://localhost:3000/restaurant", {
            name: this.restaurants.name,
            address: this.restaurants.address,
            contact: this.restaurants.contact,
        });
        if (result.status == 201) {
          this.$router.push({ name: "Home" });
        }
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
