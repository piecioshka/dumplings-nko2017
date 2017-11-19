<template>
  <section class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p v-html="getAnswerContent()"></p>
        </div>
      </div>
    </article>
  </section>

</template>

<script>
  import marked from 'marked';

  marked.setOptions({
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value;
    }
  });

  export default {
    name: 'AnswersListElement',
    props: {
      answer: Object
    },
    methods: {
      getAnswerContent() {
        return marked(this.answer.content)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    margin: 10px;

    &:hover {
      cursor: pointer;
      background: #42b983;
      color: white;
    }
  }
</style>
