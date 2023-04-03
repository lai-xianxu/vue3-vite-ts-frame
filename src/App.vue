<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component
          :is="Component"
          v-if="route.meta.keepAlive"
          :key="$route.fullPath"
        />
      </keep-alive>
      <component :is="Component" v-if="!route.meta.keepAlive" />
    </router-view>
  </div>
</template>

<script setup></script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: 'Source Han Sans CN';
  font-size: 14px;
}
</style>
