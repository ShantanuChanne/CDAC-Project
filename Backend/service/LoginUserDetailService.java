package com.app.appointment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.app.appointment.entity.Hospital;
import com.app.appointment.entity.Patient;
import com.app.appointment.repo.HospitalRepository;
import com.app.appointment.repo.PatientRepository;

@Service
public class LoginUserDetailService implements UserDetailsService{
	
	@Autowired
	private HospitalRepository hospitalRepository;
	@Autowired
	private PatientRepository patientRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Patient patient = patientRepository.findByEmail(username).orElseThrow(() -> new RuntimeException("User not Found !!"));
		if (patient != null) {
			return patient;
		}
		
		Hospital hospital = hospitalRepository.findByEmail(username).orElseThrow(() -> new RuntimeException("User not Found !!"));
		if (hospital != null) {
			return hospital;
		}
		
		throw new UsernameNotFoundException("User not found with email: " + username);
	}
}
