package com.retail.DAO;

import java.util.List;

import com.retail.DTO.EnrollmentTransactionSummaryDTO;
import com.retail.DTO.ErrorDescriptionSummaryDTO;


public interface EnrollmentDao {
	
	
    List<EnrollmentTransactionSummaryDTO> getEnrollmentTransactionSummary(String fromDate,String toDate);
    List<ErrorDescriptionSummaryDTO> getErrorDescriptionSummary(String transactionTypeId,String fromDate,String toDate);
}
