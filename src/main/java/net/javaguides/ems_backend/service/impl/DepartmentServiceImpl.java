package net.javaguides.ems_backend.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.ems_backend.dto.DepartmentDto;
import net.javaguides.ems_backend.entity.Department;
import net.javaguides.ems_backend.entity.Employee;
import net.javaguides.ems_backend.exception.ResourceNotFoundException;
import net.javaguides.ems_backend.mapper.DepartmentMapper;
import net.javaguides.ems_backend.mapper.EmployeeMapper;
import net.javaguides.ems_backend.repository.DepartmentRepository;
import net.javaguides.ems_backend.service.DepartmentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl  implements DepartmentService {

    private DepartmentRepository departmentRepository;
    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department= DepartmentMapper.maptoDepartment(departmentDto);
         Department savedDepartment=departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(long departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department not exist with id: " + departmentId));
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();

        return departments.stream()
                .map(department -> DepartmentMapper.mapToDepartmentDto(department))
                .collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(long depertmentId, DepartmentDto updatedepartment) {
        Department department=departmentRepository.findById(depertmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + depertmentId));
        department.setDepartmentname(updatedepartment.getDepartmentname());
        department.setDepartmentdiscription(updatedepartment.getDepartmentdiscription());
        Department updatedDepartmentObj= departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(updatedDepartmentObj);
    }

    @Override
    public void deleteDepartment(long departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department not exist with id: " + departmentId));

        departmentRepository.deleteById(departmentId);
    }
}
