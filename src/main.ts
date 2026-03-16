import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // تأكد من إضافة 0.0.0.0 ليقبل الاتصالات الخارجية
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();