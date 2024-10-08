package com.example.lab4.model_exercises;

import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Appointment {
  @Id
  private Long id;
  private String appdate;

  @Embedded
  private Payment payment;

  @OneToOne
  @JoinColumn(name = "patient")
  private Patient patient;

  @OneToOne
  @JoinColumn(name = "doctor")
  private Doctor doctor;
}
