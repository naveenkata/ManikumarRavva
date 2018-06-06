package com.retail.DAOImp;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.retail.DAO.ErrorCategoryDAO;
import com.retail.mappers.ErrorCategoryMapper;
import com.retail.models.ErrorCategory;

@Repository
public class ErrorCategoryDAOImp implements ErrorCategoryDAO {

	@Autowired
	ErrorCategoryMapper errorCategoryMapper;

	public List<ErrorCategory> selectAll() {
		return errorCategoryMapper.selectAll();
	}

	public Boolean addErrorCategory(ErrorCategory insertList) {

		try {
			errorCategoryMapper.addErrorCategory(insertList);
			return true;
		} catch (SQLException e) {

			return false;
		}

	}

}
