package com.example.demo.model;

public class Product {
  public final int id;
  public final String name;
  public final String description;

  public Product(int id, String name, String description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getDescription() {
    return description;
  }
}
