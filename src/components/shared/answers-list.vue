<template>
  <section>
    <ul>
      <li v-for="answer in question.answers" :key="answer.id" @click="selectAnswer(answer)">
        <AnswersListElement :answer="answer"></AnswersListElement>
      </li>
    </ul>
  </section>
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
</style>
