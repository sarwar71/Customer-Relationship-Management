package com.bjit.crm.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bjit.crm.models.Contact;
import com.bjit.crm.repositories.IContactRepository;

@Service
public class ContactService {

	@Autowired
	private IContactRepository contactRepository;
	
	public Contact saveContact(Contact contact) {
		return contactRepository.save(contact);
	}
	
	public List<Contact> findContactByCustomerId(Long id) {
		return contactRepository.findByCustomerId(id);
	}
}
