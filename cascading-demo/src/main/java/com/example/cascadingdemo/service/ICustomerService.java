package com.example.cascadingdemo.service;

import com.example.cascadingdemo.model.Address;
import com.example.cascadingdemo.model.Customer;

public interface ICustomerService  {
    Customer save(Customer customer);
    Address saveAddress(Address address);
}
