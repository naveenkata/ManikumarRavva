package com.retail;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@Configuration
@EnableSwagger2
public class AppConfiguration {

	
	@Value("${spring.datasource.driver-class-name}")
	private String driverClassName;
	
	@Value("${spring.datasource.url}")
	private String url;
	
	
	@Value("${spring.datasource.username}")
	private String userName;
	
	
	@Value("${spring.datasource.password}")
	private String password;
	
	
	
	 @Bean
	 public DataSource dataSource() {
	        DriverManagerDataSource dataSource = new DriverManagerDataSource();
	        dataSource.setDriverClassName(driverClassName);
	        dataSource.setUrl(url);
	        dataSource.setUsername(userName);
	        dataSource.setPassword(password);
	        return dataSource;
	    }
	 
	   @Bean
	   public DataSourceTransactionManager transactionManager() {
	     return new DataSourceTransactionManager(dataSource());
	   }

	   @Bean
	   public SqlSessionFactory sqlSessionFactory() throws Exception {
	     SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
	     sessionFactory.setDataSource(dataSource());
	     return sessionFactory.getObject();
	   }
	   
	   @Bean
	    public Docket api() { 
	        return new Docket(DocumentationType.SWAGGER_2)  
	          .select()                                  
	          .apis(RequestHandlerSelectors.any())              
	          .paths(PathSelectors.any())                          
	          .build();                                           
	    }

}
