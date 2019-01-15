<template>
  <div class="homeWrapper" @scroll="handleScroll" id="home">
    <DefinictionsCounter :count="counter" :subject="'angielskiego'" :eng="true"/>
    <SearchComponent v-model="inputValue" @input="inputHandler" :eng="true"/>
    <EmptyComponent v-if="!inputValue"/>
    <transition name="fade">
      <div class="results" v-if="results">
        <ItemComponent v-for="item in results" :item="item" :eng="true"/>
      </div>
    </transition>
    <NotFoundComponent
      v-if="results.length === 0 && !loading && inputValue.length > 1"
      :value="inputValue"
      :eng="true"
    />
    <LoaderComponent v-if="loading"/>
  </div>
</template>

<script>
import SearchComponent from "@/components/SearchComponent.vue";
import ItemComponent from "@/components/ItemComponent.vue";
import DefinictionsCounter from "@/components/DefinictionsCounter.vue";
import EmptyComponent from "@/components/EmptyComponent.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue";
import LoaderComponent from "@/components/LoaderComponent.vue";
import { debounce } from "lodash";
import axios from "axios";

const URL = "https://www.schoolly.pl/api/v01/";

export default {
  name: "Home",
  data() {
    return {
      inputValue: "",
      loading: false,
      counter: 0,
      step: 1,
      results: []
    };
  },
  methods: {
    inputHandler: debounce(function() {
      if (this.inputValue) {
        this.step = 2;
        this.loading = true;
        console.log(this.inputValue);
        axios.get(`${URL}angielski?q=${this.inputValue}`).then(response => {
          this.results = response.data;
          this.loading = false;
        });
      } else {
        this.step = 1;
        this.results = [];
      }
    }, 500),
    handleScroll() {
      console.log(this.step);
      if (this.step === 1) {
        window.onscroll = () => {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;

          if (bottomOfWindow && this.step === 1) {
            this.loading = true;
            axios.get(`${URL}angielski/limit?q=1`).then(response => {
              this.loading = false;
              this.results.push(response.data[0]);
            });
          }
        };
      }
    }
  },
  mounted() {
    if (navigator.userAgent.indexOf("iPhone")) {
      axios.get(`${URL}angielski/limit?q=4`).then(response => {
        this.loading = false;
        for (let i = 0; i < 4; i++) {
          this.results.push(response.data[i]);
        }
      });
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    axios.get(`${URL}angielski/count`).then(response => {
      console.log(response);
      this.counter = response.data[0].number;
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
    SearchComponent,
    ItemComponent,
    DefinictionsCounter,
    EmptyComponent,
    NotFoundComponent,
    LoaderComponent
  }
};
</script>
<style lang="scss" scoped>
.homeWrapper {
  padding: 30px;
  @media (max-width: 760px) {
    padding: 10px;
    overflow-y: scroll; /* has to be scroll, not auto */
    -webkit-overflow-scrolling: touch;
  }
}
.results {
  margin-top: -30px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
