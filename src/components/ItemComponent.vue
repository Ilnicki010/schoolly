<template>
  <div class="itemWrapper" :class="{eng}">
    <h2 :class="{eng}">{{this.item.title}}</h2>
    <p v-html="this.item.msg_1"></p>
    <p v-html="this.item.msg_2"></p>
    <p v-html="this.item.msg_3"></p>
  </div>
</template>
<script>
export default {
  name: "ItemComponent",
  props: {
    item: {
      type: Object,
      required: true
    },
    eng: {
      type: Boolean
    }
  },
  mounted() {
    console.log(this.item);
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Amatic+SC");
@import "../assets/colors.scss";
.itemWrapper {
  padding: 40px;
  transition: 0.3s ease;
  margin: 20px;
  border-bottom: $physic_color 3px solid;
  cursor: pointer;
  @media (max-width: 760px) {
    padding: 5px;
  }
  &.eng {
    border-bottom: $english_color 3px solid;
  }
  h2 {
    color: $physic_color;
    font-size: 2rem;
    font-family: "Amatic SC", cursive;
  }
  .eng {
    color: $english_color;
  }
}
p {
  font-size: 18px;
}
</style>