import { Request, Response } from 'express';
import {
  BadRequestResponse, BadRequestResponseWithData,
  CreatedMsgResponse,
  CreatedResponse,
  SuccessMsgResponse,
  SuccessResponse,
  UnauthorizedMsgResponse,
  UnauthorizedResponse,
  ServerErrorResponse,
  NotFoundResponse
} from '../api/api-response';

class BaseController {
  protected req: Request;
  protected res: Response;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
  }

  protected createdResponse = () => new CreatedMsgResponse().send(this.res);

  protected createdWithDataResponse = (data: any) => new CreatedResponse('Created', data).send(this.res);

  protected successResponse = () => new SuccessMsgResponse('Success').send(this.res);

  protected successWithDataResponse = (data: any) => new SuccessResponse('Success', data).send(this.res);

  protected badRequestResponse = () => new BadRequestResponse('Bad Request').send(this.res);

  protected badRequestWithDataResponse = (data:any) => new BadRequestResponseWithData('Bad Request', data).send(this.res);

  protected notFoundResponse = () => new NotFoundResponse('Not Found').send(this.res);

  protected serverError = () => new ServerErrorResponse().send(this.res);

  protected unAuthorizedResponse = () => new UnauthorizedResponse().send(this.res);

  protected unAuthorizedWithDataResponse = (data: any) => new UnauthorizedMsgResponse('Unauthorized', data).send(this.res);
}

export default BaseController;
