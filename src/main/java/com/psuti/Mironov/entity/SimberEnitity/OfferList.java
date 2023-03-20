package com.psuti.Mironov.entity.SimberEnitity;

import com.psuti.Mironov.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.List;
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

    //TODO repair relations with OfL and BL, User, Status
    //FIXME OfL n..1 BL, User 1..n, Status 1..n


    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "id_user")
    private User user;

    @OneToMany(targetEntity = BookLiterature.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "idbookliterature")
    private List<BookLiterature> bookLiteratures;

    @ManyToOne()
    @JoinColumn(nullable = false, name = "idstatus")
    private Status status;
}
