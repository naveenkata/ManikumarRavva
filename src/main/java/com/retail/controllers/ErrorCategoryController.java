package com.retail.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.retail.models.ErrorCategory;
import com.retail.services.ErrorCategoryService;

@RestController
@RequestMapping("/ErrorCategory")
public class ErrorCategoryController {

	@Autowired
	private ErrorCategoryService errorCategoryService;

	@GetMapping("/load")
	public Map<String, List<ErrorCategory>> selectAll() {
		return errorCategoryService.selectAll();
	}

	@PostMapping("/add")
	public String addErrorCategory(@RequestBody ErrorCategory errorCategory) {
		
		if (errorCategoryService.addErrorCategory(errorCategory)) {
			return "Insert Success";
		} else {
			return "Insert Failure";
		}
	}

	@PutMapping("/update")
	public String updateErrorCategory(@RequestBody ErrorCategory errorCategory) {
		final Boolean status;
		if ((errorCategory !=null) && (errorCategory.getErrorCategoryId())!=null) {
			status = errorCategoryService.updateErrorCategory(errorCategory);

			if (status) {
				return "update Successful!";
			}

		}
		return "operation failed!";
	}

}
