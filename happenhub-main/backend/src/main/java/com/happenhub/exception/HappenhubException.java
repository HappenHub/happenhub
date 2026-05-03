package com.happenhub.exception;

public class HappenhubException extends RuntimeException {
    public HappenhubException(String message) {
        super(message);
    }

    public HappenhubException(String message, Throwable cause) {
        super(message, cause);
    }
}

class UnauthorizedException extends HappenhubException {
    public UnauthorizedException(String message) {
        super(message);
    }
}

class InvalidInputException extends HappenhubException {
    public InvalidInputException(String message) {
        super(message);
    }
}