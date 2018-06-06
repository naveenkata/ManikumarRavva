package com.retail.controllers;

import org.springframework.web.bind.annotation.RestController;  
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class MemberSearchController {

	@RequestMapping("/memberSearch")
   public	String  print()
   {
	   return "in member Search Controller";
   }
}
