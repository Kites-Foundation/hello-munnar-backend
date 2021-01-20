import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
import * as helmet from 'helmet';
import { RedocModule, RedocOptions } from 'nestjs-redoc/dist';
import { join } from 'path';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { getConnectionManager } from 'typeorm';
import * as rateLimit from 'express-rate-limit';
import { catchError } from 'rxjs/operators';

config();

async function bootstrap() {
  try {
    const logger = new Logger('Hello Munnar');
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.enableCors({ origin: `${process.env.CORS}` });
    app.use(helmet.noSniff());
    app.use(helmet.referrerPolicy());
    app.use(helmet.xssFilter());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.frameguard({ action: 'sameorigin' }));
    app.use(helmet.expectCt({ maxAge: 123, enforce: true }));
    app.use(helmet.dnsPrefetchControl({ allow: true }));
    app.use(compression({ encodings: ['gzip', 'deflate'] }));
    app.use(function (req, res, next) {
      res.header('x-powered-by', `${process.env.X_POWERED_BY}`);
      next();
    });
    app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
      }),
    );
    app.use(
      helmet.hsts({
        maxAge: 5184000,
        includeSubDomains: true,
        preload: true,
      }),
    );
    app.disable('etag');
    app.set('trust proxy', 1);
    app.useStaticAssets(join(__dirname, '../../../public'));

    const swaggerOptions = new DocumentBuilder()
      .setTitle('Kites')
      .setDescription(`${process.env.X_POWERED_BY}`)
      .setVersion('1.0.0')
      .addTag(`${process.env.X_ORG}`)
      .addBearerAuth()
      .setContact(
        `${process.env.X_ORG}`,
        'https://kitesfoundation.org',
        'info@kitesfoundation.org',
      )
      .addServer('http://')
      .addServer('https://')
      .build();

    const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('api-doc', app, swaggerDocument);

    const redocOptions: RedocOptions = {
      title: `${process.env.X_ORG}`,
      logo: {
        url: 'https://cdn.kites.foundation/img/logo.png',
        backgroundColor: '#F0F0F0',
        altText: 'Kites Foundation Logo',
      },
      sortPropsAlphabetically: true,
      hideDownloadButton: false,
      hideHostname: false,
    };

    // Disabling RedocModule
    await RedocModule.setup('redoc', app, swaggerDocument, redocOptions);
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        validationError: { target: false },
      }),
    );

    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        validationError: { target: false },
      }),
    );

    const port = process.env.APP_PORT;
    await app.listen(port);

    logger.log(`Application Listening on Port ${port} `);
    logger.log(`Api documentation available at "/api-doc/`);
    logger.log(`Api Redoc documentation available at "/redoc/`);
  } catch (e) {
    if (e.name === 'AlreadyHasActiveConnectionError') {
      return getConnectionManager().get('default');
    }
  }
}
bootstrap();
