package com.retail.controllers;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class MemberUpdateController {

	@RequestMapping("/memberUpdate")
	public  String print()
	{
		return "In MemberUpdate Controller";
	}
}
