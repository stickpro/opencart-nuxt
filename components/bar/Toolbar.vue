<template>
  <div class="uk-navbar-container tm-toolbar-container">
    <vk-navbar
      class="uk-container tm-toolbar-container uk-visible@m"
      transparent
    >
      <vk-navbar-nav>
        <vk-navbar-nav-item
          title="8 800 799 99 99"
          icon="receiver"
        ></vk-navbar-nav-item>
        <vk-navbar-nav-item
          title="Store in St. Petersburg"
          icon="location"
        ></vk-navbar-nav-item>
        <vk-navbar-nav-item
          title="Daily 10:00–22:00"
          icon="clock"
        ></vk-navbar-nav-item>
      </vk-navbar-nav>

      <vk-navbar-nav slot="right">
        <vk-navbar-nav-item title="News"></vk-navbar-nav-item>
        <vk-navbar-nav-item title="FAQ"></vk-navbar-nav-item>
        <vk-navbar-nav-item title="Payment"></vk-navbar-nav-item>
      </vk-navbar-nav>
    </vk-navbar>
  </div>
</template>
