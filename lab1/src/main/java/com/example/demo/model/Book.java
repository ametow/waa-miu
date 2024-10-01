package com.example.demo.model;

public class Book {
  private int id;
  private String title;
  private String isbn;

  public Book(int id, String title, String isbn) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public String getIsbn() {
    return isbn;
  }
}
