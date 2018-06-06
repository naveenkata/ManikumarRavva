package com.retail.DAOImp;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.retail.DAO.EnrollmentDao;
import com.retail.DTO.EnrollmentTransactionSummaryDTO;
import com.retail.DTO.ErrorDescriptionSummaryDTO;


@Repository
public class EnrollmentDaoImpl implements EnrollmentDao{
	

	@Autowired
   private JdbcTemplate jdbcTemplate;
	

	
	
	//Read
	@Override
	public  List<EnrollmentTransactionSummaryDTO> getEnrollmentTransactionSummary(String fromDate,String toDate)
	{
		    
	            String readSql="SELECT SOURCESYSTEM ,REPORTINGSYSTEM ,TRIGGEREDCOUNT ,REACHEDCOUNT  ,SUCCESSCOUNT ,ERROREDCOUNT "
	      		+ " FROM BATCHTRACKER  as BT INNER JOIN BATCHTRACKERSUMMARY as BTS INNER JOIN  TRANSACTIONTYPE  as TT "+
	      	     " ON BT.BATCHTRACKERID =BTS .BATCHTREACKERID AND  TT.TRANSACTIONTYPEID =BTS .TRANSACTIONTYPEID "+
	      		" AND "+ fromDate+"'<BT.REPORTEDTIME AND '"+toDate+"'>BT.REPORTEDTIME ";
	      
	           
		    return  (List<EnrollmentTransactionSummaryDTO>) jdbcTemplate.query(readSql,(rs,rowNum)->{
		    	
			            	EnrollmentTransactionSummaryDTO  enrollmentTransactionSummaryDTO=new EnrollmentTransactionSummaryDTO();
			            	enrollmentTransactionSummaryDTO.setSourceSystem(rs.getString("SOURCESYSTEM"));
			            	enrollmentTransactionSummaryDTO.setReportingSystem(rs.getString("REPORTINGSYSTEM"));
			            	enrollmentTransactionSummaryDTO.setTriggeredCount(rs.getInt("TRIGGEREDCOUNT"));
			            	enrollmentTransactionSummaryDTO.setReachedCount(rs.getInt("REACHEDCOUNT"));
			            	enrollmentTransactionSummaryDTO.setSuccessCount(rs.getInt("SUCCESSCOUNT"));
			            	enrollmentTransactionSummaryDTO.setErroredCount(rs.getInt("ERROREDCOUNT"));
							return enrollmentTransactionSummaryDTO;
			          });
	}
	
	@Override
	public List<ErrorDescriptionSummaryDTO> getErrorDescriptionSummary(String transactionTypeId,String fromDate,String toDate)
	{
		String Sql="SELECT * from BatchTracker as BT INNER JOIN BatchtrackerSummary Inner Join ErrorCategorySummary"
				+ "   Inner  join ErrorCategory INNER JOIN ErrorDetails"
				+ " ON batchTrackerID=bt.batchTrackerID AND  "+ fromDate+"'<BT.REPORTEDTIME AND "+toDate+">BT.REPORTEDTIME AND "
						;
		return null;
	}
}