<template>
  <article class="tm-product-card">
    <div class="tm-product-card-media">
      <div class="tm-ratio tm-ratio-4-3">
        <a class="tm-media-box" href="product.html">
          <div class="tm-product-card-labels">
            <span v-for="label in data.labels" :key="label.title"
                :class='`uk-label uk-label-${label.color}`'>{{ label.title }}
            </span>
          </div>
          <figure class="tm-media-box-wrap">
            <img
              :src="data.image"
              :alt="data.name"
            /></figure
        ></a>
      </div>
    </div>
    <div class="tm-product-card-body">
      <div class="tm-product-card-info">
        <div class="uk-text-meta uk-margin-xsmall-bottom">{{ data.category }}</div>
        <h3 class="tm-product-card-title">
          <a class="uk-link-heading" href="product.html"
            >{{ data.name }}</a
          >
        </h3>
      </div>
      <div class="tm-product-card-shop">
        <div class="tm-product-card-prices">
          <del class="uk-text-meta" v-if="data.oldPrice" >${{ data.oldPrice }}</del>
          <div class="tm-product-card-price">${{ data.price }}</div>
        </div>
        <div class="tm-product-card-add">
          <div class="uk-text-meta tm-product-card-actions">
            <a
              class="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to"
              title="Add to favorites"
              ><vk-icon icon="heart" ratio="0.75"></vk-icon
              ><span class="tm-product-card-action-text"
                >Add to favorites</span
              ></a
            ><a
              class="tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to"
              title="Add to compare"
              ><vk-icon icon="copy" ratio=".75"></vk-icon
              ><span class="tm-product-card-action-text"
                >Add to compare</span
              ></a
            >
          </div>
          <button
            class="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart"
          >
            <vk-icon class="tm-product-card-add-button-icon" icon="cart"></vk-icon>
            <span class="tm-product-card-add-button-text">add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: [
    'data'
  ]
}
</script>
