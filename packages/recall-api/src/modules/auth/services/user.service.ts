import { RegisterDependency } from "@recall-server/core";
import { Inject, Service } from "typedi";
import UserRepository from "../repository/UserRepository";

@Service()
@RegisterDependency()
export default class UserService {
    @Inject()
    private readonly userRepository: UserRepository;

    public getExample() {
        return {
            message: 'User Basic Example'
        };
    }

    public register() {
        return {
            message: 'Register Registration'
        };
    }
}
