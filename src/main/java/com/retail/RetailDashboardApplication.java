package com.retail;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@MapperScan("com.retail.mappers")
@EnableTransactionManagement
public class RetailDashboardApplication {

	public static void main(String[] args) {
		SpringApplication.run(RetailDashboardApplication.class, args);
	}
}
