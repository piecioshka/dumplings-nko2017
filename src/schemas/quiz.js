export default {
  required: true,
  type: 'object',
  additionalProperties: false,
  properties: {
    name: {
      required: true,
      type: 'string'
    },
    categoryName: {
      required: true,
      type: 'string'
    },
    promo: {
      required: true,
      type: 'string'
    },
    author: {
      required: true,
      type: 'object',
      additionalProperties: false,
      properties: {
        name: {
          required: true,
          type: 'string'
        },
        email: {
          required: true,
          type: 'string',
          format: 'email'
        },
        url: {
          required: true,
          type: 'string'
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
            type: 'string'
          },
          hints: {
            required: true,
            type: 'array',
            items: {
              type: 'string'
            }
          },
          answers: {
            required: true,
            type: 'array',
            items: {
              type: 'string'
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
