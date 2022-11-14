import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignorar datos que no estén en los DTO
      forbidNonWhitelisted: true, // Lanzar error si existen datos prohibidos //disableErrorMessages: true, // Deshabilitar mensajes de error (producción)
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Proyecto Electiva Prof I')
    .setDescription('IX Semestre')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();

  //await app.listen(3000);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
