package com.app.appointment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.appointment.entity.Hospital;
import com.app.appointment.repo.HospitalRepository;

@Service
public class HospitalService {
	
	@Autowired
	private HospitalRepository hospitalRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public List<Hospital> getUsers() {
		return hospitalRepository.findAll();
	}
	
	public Hospital addHospital(Hospital hospital) {
		hospital.setPassword(passwordEncoder.encode(hospital.getPassword()));
		return hospitalRepository.save(hospital);
	}
	
}
