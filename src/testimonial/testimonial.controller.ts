import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TestimonialCreateDTO } from './dto/TestimonialCreate.dto';

@Controller('/depoimentos')
export class TestimonialController {
  @Post()
  async create(@Body() testimonial: TestimonialCreateDTO) {
    return testimonial;
  }

  @Get('/:id')
  async findById(@Param('id') id) {
    throw new Error('Not implemented');
  }

  @Put('/:id')
  async update(@Param('id') id, @Body() testimonial: TestimonialCreateDTO) {
    throw new Error('Not implemented');
  }

  @Delete('/:id')
  async delete(@Param('id') id) {
    throw new Error('Not implemented');
  }
}
