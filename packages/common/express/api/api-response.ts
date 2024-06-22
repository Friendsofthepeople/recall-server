/* eslint-disable max-classes-per-file */
import { Response } from 'express';

enum StatusCode {
  SUCCESS = 'SUCCESS',
  WARN = 'WARN',
  FAILURE = 'FAILURE',
  RETRY = 'RETRY',
  UNAUTHORIZED = 'UNAUTHORIZED',
  INVALID_ACCESS_TOKEN = 'INVALID_ACCESS_TOKEN',
  SERVER_ERROR = 'SERVER_ERROR'
}

enum ResponseStatus {
  SUCCESS = 200,
  CREATED = 201,
  PARTIAL_CONTENT = 206,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  TOO_MANY_REQUESTS = 429,
  SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503
}

abstract class ApiResponse {
  constructor(
    protected statusCode: StatusCode,
    protected status: ResponseStatus,
    protected message: string
  ) {}

  protected prepare<T extends ApiResponse>(res: Response, response: T): Response {
    return res.status(this.status).json(ApiResponse.sanitize(response));
  }

  public send(res: Response): Response {
    return this.prepare<ApiResponse>(res, this);
  }

  private static sanitize<T extends ApiResponse>(response: T): T {
    const clone: T = {} as T;
    Object.assign(clone, response);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete clone.status;
    // eslint-disable-next-line no-restricted-syntax
    for (const i in clone) if (typeof clone[i] === 'undefined') delete clone[i];
    return clone;
  }
}

export class AuthFailureResponse extends ApiResponse {
  constructor(message = 'Authentication Failure') {
    super(StatusCode.FAILURE, ResponseStatus.UNAUTHORIZED, message);
  }
}

export class NotFoundResponse extends ApiResponse {
  private url: string | undefined;

  constructor(message = 'Not Found') {
    super(StatusCode.FAILURE, ResponseStatus.NOT_FOUND, message);
  }

  override send(res: Response): Response {
    this.url = res.req?.originalUrl;
    return super.prepare<NotFoundResponse>(res, this);
  }
}

export class UnauthorizedResponse extends ApiResponse {
  constructor(message = 'Unauthorized') {
    super(StatusCode.FAILURE, ResponseStatus.UNAUTHORIZED, message);
  }
}

export class UnauthorizedMsgResponse<T> extends ApiResponse {
  constructor(message: string, private data: T) {
    super(StatusCode.FAILURE, ResponseStatus.UNAUTHORIZED, message);
  }

  override send(res: Response): Response {
    return super.prepare<UnauthorizedMsgResponse<T>>(res, this);
  }
}

export class ForbiddenResponse extends ApiResponse {
  constructor(message = 'Forbidden') {
    super(StatusCode.FAILURE, ResponseStatus.FORBIDDEN, message);
  }
}

export class BadRequestResponse extends ApiResponse {
  constructor(message = 'Bad Parameters') {
    super(StatusCode.FAILURE, ResponseStatus.BAD_REQUEST, message);
  }
}

export class BadRequestResponseWithData<T> extends ApiResponse {
  constructor(message: string, private data: T) {
    super(StatusCode.FAILURE, ResponseStatus.BAD_REQUEST, message);
  }

  override send(res: Response): Response {
    return super.prepare<BadRequestResponseWithData<T>>(res, this);
  }
}

export class TooManyRequestsResponse extends ApiResponse {
  constructor(message = 'Too Many Requests') {
    super(StatusCode.WARN, ResponseStatus.TOO_MANY_REQUESTS, message);
  }
}

export class ServerErrorResponse extends ApiResponse {
  constructor(message = 'Internal Server Error') {
    super(StatusCode.FAILURE, ResponseStatus.SERVER_ERROR, message);
  }
}

export class SuccessMsgResponse extends ApiResponse {
  constructor(message: string) {
    super(StatusCode.SUCCESS, ResponseStatus.SUCCESS, message);
  }
}

export class FailureMsgResponse extends ApiResponse {
  constructor(message: string) {
    super(StatusCode.FAILURE, ResponseStatus.SUCCESS, message);
  }
}

export class CreatedMsgResponse extends ApiResponse {
  constructor(message = 'Created') {
    super(StatusCode.SUCCESS, ResponseStatus.CREATED, message);
  }
}

export class CreatedResponse<T> extends ApiResponse {
  constructor(message: string, private data: T) {
    super(StatusCode.SUCCESS, ResponseStatus.CREATED, message);
  }

  override send(res: Response): Response {
    return super.prepare<CreatedResponse<T>>(res, this);
  }
}

export class SuccessResponse<T> extends ApiResponse {
  constructor(message: string, private data: T) {
    super(StatusCode.SUCCESS, ResponseStatus.SUCCESS, message);
  }

  override send(res: Response): Response {
    return super.prepare<SuccessResponse<T>>(res, this);
  }
}

export class AccessTokenErrorResponse extends ApiResponse {
  private instruction = 'refresh_token';

  constructor(message = 'Invalid AccessToken') {
    super(StatusCode.INVALID_ACCESS_TOKEN, ResponseStatus.UNAUTHORIZED, message);
  }

  override send(res: Response): Response {
    res.setHeader('instruction', this.instruction);
    return super.prepare<AccessTokenErrorResponse>(res, this);
  }
}

export class TokenRefreshResponse extends ApiResponse {
  constructor(message: string, private accessToken: string, private refreshToken: string) {
    super(StatusCode.SUCCESS, ResponseStatus.SUCCESS, message);
  }

  override send(res: Response): Response {
    return super.prepare<TokenRefreshResponse>(res, this);
  }
}
