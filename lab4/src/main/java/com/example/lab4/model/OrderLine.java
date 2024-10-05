package com.example.lab4.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class OrderLine {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  private int quantity;

  @ManyToOne
  private Product product;
}
