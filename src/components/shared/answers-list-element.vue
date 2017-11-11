<template>
  <section class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            {{ answer.content }}
          </p>
        </div>
      </div>
    </article>
  </section>

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
  .box {
    margin: 10px;

    &:hover {
      cursor: pointer;
      background: #42b983;
      color: white;
    }
  }
</style>
