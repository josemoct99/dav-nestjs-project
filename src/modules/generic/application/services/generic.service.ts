import { Injectable } from '@nestjs/common';
import { CreateGenericDto } from '../../presentation/dto/create-generic.dto';
import { UpdateGenericDto } from '../../presentation/dto/update-generic.dto';
import { Generic } from '../../domain/generic';
import { GenericPort } from '../../../../infrastructure/ports/generic.port';

@Injectable()
export class GenericService {

  constructor(
    private readonly generic: Generic,
    private readonly genericPort: GenericPort
  ) { }


  create(createGenericDto: CreateGenericDto) {
    return 'This action adds a new generic';
  }

  async findAll() {
    return await this.genericPort.findAllGenerics();
  }

  findOne(id: number) {
    return `This action returns a #${id} generic`;
  }

  update(id: number, updateGenericDto: UpdateGenericDto) {
    return `This action updates a #${id} generic`;
  }

  remove(id: number) {
    return `This action removes a #${id} generic`;
  }
}
