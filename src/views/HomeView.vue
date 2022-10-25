<template>
  <div>
    <TopBar/>
    <GreetTitle/>
    <QuestionTitle/>
    <InputBox
      ref="usernameInput"
      :style="inputStyle"
      :no-use-border="true"
      :text="name"
      @submit="setName"
    />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import GreetTitle from '@/components/GreetTitle.vue';
import QuestionTitle from '@/components/QuestionTitle.vue';
import InputBox from '@/components/InputBox.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    TopBar,
    GreetTitle,
    QuestionTitle,
    InputBox,
  },
  data() {
    return {
      name:'',
      inputStyle: {
        position: 'absolute',
        top: '304px',
        left: '120px',
      },
    };
  },
  mounted() {
    this.$refs.usernameInput.initFocusInput(); // 시작과 동시에 자식 컴포넌트에 focus를 건다.
  },
  methods:{
    ...mapMutations(['setUserName']),
    setName(name){
      this.setUserName(name);// vuex에 state 갱신
      this.$router.push({ path: '/todo' }) // todo view로 이동
    }
  },
};
</script>
<style lang="scss"></style>
