package com.example.lab3.bionetoone;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    private Major major;

    // Getters and Setters
}

@Entity
class Major {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToOne
    @JoinColumn(name = "student_id")
    private Student student;

    // Getters and Setters
}
