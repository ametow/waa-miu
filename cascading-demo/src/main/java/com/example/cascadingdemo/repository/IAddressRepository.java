package com.example.cascadingdemo.repository;

import com.example.cascadingdemo.model.Address;
import com.example.cascadingdemo.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAddressRepository extends JpaRepository<Address, Integer> {
}
