package com.app.appointment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.appointment.entity.Patient;
import com.app.appointment.repo.PatientRepository;

@Service
public class PatientService {
	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public List<Patient> getUsers() {
		return patientRepository.findAll();
	}
	
	public Patient addHospital(Patient patient) {
		patient.setPassword(passwordEncoder.encode(patient.getPassword()));
		return patientRepository.save(patient);
	}
}
