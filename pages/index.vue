<template>
  <main>
    <TheHeader />
    <Slider />
    <CategoriesHome />
    <Trending />
    <ManufacturerSlider />
    <BlogModule />
    <NewsModule />
    <Subscribe />
    <Advantage />
    <TheFooter />
  </main>
</template>

<script>
import TheHeader from "@/components/core/TheHeader"
import Slider from "@/components/Slider"
import TheFooter from "@/components/core/TheFooter"
import CategoriesHome from '@/components/categories/HomeModule'
import ManufacturerSlider from '@/components/manufacturer/HomeSlider'
import BlogModule from '@/components/blog/HomeModule'
import NewsModule from '@/components/news/NewsModule'
import Subscribe from '@/components/module/Subscribe'
import Advantage from '@/components/module/Advantage'
import Trending from '@/components/products/Trending'
export default {
  components: {
    TheHeader,
    Slider,
    CategoriesHome,
    Trending,
    ManufacturerSlider,
    BlogModule,
    NewsModule,
    Subscribe,
    Advantage,
    TheFooter,
  }
};
</script>
