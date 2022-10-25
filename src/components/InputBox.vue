<template>
  <div class="container-col">
    <div class="container-row">
      <div
        class="container-row input-box"
        :class="{
          'input-box__input--focused': isFocus,
          'input-box__input--error': isError,
          'input-box__input--border': delBorder,
        }"
      >
        <input
          v-model="name"
          class="input-box__input--normal"
          placeholder="Input out name"
          @focusin="focus(true)"
          @focusout="focus(false)"
        />
        <DeleteIcon v-show="isText" class="input-box__delete" @click. native="delName"></DeleteIcon>
      </div>
      <SendHovIcon v-if="canSend" class="input-box__send"/>
      <SendNorIcon v-else class="input-box__send"/>
    </div>
    <div v-if="isError" class="input-box__error-message">error message</div>
  </div>
</template>

<script>
import SendNorIcon from '@/components/icon/SendNorIcon.vue';
import SendHovIcon from '@/components/icon/SendHovIcon.vue';
import DeleteIcon from '@/components/icon/DeleteIcon.vue';

export default {
  name: 'InputBox',
  components:{
    SendNorIcon, SendHovIcon,DeleteIcon
  },
  props: {
    noUseBorder: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: '',
      isFocus: false,
      isText: false,
      canSend: false,
      isError: false,

      delBorder:this.noUseBorder // props에서 받은 데이터를 사용가능하도록 받아준다.
    };
  },
  watch: {
    name() {
      // 글자수에 따른 액션
      if (this.name.length === 0) {
        this.isText = false;
        this.canSend = false;
        this.isError = false;
        return;
      }
      this.isText = true;

      // 특수문자 체크
      const reg = /^[a-z|A-Z]*$/;
      if (!reg.test(this.name)) {
        // 특수문자 들어간 경우
        this.isError = true;
        this.canSend = false;
      } else {
        this.isError = false;
        this.canSend = true;
        this.isFocus = true;
      }
    },
  },
  methods: {
    focus(isIn) {
      if (isIn) {// 포커스시도
        if (!this.isError) {
          this.isFocus = true;
        }
      } else {// 포커스 아웃시도
        this.isFocus = false;
      }
    },
    delName() {
      this.name = '';
      this.canSend = false;
    },
  }};
</script>

<style scoped lang="scss">
.container-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.container-col {
  display: flex;
  flex-direction: column;
}

input {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  width: 648px;
  border: none;
  outline: none;
}
.input-box {
  width: 648px;
  height: 32px;
  border: 1px solid;
  border-color: #cccccc;
  border-radius: 4px;


  &__input--border {
    //border: 1px solid #CCCCCC;
    //border: 1px solid;
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
    border-radius: 0px;

  }

  &__input--focused {
    border-color: #2a82f0;
  }
  &__input--error {
    border-color: #d15050;
  }
  &__error-message {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    color: #d15050;
  }
  &__delete {
    width: 20px;
    height: 20px;
    padding-right: 5px;
  }
  &__send {
    padding-left: 11px;
  }
}
</style>
