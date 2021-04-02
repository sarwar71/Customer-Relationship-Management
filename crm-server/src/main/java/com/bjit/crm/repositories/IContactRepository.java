package com.bjit.crm.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bjit.crm.models.Contact;

@Repository
public interface IContactRepository extends JpaRepository<Contact, Long>{
	List<Contact> findByCustomerId(Long id);
}
