<template>
  <div>
    testest
    <input-box :no-use-border="true"></input-box>
    <input-box :no-use-border="false"></input-box>
  </div>
</template>

<script>
import InputBox from '@/components/InputBox.vue';

export default {
  name: 'TestView',
  components:{
    InputBox
  }
  ,
  methods:{
    clickTest(){
      console.log("test!!!");
    }
  }
};
</script>

<style scoped>

</style>
