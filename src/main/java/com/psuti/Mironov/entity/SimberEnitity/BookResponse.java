package com.psuti.Mironov.entity.SimberEnitity;

import com.psuti.Mironov.entity.SimberEnitity.BookLiterature;
import com.psuti.Mironov.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "bookresponse")
public class BookResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="idbookresponse", nullable = false)
    private UUID idBookResponse;

    @Column (name="createdat")
    private Date CreatedAt;

    @Column(nullable=false,length = 500, name = "response")
    private String Response;

    @Column(nullable=false,length = 50, name = "note")
    private String Note;

    //TODO repair relations of BR with BL and User. BL be n..1 , User n..1
    //DONE

    @ManyToOne(targetEntity = BookLiterature.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "idbookliterature")
    private BookLiterature bookLiterature;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "id_user")
    private User user;

}