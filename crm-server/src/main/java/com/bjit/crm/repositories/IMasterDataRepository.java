package com.bjit.crm.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bjit.crm.models.MasterData;

public interface IMasterDataRepository extends JpaRepository<MasterData, Long>{		
	    
	    @Query(value = "SELECT tags  FROM master where tags is not null", nativeQuery = true)
	    List<String> findAllTags();
	    
	    @Query(value = "SELECT state FROM master where state is not null", nativeQuery = true)
	    List<String> findAllState();
	    
	    @Query(value = "SELECT country FROM master where country is not null", nativeQuery = true)
	    List<String> findAllCountry();
	    
	    @Query(value = "SELECT language FROM master where language is not null", nativeQuery = true)
	    List<String> findAllLanguage();
	    
	    @Query(value = "SELECT title FROM master where title is not null", nativeQuery = true)
	    List<String> findAllTitle();
}
