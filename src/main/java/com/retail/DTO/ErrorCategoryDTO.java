package com.retail.DTO;

import java.util.Date;

public class ErrorCategoryDTO {
	
      
	    private Integer errorCategoryId;
	    private String errorType;
	    private String description;
	    private Date   targetDate;
	    private Date   createdDate;
	    private Date   updatedDate;
	    private String createdBy;
	   private String   UpdatedBy;
	    private String status;
	    
	    private String  errorMessage;
	    
		public String getErrorMessage() {
			return errorMessage;
		}
		public void setErrorMessage(String errorMessage) {
			this.errorMessage = errorMessage;
		}
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
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
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
