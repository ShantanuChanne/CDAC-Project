package com.app.appointment.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.appointment.entity.Hospital;
import com.app.appointment.entity.JwtResponse;
import com.app.appointment.entity.Login;
import com.app.appointment.entity.Patient;
import com.app.appointment.security.JwtHelper;
import com.app.appointment.service.HospitalService;
import com.app.appointment.service.SequenceGeneratorService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hospital")
public class HospitalController {
	
	@Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager manager;
    
    @Autowired
    private HospitalService hospitalService;
    
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;


    @Autowired
    private JwtHelper helper;

    private Logger logger = LoggerFactory.getLogger(HospitalController.class);
    
    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody Login login) throws Exception{

        this.doAuthenticate(login.getEmail(), login.getPassword());


        UserDetails userDetails = userDetailsService.loadUserByUsername(login.getEmail());
        String token = this.helper.generateToken(userDetails);

        JwtResponse response = JwtResponse.builder()
                .jwtToken(token)
                .username(userDetails.getUsername()).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    
    private void doAuthenticate(String email, String password) {

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        try {
            manager.authenticate(authentication);


        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(" Invalid Username or Password  !!");
        }

    }
    
    @PostMapping("/save")
    public Hospital addHospital(@RequestBody Hospital hospital) {
    	hospital.set_id(sequenceGeneratorService.getSequenceNumber(Patient.SEQUENCE_NAME));
    	return hospitalService.addHospital(hospital);
    }
}
