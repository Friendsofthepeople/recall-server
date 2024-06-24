import { RegisterDependency } from "@recall-server/core";
import { Inject, Service } from "typedi";
import { ExampleRepository } from "../repository/ExampleRepository";

@Service()
@RegisterDependency()
export class ExampleService {
    @Inject() private readonly exampleRepository: ExampleRepository;

    async getExample() {
        return await this.exampleRepository.find();
    }
}
