
<template>
  <canvas id="flex" ></canvas>
    <div id="app"></div>
</template>

<script>

  export default {
    
    data: () => ({
     
    }),
    mounted() {
      
      let threescript = document.createElement('script')
      threescript.setAttribute('src', './src/components/page2.js')
      threescript.setAttribute('type', 'module')
      document.head.appendChild(threescript)
    },
    methods: {
    
    }
  }
</script>
<style scoped>
#flex{
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
}
body{
  background-color:black;
}
canvas#flex{
  background: black;
}
</style>