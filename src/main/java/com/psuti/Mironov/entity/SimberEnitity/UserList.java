package com.psuti.Mironov.entity.SimberEnitity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name="userlist")
public class UserList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_userlist", nullable = false)
    private UUID id_UserList;

    @Column (name="typelist")
    private int TypeList;

//    @OneToOne(targetEntity = WishList.class, fetch = FetchType.EAGER)
//    @JoinColumn(name="idWishList")
//    private WishList wishList;
}
