<template>
  <main>
    <Breadcrumbs />
  </main>
</template>
<script>
import TheHeader from "@/components/core/TheHeader"
import Breadcrumbs from "@/components/core/Breadcrumbs"
import TheFooter from "@/components/core/TheFooter"

export default {
  meta: {
    title: 'Catalog'
  },
  components: {
    TheHeader,
    Breadcrumbs,
    TheFooter
  }
}
</script>
