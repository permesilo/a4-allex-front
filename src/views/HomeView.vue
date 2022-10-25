<template>
  <div class="home">
    <TopBar class="home__topbar"/>
    <GreetTitle class="home__greet-title"/>
    <QuestionTitle class="home__question-title"/>
    <InputBox
      ref="usernameInput"
      class="home__input"
      :no-use-border="true"
      :text="name"
      :placeholder="'Input your name'"
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
<style lang="scss">

.home{

  &__topbar{
  }
  &__greet-title{
    padding-top: 60px;
    padding-left: 120px;
  }
  &__question-title{
    padding-top: 24px;
    padding-left: 120px;
  }
  &__input{
    padding-top: 16px;
    padding-left: 120px;
    width: 680px;
    height: 32px;

  }
}
</style>
