package com.psuti.Mironov.entity.SimberEnitity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name="UserExchangeList")
public class UserExchangeList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="Id_UserExchangeList", nullable = false)
    private UUID Id_UserExchangeList;

    @OneToOne(targetEntity = ExchangeList.class, fetch = FetchType.EAGER)
    @JoinColumn(name="idExchangeList")
    private ExchangeList exchangeList;

    @OneToOne(targetEntity = OfferList.class, fetch = FetchType.EAGER)
    @JoinColumn(name="idOfferList")
    private OfferList offerList;

    @Column(nullable = false, length = 20, name = "TrackNumber")
    private String TrackNumber;

    @JsonIgnore
    private Boolean Receiving = true;


}
