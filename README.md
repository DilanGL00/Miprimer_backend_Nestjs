<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Librerias Usadas en mi aplicacion backend

NestJs v 10.3.9:
Descripcion: Framework de Node.js para construir aplicaciones web escalables y eficientes.
Razón de uso: Se eligió NestJS por su arquitectura modular y su facilidad para desarrollar APIs RESTful.
Enlace: https://nestjs.com/
Instalacion: npm install @nestjs/core @nestjs/common @nestjs/cli

Swagger v 7.3.1:
Descripcion: Swagger es una herramienta de código abierto para documentar APIs RESTful de forma interactiva.
Razón de uso: Se utilizó Swagger para generar documentación legible y accesible para mi aplicacion NESTJS.
Enlace: https://swagger.io/
Instalacion: npm install @nestjs/swagger swagger-ui-express

Jwt v 9.0.2:
Descripcion: Jwt es una biblioteca para generar y verificar tokens de autenticación JSON.
Razón de uso: Se utilizó Jwt para la autenticación de prueba basada en tokens en la aplicación NestJS.
Enlace: https://github.com/auth0/node-jsonwebtoken
Instalacion: npm install jsonwebtoken

Class Validator v 0.14.1 :
Descripcion: Class Validator es una biblioteca para validación de datos basada en decoradores para clases.
Razón de uso: Se utilizó Class Validator para validar datos en DTOs (Data Transfer Objects).
Enlace: https://github.com/typestack/class-validator
Instalacion: npm install class-validator class-transformer

Uuid v 10.0.0 :
Descripcion: Uuid es una biblioteca para generar identificadores únicos universales (UUID).
Razón de uso: Se utilizó Uuid para generar identificadores únicos para las entidades. En este caso un identificador String.
Enlace: https://www.npmjs.com/package/uuid
Instalacion: npm install uuid

Express v 4.19.2 :
Descripcion: Express es un framework web para Node.js que proporciona un conjunto robusto de características para aplicaciones web y móviles.
Razón de uso: Express se utiliza internamente en NestJS para manejar solicitudes HTTP.
Enlace: https://expressjs.com/
Instalacion: npm install express

## Pasos para levantar el proyecto

1. Instalar o actualizar Nodejs
2. Instalar este generador de proyectos o programas de consola

$ npm i @nestjs/cli -g

3. Clonar el repositorio

git clone https://github.com/tu-usuario/nestfirstapp.git

4. Instalar las librerias utilizadas
   npm install @nestjs/core @nestjs/common @nestjs/cli
   npm install @nestjs/swagger swagger-ui-express
   npm install jsonwebtoken
   npm install class-validator class-transformer
   npm install uuid
   npm install express

5. Iniciar la aplicacion
   npm run start

6. Si en el caso hay algun problema con el prettier/eslintrc, agregar dentro de el archivo .eslintrc.js , en la seccion de rules:

   "prettier/prettier": [
   "error",
   {
   "endOfLine": "auto"
   }
   ]
