import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
      .setTitle('Project')
      .setDescription('The API description')
      .setVersion('1.0')
      .addTag('project')
      .addBearerAuth(
          { type: 'http', scheme: 'Bearer', bearerFormat: 'Token', in: 'header' },
          'access-token',
      )
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
