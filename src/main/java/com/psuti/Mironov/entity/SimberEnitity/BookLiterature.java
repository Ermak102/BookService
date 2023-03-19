package com.psuti.Mironov.entity.SimberEnitity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.psuti.Mironov.entity.SimberEnitity.Author;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "bookliterature")
public class BookLiterature {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="idbookliterature", nullable = false)
    private UUID idBookLiterature;

    @Column(nullable=false,length = 50, name = "bookname")
    private String BookName;

    @Column(nullable=false,length = 50, name = "note")
    private String Note;

//
//    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
//    @ManyToOne
//    @JoinColumn(name = "idAuthor")
//    private Author author;
}