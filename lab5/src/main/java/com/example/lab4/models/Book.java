package com.example.lab4.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;
  private String title;
  private String isbn;
  private double price;

  public void setId(int id) {
    this.id = id;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public void setIsbn(String isbn) {
    this.isbn = isbn;
  }
  public void setPrice(double price) {
    this.price = price;
  }
  public Book() {
  }
  public Book(int id, String title, String isbn, double price) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.price = price;
  }
  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + id;
    result = prime * result + ((title == null) ? 0 : title.hashCode());
    result = prime * result + ((isbn == null) ? 0 : isbn.hashCode());
    long temp;
    temp = Double.doubleToLongBits(price);
    result = prime * result + (int) (temp ^ (temp >>> 32));
    return result;
  }
  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Book other = (Book) obj;
    if (id != other.id)
      return false;
    if (title == null) {
      if (other.title != null)
        return false;
    } else if (!title.equals(other.title))
      return false;
    if (isbn == null) {
      if (other.isbn != null)
        return false;
    } else if (!isbn.equals(other.isbn))
      return false;
    if (Double.doubleToLongBits(price) != Double.doubleToLongBits(other.price))
      return false;
    return true;
  }
  public int getId() {
    return id;
  }
  public String getTitle() {
    return title;
  }
  public String getIsbn() {
    return isbn;
  }
  public double getPrice() {
    return price;
  }
}
