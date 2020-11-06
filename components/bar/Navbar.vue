<template>
  <div
    class="uk-navbar-container tm-navbar-container tm-navbar-container-fixed"
  >
    <vk-navbar-dropbar>
      <vk-navbar-full transparent>
        <vk-navbar-nav>
          <vk-navbar-logo>
            <img src="~/assets/img/logo.svg" width="90" height="32" alt="" />
          </vk-navbar-logo>
          <vk-navbar-nav-dropdown :title="catalog.title">
            <vk-navbar-nav-dropdown-nav
              v-for="category in catalog.categories"
              :key="category.title"
            >
              <div class="uk-margin-top uk-margin-bottom">
                <a class="uk-link-reset" href="category.html"
                  ><img
                    class="uk-display-block uk-margin-auto uk-margin-bottom"
                    :src="category.image"
                    :alt="category.title"
                    width="80"
                    height="80"
                  />
                  <div class="uk-text-bolder">{{ category.title }}</div></a
                >
                <vk-nav>
                  <vk-nav-item
                    v-for="subcategory in category.subCategories"
                    :key="subcategory"
                    href="#"
                    :title="subcategory"
                  ></vk-nav-item>
                </vk-nav>
              </div>
            </vk-navbar-nav-dropdown-nav>
          </vk-navbar-nav-dropdown>
          <vk-navbar-nav-dropdown title="Brands" justified>
            <div class="uk-container">
              <vk-grid class="uk-grid-small uk-child-width-1-6">
                <div v-for="brand in brands" :key="brand.image">
                  <div class="tm-ratio tm-ratio-4-3">
                    <a
                      href="#"
                      title="Apple"
                      class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                    >
                      <figure class="tm-media-box-wrap">
                        <img :src="brand.image" alt="Apple" />
                      </figure>
                    </a>
                  </div>
                </div>
              </vk-grid>
            </div>
          </vk-navbar-nav-dropdown>
          <vk-navbar-nav-item title="Blog"></vk-navbar-nav-item>
          <vk-navbar-nav-item title="About"></vk-navbar-nav-item>
          <vk-navbar-nav-item title="Contacts"></vk-navbar-nav-item>
        </vk-navbar-nav>
        <vk-navbar-nav slot="right">
          <div class="uk-navbar-toggle tm-navbar-button"
               @click="search = !search">
            <vk-icon icon="search"></vk-icon>
          </div>
          <nuxt-link class="uk-navbar-item uk-link-muted uk-visible@m tm-navbar-button"
                     to="compare">
            <vk-icon icon="copy"></vk-icon><span class="uk-badge">3</span>
          </nuxt-link>
          <div class="uk-navbar-toggle tm-navbar-button">
            <vk-icon icon="user"></vk-icon>
          </div>
          <div class="uk-navbar-toggle tm-navbar-button" @click="setDrawer(true)">
            <vk-icon icon="cart"></vk-icon>
          </div>

        </vk-navbar-nav>
      </vk-navbar-full>
    </vk-navbar-dropbar>
    <div
      class="uk-width-1-1 uk-padding-small uk-margin-remove uk-box-shadow-medium"
      v-show="search"
    >
      <div class="uk-container">
        <vk-grid class="uk-grid-small uk-flex-middle">
          <div class="uk-width-expand">
            <form class="uk-search uk-search-navbar uk-width-1-1">
              <input
                class="uk-search-input"
                type="search"
                placeholder="Search…"
                autofocus
              />
            </form>
          </div>
          <div class="uk-width-auto">
            <div class="uk-navbar-dropdown-close"
                @click="search = !search">
              <vk-icon icon="close"></vk-icon>
            </div>
          </div>
        </vk-grid>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
export default {
  data() {
    return {
      catalog: {
        title: "Catalog",
        categories: [
          {
            image: `${require(`~/assets/img/catalog/computers.svg`)}`,
            title: "Laptops &amp; Tablets",
            subCategories: [
              "Laptops",
              "Tablets",
              "Peripherals",
              "Keyboards",
              "Accessories"
            ]
          },
          {
            image: `${require(`~/assets/img/catalog/phones.svg`)}`,
            title: "Phones &amp; Gadgets",
            subCategories: [
              "Smartphones",
              "Mobile Phones",
              "Smart watches",
              "Charging and batteries",
              "Accessories"
            ]
          },
          {
            image: `${require(`~/assets/img/catalog/tv.svg`)}`,
            title: "TV &amp; Video",
            subCategories: [
              "TV",
              "Home Cinema",
              "Satellite &amp; Cable TV",
              "DVD &amp; Blu-ray",
              "Accessories"
            ]
          },
          {
            image: `${require(`~/assets/img/catalog/games.svg`)}`,
            title: "Games &amp; Entertainment",
            subCategories: [
              "Gaming consoles",
              "Games",
              "Software",
              "Joysticks &amp; gamepads",
              "Accessories"
            ]
          },

          {
            image: `${require(`~/assets/img/catalog/photo.svg`)}`,
            title: "Photo",
            subCategories: ["Cameras", "Lenses", "Accessories"]
          }
        ]
      },
      brands: [
        {
          image: `${require(`~/assets/img/brands/apple.svg`)}`
        },
        {
          image: `${require(`~/assets/img/brands/samsung.svg`)}`
        },
        {
          image: `${require(`~/assets/img/brands/sony.svg`)}`
        },
        {
          image: `${require(`~/assets/img/brands/microsoft.svg`)}`
        },
        {
          image: `${require(`~/assets/img/brands/intel.svg`)}`
        },
        {
          image: `${require(`~/assets/img/brands/hp.svg`)}`
        },
        {
          image: `${require(`~/assets/img/brands/lg.svg`)}`
        },
        {
          image: `${require(`~/assets/img/brands/lenovo.svg`)}`
        },
        {
          image: `${require(`~/assets/img/brands/asus.svg`)}`
        },
        {
          image: `${require(`~/assets/img/brands/acer.svg`)}`
        },
        {
          image: `${require(`~/assets/img/brands/dell.svg`)}`
        },
        {
          image: `${require(`~/assets/img/brands/canon.svg`)}`
        }
      ],
      search: false,
    };
  },
  computed: {
    ...mapGetters({
      drawer: 'cart/drawer',
    }),
  },
  methods: {
    ...mapMutations('cart', ['setDrawer']),
  }
};
</script>
