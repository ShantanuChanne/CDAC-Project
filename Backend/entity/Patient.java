package com.app.appointment.entity;

import java.util.Collection;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "patient")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Patient implements UserDetails{
	
	@Transient
	public static final String SEQUENCE_NAME = "user_sequence";
	
	@Id
	private int _id;
	private String firstName;
	private String lastName;
	private String gender;
	private String bloodGroup;
	private String mobileNumber;
	private String dob;
	private String email;
	private String password;
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String getUsername() {
		
		return email;
	}
	@Override
	public boolean isAccountNonExpired() {
		
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		
		return true;
	}
	@Override
	public boolean isEnabled() {
		
		return true;
	}
}
