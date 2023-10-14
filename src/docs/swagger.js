const swaggerJsdoc = require('swagger-jsdoc')

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API del proyecto xmed del equipo',
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://localhost:3000'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    },
    schemas: {
      Doctor: {
        type: 'object',
        properties: {
          specialization: {
            type: 'string',
            minLength: 5,
            maxLength: 100,
            example: 'Cardiología'
          },
          medicalLicense: {
            type: 'string',
            minLength: 5,
            maxLength: 100,
            unique: true,
            example: '1234567890'
          }
        },
        required: [
          'specialization',
          'medicalLicense'
        ]
      },
      Patient: {
        type: 'object',
        properties: {
          healthInsurance: {
            type: 'string',
            minLength: 5,
            maxLength: 100
          },
          bloodType: {
            type: 'string',
            minLength: 1,
            maxLength: 3
          },
          weight: {
            type: 'number',
            minimum: 0.1,
            maximum: 500
          },
          height: {
            type: 'number',
            minimum: 0.1,
            maximum: 3
          },
          allergies: {
            type: 'string'
          },
          chronicDiseases: {
            type: 'string'
          },
          currentMedication: {
            type: 'string'
          },
          familyHistory: {
            type: 'string'
          }
        },
        required: [
          'healthInsurance',
          'bloodType',
          'weight',
          'height',
          'allergies',
          'chronicDiseases',
          'currentMedication',
          'familyHistory'
        ]
      },
      Record: {
        type: 'object',
        properties: {
          symptoms: {
            type: 'string'
          },
          diagnosis: {
            type: 'string'
          },
          treatment: {
            type: 'string'
          },
          issuedOn: {
            type: 'string',
            format: 'date-time'
          }
        },
        required: [
          'symptoms',
          'diagnosis',
          'treatment',
          'issuedOn'
        ]
      },
      User: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
            minLength: 3,
            maxLength: 50
          },
          lastName: {
            type: 'string',
            minLength: 3,
            maxLength: 50
          },
          birthDate: {
            type: 'string',
            format: 'date'
          },
          gender: {
            type: 'string',
            enum: ['M', 'F', 'O']
          },
          phone: {
            type: 'string',
            minLength: 7,
            maxLength: 15
          },
          address: {
            type: 'string'
          },
          email: {
            type: 'string',
            format: 'email'
          },
          password: {
            type: 'string',
            minLength: 1,
            maxLength: 50
          }
        },
        required: [
          'firstName',
          'lastName',
          'birthDate',
          'gender',
          'phone',
          'address',
          'email',
          'password'
        ]
      }
    }
  }
}

const options = {
  swaggerDefinition,
  apis: [
    './routers/*js'
  ]
}

const openApiConfig = swaggerJsdoc(options)

module.exports = openApiConfig
