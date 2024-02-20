package com.app.appointment.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.app.appointment.entity.Hospital;

public interface HospitalRepository extends MongoRepository<Hospital, Integer>{
	public Optional<Hospital> findByEmail(String email);
}
