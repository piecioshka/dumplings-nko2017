<template>
  <div>
    <ul>
      <li v-for="answer in question.answers">
        <AnswersListElement :answer="answer"></AnswersListElement>
      </li>
    </ul>
  </div>
</template>

<script>
  import AnswersListElement from './answers-list-element.vue';

  export default {
    name: 'AnswersList',
    props: [
      'question'
    ],
    components: {
      AnswersListElement
    }
  }
</script>

<style lang="scss" scoped>
  div {
    border: 1px solid #2c3e50;
    border-radius: 3px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;

    li {
      width: 300px;
      margin: 5px;
    }
  }
</style>
