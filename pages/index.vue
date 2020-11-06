<template>
  <main>
    <Slider />
    <CategoriesHome />
    <Trending />
    <ManufacturerSlider />
    <BlogModule />
    <NewsModule />
    <Subscribe />
  </main>
</template>

<script>
import Slider from "@/components/Slider"
import CategoriesHome from '@/components/categories/HomeModule'
import ManufacturerSlider from '@/components/manufacturer/HomeSlider'
import BlogModule from '@/components/blog/HomeModule'
import NewsModule from '@/components/news/NewsModule'
import Subscribe from '@/components/module/Subscribe'
import Trending from '@/components/products/Trending'
export default {
  components: {
    Slider,
    CategoriesHome,
    Trending,
    ManufacturerSlider,
    BlogModule,
    NewsModule,
    Subscribe,
    Advantage,
  }
};
</script>
