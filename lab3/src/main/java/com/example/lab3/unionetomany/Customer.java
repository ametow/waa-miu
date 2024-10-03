package com.example.lab3.unionetomany;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    private List<Reservation> reservations = new ArrayList<>();

    // Getters and Setters
}

@Entity
class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String reservationDetails;

    // Getters and Setters
}
