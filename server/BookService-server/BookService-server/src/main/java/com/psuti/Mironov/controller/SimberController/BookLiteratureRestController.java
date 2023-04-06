package com.psuti.Mironov.controller.SimberController;

import com.psuti.Mironov.dao.SimberDAO.BookLiteratureRepository;
import com.psuti.Mironov.entity.SimberEnitity.BookLiterature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.UUID;

@RequestMapping("/bookliterature")
@RestController
public class BookLiteratureRestController {

    private final BookLiteratureRepository bookLiteratureRepository;

    @Autowired
    public BookLiteratureRestController(BookLiteratureRepository bookLiteratureRepository) {
        this.bookLiteratureRepository = bookLiteratureRepository;
    }

    @GetMapping
    public List<BookLiterature> getAll(){
        return bookLiteratureRepository.findAll();
    }

    @GetMapping("/{id}")
    public BookLiterature getById (@PathVariable("id") UUID idbookliterature){
        return bookLiteratureRepository.findById(idbookliterature).get();
    }

    @PutMapping
    public BookLiterature update (@RequestBody BookLiterature bookLiterature){
        if(bookLiteratureRepository.existsById (bookLiterature.getIdBookLiterature())) {
            return bookLiteratureRepository.save(bookLiterature);
        }
        throw new EntityExistsException("Book with id:'"+ bookLiterature.getIdBookLiterature() +"' doesn't exist");
    }

    @PostMapping
    public BookLiterature create(@RequestBody BookLiterature bookLiterature){

        System.out.println(bookLiterature.getBookName());
        System.out.println(bookLiterature.getBookName());

        return bookLiteratureRepository.save(bookLiterature);
    }

    @DeleteMapping("/{id}")
    public void remove (@PathVariable("id") UUID idbookliterature){
        bookLiteratureRepository.deleteById(idbookliterature);
    }
}
