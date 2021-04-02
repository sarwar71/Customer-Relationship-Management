package com.bjit.crm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bjit.crm.services.MasterDataService;

@RestController
@RequestMapping("api/master")
@CrossOrigin
public class MasterDataController {

	@Autowired
	private MasterDataService masterService;
	
	@GetMapping("/tags")
	public Iterable<String> getAllTags(){
		return masterService.findAllTags();
	}
	
	@GetMapping("/state")
	public Iterable<String> getAllStates(){
		return masterService.findAllStates();
	}
	
	@GetMapping("/country")
	public Iterable<String> getAllCountries(){
		return masterService.findAllCountries();
	}
	
	@GetMapping("/language")
	public Iterable<String> getAllLanguages(){
		return masterService.findAllLanguages();
	}
	
	@GetMapping("/title")
	public Iterable<String> getAllTitles(){
		return masterService.findAllTitles();
	}
}
