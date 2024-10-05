package com.example.lab4.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.lab4.models.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.lab4.repository.BookRepo;

@RestController
public class BookController {

  @Autowired
  private BookRepo bookRepository;

  public BookController() {
  }

  @GetMapping(value = "/books", produces = "application/v1+json")
  public List<Book> getAllBooks() {
    return bookRepository.findAll();
  }

  @GetMapping(value = "/books/{id}", headers = "x-api-version=1")
  public Book getBookById(@PathVariable int id) {
    var book =  bookRepository.findById(id);
    return book.orElse(null);
  }

  @PostMapping("/v1/books")
  public void addBook(@RequestBody Book book) {
    bookRepository.save(book);
  }

  @PutMapping(value = "/books/{id}", params = "version=1")
  public void updateBook(@PathVariable int id, @RequestBody Book updatedBook) {
    bookRepository.save(updatedBook);
  }

  @DeleteMapping("/books/{id}")
  public void deleteBook(@PathVariable int id) {
    bookRepository.deleteById(id);
  }
}
