package com.example.lab4.model_exercises;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Doctor {
  @Id
  private Long id;

  @Column(name = "type")
  private String doctortype;

  private String firstname;

  private String lastname;
}
