package com.psuti.Mironov.entity.SimberEnitity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name="Category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idCategory", nullable = false)
    private UUID idCategory;

    @Column (nullable = false, length = 25, name="categoryName")
    private String categoryName;

    @Column
    private Boolean MultiSelect = false;
}
