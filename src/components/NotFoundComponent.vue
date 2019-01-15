<template>
  <div class="notfoundWrapper">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    >
    <h1>Ajj nic na razie nie znaleziono...</h1>
    <h2>
      Ale kliknij zapytaj, a ta definicja pojawi się w Schoolly w ciągu
      <span class="number">24h</span>
    </h2>
    <p>Czyli max do: {{this.date}}</p>
    <button class="send" @touchstart="handleClick" @click="handleClick" :class="[{eng},{result}]">
      <span>Zapytaj o {{this.value}}</span>
    </button>
  </div>
</template>
<script>
import axios from "axios";
let URL = "https://www.schoolly.pl/api/v01/pytanie";
export default {
  name: "NotFoundComponent",
  props: {
    value: {
      type: String,
      required: true
    },
    eng: {
      type: Boolean
    }
  },
  data() {
    return {
      date: this.getTomorrowDate(),
      result: false
    };
  },
  methods: {
    getTomorrowDate() {
      const toTwoDigits = num => (num < 10 ? "0" + num : num);
      let today = new Date();
      today.setDate(today.getDate() + 1);
      let year = today.getFullYear();
      let month = toTwoDigits(today.getMonth() + 1);
      let day = toTwoDigits(today.getDate());
      let h = today.getHours();
      let m = today.getMinutes();
      return `${day}/${month}/${year} ${h}:${m}`;
    },
    handleClick() {
      axios
        .post(`${URL}`, {
          q: this.value,
          time: this.date
        })
        .then(response => {
          console.log(response);
          this.result = true;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/colors.scss";
.notfoundWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  margin-top: 7%;
}
.number {
  font-size: 2em;
}
.send {
  padding: 20px;
  color: #fff;
  border: none;
  border-radius: 60px;
  width: auto;
  height: auto;
  min-width: 60vw;
  font-size: 1.1em;
  background: $physic_color;
  transition: 0.3s ease-in;
  cursor: pointer;
  &.eng {
    background: $english_color;
  }
  &:focus {
    outline: none;
  }
}
.result {
  display: block;
  width: 50px;
  height: 50px;
  min-width: 50px;
  max-height: 50px;
  padding: 1px;
  opacity: 0.5;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  & span {
    display: none;
  }
  &:after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f00c";
    text-align: center;
  }
}
</style>