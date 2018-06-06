package com.retail.serviceImp;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.retail.DAO.ErrorCategoryDAO;
import com.retail.models.ErrorCategory;
import com.retail.services.ErrorCategoryService;



@Service
public class ErrorCategoryServiceImp implements ErrorCategoryService {

	@Autowired
	private ErrorCategoryDAO errorCategoryDao;
	
	
	
	public Map<String,List<ErrorCategory>> selectAll()
	{
		Map<String ,List<ErrorCategory>> map=new HashMap<>();
		map.put("data",errorCategoryDao.selectAll());
		
		return map;
	}

	public  Boolean addErrorCategory(ErrorCategory insertList)
	{
		
				errorCategoryDao.addErrorCategory(insertList);
				
		 if(insertList.getErrorCategoryId()!=null)		
		
			 {
			   System.out.println("success");
			   return true;
			 }
		 else
		 {
			 return false;
		 }
		  
		
	}
	public Boolean updateErrorCategory(ErrorCategory updatelist)
	{
		
		return null;
	}
}
