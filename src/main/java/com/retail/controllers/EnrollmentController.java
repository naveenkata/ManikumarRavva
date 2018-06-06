package com.retail.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.retail.DTO.EnrollmentTransactionSummaryDTO;
import  com.retail.DTO.ErrorDescriptionSummaryDTO;
import com.retail.services.EnrollmentServices;
@RestController
@RequestMapping("/enrollment")
public class EnrollmentController {
	
	@Autowired
	private EnrollmentServices enrollmentServices;

	
	
	
	@GetMapping("/EnrollmentSummary")
	public List<EnrollmentTransactionSummaryDTO> getEnrollmentSummaryByDate(String fromDate,String toDate)
	{
		
		return enrollmentServices.getEnrollmentSummary("2014-01-14", "2016-01-14");
	
	}
	
	@GetMapping("/ErrorDescriptionSummary")
	public  List<ErrorDescriptionSummaryDTO> getErrorDescriptionSummaryByDate(String transactionTypeId,String fromDate,String toDate,String sourceSystem,String reportingSystem)
	{
		return  enrollmentServices.getErrorDescriptionSummary( transactionTypeId,fromDate,toDate);
	    
	}
}
