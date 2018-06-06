package com.retail.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.retail.DAO.ErrorCategoryDAO;
import com.retail.DTO.ErrorCategoryDTO;
import com.retail.DTO.StudentDTO;
import com.retail.services.ErrorCategoryService;



@Service
public class ErrorCategoryServiceImp implements ErrorCategoryService {

	@Autowired
	private ErrorCategoryDAO errorCategoryDao;
	
	
	public  List<StudentDTO> selectMany()
	{
		return errorCategoryDao.selectMany();
	}
	public List<ErrorCategoryDTO> selectAll()
	{
		
		return errorCategoryDao.selectAll();
	}

	public  Boolean createErrorCategory(ErrorCategoryDTO insertList)
	{
		  if(errorCategoryDao.createErrorCategory(insertList))
		  {
			  return true;
		  }
		   return false;
		
	}
}
