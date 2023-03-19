package com.psuti.Mironov.entity.SimberEnitity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name ="exchangelist")
public class ExchangeList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="idexchangelist", nullable = false)
    private UUID idExchangeList;


//    @OneToOne(targetEntity = OfferList.class, fetch = FetchType.EAGER)
//    @JoinColumn(name="idOfferList1")
//    private OfferList offerList1;
//
//    @OneToOne(targetEntity = WishList.class, fetch = FetchType.EAGER)
//    @JoinColumn(name="idWishList1")
//    private WishList wishList1;
//
//    @OneToOne(targetEntity = OfferList.class, fetch = FetchType.EAGER)
//    @JoinColumn(name="idOfferList2")
//    private OfferList offerList2;
//
//    @OneToOne(targetEntity = WishList.class, fetch = FetchType.EAGER)
//    @JoinColumn(name="idWishList2")
//    private WishList wishList2;


    @Column (name="createatdate")
    private Date CreatedAtDate;
    @Column (name="createattime")
    private Time CreatedAtTime;

    @Column (name="isboth")
    private boolean isBoth = true;

}
