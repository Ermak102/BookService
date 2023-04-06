package com.psuti.Mironov.controller.SimberController;

import com.psuti.Mironov.dao.SimberDAO.AuthorRepository;
import com.psuti.Mironov.entity.SimberEnitity.Author;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.UUID;

@RequestMapping("/author")
@RestController
public class AuthorRestController {
    private final AuthorRepository authorRepository;

    @Autowired
    public AuthorRestController(AuthorRepository authorRepository){
        this.authorRepository = authorRepository;
    }

    @GetMapping
    public List<Author> getAll() {
        return  authorRepository.findAll();
    }

    @GetMapping("/{id}")
    public Author getById(@PathVariable("id") UUID id_author){
        return  authorRepository.findById(id_author).get();
    }

    @PutMapping
    public Author update(@RequestBody Author author){
        if(authorRepository.existsById(author.getIdAuthor())){
            return  authorRepository.save(author);
        }

        throw new EntityExistsException("Author with id:'" + author.getIdAuthor() + "'doesn't exist");
    }

    @PostMapping
    public Author create(@RequestBody Author author){
        return authorRepository.save(author);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable("id") UUID id_author){
        authorRepository.deleteById(id_author);
    }
}
