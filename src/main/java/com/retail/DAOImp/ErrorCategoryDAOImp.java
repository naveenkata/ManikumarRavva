package com.retail.DAOImp;

import static com.retail.DynamicSqlTables.ErrorCategoryDynamicSqlSupport.Name;
import static com.retail.DynamicSqlTables.ErrorCategoryDynamicSqlSupport.id;
import static com.retail.DynamicSqlTables.ErrorCategoryDynamicSqlSupport.studentTable;
import static org.mybatis.dynamic.sql.SqlBuilder.select;

import java.sql.SQLException;
import java.util.List;

import org.mybatis.dynamic.sql.render.RenderingStrategy;
import  org.mybatis.dynamic.sql.select.render.SelectStatementProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.retail.DAO.ErrorCategoryDAO;
import com.retail.DTO.ErrorCategoryDTO;
import com.retail.DTO.StudentDTO;
import com.retail.mappers.ErrorCategoryMapper;


@Repository
public class ErrorCategoryDAOImp implements  ErrorCategoryDAO {

	@Autowired
	ErrorCategoryMapper errorCategoryMapper;
	
	
	public  List<StudentDTO> selectMany()
	{
		
		 SelectStatementProvider selectStatement = select(id,Name)
                 .from(studentTable)
                 .build()
                 .render(RenderingStrategy.MYBATIS3);
		
		 List<StudentDTO> errorCategoryDetails= errorCategoryMapper.selectMany(selectStatement);
		 return errorCategoryDetails;
	}
	
	public 	List<ErrorCategoryDTO> selectAll()
	{
		return errorCategoryMapper.selectAll();
	}
	
	public Boolean createErrorCategory(ErrorCategoryDTO insertList) 
	{
		 
		try{ 
		  errorCategoryMapper.insertErrorCategory(insertList);
		
		 }
		catch(SQLException e)
		{
			e.printStackTrace();
			return false;
		}
	  return true;
		
	}
	
}
