package com.psuti.Mironov.controller.SimberController;

import com.psuti.Mironov.dao.SimberDAO.CategoryRepository;
import com.psuti.Mironov.entity.SimberEnitity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityExistsException;
import java.util.List;
import java.util.UUID;

@RequestMapping("/category")
@RestController
public class CategoryRestController {
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryRestController(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    @GetMapping
    public List<Category> getAll(){
        return categoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public Category getById(@PathVariable("id") UUID id_category){
        return categoryRepository.findById(id_category).get();
    }

    @PutMapping
    public Category update(@RequestBody Category category){
        if(categoryRepository.existsById(category.getIdCategory())){
            return categoryRepository.save(category);
        }

        throw new EntityExistsException("Category with id:'" + category.getIdCategory() + "'doesn't exist");
    }

    @PostMapping
    public Category create(@RequestBody Category category){
        return categoryRepository.save(category);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable("id") UUID id_category){
        categoryRepository.deleteById(id_category);
    }
}
