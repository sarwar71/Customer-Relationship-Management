package com.bjit.crm.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bjit.crm.models.Contact;
import com.bjit.crm.services.ContactService;
import com.bjit.crm.services.MapValidationErrorService;

@RestController
@RequestMapping("api/contact")
@CrossOrigin
public class ContactController {

	@Autowired
	private ContactService contactService;
	
	@Autowired
	private MapValidationErrorService errorService;
	
	@PostMapping("/new")
	public ResponseEntity<?> createNewContact(@Valid @RequestBody Contact contact, BindingResult result){
		
		ResponseEntity<?> errorMap = errorService.ValidationErrorService(result);
		if (errorMap != null)
			return errorMap;
		
		Contact c = contactService.saveContact(contact);
		return new ResponseEntity<Contact>(c, HttpStatus.CREATED);
	}
	
	@GetMapping("/customer/{id}")
	public ResponseEntity<List<Contact>> getContactByCustomerId(@PathVariable Long id) {
		
		List<Contact> c =  contactService.findContactByCustomerId(id);
		return new ResponseEntity<List<Contact>>(c, HttpStatus.OK);
	}
}
