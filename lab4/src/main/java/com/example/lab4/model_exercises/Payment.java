package com.example.lab4.model_exercises;

import jakarta.persistence.Embeddable;

@Embeddable
public class Payment {
  private String paydate;
  private double amount;
}
