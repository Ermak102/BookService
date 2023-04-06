package com.psuti.Mironov.controller.SimberController;

import com.psuti.Mironov.dao.SimberDAO.WishListRepository;
import com.psuti.Mironov.entity.SimberEnitity.WishList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.UUID;

@RequestMapping("/wishlist")
@RestController
public class WishListRestController {


    private final WishListRepository wishListRepository;

    @Autowired
    public WishListRestController(WishListRepository wishListRepository) {
        this.wishListRepository = wishListRepository;
    }

    @GetMapping
    public List<WishList> getAll(){
        return wishListRepository.findAll();
    }

    @GetMapping("/{id}")
    public WishList getById(@PathVariable("id") UUID idwishlist) {
        return wishListRepository.findById(idwishlist).get();
    }

    @PutMapping
    public WishList update (@RequestBody WishList wishList){
        if(wishListRepository.existsById (wishList.getIdWishList())) {
            return wishListRepository.save(wishList);
        }
        throw new EntityExistsException("Wishlist with id:'"+ wishList.getIdWishList() +"' doesn't exist");
    }

    @PostMapping
    public WishList create(@RequestBody WishList wishList){
        return wishListRepository.save(wishList);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable("id") UUID idwishlist) {
        wishListRepository.deleteById(idwishlist);
    }
}
