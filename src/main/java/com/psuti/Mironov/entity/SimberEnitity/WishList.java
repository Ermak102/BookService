package com.psuti.Mironov.entity.SimberEnitity;

import com.psuti.Mironov.entity.SimberEnitity.UserEntities.UserAddress;
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
@Table (name="wishlist")
public class WishList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idwishlist", nullable = false)
    private UUID idWishList;

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


    //TODO Repair relations
    //FIXME 1..1 User, N..1 UserAddress, N..1 Status
    //DONE

    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "id_user")
    private User user;

    @ManyToOne()
    @JoinColumn(nullable = false, name = "id_useraddress")
    private UserAddress userAddress;

    @ManyToOne()
    @JoinColumn(nullable = false, name = "idstatus")
    private Status status;
}

