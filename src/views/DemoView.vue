<!--
这个示例展示了如何通过 v-on 指令处理用户输入。
-->

<script>
export default {
  data() {
    return {
      message: 'Hello World!'
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
    appendDot() {
      this.message += '.';
    },
    notify() {
      alert('navigation was prevented.');
    }
  }
};
</script>

<template>
  <div>
    <!--
      注意我们不需要在模板中写 .value，
      因为在模板中 ref 会自动“解包”。
    -->
    <h1>{{ message }}</h1>

    <!--
      绑定到一个方法/函数。
      这个 @click 语法是 v-on:click 的简写。
    -->
    <button @click="reverseMessage">Reverse Message</button>

    <!-- 也可以写成一个内联表达式语句 -->
    <button @click="message += '!'">Append "!"</button>
    <button @click="appendDot">Append "."</button>
    <!--
      Vue 也为一些像 e.preventDefault() 和 e.stopPropagation()
      这样的常见任务提供了修饰符。
    -->
    <a href="https://vuejs.org" @click.prevent="notify">
      A link with e.preventDefault()
    </a>
  </div>
</template>

<style>
button,
a {
  display: block;
  margin-bottom: 1em;
}
</style>