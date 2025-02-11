import { Test, TestingModule } from '@nestjs/testing';
import { GenericController } from '../presentation/controllers/generic.controller';
import { GenericService } from '../application/services/generic.service';

describe('GenericController', () => {
  let controller: GenericController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenericController],
      providers: [GenericService],
    }).compile();

    controller = module.get<GenericController>(GenericController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
