<template>
  <div class="emptyWrapper">
    <h1 class="animated slideInUp">Wyszukaj jakąś definicję powyżej!</h1>
    <span
      class="subtitle animated slideInUp"
    >Na razie aplikacja przeznaczona jest dla uczniów podstawówki i gimnazjum 😃</span>
    <span class="example">Na przykład:</span>
  </div>
</template>
<script>
export default {
  name: "EmptyComponent"
};
</script>
<style lang="scss" scoped>
.emptyWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 15px;
  margin-top: 7%;
}
.subtitle {
  color: #666;
}
.example {
  font-size: 24px;
  padding: 40px;
  color: #222;
}
</style>