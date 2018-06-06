package com.retail.DTO;

public class ErrorDescriptionSummaryDTO {

	 
	private String  errorDescription;
	private String  erroredCount;
	private String  resolvedCount;
	 
	 
	public String getErrorDescription() {
		return errorDescription;
	}
	public void setErrorDescription(String errorDescription) {
		this.errorDescription = errorDescription;
	}
	public String getErroredCount() {
		return erroredCount;
	}
	public void setErroredCount(String erroredCount) {
		this.erroredCount = erroredCount;
	}
	public String getResolvedCount() {
		return resolvedCount;
	}
	public void setResolvedCount(String resolvedCount) {
		this.resolvedCount = resolvedCount;
	}
}
