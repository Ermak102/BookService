package com.psuti.Mironov.entity.SimberEnitity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name="UserList")
public class UserList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_UserList", nullable = false)
    private UUID id_UserList;

    @Column
    private int TypeList;

    @OneToOne(targetEntity = WishList.class, fetch = FetchType.EAGER)
    @JoinColumn(name="idWishList")
    private WishList wishList;
}
