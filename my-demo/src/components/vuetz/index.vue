<template>
  <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
    <vue-draggable-resizable :w="100" :h="100" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true"  :grid="[50,50]" :resizable="false">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </vue-draggable-resizable>
     <!-- <vue-draggable-resizable :w="100" :h="100" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true"  :resizable="true"  :grid="[10,10]">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </vue-draggable-resizable> -->
  </div>
</template>
 
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
 
export default {
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  components:{VueDraggableResizable },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
     onResize1: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }

  }
}
</script>