<template>
  <div class="searchWrapper">
    <input
      :value="value"
      @input="handleInput"
      type="text"
      name="search"
      class="search"
      autocomplete="off"
      placeholder="Wpisz tutaj..."
      :class="{eng}"
    >
  </div>
</template>
<script>
export default {
  name: "SearchComponent",
  props: {
    value: {
      type: String,
      required: true
    },
    eng: {
      type: Boolean
    }
  },
  methods: {
    handleInput(e) {
      //console.log(e.target.value);
      this.$emit("input", e.target.value);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/colors.scss";
.searchWrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 6vh;
}
.search {
  display: flex;
  flex: 1;
  height: 40px;
  border: 0;
  background: $physic_color;
  padding: 15px 15px 15px 30px;
  font-size: 1.4rem;
  color: #fff;
  transition: all 0.5s ease-in-out;
  border-radius: 3px;
  &:focus {
    box-shadow: 0px 12px 50px rgba(0, 0, 0, 0.2);
    border-radius: 60px;
    outline: none;
  }
}
.eng {
  background: $english_color;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #fff;
  opacity: 0.5; /* Firefox */
}
</style>