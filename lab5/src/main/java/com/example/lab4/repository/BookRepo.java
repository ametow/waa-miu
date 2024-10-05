package com.example.lab4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.lab4.models.Book;

@Repository
public interface BookRepo extends JpaRepository<Book, Integer> {
}
