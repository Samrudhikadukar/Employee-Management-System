package net.javaguides.ems_backend.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.ems_backend.dto.EmployeeDto;
import net.javaguides.ems_backend.entity.Department;
import net.javaguides.ems_backend.entity.Employee;
import net.javaguides.ems_backend.exception.ResourceNotFoundException;
import net.javaguides.ems_backend.mapper.EmployeeMapper;
import net.javaguides.ems_backend.repository.DepartmentRepository;
import net.javaguides.ems_backend.repository.EmployeeRepository;
import net.javaguides.ems_backend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class EmployeeServiceImpl  implements EmployeeService {
    private EmployeeRepository employeeRepository;
    private DepartmentRepository departmentRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee= EmployeeMapper.maptoEmployee(employeeDto);

        Department department=departmentRepository.findById(employeeDto.getDepartmentId())
                .orElseThrow(()->
                        new ResourceNotFoundException("Department is not exist with id:"+employeeDto.getDepartmentId()));
        employee.setDepartment(department);

         Employee  savedemployee=employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedemployee);
    }

    @Override
    public EmployeeDto getEmployeeByID(Long employeeID) {
        Employee employee = employeeRepository.findById(employeeID)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + employeeID));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getEmployees() {
        List<Employee> employees = employeeRepository.findAll();

        return employees.stream()
                .map(employee -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + employeeId));
        employee.setFirstname(updateEmployee.getFirstname());
        employee.setLastname(updateEmployee.getLastname());
        employee.setEmail(updateEmployee.getEmail());

        Department department=departmentRepository.findById(updateEmployee.getDepartmentId())
                .orElseThrow(()->
                        new ResourceNotFoundException("Department is not exist with id:"+updateEmployee.getDepartmentId()));
        employee.setDepartment(department);

        Employee updatedEmployeeObj= employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmploye(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + employeeId));

        employeeRepository.deleteById(employeeId);
    }


}
