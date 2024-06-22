import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@JsonController('/auth')
export class AuthController {
    @Get('/')
    async get() {
        return {
            message: 'Welcome to Recall Server Auth'
        }
    }
}
