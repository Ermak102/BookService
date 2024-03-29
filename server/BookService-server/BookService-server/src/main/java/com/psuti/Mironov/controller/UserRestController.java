package com.psuti.Mironov.controller;


import com.psuti.Mironov.dao.UserRepository;


import com.psuti.Mironov.entity.User;

import com.psuti.Mironov.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserRestController {
    private final UserService userService;
    @Autowired
    public UserRestController(UserService userService){
        this.userService = userService;
    }
    @GetMapping
    public List<User> getAll(){
        return userService.getAll();
    }
    @GetMapping("/{id}")
    public User getById(@PathVariable("id") UUID id){
        return userService.getById(id);
    }
    @PutMapping("/{id}")
    public User update(User user, @PathVariable("id") UUID id){
        return userService.update(user, id);
    }
    @PostMapping
    public User create(User user){
        return userService.create(user);
    }
    @DeleteMapping("/{id}")
    public void remove(@PathVariable("id") UUID id){
        userService.removeById(id);
    }
}

