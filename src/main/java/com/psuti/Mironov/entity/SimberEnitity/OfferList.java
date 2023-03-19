package com.psuti.Mironov.entity.SimberEnitity;

import com.psuti.Mironov.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table (name="OfferList")
public class OfferList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idOfferList", nullable = false)
    private UUID idOfferList;

    @Column (nullable = false, length = 13, name="IBSN")
    private String IBSN;

    @Column
    private Date YearPublishing;

    @Column
    private Date CreatedAtDate;
    @Column
    private Date UpdateAtDate;

    @Column
    private Time CreatedAtTime;
    @Column
    private Time UpdateAtTime;


    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "Id_User")
    private User user;

    @OneToOne(targetEntity = BookLiterature.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "idBookLiterature")
    private BookLiterature bookLiterature;

    @ManyToOne()
    @JoinColumn(nullable = false, name = "idStatus")
    private Status status;
}
