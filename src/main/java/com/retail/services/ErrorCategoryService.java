package com.retail.services;

import java.util.List;

import com.retail.DTO.ErrorCategoryDTO;
import com.retail.DTO.StudentDTO;

public interface ErrorCategoryService {

	List<StudentDTO> selectMany();
	List<ErrorCategoryDTO> selectAll();
	Boolean createErrorCategory(ErrorCategoryDTO insertList);	
  
}
