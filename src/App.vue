<template>
  <div id="app">
    <DarkModeControll @changedMode="onChangedMode"/>
    <div id="nav" class="navbar">
      <router-link to="/" class="el fiz animated slideInLeft">Fizyka</router-link>
      <div class="logo">
        <img src="./assets/logo_schoolly_2.png" class="logo animated bounceIn" alt="schoolly logo">
      </div>
      <router-link to="/ang" class="el ang animated slideInRight">Angielski</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import DarkModeControll from "./components/DarkModeControll";
export default {
  components: { DarkModeControll },
  methods: {
    onChangedMode(value) {
      if (value) {
        document.getElementsByTagName("body")[0].style =
          "background: #111;color:#fff";
      } else {
        document.getElementsByTagName("body")[0].style =
          "background: #fff;color:#111";
      }
    }
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand");
@import "./assets/colors.scss";
body {
  font-family: "Quicksand", sans-serif;
  transition: background-color 1s ease-in, color 1s ease-in;
  overflow-x: hidden;
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 1vh;
  margin-top: 5vh;
  @media (max-width: 760px) {
    margin-bottom: 1vh;
  }
}
.logo {
  max-width: 50%;
  max-height: 50%;
  flex: 1;
  padding: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (max-width: 760px) {
    max-width: 120%;
    max-height: 120%;
    margin: 0 13px 0 13px;
  }
  &img {
    width: 100%;
    height: auto;
  }
}

.el {
  flex: 2;
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  transition: 0.5s ease;
  &.ang {
    color: $english_color;
    border-bottom: $english_color 2px solid;
    &:focus {
      background: $english_color;
      color: #fff;
      border-radius: 3px;
    }
  }
  &.fiz {
    color: $physic_color;
    border-bottom: $physic_color 2px solid;
    &:focus {
      background: $physic_color;
      color: #fff;
      border-radius: 3px;
    }
  }
}
</style>
