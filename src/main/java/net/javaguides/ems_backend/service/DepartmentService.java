package net.javaguides.ems_backend.service;

import net.javaguides.ems_backend.dto.DepartmentDto;

import java.util.List;

public interface DepartmentService {
    DepartmentDto createDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentById(long departmentId);

    List<DepartmentDto> getAllDepartments();

    DepartmentDto updateDepartment(long depertmentId, DepartmentDto updatedepartment);

    void  deleteDepartment(long departmentId);
}
