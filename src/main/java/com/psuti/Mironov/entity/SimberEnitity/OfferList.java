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
@Table (name="offerlist")
public class OfferList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idofferlist", nullable = false)
    private UUID idOfferList;

    @Column (nullable = false, length = 13, name="ibsn")
    private String IBSN;

    @Column (name="yearpublishing")
    private Date YearPublishing;

    @Column (name="createatdate")
    private Date CreatedAtDate;
    @Column (name="updateatdate")
    private Date UpdateAtDate;

    @Column (name="createattime")
    private Time CreatedAtTime;
    @Column (name="updateattime")
    private Time UpdateAtTime;


//    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
//    @JoinColumn(nullable = false, name = "Id_User")
//    private User user;
//
//    @OneToOne(targetEntity = BookLiterature.class, fetch = FetchType.EAGER)
//    @JoinColumn(name = "idBookLiterature")
//    private BookLiterature bookLiterature;
//
//    @ManyToOne()
//    @JoinColumn(nullable = false, name = "idStatus")
//    private Status status;
}
