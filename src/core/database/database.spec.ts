import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { DATA_SOURCE, databaseProviders } from './database';

describe('Database', () => {
  let dataSource: DataSource;

  beforeEach(async () => {
    const mockDataSource = {} as DataSource;

    const module: TestingModule = await Test.createTestingModule({
      providers: [...databaseProviders],
    })
      .overrideProvider(DATA_SOURCE)
      .useValue(mockDataSource)
      .compile();

    dataSource = module.get<DataSource>(DATA_SOURCE);
  });

  it('should be defined', () => {
    expect(dataSource).toBeDefined();
  });
});
