<template>
  <div class="container">
    <img class="left-item" src="../assets/ic_topbar_menu.svg" alt="profile"/>
    <div class="left-item title">My Todo</div>
    <div class="right-item date">{{getNowDate}}</div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String,
  },
  computed:{
    getNowDate(){
      const nowDate= new Date();
      const month = nowDate.getMonth();
      const date = nowDate.getDate();

      const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const week = WEEKDAY[nowDate.getDay()];

      return `${month  }/${  date} ${week}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  padding: 0px 16px 0px 16px;

  background: #6C77A7;
}
.left-item{
}
.right-item{
  margin-left: auto;
}
.title{
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 14px;
}
.date{
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}
div{
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 700;
}
</style>
