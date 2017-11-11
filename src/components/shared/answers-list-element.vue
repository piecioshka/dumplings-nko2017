<template>
  <section class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
        </figure>
      </div>
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
</style>
