export default {
  required: true,
  type: 'object',
  additionalProperties: false,
  properties: {
    id: {
      required: true,
      type: 'string'
    },
    name: {
      required: true,
      type: 'string'
    },
    resolvedQuizzes: {
      required: true,
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: {
            required: true,
            type: 'string'
          },
          name: {
            required: true,
            type: 'string'
          },
          score: {
            required: true,
            type: 'number'
          }
        }
      }
    },
  }
};
