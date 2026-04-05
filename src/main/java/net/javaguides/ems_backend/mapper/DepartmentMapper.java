package net.javaguides.ems_backend.mapper;

import net.javaguides.ems_backend.dto.DepartmentDto;
import net.javaguides.ems_backend.dto.EmployeeDto;
import net.javaguides.ems_backend.entity.Department;
import net.javaguides.ems_backend.entity.Employee;

public class DepartmentMapper {
    public  static DepartmentDto mapToDepartmentDto(Department department){
        return new DepartmentDto(
                department.getId(),
                department.getDepartmentname(),
                department.getDepartmentdiscription()


        );
    }

    public  static  Department maptoDepartment(DepartmentDto departmentDto){
        return  new Department(
                departmentDto.getId(),
                departmentDto.getDepartmentname(),
                departmentDto.getDepartmentdiscription()
        );
    }
}
