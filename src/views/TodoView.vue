<template>
  <div class="container todo-list">
    <TopBar />
    <div class="todo-list__greeting">Good {{ greetingComment }}, {{ $store.state.userName }}.</div>
    <div class="todo-list__comment">You’ve got</div>
    <div class="todo-list__task">2/2</div>
    <div class="todo-list__comment">task Today!</div>
    <InputBox class="todo-list__input" :placeholder="'Enter your task'"/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import InputBox from '@/components/InputBox.vue';

export default {
  name: 'TodoView',
  components: { InputBox, TopBar },
  data(){
    return {
      greetingComment:"",
    }
  },
  mounted() {
    this.setGreetingComment();// 처음에 초기화 시켜줌
    setInterval(this.setGreetingComment, 10000 ); // 10초 단위로 시간을 확인하며 갱신시킨다.
  },
  methods:{
    setGreetingComment(){
      const hours= Number(new Date().getHours());
      if(hours>7 && hours<=12){
        this.greetingComment = "morning";
      }else if(hours>12 && hours<=18){
        this.greetingComment = "afternoon";
      }else if(hours>18 && hours<=22){
        this.greetingComment = "evening";
      }else{
        this.greetingComment = "night";
      }
    },
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
}
.todo-list{
  font-family: Roboto;

  &__greeting{
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    padding-left: 60px;
    padding-top: 24px;
    padding-bottom: 16px;
  }
  &__task{
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    padding-left: 60px;

  }
  &__comment{
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    padding-left: 60px;
  }
  &__input{
    padding-top: 16px;
    padding-left: 60px;
    padding-right: 60px;
  }
}
</style>
