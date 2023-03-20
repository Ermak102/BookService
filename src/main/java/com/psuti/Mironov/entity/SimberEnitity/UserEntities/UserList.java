package com.psuti.Mironov.entity.SimberEnitity.UserEntities;

import com.psuti.Mironov.entity.SimberEnitity.OfferList;
import com.psuti.Mironov.entity.SimberEnitity.WishList;
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

    //FIXME 1..M WL, 1..OfL, BD FIX

    @ManyToOne(targetEntity = WishList.class, fetch = FetchType.EAGER)
    @JoinColumn(name="idwishlist")
    private WishList wishList;

    @ManyToOne(targetEntity = WishList.class, fetch = FetchType.EAGER)
    @JoinColumn(name="idofferlist")
    private OfferList offerList;
}
