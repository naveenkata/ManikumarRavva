package com.retail.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.retail.DTO.ErrorCategoryDTO;
import com.retail.DTO.StudentDTO;
import com.retail.services.ErrorCategoryService;

@RestController
@RequestMapping("/ErrorCategory")
public class ErrorCategoryController {

	
	
	@Autowired
	private ErrorCategoryService errorCategoryService;
	

	@GetMapping("/studentDetails")
	public List<StudentDTO> selectMany()
	{
		return errorCategoryService.selectMany();
	}
	
	@GetMapping("/errorCategoryDetails")
	public List<ErrorCategoryDTO> selectAll()
	{
		return errorCategoryService.selectAll();
	}
	
	/*@PostMapping("/add")
   public List<Object> loadErrorCategory(@Valid @RequestBody ErrorCategoryDTO insertlist,BindingResult bindingResult) 
   {
		if (bindingResult.hasErrors()) {
			
            return "error  in the  input";
        }
		//errorCategoryService.
		return (Object) insertlist;
   }*/
	
	@GetMapping("/insert")
	public  String createErrorCategory(@RequestBody ErrorCategoryDTO insertList)
	{
		  if(errorCategoryService.createErrorCategory(insertList))
		  {
			  return "Insert Success";
		  }
		  else 
		  {
			  return "Insert Failure";
		  }
	}
	
}
