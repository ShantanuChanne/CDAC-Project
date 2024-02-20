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


@Document(collection = "Hospital")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Hospital implements UserDetails{
	
	
	@Transient
	public static final String SEQUENCE_NAME = "hospital_sequence";
	
	@Id
	private int _id;
	private String hospitalName;
	private String mobileNumber;
	private String address;
	private String email;
	private String password;
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
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
