package com.bjit.crm.exceptions;

public class CustomerEmailExceptionResponse {
	
	private String customerEmail;

	public CustomerEmailExceptionResponse(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	
}
