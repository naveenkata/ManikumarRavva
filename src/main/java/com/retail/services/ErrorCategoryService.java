package com.retail.services;

import java.util.List;
import java.util.Map;

import com.retail.models.ErrorCategory;

public interface ErrorCategoryService {

	
	 Map<String,List<ErrorCategory>> selectAll();
	Boolean addErrorCategory(ErrorCategory insertList);	
    Boolean updateErrorCategory(ErrorCategory updatelist);
}
