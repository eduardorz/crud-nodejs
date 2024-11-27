import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions: swaggerJsDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API CRUD Node.js Documentation - Eduardo Ruiz',
      version: '1.0.0',
      description: 'Documentación de la API CRUD usando Swagger con TypeScript',
    },
    servers: [
      {
        url: 'http://localhost:3003', // Cambia esto según tu servidor
      },
    ],
  },
  apis: ['./src/indexRoutes.ts', './src/users/usersRoutes.ts'], // Rutas donde defines los endpoints !!!!!!!!
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };
