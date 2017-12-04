package com.database.db_project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class DbProjectApplication extends SpringBootServletInitializer {
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(DbProjectApplication.class);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(DbProjectApplication.class, args);
	}
}
