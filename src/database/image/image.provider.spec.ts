import { Test, TestingModule } from '@nestjs/testing';
import { ImageProvider } from './image.provider';

describe('ImageProvider', () => {
  let provider: ImageProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageProvider],
    }).compile();

    provider = module.get<ImageProvider>(ImageProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
