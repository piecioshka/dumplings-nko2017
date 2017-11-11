export default {
  required: true,
  type: 'object',
  additionalProperties: false,
  properties: {
    name: {
      require: true,
      type: 'string',
      format: 'not-empty'
    },
    category: {
      require: true,
      type: 'string',
      format: 'not-empty'
    },
    promo: {
      require: true,
      type: 'string',
      format: 'not-empty'
    },
    author: {
      required: true,
      type: 'object',
      additionalProperties: false,
      properties: {
        name: {
          required: true,
          type: 'string',
          format: 'not-empty'
        },
        email: {
          required: true,
          type: 'string',
          format: 'email'
        },
        url: {
          required: true,
          type: 'string',
          format: 'not-empty'
        }
      }
    },
    questions: {
      required: true,
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {
            required: true,
            type: 'string',
            format: 'not-empty'
          },
          hints: {
            required: true,
            type: 'array',
            items: {
              type: 'string',
              format: 'not-empty'
            }
          },
          answers: {
            required: true,
            type: 'array',
            items: {
              type: 'string',
              format: 'not-empty'
            }
          },
          correctAnswerIndex: {
            required: true,
            type: 'number'
          }
        }
      }
    }
  }
};
