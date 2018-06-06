package com.retail.controllers;

import org.springframework.web.bind.annotation.RestController;  
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/auditReport")
public class AuditReportController {

	@RequestMapping("/load") 
	public  String print()
	{
		 return " in auditReportontroller";
	}
}
