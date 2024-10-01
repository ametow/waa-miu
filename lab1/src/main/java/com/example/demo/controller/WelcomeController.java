package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Person;
import com.example.demo.model.Product;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class WelcomeController {

  @GetMapping("/welcome")
  public String welcomeString() {
    return "hi";
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
