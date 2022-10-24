<template>
  <div class="main">
    <TopBar></TopBar>
    <p class="greeting">Welcome Newbie!!<br>
      MyTodo makes it easy to stay organized and manage your life.</p>
    <p class="greetingQuestion">What is your name?</p>
    <Input></Input>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import TopBar from '@/components/TopBar.vue';
import Input from '@/components/Input.vue';

export default {
  name: 'HomeView',
  components: {
    TopBar,Input
  },
};
</script>
<style lang="scss">
.main{

}
.greeting{
  font-family: Roboto;
  font-size: 28px;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
}
.greetingQuestion{
  font-family: Roboto;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: left;
}
</style>
