export function getQuizById(component) {
  const selectedQuiz = component.$route.params.quizId;

  const quiz = component.$store.getters.quizzes.find((quiz) => {
    return quiz.id === selectedQuiz;
  });

  if (!quiz) {
    component.$router.push({ path: '/' });
    return;
  }

  return quiz;
}
