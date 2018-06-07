package com.retail.mappers;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.retail.models.ErrorCategory;

@Mapper
public interface ErrorCategoryMapper {

	@Select("<script>"
			+ "select * from RetailDashboard.ErrorCategory where  status='Active'"
			+ "</script> ")
	List<ErrorCategory> selectAll() ;

	@Insert( "<script> INSERT into "
			+ " retaildashboard.errorcategory(errortype,description ,targetdate  ,createddate , updateddate , createdby ,updatedby ,status) "
			+ " values( #{errorType,jdbcType=VARCHAR},#{description,jdbcType=VARCHAR},#{targetDate,jdbcType=TIMESTAMP},#{createdDate,jdbcType=TIMESTAMP},#{updatedDate,jdbcType=TIMESTAMP},"
			+ " #{createdBy,jdbcType=VARCHAR},#{UpdatedBy,jdbcType=VARCHAR}, #{status,jdbcType=VARCHAR})"
			+ "</script>")
		
	//@SelectKey(statement = "SELECT LAST_INSERT_ID()", keyProperty = "errorCategoryId", before = false, resultType = Integer.class)
	void addErrorCategory(ErrorCategory insertList) throws SQLException;

	
	@Update("<script>"
			+ "update  RetailDashboard.ErrorCategory "
			+" set description= #{description,jdbcType=VARCHAR},status=#{status,jdbcType=VARCHAR} WHERE ErrorCategoryid =#{errorCategoryId,jdbcType=BIGINT};"
			+ "</script> ")
	void updateErrorCategory(ErrorCategory updateList) throws SQLException;
	
	
}
