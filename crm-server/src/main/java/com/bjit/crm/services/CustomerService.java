package com.bjit.crm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bjit.crm.models.Customer;
import com.bjit.crm.repositories.ICustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private ICustomerRepository customerRepository;

	public Customer saveCustomer(Customer customer) {

		return customerRepository.save(customer);
	}
	
	public Customer updateCustomer(Customer customer, Long id) {

		Customer cust = customerRepository.findById(id).get();
		
		cust.setCity(customer.getCity());
		cust.setCountry(customer.getCountry());
		cust.setEmail(customer.getEmail());
		cust.setFax(customer.getFax());
		cust.setLanguage(customer.getLanguage());
		cust.setMobile(customer.getMobile());
		cust.setName(customer.getName());
		cust.setPhone(customer.getPhone());
		cust.setState(customer.getState());
		cust.setStreet1(customer.getStreet1());
		cust.setStreet2(customer.getStreet2());
		cust.setZip(customer.getZip());
		cust.setWebsite(customer.getWebsite());
		cust.setTags(customer.getTags());
		
		return customerRepository.save(cust);
	}

	public Iterable<Customer> findAllCustomers() {
		return customerRepository.findAll();
	}

	public Customer findCustomerById(Long id) {
		return customerRepository.findById(id).get();
	}

	public void deleteCustomerById(Long id) {
		customerRepository.deleteById(id);
	}
}
