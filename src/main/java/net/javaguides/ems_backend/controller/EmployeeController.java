package net.javaguides.ems_backend.controller;


import lombok.AllArgsConstructor;
import net.javaguides.ems_backend.dto.EmployeeDto;
import net.javaguides.ems_backend.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("api/employees")
public class EmployeeController {

    private EmployeeService employeeService;
    //Build add employeeREStAPI
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee( @RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee=employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    //build get employee REST API
@GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeByID( @PathVariable("id") Long employeeID) {
        EmployeeDto employeeDto=employeeService.getEmployeeByID(employeeID);
        return ResponseEntity.ok(employeeDto);
    }

    //buid get all employes REST API
@GetMapping
    public ResponseEntity<List<EmployeeDto>> getEmployees(){
       List<EmployeeDto> employees= employeeService.getEmployees();
       return  ResponseEntity.ok(employees);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto>updateEmployee( @PathVariable("id") Long employeeId,
                                                      @RequestBody EmployeeDto updateEmployee){
            EmployeeDto employeeDto =employeeService.updateEmployee(employeeId,updateEmployee);
        return ResponseEntity.ok(employeeDto);
    }

    //build delete employeeREST API
@DeleteMapping("{id}")
    public ResponseEntity<String>deleteEmploye( @PathVariable("id") Long employeeId){
               employeeService.deleteEmploye(employeeId);
               return ResponseEntity.ok("employee deleted succussfully");
    }
}
