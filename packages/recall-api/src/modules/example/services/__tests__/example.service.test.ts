import { Container } from 'typedi';
import { ExampleService } from '../example.service';
import { ExampleRepository } from '../../repository/ExampleRepository';

// Mock the ExampleRepository
jest.mock('../../repository/ExampleRepository');

describe('ExampleService', () => {
    let exampleService: ExampleService;
    let exampleRepository: jest.Mocked<ExampleRepository>;

    beforeEach(() => {
        exampleRepository = new ExampleRepository() as jest.Mocked<ExampleRepository>;
        exampleRepository.find = jest.fn().mockResolvedValue([
            { id: 1, name: 'Example' },
            { id: 2, name: 'Example 2' },
        ]);

        Container.set(ExampleRepository, exampleRepository);
        exampleService = Container.get(ExampleService);
    });

    it('should return examples from the repository', async () => {
        const examples = await exampleService.getExample();
        expect(examples).toEqual([
            { id: 1, name: 'Example' },
            { id: 2, name: 'Example 2' },
        ]);
        expect(exampleRepository.find).toHaveBeenCalledTimes(1);
    });

    it('should return the correct number of examples', async () => {
        const examples = await exampleService.getExample();
        expect(examples.length).toBe(2);
    });
});
