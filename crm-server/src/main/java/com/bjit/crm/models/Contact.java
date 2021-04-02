package com.bjit.crm.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contact {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Contact name is required")
	private String contactName;
	
	@NotBlank(message = "Title is required")
	private String title;
	
	@NotBlank(message = "Job position is required")
	private String jobPosition;
	
	@NotBlank(message = "Email is required")
	@Column(updatable = false, unique = true)
	private String email;
	
	@NotBlank(message = "Phone is required")
	private String phone;
	
	private String mobile;
	
	private String notes;
	
	private Long customerId;
}
