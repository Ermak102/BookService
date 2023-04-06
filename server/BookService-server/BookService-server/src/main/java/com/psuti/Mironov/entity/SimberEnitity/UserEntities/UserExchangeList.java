package com.psuti.Mironov.entity.SimberEnitity.UserEntities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.psuti.Mironov.entity.SimberEnitity.ExchangeList;
import com.psuti.Mironov.entity.SimberEnitity.OfferList;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name="userexchangelist")
public class UserExchangeList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_userexchangelist", nullable = false)
    private UUID Id_UserExchangeList;

    //TODO repair relations
    //FIXME 1..M EL, 1..1 OfL
    //DONE

    @ManyToOne(targetEntity = ExchangeList.class, fetch = FetchType.EAGER)
    @JoinColumn(name="idexchangelist")
    private ExchangeList exchangeList;

    @OneToOne(targetEntity = OfferList.class, fetch = FetchType.EAGER)
    @JoinColumn(name="idofferlist")
    private OfferList offerList;

    @Column(nullable = false, length = 20, name = "tracknumber")
    private String TrackNumber;

    @JsonIgnore
    @Column(name="receiving")
    private Boolean Receiving = true;


}
