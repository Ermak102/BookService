package com.psuti.Mironov.entity.SimberEnitity.UserEntities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.psuti.Mironov.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "useraddress")
public class UserAddress implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_useraddress", nullable = false)
    private UUID Id_UserAddress;

    @Column(length = 6, name = "addrindex")
    private String AddrIndex;
    @Column(length = 15, name = "addrcity")
    private String AddrCity;
    @Column(length = 15, name = "addrstreet")
    private String AddrStreet;
    @Column(length = 15, name = "addrhouse")
    private String AddrHouse;
    @Column(length = 15, name = "addrapartment")
    private String AddrApartment;


    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "id_user", referencedColumnName = "id")
    private User id_user;

    @JsonIgnore
    @Column(name="isdefault")
    private boolean IsDefault = true;

}




