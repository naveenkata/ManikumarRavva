package com.retail.DAO;

import java.util.List;

import com.retail.models.ErrorCategory;

public interface ErrorCategoryDAO {

	
	List<ErrorCategory> selectAll();
	Boolean addErrorCategory(ErrorCategory insertList);
	Boolean updateErrorCategory(ErrorCategory updatelist);
}
