import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";

async function start() {
  const PORT = process.env.PORT || 8000

  const app = await NestFactory.create(AppModule, {cors: {
      "origin": "*",
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204
  }});

  const config = new DocumentBuilder()
      .setTitle("Chat project")
      .setDescription("документация REST API")
      .setVersion("1.0.0")
      .addTag("RSA")
      .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/swagger", app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT} http://localhost:${PORT}`));
}
start();
