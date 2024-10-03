package com.example.lab3.unimanytoone;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ManyToOne
    @JoinColumn(name = "publisher_id")
    private Publisher publisher;

    // Getters and Setters
}

@Entity
class Publisher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Getters and Setters
}
