<template>
  <section class="uk-section uk-section-small">
    <div class="uk-container">
      <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
        <div class="uk-text-center">
          <vk-breadcrumb> </vk-breadcrumb>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "breadcrumbs",
  computed: {
    breadcrumbsLinks() {}
  }
};
</script>
