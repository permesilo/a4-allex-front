<template>
  <div class="top-bar">
    <div class="top-bar__left">
      <TopBarIcon class="top-bar__icon" ></TopBarIcon>
      <div class="top-bar__title">Allex Todo</div>
    </div>
    <div class="top-bar__right">
      <div class="top-bar__date">{{getNowDate}}</div>
    </div>
  </div>
</template>

<script>
import TopBarIcon from "./icon/TopBarIcon.vue"

export default {
  name: 'TopBar',
  components:{
    TopBarIcon
  },
  props: {
  },
  computed:{
    getNowDate(){
      const nowDate= new Date();
      const month = nowDate.getMonth() + 1;
      const date = nowDate.getDate();
      const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const week = weekday[nowDate.getDay()];
      return `${month}/${date} ${week}`;
    }
  }
};
</script>

<style scoped lang="scss">
.top-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 9px 16px;
  gap: 530px;

  position: absolute;
  width: 1280px;
  height: 48px;
  left: 0px;
  top: 0px;

  background: #6C77A7;
  //background: #d15050;
  &__left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
  }
  &__icon{
    width: 24px;
    height: 24px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  &__title{
    height: 28px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    color: #FFFFFF;
  }
  &__right{
    justify-content: flex-end;
  }
  &__date{
    width: 105px;
    height: 19px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #FFFFFF;
    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
}
</style>
