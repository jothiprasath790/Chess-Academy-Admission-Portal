package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Contact;
import com.example.demo.Service.ContactService;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public Contact handleContactForm(@RequestBody Contact contact) {
        // You can add validation or additional processing here
        return contactService.saveContact(contact);
    }
}