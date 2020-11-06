<template>
  <vk-breadcrumb class="uk-flex-center uk-margin-remove">
    <vk-breadcrumb-item href="#">Item</vk-breadcrumb-item>
    <vk-breadcrumb-item href="#">Item</vk-breadcrumb-item>
    <vk-breadcrumb-item disabled>Disabled</vk-breadcrumb-item>
    <vk-breadcrumb-item>Active</vk-breadcrumb-item>
  </vk-breadcrumb>
</template>

<script>
export default {
  name: "breadcrumbs",
  computed: {
    breadcrumbsLinks() {}
  }
};
</script>
