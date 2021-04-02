package com.bjit.crm.controllers;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.bjit.crm.models.Customer;
import com.bjit.crm.services.CustomerService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class CustomerControllerTest {

	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	private ObjectMapper om;
	
	@MockBean
	private CustomerService mockCustomerService;
	
	@Before
	public void init() {
		Customer customer = 
				new Customer(1L, "hasan", "a1", "b2", "dhaka", "dhaka1", "1212", 
				"bd", "www", "sw", "017", "3456", "2323", "hasan@gmail.com", "english");
		when(mockCustomerService.findCustomerById(1L)).thenReturn(customer);
	}
	
	@Test
	public void getCustomerByIdTest() throws Exception {
		
		 mockMvc.perform(get("/api/customer/1"))
		.andExpect(content().contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id", is(1)))
        .andExpect(jsonPath("$.name", is("hasan")))
        .andExpect(jsonPath("$.street1", is("a1")))
        .andExpect(jsonPath("$.street2", is("b2")))
        .andExpect(jsonPath("$.city", is("dhaka")))
        .andExpect(jsonPath("$.state", is("dhaka1")))
        .andExpect(jsonPath("$.zip", is("1212")))
        .andExpect(jsonPath("$.country", is("bd")))
        .andExpect(jsonPath("$.website", is("www")))
        .andExpect(jsonPath("$.tags", is("sw")))
        .andExpect(jsonPath("$.phone", is("017")))
        .andExpect(jsonPath("$.mobile", is("3456")))
        .andExpect(jsonPath("$.fax", is("2323")))
        .andExpect(jsonPath("$.email", is("hasan@gmail.com")))
        .andExpect(jsonPath("$.language", is("english")));

		verify(mockCustomerService, times(1)).findCustomerById(1L);	
	}
	
	@Test
	public void getAllCustomersTest() throws Exception {	
		 	
		 	List<Customer> customers = Arrays.asList(
					new Customer(1L, "hasan", "a1", "b2", "dhaka", "dhaka1", "1212", 
							"bd", "www", "sw", "017", "3456", "2323", "hasan@gmail.com", "english"),
					new Customer(2L, "ameer", "a1", "b2", "dhaka", "dhaka1", "1212", 
							"bd", "www", "sw", "017", "3456", "2323", "ameer@gmail.com", "english"));
		 	
			when(mockCustomerService.findAllCustomers()).thenReturn(customers);
			
			 mockMvc.perform(get("/api/customer/all"))
	 		.andExpect(content().contentType(MediaType.APPLICATION_JSON))
	         .andExpect(status().isOk())
	         .andExpect(jsonPath("$[1].id", is(2)))
	         .andExpect(jsonPath("$[1].name", is("ameer")))
	         .andExpect(jsonPath("$[1].street1", is("a1")))
	         .andExpect(jsonPath("$[1].street2", is("b2")))
	         .andExpect(jsonPath("$[1].city", is("dhaka")))
	         .andExpect(jsonPath("$[1].state", is("dhaka1")))
	         .andExpect(jsonPath("$[1].zip", is("1212")))
	         .andExpect(jsonPath("$[1].country", is("bd")))
	         .andExpect(jsonPath("$[1].website", is("www")))
	         .andExpect(jsonPath("$[1].tags", is("sw")))
	         .andExpect(jsonPath("$[1].phone", is("017")))
	         .andExpect(jsonPath("$[1].mobile", is("3456")))
	         .andExpect(jsonPath("$[1].fax", is("2323")))
	         .andExpect(jsonPath("$[1].email", is("ameer@gmail.com")))
	         .andExpect(jsonPath("$[1].language", is("english")));

			 verify(mockCustomerService, times(1)).findAllCustomers();
	}
	
    @Test
    public void deleteCustomerByIdTest() throws Exception {

        doNothing().when(mockCustomerService).deleteCustomerById(Mockito.any(Long.class));
        
        mockMvc.perform(delete("/api/customer/delete/1"))
                .andExpect(status().isOk());

        verify(mockCustomerService, times(1)).deleteCustomerById(1L);
    }
	
	@Test
	public void createNewCustomerTest() throws Exception {
		
		Customer customer = 
				new Customer(1L, "hasan", "a1", "b2", "dhaka", "dhaka1", "1212", 
				"bd", "www", "sw", "017", "3456", "2323", "hasan@gmail.com", "english");
		
		when(mockCustomerService.saveCustomer(any(Customer.class))).thenReturn(customer);

		
		 mockMvc.perform(post("/api/customer/new")
		.content(om.writeValueAsString(customer))
					.header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON))		
        .andExpect(status().isCreated())
        .andExpect(jsonPath("$.id", is(1)))
        .andExpect(jsonPath("$.name", is("hasan")))
        .andExpect(jsonPath("$.street1", is("a1")))
        .andExpect(jsonPath("$.street2", is("b2")))
        .andExpect(jsonPath("$.city", is("dhaka")))
        .andExpect(jsonPath("$.state", is("dhaka1")))
        .andExpect(jsonPath("$.zip", is("1212")))
        .andExpect(jsonPath("$.country", is("bd")))
        .andExpect(jsonPath("$.website", is("www")))
        .andExpect(jsonPath("$.tags", is("sw")))
        .andExpect(jsonPath("$.phone", is("017")))
        .andExpect(jsonPath("$.mobile", is("3456")))
        .andExpect(jsonPath("$.fax", is("2323")))
        .andExpect(jsonPath("$.email", is("hasan@gmail.com")))
        .andExpect(jsonPath("$.language", is("english")));

		 	verify(mockCustomerService, times(1)).saveCustomer(any(Customer.class));	
		
	}
	
	@Test
	public void editCustomerTest() throws Exception {
		
		Customer customer = 
				new Customer(1L, "hasan", "a1", "b2", "dhaka", "dhaka1", "1212", 
				"bd", "www", "sw", "017", "3456", "2323", "hasan@gmail.com", "english");
		
		when(mockCustomerService.updateCustomer(any(Customer.class), any(Long.class))).thenReturn(customer);

		 mockMvc.perform(put("/api/customer/edit/1")
		.content(om.writeValueAsString(customer))
		.header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON))
		.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isCreated())
        .andExpect(jsonPath("$.id", is(1)))
        .andExpect(jsonPath("$.name", is("hasan")))
        .andExpect(jsonPath("$.street1", is("a1")))
        .andExpect(jsonPath("$.street2", is("b2")))
        .andExpect(jsonPath("$.city", is("dhaka")))
        .andExpect(jsonPath("$.state", is("dhaka1")))
        .andExpect(jsonPath("$.zip", is("1212")))
        .andExpect(jsonPath("$.country", is("bd")))
        .andExpect(jsonPath("$.website", is("www")))
        .andExpect(jsonPath("$.tags", is("sw")))
        .andExpect(jsonPath("$.phone", is("017")))
        .andExpect(jsonPath("$.mobile", is("3456")))
        .andExpect(jsonPath("$.fax", is("2323")))
        .andExpect(jsonPath("$.email", is("hasan@gmail.com")))
        .andExpect(jsonPath("$.language", is("english")));

		 verify(mockCustomerService, times(1)).updateCustomer(any(Customer.class), any(Long.class));	
		
	}
	
}
