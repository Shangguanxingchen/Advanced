<template>
  <div id="app">
    <KHeader/>
    <transition name=transit>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import KHeader from '@/components/KHeader';

export default {
  name: 'App',
  components: {
    KHeader
  }
}
</script>
<style>
.transit-enter-active {
  transition: opacity 2s;
}
.transit-leave-active {
  transition: none;
}  
.transit-enter, .transit-leave-to {
  opacity: 0;
}
</style>