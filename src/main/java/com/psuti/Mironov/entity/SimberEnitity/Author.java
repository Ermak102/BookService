package com.psuti.Mironov.entity.SimberEnitity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "author")
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="idauthor", nullable = false)
    private UUID idAuthor;

    @Column(nullable=false,length = 20, name = "firstname")
    private String FirstName;

    @Column(nullable=false,length = 20, name = "lastname")
    private String LastName;

}
