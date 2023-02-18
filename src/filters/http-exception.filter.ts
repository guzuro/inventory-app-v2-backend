import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { STATUS_CODES } from 'http';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: QueryFailedError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const error = exception.driverError;

        let message = ''
        let status = HttpStatus.INTERNAL_SERVER_ERROR

        if (error.code === '23505') {
            message = error.detail;
            status = HttpStatus.UNPROCESSABLE_ENTITY
        }

        return response
            .status(status)
            .json({
                error: STATUS_CODES[status],
                message: message,
            });
    }
}