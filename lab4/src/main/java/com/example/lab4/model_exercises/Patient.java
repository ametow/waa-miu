package com.example.lab4.model_exercises;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.SecondaryTable;

@Entity
@SecondaryTable(name="address", pkJoinColumns=@PrimaryKeyJoinColumn(name="patient_id"))
public class Patient {
  @Id
  private Long id;
  private String name;


  @Column(table = "address")
  private String street;
  @Column(table = "address")
  private String zip;
  @Column(table = "address")
  private String city;
}
