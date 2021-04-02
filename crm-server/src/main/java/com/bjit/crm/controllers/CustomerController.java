package com.bjit.crm.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bjit.crm.models.Customer;
import com.bjit.crm.services.CustomerService;
import com.bjit.crm.services.MapValidationErrorService;

@RestController
@RequestMapping("api/customer")
@CrossOrigin
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private MapValidationErrorService errorService;

	@PostMapping("/new")
	public ResponseEntity<?> createNewCustomer(@Valid @RequestBody Customer customer, BindingResult result) {

		ResponseEntity<?> errorMap = errorService.ValidationErrorService(result);
		if (errorMap != null)
			return errorMap;

		Customer c = customerService.saveCustomer(customer);
		return new ResponseEntity<Customer>(c, HttpStatus.CREATED);
	}

	@PutMapping("/edit/{id}")
	public ResponseEntity<?> editCustomer(@Valid @PathVariable Long id, @RequestBody Customer customer,  BindingResult result) {
		
		ResponseEntity<?> errorMap = errorService.ValidationErrorService(result);
		if (errorMap != null)
			return errorMap;
		
		Customer c = customerService.updateCustomer(customer, id);
		return new ResponseEntity<Customer>(c, HttpStatus.CREATED);
	}
	

	@GetMapping("/all")
	public Iterable<Customer> getAllCustomers() {
		return customerService.findAllCustomers();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {

		Customer c = customerService.findCustomerById(id);
		return new ResponseEntity<Customer>(c, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable Long id) {

		customerService.deleteCustomerById(id);
		return new ResponseEntity<String>("Customer Id: " + id + " was deleted.", HttpStatus.OK);
	}
}
