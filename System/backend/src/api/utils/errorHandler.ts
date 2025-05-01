import { ErrorResponse } from './crud-repo';
import { Request, Response, NextFunction } from "express";

export default function errorHandler(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
): unknown {
    if (error instanceof ErrorResponse) {
        const { status, message, data } = error;
        // Logger.error(${error.message}\n${error.stack})
        return res.status(status).json({status, message, data});
    }

    // Logger.error(Internal Server Error: ${error.message}\n${error.stack});
    const errorMessage = process.env.NODE_ENV === "production" ? "Something went wrong" : error.message;
    return res.status(500).json({status, message: errorMessage});
}