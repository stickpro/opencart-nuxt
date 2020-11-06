<template>
  <splide :options="options">
    <splide-slide style="background-color: #0b0a12">
      <figure class="uk-container uk-height-1-1">
        <img
          src="~assets/img/promo/macbook-new.jpg"
          alt="New Macbook"
          width="1200"
          height="600"
          class="uk-cover"
        />
      </figure>
    </splide-slide>
    <splide-slide style="background-color: #ce071e">
      <figure class="uk-container uk-height-1-1">
        <img
          src="~assets/img/promo/iphone.jpg"
          alt="iPhone"
          width="1200"
          height="600"
          class="uk-cover"
        />
      </figure>
    </splide-slide>
    <splide-slide style="background-color: #1f2024">
      <figure class="uk-container uk-height-1-1">
        <img
          src="~assets/img/promo/ipad.jpg"
          alt="iPad"
          width="1200"
          height="600"
          class="uk-cover"
        />
      </figure>
    </splide-slide>
  </splide>
</template>
<script>
export default {
  data() {
    return {
      options: {
        gap: "1rem",
        height: "600px",
        waitForTransition: true
      }
    };
  }
};
</script>
