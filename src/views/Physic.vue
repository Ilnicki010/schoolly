<template>
  <div class="homeWrapper" @scroll.native="handleScroll">
    <DefinictionsCounter :count="counter" :subject="'fizyki'"/>
    <SearchComponent v-model="inputValue" @input="inputHandler"/>
    <transition name="fade">
      <EmptyComponent v-if="!inputValue"/>
    </transition>
    <transition name="fade">
      <div class="results" v-if="results">
        <ItemComponent v-for="item in results" :item="item"/>
      </div>
    </transition>
    <LoaderComponent v-if="loading"/>
    <NotFoundComponent
      v-if="results.length === 0 && !loading && inputValue.length > 1"
      :value="inputValue"
    />
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
        this.results = [];
        this.loading = true;
        axios.get(`${URL}fizyka?q=${this.inputValue}`).then(response => {
          this.results = response.data;
          this.loading = false;
        });
      } else {
        this.step = 1;
        this.results = [];
      }
    }, 500),
    handleScroll() {
      if (this.step === 1) {
        window.onscroll = () => {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;

          if (bottomOfWindow && this.step === 1) {
            this.loading = true;
            axios.get(`${URL}fizyka/limit?q=1`).then(response => {
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
      axios.get(`${URL}fizyka/limit?q=4`).then(response => {
        this.loading = false;
        for (let i = 0; i < 4; i++) {
          this.results.push(response.data[i]);
        }
      });
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    axios.get(`${URL}fizyka/count`).then(response => {
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
