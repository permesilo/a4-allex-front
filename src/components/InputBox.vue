<template>
  <div class="input-box">
    <input
      v-model="name"
      class="input-box__input--normal"
      :class="{'input-box__input--focused':isActive, 'input-box__input--error':isError}"
      placeholder="Input out name"
      @focus="focusCheck"
    />
    <img v-if="isActive" class="input-box__img" src="../assets/vector.svg" alt="none">
    <img v-else class="input-box__img" src="../assets/disabled_vector.svg" alt="none">
    <div v-if="isError" class="input-box__error-message">error message</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'InputBox',
  props: {
  },
  data(){
    return{
      isActive:false,
      isError:false,
      name:""
    }
  },
  watch:{
    name() {
      const reg = /^[a-z|A-Z]*$/;
      if (!reg.test(this.name)) { // 특수문자 들어간 경우
        this.isError=true;
        this.isActive=false;
      }
      else{
        this.isError=false;
        this.isActive=true;
      }
    }
  },
  methods:{
    focusCheck(){
      if(this.isError){
        // 문제 있으므로 focus 작용안함
      }
      else{
        this.isActive=true;
      }
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  height: 40px ;
}
input{  width: 648px;
  height: 32px;
  border: none;
  border-bottom: 1px solid #CCCCCC;
}
.input-box{
  &__input--focused{
    border-bottom: 1px solid #2A82F0;
  }
  &__input--error{
    border-bottom: 1px solid #D15050;
  }
  &__error-message{
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    color: #D15050;
  }
  &__img{

  }
}

</style>
