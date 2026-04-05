package net.javaguides.ems_backend.service;

import net.javaguides.ems_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeByID(Long employeeID);

    List<EmployeeDto> getEmployees();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee);

    void  deleteEmploye(Long employeeId);

}
