package com.example.cascadingdemo.controller;

import com.example.cascadingdemo.model.Address;
import com.example.cascadingdemo.model.Customer;
import com.example.cascadingdemo.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/addresses")
public class AddressController {

    private final ICustomerService customerService;

    @Autowired
    public AddressController(ICustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping
    public Address addAddress(@RequestBody Address address) {
        var c = customerService.saveAddress(address);
        System.out.println(c);
        return c;
    }
}
