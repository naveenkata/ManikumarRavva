package com.retail.services;

import java.util.List;

import com.retail.DTO.EnrollmentTransactionSummaryDTO;
import com.retail.DTO.ErrorDescriptionSummaryDTO;
public interface EnrollmentServices {
	
	
	
	List<EnrollmentTransactionSummaryDTO> getEnrollmentSummary(String fromDate,String toDate);
	List<ErrorDescriptionSummaryDTO> getErrorDescriptionSummary(String transactionTypeId,String fromDate,String toDate);
	
}
