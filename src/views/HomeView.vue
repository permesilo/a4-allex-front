<template>
  <div>
    <TopBar/>
    <GreetTitle/>
    <QuestionTitle/>
    <InputBox
      ref="usernameInput"
      :style="inputStyle"
      :no-use-border="true"/>
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
    TopBar,
    GreetTitle,
    QuestionTitle,
    InputBox,
  },
  data() {
    return {
      inputStyle: {
        position: 'absolute',
        top: '304px',
        left: '120px',
      },
    };
  },
  mounted() {
    this.$refs.usernameInput.initFocusInput()
  },
};
</script>
<style lang="scss"></style>
