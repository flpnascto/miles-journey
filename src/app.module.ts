import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestimonialController } from './testimonial/testimonial.controller';

@Module({
  imports: [],
  controllers: [AppController, TestimonialController],
  providers: [AppService],
})
export class AppModule {}
