package org.example.vibecheck_livemusicapp.exceptions;

public class InternalServerErrorException extends RuntimeException {
    public InternalServerErrorException(String message){
        super(message);
    }
}
