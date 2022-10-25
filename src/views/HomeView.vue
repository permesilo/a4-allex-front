<template>
  <div>
    <TopBar></TopBar>
    <GreetTitle></GreetTitle>
    <QuestionTitle></QuestionTitle>
    <InputBox :style="inputStyle" :use-border="false"></InputBox>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import GreetTitle from '@/components/GreetTitle.vue';
import QuestionTitle from '@/components/QuestionTitle.vue';
import InputBox from '@/components/InputBox.vue';

export default {
  name: 'HomeView',
  components: {
    TopBar,GreetTitle,QuestionTitle,InputBox
  },
  data(){
    return{
      inputStyle: {
        position:"absolute",
        top:"304px",
        left:"120px"
      }
    }
  }
};
</script>
<style lang="scss">
</style>
