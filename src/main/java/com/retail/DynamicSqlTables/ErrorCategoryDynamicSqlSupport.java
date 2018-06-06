package com.retail.DynamicSqlTables;

import java.sql.JDBCType;

import org.mybatis.dynamic.sql.SqlColumn;
import org.mybatis.dynamic.sql.SqlTable;

public class ErrorCategoryDynamicSqlSupport {
	
	
	 public static final StudentTable studentTable = new StudentTable();
	
	 public static final SqlColumn<Integer> id = studentTable.id;
	 public static final SqlColumn<String> Name = studentTable.Name;
	    
	    
	  public static final class StudentTable extends SqlTable
	  {
    public  final SqlColumn<Integer>  id = column("id", JDBCType.INTEGER);
    public  final SqlColumn<String> Name = column("name", JDBCType.VARCHAR);
    
    public StudentTable() {
        super("Student");
    }
      
 }
	  
}

