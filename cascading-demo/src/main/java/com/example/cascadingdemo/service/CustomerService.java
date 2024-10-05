package com.example.cascadingdemo.service;

import com.example.cascadingdemo.model.Address;
import com.example.cascadingdemo.model.Customer;
import com.example.cascadingdemo.repository.IAddressRepository;
import com.example.cascadingdemo.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {

    private final ICustomerRepository customerRepository;
    private final IAddressRepository addressRepository;

    public CustomerService(ICustomerRepository customerRepository, IAddressRepository addressRepository) {
        this.customerRepository = customerRepository;
        this.addressRepository = addressRepository;
    }

    @Override
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Address saveAddress(Address address) {
        return addressRepository.save(address);
    }
}
