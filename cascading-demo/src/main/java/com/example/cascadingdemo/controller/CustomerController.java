package com.example.cascadingdemo.controller;

import com.example.cascadingdemo.model.Customer;
import com.example.cascadingdemo.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private final ICustomerService customerService;

    @Autowired
    public CustomerController(ICustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping
    public Customer addCustomer(@RequestBody Customer customer) {
        var c = customerService.save(customer);
        System.out.println(c);
        return c;
    }
}
