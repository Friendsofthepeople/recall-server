import { Container } from 'typedi';
import { useContainer, useExpressServer } from 'routing-controllers';
import request from 'supertest';
import express from 'express';
import { ExampleController } from '../example.controllers';
import { ExampleService } from '../../services/example.service';

jest.mock('../../services/example.service');

describe('ExampleController', () => {
    let exampleService: jest.Mocked<ExampleService>;
    let app: express.Application;

    beforeEach(() => {
        exampleService = new ExampleService() as jest.Mocked<ExampleService>;
        exampleService.getExample = jest.fn().mockResolvedValue([
            { id: 1, name: 'Example' },
            { id: 2, name: 'Example 2' },
        ]);

        Container.set(ExampleService, exampleService);

        useContainer(Container);

        app = express();
        useExpressServer(app, {
            controllers: [ExampleController],
        });
    });

    it('should return examples from the service', async () => {
        const response = await request(app).get('/example-route');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            { id: 1, name: 'Example' },
            { id: 2, name: 'Example 2' },
        ]);
        expect(exampleService.getExample).toHaveBeenCalledTimes(1);
    });

    it('should return the correct number of examples', async () => {
        const response = await request(app).get('/example-route');
        expect(response.body.length).toBe(2);
    });

    it('each example should have id and name properties', async () => {
        const response = await request(app).get('/example-route');
        response.body.forEach((example: any) => {
            expect(example).toHaveProperty('id');
            expect(example).toHaveProperty('name');
        });
    });

    it('should return examples with correct types', async () => {
        const response = await request(app).get('/example-route');
        response.body.forEach((example: any) => {
            expect(typeof example.id).toBe('number');
            expect(typeof example.name).toBe('string');
        });
    });
});
