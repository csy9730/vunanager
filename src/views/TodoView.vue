<template>
  <section class="container" :class="{'menu-open': menuOpen}">
    <!-- 根据menuOpen的值来判断是否使用menu-open样式 -->
    <section class="menu">
      <TodoMenus></TodoMenus>
    </section>
    <!-- dispatch('updateMenu')  -->
    <div class="content-overlay" @click="$store.commit('MENUSWITCH')"></div>
    <!-- 这个是当页面收缩覆盖在内容上面的模糊层，点击后复原,他可以直接调用vuex actions.js里面的updateMenu方法 -->
    <div class="content-container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import TodoMenus from '@/components/TodoMenus';
// import todo from '@/components/todo';
export default {
  components: {
    TodoMenus
    // todo
  },
  computed: {
    menuOpen() {
      return this.$store.state.menuOpen;
    }
  }
};
</script>

<style lang="less">
@import '../common/style/layouts.less';
</style>
