package com.retail.mappers;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.type.JdbcType;
import org.mybatis.dynamic.sql.select.render.SelectStatementProvider;
import org.mybatis.dynamic.sql.util.SqlProviderAdapter;

import com.retail.DTO.ErrorCategoryDTO;
import com.retail.DTO.StudentDTO;

@Mapper
public interface ErrorCategoryMapper {

    @SelectProvider(type=SqlProviderAdapter.class, method="select")
    
    @Results(id="ErrorCategoryDetails", value= {
            @Result(column="ID", property="id", jdbcType=JdbcType.INTEGER),
            @Result(column="NAME", property="Name", jdbcType=JdbcType.VARCHAR),
        
    })
            List<StudentDTO> selectMany(SelectStatementProvider  selectStatement);
	
    
    @Select("select * from RetailDashboard.ErrorCategory")
	List<ErrorCategoryDTO> selectAll();
 
    @Insert(" INSERT into "
    		+" retaildashboard.errorcategory(errortype,description ,targetdate  ,createddate , updateddate , createdby ,updatedby ,status) "
    		+ " values( #{errorType},#{description},TimeStamp(#{targetDate}),TimeStamp(#{createdDate}),TimeStamp(#{updatedDate}), #{createdBy},#{UpdatedBy}, #{status}")          
    void  insertErrorCategory(ErrorCategoryDTO insertList) throws SQLException;
    
    
}
