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
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "Customer name is required")
	@Column(updatable = false, unique = true)
	private String name;

	@NotBlank(message = "Customer street is required")
	private String street1;

	private String street2;

	@NotBlank(message = "Customer city is required")
	private String city;

	@NotBlank(message = "Customer state is required")
	private String state;

	@NotBlank(message = "Customer zip is required")
	private String zip;

	@NotBlank(message = "Customer country is required")
	private String country;

	private String website;

	@NotBlank(message = "Customer tags is required")
	private String tags;

	@NotBlank(message = "Customer phone is required")
	private String phone;

	private String mobile;

	private String fax;

	@NotBlank(message = "Customer email is required")
	@Column(updatable = false, unique = true)
	private String email;

	@NotBlank(message = "Customer language is required")
	private String language;
}
