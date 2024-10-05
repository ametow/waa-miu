package com.example.cascadingdemo.model;

import jakarta.persistence.*;

@Entity
public class Customer {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String name;

        public Customer() {

        }

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        @OneToOne(mappedBy = "customer", cascade = CascadeType.ALL)
        private Address address;

        public String getName() {
                return name;
        }

        public void setName(String name) {
                this.name = name;
        }

        @Override
        public String toString() {
                return "Customer{" +
                        "id=" + id +
                        ", name='" + name + '\'' +
                        ", address=" + address +
                        '}';
        }
}
