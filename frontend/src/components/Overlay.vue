<template>
  <div class="overlay">
    <div class="fade-layer" :class="{show}" @click="$emit('close')"></div>
    <div class="content" :class="{show}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  
  props: {
    show: Boolean
  }
}
</script>

<style>
.fade-layer{
    position: fixed;
    top: 0;left: 0; bottom: 0; right: 0;
    background-color: rgba(0,0,0,0.85);
    transition: opacity 0.25s;
    pointer-events: none;
    opacity: 0;
}
.fade-layer.show{
    pointer-events: all;
    opacity: 1;
}
.content{
    padding: 2rem;
    transition: opacity 0.25s;
    opacity: 0;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.content.show{
    opacity: 1;
}
</style>