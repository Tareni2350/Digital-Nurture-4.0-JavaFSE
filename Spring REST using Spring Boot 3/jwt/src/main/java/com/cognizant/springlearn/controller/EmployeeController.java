package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Employee;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @RequestMapping("/employees")
    public List<Employee> getAllEmployees() {
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        List<Employee> employeeList = (List<Employee>) context.getBean("employeeList");
        return employeeList;
    }

    @RequestMapping("/employee/{id}")
    public Employee getEmployee(@PathVariable String id) {
        ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        List<Employee> employeeList = (List<Employee>) context.getBean("employeeList");

        for (Employee emp : employeeList) {
            if (emp.getId().equals(id)) {
                return emp;
            }
        }
        return null; // Or throw exception
    }
}
