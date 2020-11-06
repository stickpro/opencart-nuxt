<template>
  <section class="uk-section uk-section-small">
    <div class="uk-container">
      <h2 class="uk-text-center">Trending Items</h2>
      <div class="uk-card uk-card-default tm-ignore-container">
        <vk-grid
          class="uk-grid-collapse uk-child-width-1-3 uk-child-width-1-4@m tm-products-grid"
        >
          <Card v-for="product in products" :key="product.id" :data="product" />
        </vk-grid>
      </div>
      <div class="uk-margin uk-text-center">
        <a
          class="uk-link-muted uk-text-uppercase tm-link-to-all"
          href="subcategory.html"
          ><span>shop all</span
          ><span uk-icon="icon: chevron-right; ratio: .75;"></span
        ></a>
      </div>
    </div>
  </section>
</template>
<script>
import Card from "@/components/products/Card";
export default {
  components: {
    Card
  },
  data: () => ({
    products: [
      {
        id: 1,
        name: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
        category: "Laptop",
        oldPrice: 1899.0,
        price: 1599.0,
        image: `${require(`~/assets/img/products/1/1-medium.jpg`)}`,
        labels: [
          { color: "warning", title: "top selling" },
          { color: "danger", title: "trade-in" }
        ]
      },
      {
        id: 2,
        name: 'Apple MacBook 12" MNYN2LL/A 512GB (Rose Gold)',
        category: "Laptop",
        oldPrice: 1899.0,
        price: 1599.0,
        image: `${require(`~/assets/img/products/2/2-medium.jpg`)}`,
        labels: [
          { color: "success", title: "new" },
          { color: "danger", title: "trade-in" }
        ]
      },
      {
        id: 3,
        name: 'Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)',
        category: "Laptop",
        oldPrice: null,
        price: 1199.00,
        image: `${require(`~/assets/img/products/3/3-medium.jpg`)}`,
        labels: []
      },
      {
        id: 4,
        name: 'ASUS Zenbook UX330UA-FC020T (Rose Gold)',
        category: "Laptop",
        oldPrice: 1899.0,
        price: 1599.0,
        image: `${require(`~/assets/img/products/4/4-medium.jpg`)}`,
        labels: [
          { color: "success", title: "new" },
          { color: "danger", title: "trade-in" }
        ]
      },
      {
        id: 5,
        name: 'Dell XPS 15 9560-8968 (Silver)',
        category: "Laptop",
        oldPrice: null,
        price: 1599.0,
        image: `${require(`~/assets/img/products/5/5-medium.jpg`)}`,
        labels: [
          { color: "warning", title: "top selling" },
        ]
      },
      {
        id: 6,
        name: 'Apple MacBook Air 13" MQD32LL/A 128GB (Silver)',
        category: "Laptop",
        oldPrice: null,
        price: 1599.0,
        image: `${require(`~/assets/img/products/6/6-medium.jpg`)}`,
        labels: [
          { color: "success", title: "new" },
        ]
      },
      {
        id: 7,
        name: 'Dell Inspiron 5378-2063 (Gray)',
        category: "Laptop",
        oldPrice: null,
        price: 1599.0,
        image: `${require(`~/assets/img/products/7/7-medium.jpg`)}`,
        labels: []
      },
      {
        id: 8,
        name: 'Lenovo Yoga 720-13IKB 80X60059RK (Silver)',
        category: "Laptop",
        oldPrice: null,
        price: 1599.0,
        image: `${require(`~/assets/img/products/8/8-medium.jpg`)}`,
        labels: [
          { color: "warning", title: "top selling" },
          { color: "danger", title: "trade-in" }
        ]
      }
    ]
  })
};
</script>
