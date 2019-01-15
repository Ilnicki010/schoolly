<template>
  <div class="counterWrapper">
    <h2 id="animated-number">
      <span class="number" :class="{eng}">{{counted}}</span>
      definicji z {{subject}}
    </h2>
  </div>
</template>
<script>
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";
export default {
  name: "SearchComponent",
  props: {
    count: {
      type: Number,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    eng: {
      type: Boolean
    }
  },
  data() {
    return {
      tweenedNumber: 0
    };
  },
  computed: {
    counted: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    count: function(newValue) {
      console.log("changed");
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Amatic+SC");
@import "../assets/colors.scss";
.counterWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
}
.number {
  color: $physic_color;
  font-size: 50px;
  border-bottom: $physic_color 3px solid;
  font-family: "Amatic SC", cursive;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.eng {
  color: $english_color;
  border-bottom: $english_color 3px solid;
}
</style>