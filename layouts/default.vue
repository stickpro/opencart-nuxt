<template>
  <div>
    <TheHeader />
    <Nuxt />
    <Advantage />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from "@/components/core/TheHeader";
import Advantage from '@/components/module/Advantage'
import TheFooter from "@/components/core/TheFooter";
export default {
  components: {
    TheHeader,
    Advantage,
    TheFooter
  }
};
</script>
