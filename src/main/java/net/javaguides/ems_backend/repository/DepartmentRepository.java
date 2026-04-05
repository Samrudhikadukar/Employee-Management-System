package net.javaguides.ems_backend.repository;

import net.javaguides.ems_backend.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository  extends JpaRepository<Department,Long> {
}
