package com.retail.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping(value="/")
	public String getIndex()
	{
		System.out.println("welcome index....");
		return "index";
	}
}
