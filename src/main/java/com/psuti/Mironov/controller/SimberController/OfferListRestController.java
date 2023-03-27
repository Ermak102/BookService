package com.psuti.Mironov.controller.SimberController;

import com.psuti.Mironov.dao.SimberDAO.BookLiteratureRepository;
import com.psuti.Mironov.dao.SimberDAO.OfferListRepository;
import com.psuti.Mironov.entity.SimberEnitity.BookLiterature;
import com.psuti.Mironov.entity.SimberEnitity.OfferList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.UUID;

@RequestMapping("/offerlist")
@RestController
public class OfferListRestController {

    private final OfferListRepository offerListRepository;

    @Autowired
    public OfferListRestController(OfferListRepository offerListRepository) {
        this.offerListRepository = offerListRepository;
    }

    @GetMapping
    public List<OfferList> getAll(){
        return offerListRepository.findAll();
    }

    @GetMapping("/{id}")
    public OfferList getById (@PathVariable("id") UUID idofferlist){
        return offerListRepository.findById(idofferlist).get();
    }

    @PutMapping
    public OfferList update (@RequestBody OfferList offerList){
        if(offerListRepository.existsById (offerList.getIdOfferList())) {
            return offerListRepository.save(offerList);
        }
        throw new EntityExistsException("Book with id:'"+ offerList.getIdOfferList() +"' doesn't exist");
    }

    @PostMapping
    public OfferList create(@RequestBody OfferList offerList){
        return offerListRepository.save(offerList);
    }

    @DeleteMapping("/{id}")
    public void remove (@PathVariable("id") UUID idofferlist){
        offerListRepository.deleteById(idofferlist);
    }
}
