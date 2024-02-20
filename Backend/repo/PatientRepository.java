package com.app.appointment.repo;


import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import com.app.appointment.entity.Patient;

@Repository
public interface PatientRepository extends MongoRepository<Patient, Integer>{
	Optional<Patient> findByEmail(String email);
	
}
