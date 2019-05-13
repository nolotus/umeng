<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  font-size: 14px;
  position: relative;
}
#app>header{
  height: 72px;
  width: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
}
#app>main{
  height: 100%;
  padding-top: 72px;
  box-sizing: border-box;
  position: relative;
}
#app>main>aside{
  height: 100%;
  width: 208px;
  background-color: #fff;
  float: left;
}
#app>main>article{
  height: 100%;
  overflow: hidden;
  background-color:#ccc;
}
</style>
<template>
  <div id="app">
      <header>

      </header>
      <main>
        <aside>
          <My-menu></My-menu>
        </aside>
        <article>

        </article>
      </main>
  </div>
</template>
<script>
import MyMenu from "@/components/MyMenu.vue"
export default {
  name: 'HelloWorld',
  components:{
    MyMenu
  },
  props: {
    msg: String
  }
}
</script>
