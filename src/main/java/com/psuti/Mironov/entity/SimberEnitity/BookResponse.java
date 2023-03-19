package com.psuti.Mironov.entity.SimberEnitity;

import com.psuti.Mironov.entity.SimberEnitity.BookLiterature;
import com.psuti.Mironov.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "BookResponse")
public class BookResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="idBookResponse", nullable = false)
    private UUID idBookResponse;

    @Column
    private Date CreatedAt;

    @Column(nullable=false,length = 500, name = "Response")
    private String Response;

    @Column(nullable=false,length = 50, name = "Note")
    private String Note;


    @OneToOne(targetEntity = BookLiterature.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "idBookLiterature")
    private BookLiterature bookLiterature;

    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "Id_User")
    private User user;

}