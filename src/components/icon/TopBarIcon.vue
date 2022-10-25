<template>
  <div>
    <img :src="iconUrl" alt="none">
  </div>
</template>

<script>
export default {
  name: 'TodoIcon',
  props:{
    iconName:String
  },
  computed:{
    iconUrl(){
      return "../assets/"+this.iconName+".svg";
    }
  }
};
</script>

<style scoped>

</style>
