<template>
  <section class="uk-section uk-section-default uk-section-small">
    <div class="uk-container">
      <h2 class="uk-text-center">Popular Brands</h2>
      <div class="uk-margin-medium-top">
        <div class="uk-position-relative">
          <vk-grid class="uk-grid-small uk-flex-middle">
            <div class="uk-width-expand uk-slider-container">
              <splide :options="options">
                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="Apple"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/apple.svg"
                          alt="Apple"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="Samsung"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/samsung.svg"
                          alt="Samsung"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="Sony"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/sony.svg"
                          alt="Sony"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="Microsoft"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/microsoft.svg"
                          alt="Microsoft"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="Intel"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/intel.svg"
                          alt="Intel"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>

                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="HP"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/hp.svg"
                          alt="HP"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="LG"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/lg.svg"
                          alt="LG"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="Lenovo"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/lenovo.svg"
                          alt="Lenovo"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="ASUS"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/asus.svg"
                          alt="ASUS"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="Acer"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/acer.svg"
                          alt="Acer"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="Dell"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/dell.svg"
                          alt="Dell"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="tm-ratio tm-ratio-16-9">
                    <a
                      class="uk-link-muted tm-media-box tm-grayscale"
                      href="#"
                      title="Canon"
                    >
                      <figure class="tm-media-box-wrap">
                        <img
                          src="~assets/img//brands/canon.svg"
                          alt="Canon"
                        /></figure
                    ></a>
                  </div>
                </splide-slide>
              </splide>
            </div>
          </vk-grid>
        </div>
      </div>
      <div class="uk-margin uk-text-center">
        <a
          class="uk-link-muted uk-text-uppercase tm-link-to-all"
          href="brands.html"
          ><span>see all brands</span
          ><span uk-icon="icon: chevron-right; ratio: .75;"></span
        ></a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HomeSlider",
  data: () => ({
    options: {
      gap: "3rem",
      perPage: 6,
      perMove: 1
    }
  })
};
</script>
