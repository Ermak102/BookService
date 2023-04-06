package com.psuti.Mironov.controller.SimberController;

import com.psuti.Mironov.dao.SimberDAO.BookLiteratureRepository;
import com.psuti.Mironov.dao.SimberDAO.UserDAO.UserAddressRepository;
import com.psuti.Mironov.entity.SimberEnitity.BookLiterature;
import com.psuti.Mironov.entity.SimberEnitity.UserEntities.UserAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.UUID;

@RequestMapping("/address")
@RestController
public class UserAddressRestController {

    private final UserAddressRepository userAddressRepository;

    @Autowired
    public UserAddressRestController(UserAddressRepository userAddressRepository) {
        this.userAddressRepository = userAddressRepository;
    }

    @GetMapping
    public List<UserAddress> getAll(){
        return userAddressRepository.findAll();
    }

    @GetMapping("/{id}")
    public UserAddress getById (@PathVariable("id") UUID id_useraddress){
        return userAddressRepository.findById(id_useraddress).get();
    }

    @PutMapping
    public UserAddress update (@RequestBody UserAddress userAddress){
        if(userAddressRepository.existsById (userAddress.getId_UserAddress())) {
            return userAddressRepository.save(userAddress);
        }
        throw new EntityExistsException("User Address with id:'"+ userAddress.getId_UserAddress() +"' doesn't exist");
    }

    @PostMapping
    public UserAddress create(@RequestBody UserAddress userAddress){
        return userAddressRepository.save(userAddress);
    }

    @DeleteMapping("/{id}")
    public void remove (@PathVariable("id") UUID id_useraddress){
        userAddressRepository.deleteById(id_useraddress);
    }
}
