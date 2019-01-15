
<template>
  <div class="Modewrapper">
    <input type="checkbox" id="switch" v-model="value" @change="switchClick">
    <label for="switch" class="switch-label">
      <div class="toggle"></div>
    </label>
  </div>
</template>
<script>
export default {
  name: "DarkModeControll",
  data() {
    return {
      value: false
    };
  },
  methods: {
    switchClick() {
      this.$emit("changedMode", this.value);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/colors.scss";
$color: $physic_color;

@mixin flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}

#switch {
  visibility: hidden;
  position: absolute;
}

.switch-label {
  @include flex();
  width: 70px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: 0.5s all ease;
  .toggle {
    width: 20px;
    height: 20px;
    border-radius: 25px;
    background-color: $color;
    position: absolute;
    left: 3px;
    transition: 0.5s all ease;
  }
}

#switch:checked {
  ~ .switch-label {
    transition: 0.5s all ease;
    background: $english_color;
    border: none;
    .toggle {
      height: 12.5px;
      transform: scale(0.9) translateX(45px) rotate(90deg);
      transition: 0.7s all ease;
      border-radius: 25px 25px 0 0;
      background: transparent;
      box-shadow: 0px -6px 0 0 white;
    }
  }
}
</style>

