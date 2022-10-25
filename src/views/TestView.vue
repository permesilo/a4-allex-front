<template>
  <div>
    testest
    <input-box :no-use-border="true"></input-box>
    <input-box :no-use-border="false"></input-box>

    <h1>
    {{this.$store.state.userName}}
    </h1>
    <button @click="vuexTest">상태 넣기</button>
    <button @click="vuexCheck">상태 확인</button>

  </div>
</template>

<script>
import InputBox from '@/components/InputBox.vue';
import { mapMutations } from 'vuex'

export default {
  name: 'TestView',
  components:{
    InputBox
  },
  methods:{
    ...mapMutations(['setUserName']),
    clickTest(){
      console.log("test!!!");
    },
    vuexTest(){
      console.log("vuexTest clicked");
      this.setUserName("홍길동");
    },
    vuexCheck(){
      console.log("vuexCheck clicked");
      console.log(this.$store.state.userName);
    }
  }
};
</script>

<style scoped>

</style>
