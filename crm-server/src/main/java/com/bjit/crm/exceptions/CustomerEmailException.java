package com.bjit.crm.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class CustomerEmailException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public CustomerEmailException(String message) {
		super(message);
	} 
}
