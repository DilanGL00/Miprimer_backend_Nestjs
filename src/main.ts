import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Mi API')
    .setDescription('API descripcion')
    .setVersion('1.0')
    .addTag('auth', 'Endpoints relacionados con la autenticación') // Agrega etiquetas para agrupar los endpoints por funcionalidad
    .addTag('tasks', 'Endpoints relacionados con las tareas') // Por ejemplo, puedes agregar una etiqueta para cada módulo de tu aplicación
    .addTag('files', 'Endpoints relacionados con la subida de archivos')
    .addBearerAuth() // Si tu aplicación usa autenticación JWT, agrega esta línea para indicar que los endpoints requieren un token JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Servir archivos estáticos desde el directorio de uploads
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  await app.listen(3000);
}
bootstrap();
