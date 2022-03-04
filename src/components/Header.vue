<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="add">Add Restaurant </router-link>
        <a href="#" v-on:click="logout">Logout</a>
    </div>
</template>
<script>
export default {
    name:'Header',
    methods: {
        logout(){
            localStorage.clear();
            this.$router.push({ name: "Login" });
        }
    },
}
</script>
<style scoped>
.nav{
    background-color: #333;
    overflow: hidden;
}

.nav a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}

.nav a:hover{
    background-color: #ddd;
    color: #222;
}
</style>