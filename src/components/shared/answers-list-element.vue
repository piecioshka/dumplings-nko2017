<template>
  <div>
    <p>{{ answer.content }}</p>
  </div>
</template>

<script>
  export default {
    name: 'AnswersListElement',
    props: [
      'answer'
    ]
  }
</script>

<style lang="scss" scoped>
  div {
    border: 1px solid #2c3e50;
    border-radius: 3px;
    padding: 5px;
  }

  div:hover {
    background: whitesmoke;
    cursor: pointer;
  }
</style>
