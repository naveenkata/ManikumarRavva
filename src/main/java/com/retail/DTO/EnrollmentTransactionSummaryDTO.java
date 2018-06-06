package com.retail.DTO;

public class EnrollmentTransactionSummaryDTO {

	private String  transactionTypeId;
	private String sourceSystem;
	private String reportingSystem;
	private Integer triggeredCount;
	private Integer successCount;
	private Integer erroredCount;
	private Integer reachedCount;
	
	//private Integer Outstanding;
	
	public String getTransactionTypeId() {
		return transactionTypeId;
	}
	public void setTransactionTypeId(String transactionTypeId) {
		this.transactionTypeId = transactionTypeId;
	}
	public String getSourceSystem() {
		return sourceSystem;
	}
	public void setSourceSystem(String sourceSystem) {
		this.sourceSystem = sourceSystem;
	}
	public String getReportingSystem() {
		return reportingSystem;
	}
	public void setReportingSystem(String reportingSystem) {
		this.reportingSystem = reportingSystem;
	}
	public Integer getTriggeredCount() {
		return triggeredCount;
	}
	public void setTriggeredCount(Integer triggeredCount) {
		this.triggeredCount = triggeredCount;
	}
	public Integer getSuccessCount() {
		return successCount;
	}
	public void setSuccessCount(Integer successCount) {
		this.successCount = successCount;
	}
	public Integer getErroredCount() {
		return erroredCount;
	}
	public void setErroredCount(Integer erroredCount) {
		this.erroredCount = erroredCount;
	}
	public Integer getReachedCount() {
		return reachedCount;
	}
	public void setReachedCount(Integer reachedCount) {
		this.reachedCount = reachedCount;
	}
	
	 
}
