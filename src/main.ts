import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  if (module.hot) {
    // 添加内容
    module.hot.accept(); // 添加内容
    module.hot.dispose(() => app.close()); // 添加内容
  } // 添加内容
}
bootstrap();
