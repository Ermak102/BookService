package com.psuti.Mironov.entity.SimberEnitity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.psuti.Mironov.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "UserAddress")
public class UserAddress implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Id_UserAddress", nullable = false)
    private UUID Id_UserAddress;

    @Column(nullable = false, length = 6,name = "AddrIndex")
    private String AddrIndex;
    @Column(nullable = false, length = 15, name = "AddrCity")
    private String AddrCity;
    @Column(nullable = false, length = 15, name = "AddrStreet")
    private String AddrStreet;
    @Column(nullable = false, length = 15, name = "AddrHouse")
    private String AddrHouse;
    @Column(nullable = false, length = 15, name = "AddrApartment")
    private String AddrApartment;

    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "Id_User")
    private User user;

    @JsonIgnore
    private boolean IsDefault = true;
}




