import 'reflect-metadata';
import { Get, JsonController } from "routing-controllers";
import { Inject, Service } from "typedi";
import UserService from "../services/user.service";
import { RegisterDependency } from "@recall-server/core";

@Service()
@RegisterDependency()
@JsonController('/users')
export class UserController {
    constructor(
       @Inject() private userService: UserService
    ) {}

    @Get('/')
    getUserExample() {
        return this.userService.getExample();
    }
}
