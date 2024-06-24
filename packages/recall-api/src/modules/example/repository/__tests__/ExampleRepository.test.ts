import { ExampleRepository } from '../ExampleRepository';

describe('ExampleRepository', () => {
    let exampleRepository: ExampleRepository;

    beforeEach(() => {
        exampleRepository = new ExampleRepository();
    });

    it('should return a list of examples', async () => {
        const result = await exampleRepository.find();
        expect(result).toEqual([
            {
                id: 1,
                name: 'Example'
            },
            {
                id: 2,
                name: 'Example 2'
            }
        ]);
    });

    it('should return the correct number of examples', async () => {
        const result = await exampleRepository.find();
        expect(result.length).toBe(2);
    });
});
