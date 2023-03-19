package com.psuti.Mironov.entity.SimberEnitity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name="category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idcategory", nullable = false)
    private UUID idCategory;

    @Column (nullable = false, length = 25, name="categoryname")
    private String categoryName;

    @Column (name="multiselect")
    private Boolean MultiSelect = false;
}
