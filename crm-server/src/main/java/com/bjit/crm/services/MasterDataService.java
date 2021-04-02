package com.bjit.crm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bjit.crm.repositories.IMasterDataRepository;

@Service
public class MasterDataService {

	@Autowired
	IMasterDataRepository masterRepository;
	
	public Iterable<String> findAllTags(){
		return masterRepository.findAllTags();
	}
	
	public Iterable<String> findAllStates(){
		return masterRepository.findAllState();
	}
	
	public Iterable<String> findAllCountries(){
		return masterRepository.findAllCountry();
	}
	
	public Iterable<String> findAllLanguages(){
		return masterRepository.findAllLanguage();
	}
	
	public Iterable<String> findAllTitles(){
		return masterRepository.findAllTitle();
	}
}
