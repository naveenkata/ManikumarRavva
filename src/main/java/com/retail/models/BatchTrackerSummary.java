package com.retail.models;

public class BatchTrackerSummary {

	private Integer  batchTrackerSummaryID;
	private TransactionType  transactionTypeId;
	private BatchTracker     BatchTracker;
	private Integer triggeredCount;
	private Integer successCount;
	private Integer erroredCount;
	private Integer reachedCount;
	public Integer getBatchTrackerSummaryID() {
		return batchTrackerSummaryID;
	}
	public void setBatchTrackerSummaryID(Integer batchTrackerSummaryID) {
		this.batchTrackerSummaryID = batchTrackerSummaryID;
	}
	public TransactionType getTransactionTypeId() {
		return transactionTypeId;
	}
	public void setTransactionTypeId(TransactionType transactionTypeId) {
		this.transactionTypeId = transactionTypeId;
	}
	public BatchTracker getBatchTracker() {
		return BatchTracker;
	}
	public void setBatchTracker(BatchTracker batchTracker) {
		BatchTracker = batchTracker;
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
