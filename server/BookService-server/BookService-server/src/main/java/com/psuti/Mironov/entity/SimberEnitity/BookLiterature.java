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

    @Column(length = 50, name = "note", nullable = true)
    private String Note;


    //TODO: repair relations between BL and Author
    //DONE

    @ManyToOne
    @JoinColumn(name = "idauthor", nullable = false)
    private Author author;
}