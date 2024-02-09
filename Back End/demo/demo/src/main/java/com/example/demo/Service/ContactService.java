package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Contact;
import com.example.demo.Repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private final ContactRepository contactRepository;


    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @SuppressWarnings("null")
    public Contact saveContact(Contact contact) {
        // Additional logic can be added here before saving to the repository
        return contactRepository.save(contact);
    }
}