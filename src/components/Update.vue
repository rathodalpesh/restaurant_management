<template>
  <Header />
  <h1>Update Restaurant Page</h1>
  <form class="add">
    <input
      type="text"
      name="name"
      placeholder="Enter Name"
      v-model="restaurants.name"
    />
    <input
      type="text"
      name="address"
      placeholder="Enter Address"
      v-model="restaurants.address"
    />
    <input
      type="text"
      name="contact"
      placeholder="Enter Contact"
      v-model="restaurants.contact"
    />
    <button type="button" v-on:click="updateRes">Update Restaurant</button>
  </form>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Update",
  components: {
    Header,
  },
  methods: {
    async updateRes() {
      let result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurants.name,
          address: this.restaurants.address,
          contact: this.restaurants.contact,
        }
      );

      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  data() {
    return {
      restaurants: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    let result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );
    this.restaurants = result.data;
  },
};
</script>
