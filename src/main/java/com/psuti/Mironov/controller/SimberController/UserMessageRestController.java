package com.psuti.Mironov.controller.SimberController;

import com.psuti.Mironov.dao.SimberDAO.UserDAO.UserMessageRepository;
import com.psuti.Mironov.entity.SimberEnitity.UserEntities.UserMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.UUID;

@RequestMapping("/UserMessage")
@RestController
public class UserMessageRestController {

    private final UserMessageRepository userMessageRepository;

    @Autowired
    public UserMessageRestController(UserMessageRepository userMessageRepository) {
        this.userMessageRepository = userMessageRepository;
    }

    @GetMapping
    public List<UserMessage> getAll() {
        return userMessageRepository.findAll();
    }

    @GetMapping("/{id}")
    public UserMessage getById(@PathVariable("id") UUID id_usermessage) {
        return userMessageRepository.findById(id_usermessage).get();
    }

    @PutMapping
    public UserMessage update(@RequestBody UserMessage userMessage) {
        if (userMessageRepository.existsById(userMessage.getId_UserMessage())) {
            return userMessageRepository.save(userMessage);
        }
        throw new EntityExistsException("User message with id:'" + userMessage.getId_UserMessage() + "'doesn't exist");
    }

    @PostMapping
    public UserMessage create(@RequestBody UserMessage userMessage) {
        return userMessageRepository.save(userMessage);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable("id") UUID id_usermessage) {
        userMessageRepository.deleteById(id_usermessage);
    }

}

