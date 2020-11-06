<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from "@/components/core/TheHeader";
import TheFooter from "@/components/core/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
