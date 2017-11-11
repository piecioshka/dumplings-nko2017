<template>
  <div>
    <ul>
      <li v-for="answer in question.answers" @click="selectAnswer(answer)">
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
    },
    methods: {
      selectAnswer(a) {
        this.$emit('selectAnswer', a)
      }
    }
  }
</script>

<style lang="scss" scoped>
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
