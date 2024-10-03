package com.example.lab3.unionetoone;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "author_id")
    private Author author;

    // Getters and Setters
}

@Entity
class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Getters and Setters
}
