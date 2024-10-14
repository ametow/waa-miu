package com.example.demo.controller;

import java.util.List;
import java.util.PriorityQueue;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Book;
import com.example.demo.model.Person;
import com.example.demo.model.Product;


@RestController
public class WelcomeController {

  @GetMapping("/welcome")
  public String welcomeString() {
    return "hi";
  }

  @GetMapping("/books")
  public List<Book> getBooks() {
    List<Book> books = List.of(
      new Book(1, "Book 1", "ISBN 1"),
      new Book(2, "Book 2", "ISBN 2"),
      new Book(3, "Book 3", "ISBN 3")
    );
    return books;
  }

  @GetMapping("/product")
  public Product getProduct() {
    return new Product(1, "Product 1", "Description 1");
  }

  @GetMapping("/person")
  public Person person() {
    return Person.builder().id(1).name("Person 1").description("Description 1").build();
  }

}
