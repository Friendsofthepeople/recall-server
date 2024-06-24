import { RegisterDependency } from "@recall-server/core";
import { Get, JsonController } from "routing-controllers";
import { Inject, Service } from "typedi";
import { ExampleService } from "../services/example.service";

@Service()
@RegisterDependency()
@JsonController('/example-route')
export class ExampleController {
    constructor(
        @Inject() private exampleService: ExampleService
    ){}

    @Get('/')
    public getExample() {
        return this.exampleService.getExample();
    }
}
