import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';


async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'https://paint-stock-frontend.vercel.app/',
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
