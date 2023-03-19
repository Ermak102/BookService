package com.psuti.Mironov.entity.SimberEnitity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "Author")
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="idAuthor", nullable = false)
    private UUID idAuthor;

    @Column(nullable=false,length = 20, name = "FirstName")
    private String FirstName;

    @Column(nullable=false,length = 20, name = "LastName")
    private String LastName;

}
