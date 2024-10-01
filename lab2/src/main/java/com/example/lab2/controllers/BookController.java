package com.example.lab2.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.lab2.models.Book;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class BookController {

  private List<Book> books = new ArrayList<>();

  public BookController() {
    books.add(new Book(1, "Book One", "Author One", 100));
    books.add(new Book(2, "Book Two", "Author Two", 200));
    books.add(new Book(3, "Book Three", "Author Three", 300));
    books.add(new Book(4, "Book Four", "Author Four", 400));
  }

  @GetMapping(value = "/books", produces = "application/v1+json")
  public List<Book> getAllBooks() {
    return books;
  }

  @GetMapping(value = "/books/{id}", headers = "x-api-version=1")
  public Book getBookById(@PathVariable int id) {
    Optional<Book> book = books.stream().filter(b -> b.getId() == id).findFirst();
    return book.orElse(null);
  }

  @PostMapping("/v1/books")
  public void addBook(@RequestBody Book book) {
    books.add(book);
  }

  @PutMapping(value = "/books/{id}", params = "version=1")
  public void updateBook(@PathVariable int id, @RequestBody Book updatedBook) {
    books.stream().filter(b -> b.getId() == id).forEach(b -> {
      b.setTitle(updatedBook.getTitle());
      b.setIsbn(updatedBook.getIsbn());
      b.setPrice(updatedBook.getPrice());
    });
  }

  @DeleteMapping("/books/{id}")
  public void deleteBook(@PathVariable int id) {
    books.removeIf(b -> b.getId() == id);
  }
}
