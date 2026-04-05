package net.javaguides.ems_backend.mapper;

import net.javaguides.ems_backend.dto.EmployeeDto;
import net.javaguides.ems_backend.entity.Employee;

public class EmployeeMapper {

    public  static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstname(),
                employee.getLastname(),
                employee.getEmail(),
                employee.getDepartment().getId()
        );
    }

    public static Employee maptoEmployee(EmployeeDto employeeDto){
        Employee employee = new Employee();
        employee.setId(employeeDto.getId());
        employee.setFirstname(employeeDto.getFirstname());
        employee.setLastname(employeeDto.getLastname());   // ✅ FIX
        employee.setEmail(employeeDto.getEmail());         // ✅ FIX
        return employee;
    }
}
