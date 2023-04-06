package com.psuti.Mironov.controller.SimberController;


import com.psuti.Mironov.dao.SimberDAO.BookResponseRepository;
import com.psuti.Mironov.entity.SimberEnitity.BookResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.UUID;

@RequestMapping("/bookresponse")
@RestController
public class BookResponseRestController {

    private final BookResponseRepository bookResponseRepository;

    @Autowired
    public BookResponseRestController(BookResponseRepository bookResponseRepository) {
        this.bookResponseRepository = bookResponseRepository;
    }

    @GetMapping
    public List<BookResponse> getAll() {
        return bookResponseRepository.findAll();
    }

    @GetMapping("/{id}")
    public BookResponse getById(@PathVariable("id") UUID idbookresponse) {
        return bookResponseRepository.findById(idbookresponse).get();
    }

    @PutMapping
    public BookResponse update(@RequestBody BookResponse bookResponse) {
        if (bookResponseRepository.existsById(bookResponse.getIdBookResponse())) {
            return bookResponseRepository.save(bookResponse);
        }
        throw new EntityExistsException("Book response with id:'" + bookResponse.getIdBookResponse() + "' doesn't exist");
    }

    @PostMapping
    public BookResponse create(@RequestBody BookResponse bookResponse) {
        return bookResponseRepository.save(bookResponse);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable("id") UUID idbookresponse) {
        bookResponseRepository.deleteById(idbookresponse);
    }
}
