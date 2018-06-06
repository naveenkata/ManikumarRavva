package com.retail.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.retail.DAO.EnrollmentDao;
import com.retail.DTO.EnrollmentTransactionSummaryDTO;
import  com.retail.DTO.ErrorDescriptionSummaryDTO;
import com.retail.services.EnrollmentServices;
@Service
public class EnrollmentServiceImpl  implements EnrollmentServices {
	
	@Autowired
	private EnrollmentDao enrollmentDao;
	
	

	
	@Override
	@Transactional
    public  List<EnrollmentTransactionSummaryDTO> getEnrollmentSummary(String fromDate,String toDate)
	 {
		//validations Need To be  Performed
		
		return enrollmentDao.getEnrollmentTransactionSummary(fromDate,toDate);
	 }
	
	@Override
	public List<ErrorDescriptionSummaryDTO> getErrorDescriptionSummary(String transactionTypeId,String fromDate,String toDate)
	{
		
		return enrollmentDao.getErrorDescriptionSummary(transactionTypeId,fromDate,toDate);
	}
	
}
