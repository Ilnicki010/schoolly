<template>
  <div class="menuWrapper">
    <div class="menu">
      <div id="hamburger" class="hamburger">
        <i class="fas fa-arrow-left"></i>
      </div>
      <ul class="list">
        <li>
          <a class="el"></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuComponent"
};
</script>
<style lang="scss" scoped>
.menuWrapper {
  right: 0;
  top: 0;
  position: fixed;
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
  width: 100vw;
  z-index: 9999;
}
.menu {
  display: flex;
  flex-direction: row-reverse;
  flex: 1;
  padding: 10px;
}
.hamburger {
  background: red;
  width: 30px;
  height: 30px;
  border-radius: 60px;
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.3);
}
.list {
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
}
ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}
li {
  display: flex;
  flex: 1;
  margin: 0 20px 0 20px;
  background: red;
  border-radius: 60px;
}
</style>