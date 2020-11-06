<template>
  <vk-offcanvas-content>
    <vk-offcanvas :overlay="drawer" flipped mode="slide" :show="drawer">
      <vk-offcanvas-close @click="setDrawer(false)"></vk-offcanvas-close>
      <aside class="uk-offcanvas-bar uk-padding-remove">
        <div
          class="uk-card uk-card-default uk-card-small uk-height-1-1 uk-flex uk-flex-column tm-shadow-remove"
        >
          <header class="uk-card-header uk-flex uk-flex-middle">
            <div class="uk-grid-small uk-flex-1">
              <div class="uk-width-expand">
                <div class="uk-h3">Cart</div>
              </div>
               <vk-offcanvas-close @click="setDrawer(false)"></vk-offcanvas-close>
            </div>
          </header>
          <div class="uk-card-body uk-overflow-auto">
            <ul class="uk-list uk-list-divider">
              <li class="uk-visible-toggle">
                <div>
                  <div class="uk-grid-small" uk-grid>
                    <div class="uk-width-1-4">
                      <div class="tm-ratio tm-ratio-4-3">
                        <a class="tm-media-box" href="product.html">
                          <figure class="tm-media-box-wrap">
                            <img
                              src="~assets/img/products/1/1-small.jpg"
                              alt='Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)'
                            /></figure
                        ></a>
                      </div>
                    </div>
                    <div class="uk-width-expand">
                      <div class="uk-text-meta uk-text-xsmall">Laptop</div>
                      <a
                        class="uk-link-heading uk-text-small"
                        href="product.html"
                        >Apple MacBook Pro 15&quot; Touch Bar MPTU2LL/A 256GB
                        (Silver)</a
                      >
                      <div
                        class="uk-margin-xsmall uk-grid-small uk-flex-middle"

                      >
                        <div class="uk-text-bolder uk-text-small">$1599.00</div>
                        <div class="uk-text-meta uk-text-xsmall">
                          1 × $1599.00
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        class="uk-icon-link uk-text-danger uk-invisible-hover"
                        href="#"
                      ></a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="uk-visible-toggle">
                <div>
                  <div class="uk-grid-small">
                    <div class="uk-width-1-4">
                      <div class="tm-ratio tm-ratio-4-3">
                        <a class="tm-media-box" href="product.html">
                          <figure class="tm-media-box-wrap">
                            <img
                              src="~assets/img/products/2/2-small.jpg"
                              alt='Apple MacBook 12" MNYN2LL/A 512GB (Rose Gold)'
                            /></figure
                        ></a>
                      </div>
                    </div>
                    <div class="uk-width-expand">
                      <div class="uk-text-meta uk-text-xsmall">Laptop</div>
                      <a
                        class="uk-link-heading uk-text-small"
                        href="product.html"
                        >Apple MacBook 12&quot; MNYN2LL/A 512GB (Rose Gold)</a
                      >
                      <div
                        class="uk-margin-xsmall uk-grid-small uk-flex-middle"

                      >
                        <div class="uk-text-bolder uk-text-small">$1549.00</div>
                        <div class="uk-text-meta uk-text-xsmall">
                          1 × $1549.00
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        class="uk-icon-link uk-text-danger uk-invisible-hover"
                        href="#"
                      ></a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <footer class="uk-card-footer">
            <div class="uk-grid-small">
              <div class="uk-width-expand uk-text-muted uk-h4">Subtotal</div>
              <div class="uk-h4 uk-text-bolder">$3148.00</div>
            </div>
            <div
              class="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m uk-margin-small"
            >
              <div>
                <a
                  class="uk-button uk-button-default uk-margin-small uk-width-1-1"
                  href="cart.html"
                  >view cart</a
                >
              </div>
              <div>
                <a
                  class="uk-button uk-button-primary uk-margin-small uk-width-1-1"
                  href="checkout.html"
                  >checkout</a
                >
              </div>
            </div>
          </footer>
        </div>
      </aside>
    </vk-offcanvas>
  </vk-offcanvas-content>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapGetters({
      drawer: "cart/drawer"
    })
  },
  methods: {
    ...mapMutations("cart", ["setDrawer"])
  }
};
</script>
