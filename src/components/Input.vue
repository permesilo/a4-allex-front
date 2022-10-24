<template>
  <div class="main">
    <input placeholder="Input out name"/>
    <img v-if="disabled" src="../assets/disabled_vector.svg" alt="none">
    <img v-else src="../assets/vector.svg" alt="none">
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String,
  },
  data(){
    return{
      disabled:true
    }
  },
  computed:{

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  height: 40px ;
}
input{
  width: 648px;
  height: 32px;
  border: none;
  border-bottom: 1px solid #CCCCCC;
}
</style>
