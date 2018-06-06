package com.retail.mappers;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;
import org.apache.ibatis.annotations.Update;

import com.retail.models.ErrorCategory;

@Mapper
public interface ErrorCategoryMapper {

	@Select("select * from RetailDashboard.ErrorCategory where  status='Active' ")
	List<ErrorCategory> selectAll() throws SQLException;

	@Insert( " INSERT into "
			+ " retaildashboard.errorcategory(errortype,description ,targetdate  ,createddate , updateddate , createdby ,updatedby ,status) "
			+ " values( #{errorType},#{description},#{targetDate},#{createdDate},#{updatedDate},"
			+ " #{createdBy},#{UpdatedBy}, #{status})")
		
	@SelectKey(statement = "SELECT LAST_INSERT_ID()", keyProperty = "errorCategoryId", before = false, resultType = Integer.class)
	void addErrorCategory(ErrorCategory insertList) throws SQLException;

	
	@Update("update  RetailDashboard.ErrorCategory "
			+" set description= #{description},status=#{status} WHERE ErrorCategoryid =#{errorCategoryId}; ")
	void updateErrorCategory(ErrorCategory updateList) throws SQLException;
	
	
}
