/* eslint-disable max-classes-per-file */
import { Response } from 'express';
import { environment } from '@recall-server/core/config';
import {
  AuthFailureResponse,
  AccessTokenErrorResponse,
  ServerErrorResponse,
  NotFoundResponse,
  BadRequestResponse,
  ForbiddenResponse
} from './api-response';

enum ErrorType {
  BAD_TOKEN = 'BadTokenError',
  TOKEN_EXPIRED = 'TokenExpiredError',
  UNAUTHORIZED = 'AuthFailureError',
  ACCESS_TOKEN = 'AccessTokenError',
  INTERNAL = 'InternalError',
  NOT_FOUND = 'NotFoundError',
  BAD_REQUEST = 'BadRequestError',
  FORBIDDEN = 'ForbiddenError'
}

export abstract class ApiError extends Error {
  constructor(public type: ErrorType, public override message = 'error') {
    super(type);
  }

  public static handle(err: ApiError, res: Response): Response {
    switch (err.type) {
      case ErrorType.BAD_TOKEN:
      case ErrorType.TOKEN_EXPIRED:
      case ErrorType.UNAUTHORIZED:
        return new AuthFailureResponse(err.message).send(res);
      case ErrorType.ACCESS_TOKEN:
        return new AccessTokenErrorResponse(err.message).send(res);
      case ErrorType.INTERNAL:
        return new ServerErrorResponse(err.message).send(res);
      case ErrorType.NOT_FOUND:
        return new NotFoundResponse(err.message).send(res);
      case ErrorType.BAD_REQUEST:
        return new BadRequestResponse(err.message).send(res);
      case ErrorType.FORBIDDEN:
        return new ForbiddenResponse(err.message).send(res);
      default: {
        let { message } = err;
        // Do not send failure message in production as it may send sensitive data
        if (environment === 'production') message = 'Something wrong happened.';
        return new ServerErrorResponse(message).send(res);
      }
    }
  }
}

export class InternalError extends ApiError {
  constructor(message = 'Internal server error') {
    super(ErrorType.INTERNAL, message);
  }
}

export class BadRequestError extends ApiError {
  constructor(message = 'Bad Request') {
    super(ErrorType.BAD_REQUEST, message);
  }
}

export class NotFoundError extends ApiError {
  constructor(message = 'Not Found') {
    super(ErrorType.NOT_FOUND, message);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message = 'Unauthorized') {
    super(ErrorType.UNAUTHORIZED, message);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message = 'Forbidden') {
    super(ErrorType.FORBIDDEN, message);
  }
}

export class BadTokenError extends ApiError {
  constructor(message = 'Token is not valid') {
    super(ErrorType.BAD_TOKEN, message);
  }
}

export class TokenExpiredError extends ApiError {
  constructor(message = 'Token is expired') {
    super(ErrorType.TOKEN_EXPIRED, message);
  }
}

export class AccessTokenError extends ApiError {
  constructor(message = 'Invalid access token') {
    super(ErrorType.ACCESS_TOKEN, message);
  }
}
