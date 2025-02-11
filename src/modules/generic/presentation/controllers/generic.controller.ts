import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenericService } from '../../application/services/generic.service';
import { CreateGenericDto } from '../dto/create-generic.dto';
import { UpdateGenericDto } from '../dto/update-generic.dto';

@Controller('generic')
export class GenericController {
  constructor(private readonly genericService: GenericService) {}

  @Post()
  create(@Body() createGenericDto: CreateGenericDto) {
    return this.genericService.create(createGenericDto);
  }

  @Get()
  findAll() {
    return this.genericService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genericService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenericDto: UpdateGenericDto) {
    return this.genericService.update(+id, updateGenericDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genericService.remove(+id);
  }
}
