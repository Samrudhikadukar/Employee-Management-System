package net.javaguides.ems_backend.controller;

import lombok.AllArgsConstructor;
import net.javaguides.ems_backend.dto.DepartmentDto;
import net.javaguides.ems_backend.dto.EmployeeDto;
import net.javaguides.ems_backend.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    private DepartmentService departmentService;

    //Build crate Department REST-API
    @PostMapping

    public ResponseEntity<DepartmentDto> createDepartment( @RequestBody DepartmentDto departmentDto){
         DepartmentDto department= departmentService.createDepartment(departmentDto);
         return  new ResponseEntity<>(department, HttpStatus.CREATED);

    }

    //Build  Department byid  REST-API
@GetMapping("{id}")
    public  ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") long departmentId){
         DepartmentDto departmentDto=departmentService.getDepartmentById(departmentId);
         return ResponseEntity.ok(departmentDto);

    }

    //Build   get all Department   REST-API
    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartments(){
        List<DepartmentDto> departments= departmentService.getAllDepartments();
        return  ResponseEntity.ok(departments);
    }

    //Biud update employee REST-API

    @PutMapping("{id}")
    public ResponseEntity<DepartmentDto>updateDepartment( @PathVariable("id") Long departmentId,
                                                      @RequestBody DepartmentDto updateDepartment){
        DepartmentDto departmentDto =departmentService.updateDepartment(departmentId,updateDepartment);
        return ResponseEntity.ok(departmentDto);
    }
@DeleteMapping("{id}")
    public ResponseEntity<String>deleteDepartment( @PathVariable("id") Long departmentId){
        departmentService.deleteDepartment(departmentId);
        return ResponseEntity.ok("department deleted succussfully");
    }
}
