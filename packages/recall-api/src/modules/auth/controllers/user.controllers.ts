import 'reflect-metadata';
import { Get, Post, JsonController, UseBefore } from "routing-controllers";
import { Inject, Service } from "typedi";
import { validate } from '@recall-server/common/middleware/validate';
import UserService from "../services/user.service";
import { RegisterDependency } from "@recall-server/core";
import { userRegistrationSchema } from '../schemas/user.schema';

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

    @Post('/register')
    @UseBefore(validate(userRegistrationSchema))
    async register(){
        // Registration logic
        return this.userService.register();
    }
}
