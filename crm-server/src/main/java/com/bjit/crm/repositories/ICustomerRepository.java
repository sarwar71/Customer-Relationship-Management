package com.bjit.crm.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bjit.crm.models.Customer;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Long>{
	
}
