package com.retail.models;

import java.util.Date;

import org.springframework.stereotype.Component;


@Component
public class ErrorCategory {

    Integer errorCategoryId;
    String errorType;
    String Description;
    Date   targetDate;
    Date   createdDate;
    Date   updatedDate;
    String createdBy;
    String   UpdatedBy;
    String status;
	public Integer getErrorCategoryId() {
		return errorCategoryId;
	}
	public void setErrorCategoryId(Integer errorCategoryId) {
		this.errorCategoryId = errorCategoryId;
	}
	public String getErrorType() {
		return errorType;
	}
	public void setErrorType(String errorType) {
		this.errorType = errorType;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	public Date getUpdatedDate() {
		return updatedDate;
	}
	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public String getUpdatedBy() {
		return UpdatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		UpdatedBy = updatedBy;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
    
    
}
