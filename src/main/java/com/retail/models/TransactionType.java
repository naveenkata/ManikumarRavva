package com.retail.models;

public class TransactionType {

   private	Integer transactionTypeID;
   private String type;
   private String sourceSystem;
   private String reportingSystem;
public Integer getTransactionTypeID() {
	return transactionTypeID;
}
public void setTransactionTypeID(Integer transactionTypeID) {
	this.transactionTypeID = transactionTypeID;
}
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
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
   
   
}
