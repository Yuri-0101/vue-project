<template>
    <nav>
        <router-link to="/" class="link">Home</router-link> |
        <router-link to="/lista" class="link">lista</router-link>
    </nav>
</template>

<script>
  export default {
    name: 'HeaderNav',
    props: {
        msg: String
    }
  }
</script>

<style scoped>
 /* nav {
  background-color: #8FBC8F;
 } */

  .link {
    margin-left: 1%;
    margin-right: 1%;
    font-size: larger;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>