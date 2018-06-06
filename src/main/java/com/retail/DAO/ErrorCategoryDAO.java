package com.retail.DAO;

import java.util.List;

import com.retail.DTO.ErrorCategoryDTO;
import com.retail.DTO.StudentDTO;

public interface ErrorCategoryDAO {

	List<StudentDTO> selectMany();
	List<ErrorCategoryDTO> selectAll();
	Boolean createErrorCategory(ErrorCategoryDTO insertList);
}
