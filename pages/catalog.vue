<template>
  <main>
    <section class="uk-section uk-section-small">
      <div class="uk-container">
        <vk-grid class="uk-grid-medium uk-child-width-1-1">
          <div class="uk-text-center">
            <Breadcrumbs />
            <h1 class="uk-margin-small-top uk-margin-remove-bottom">Catalog</h1>
            <div class="uk-text-meta uk-margin-xsmall-top">641 items</div>
          </div>
        </vk-grid>
        <vk-grid class="uk-grid-medium">
          <aside class="uk-width-1-4 uk-visible@m tm-aside-column">
            <nav
              class="uk-card uk-card-default uk-card-body uk-card-small"
              uk-sticky="bottom: true; offset: 90"
            >
              <ul
                class="uk-nav uk-nav-default"
                uk-scrollspy-nav="closest: li; scroll: true; offset: 90"
              >
                <li><a href="#laptops-tablets">Laptops &amp; Tablets</a></li>
                <li><a href="#phones-gadgets">Phones &amp; Gadgets</a></li>
                <li><a href="#tv-video">TV &amp; Video</a></li>
                <li>
                  <a href="#games-entertainment">Games &amp; Entertainment</a>
                </li>
                <li><a href="#photo">Photo</a></li>
              </ul>
            </nav>
          </aside>
          <div class="uk-width-1-1 uk-width-expand@m">
            <vk-grid class="uk-grid-medium uk-child-width-1-1">
              <section id="laptops-tablets">
                <div
                  class="uk-card uk-card-default uk-card-small tm-ignore-container"
                >
                  <header class="uk-card-header">
                    <vk-grid class="uk-grid-small uk-flex-middle" >
                      <a href="category.html"
                        ><img
                          src="~assets/img/catalog/computers.svg"
                          alt="Laptops &amp; Tablets"
                          width="50"
                          height="50"
                      /></a>
                      <div class="uk-width-expand">
                        <h2 class="uk-h4 uk-margin-remove">
                          <a class="uk-link-heading" href="category.html"
                            >Laptops &amp; Tablets</a
                          >
                        </h2>
                        <div class="uk-text-meta">367 items</div>
                      </div>
                    </vk-grid>
                  </header>
                  <div class="uk-card-body">
                    <ul class="uk-list">
                      <li><a href="subcategory.html">Laptops</a></li>
                      <li><a href="subcategory.html">Tablets</a></li>
                      <li><a href="subcategory.html">Peripherals</a></li>
                      <li><a href="subcategory.html">Keyboards</a></li>
                      <li><a href="subcategory.html">Accessories</a></li>
                    </ul>
                  </div>
                </div>
              </section>
              <section id="phones-gadgets">
                <div
                  class="uk-card uk-card-default uk-card-small tm-ignore-container"
                >
                  <header class="uk-card-header">
                    <vk-grid class="uk-grid-small uk-flex-middle">
                      <a href="category.html"
                        ><img
                          src="images/catalog/phones.svg"
                          alt="Phones &amp; Gadgets"
                          width="50"
                          height="50"
                      /></a>
                      <div class="uk-width-expand">
                        <h2 class="uk-h4 uk-margin-remove">
                          <a class="uk-link-heading" href="category.html"
                            >Phones &amp; Gadgets</a
                          >
                        </h2>
                        <div class="uk-text-meta">144 items</div>
                      </div>
                    </vk-grid>
                  </header>
                  <div class="uk-card-body">
                    <ul class="uk-list">
                      <li><a href="subcategory.html">Smartphones</a></li>
                      <li><a href="subcategory.html">Mobile Phones</a></li>
                      <li><a href="subcategory.html">Smart watches</a></li>
                      <li>
                        <a href="subcategory.html">Charging and batteries</a>
                      </li>
                      <li><a href="subcategory.html">Accessories</a></li>
                    </ul>
                  </div>
                </div>
              </section>
              <section id="tv-video">
                <div
                  class="uk-card uk-card-default uk-card-small tm-ignore-container"
                >
                  <header class="uk-card-header">
                    <vk-grid class="uk-grid-small uk-flex-middle">
                      <a href="category.html"
                        ><img
                          src="images/catalog/tv.svg"
                          alt="TV &amp; Video"
                          width="50"
                          height="50"
                      /></a>
                      <div class="uk-width-expand">
                        <h2 class="uk-h4 uk-margin-remove">
                          <a class="uk-link-heading" href="category.html"
                            >TV &amp; Video</a
                          >
                        </h2>
                        <div class="uk-text-meta">58 items</div>
                      </div>
                    </vk-grid>
                  </header>
                  <div class="uk-card-body">
                    <ul class="uk-list">
                      <li><a href="subcategory.html">TV</a></li>
                      <li><a href="subcategory.html">Home Cinema</a></li>
                      <li>
                        <a href="subcategory.html">Satellite &amp; Cable TV</a>
                      </li>
                      <li><a href="subcategory.html">Projectors</a></li>
                      <li><a href="subcategory.html">DVD &amp; Blu-ray</a></li>
                      <li><a href="subcategory.html">Accessories</a></li>
                    </ul>
                  </div>
                </div>
              </section>
              <section id="games-entertainment">
                <div
                  class="uk-card uk-card-default uk-card-small tm-ignore-container"
                >
                  <header class="uk-card-header">
                    <vk-grid class="uk-grid-small uk-flex-middle">
                      <a href="category.html"
                        ><img
                          src="images/catalog/games.svg"
                          alt="Games &amp; Entertainment"
                          width="50"
                          height="50"
                      /></a>
                      <div class="uk-width-expand">
                        <h2 class="uk-h4 uk-margin-remove">
                          <a class="uk-link-heading" href="category.html"
                            >Games &amp; Entertainment</a
                          >
                        </h2>
                        <div class="uk-text-meta">13 items</div>
                      </div>
                    </vk-grid>
                  </header>
                  <div class="uk-card-body">
                    <ul class="uk-list">
                      <li><a href="subcategory.html">Gaming consoles</a></li>
                      <li><a href="subcategory.html">Games</a></li>
                      <li><a href="subcategory.html">Software</a></li>
                      <li>
                        <a href="subcategory.html">Joysticks &amp; gamepads</a>
                      </li>
                      <li><a href="subcategory.html">Accessories</a></li>
                    </ul>
                  </div>
                </div>
              </section>
              <section id="photo">
                <div
                  class="uk-card uk-card-default uk-card-small tm-ignore-container"
                >
                  <header class="uk-card-header">
                    <vk-grid class="uk-grid-small uk-flex-middle">
                      <a href="category.html"
                        ><img
                          src="images/catalog/photo.svg"
                          alt="Photo"
                          width="50"
                          height="50"
                      /></a>
                      <div class="uk-width-expand">
                        <h2 class="uk-h4 uk-margin-remove">
                          <a class="uk-link-heading" href="category.html"
                            >Photo</a
                          >
                        </h2>
                        <div class="uk-text-meta">59 items</div>
                      </div>
                    </vk-grid>
                  </header>
                  <div class="uk-card-body">
                    <ul class="uk-list">
                      <li><a href="subcategory.html">Cameras</a></li>
                      <li><a href="subcategory.html">Lenses</a></li>
                      <li><a href="subcategory.html">Accessories</a></li>
                    </ul>
                  </div>
                </div>
              </section>
            </vk-grid>
          </div>
        </vk-grid>
      </div>
    </section>
  </main>
</template>
<script>
import TheHeader from "@/components/core/TheHeader";
import Breadcrumbs from "@/components/core/Breadcrumbs";
import TheFooter from "@/components/core/TheFooter";

export default {
  meta: {
    title: "Catalog"
  },
  components: {
    TheHeader,
    Breadcrumbs,
    TheFooter
  }
};
</script>
