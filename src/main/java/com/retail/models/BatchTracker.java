package com.retail.models;

import java.util.Date;

public class BatchTracker {

	private Integer batchTrackerID;
	private  Date reportedTime;
	public Integer getBatchTrackerID() {
		return batchTrackerID;
	}
	public void setBatchTrackerID(Integer batchTrackerID) {
		this.batchTrackerID = batchTrackerID;
	}
	public Date getReportedTime() {
		return reportedTime;
	}
	public void setReportedTime(Date reportedTime) {
		this.reportedTime = reportedTime;
	} 
}
