package com.psuti.Mironov.entity.SimberEnitity;

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

//    @Column (name="yearpublishing")
//    private Date YearPublishing;

    @Column (name="createatdate")
    private Date CreatedAtDate;
    @Column (name="updateatdate")
    private Date UpdateAtDate;

    @Column (name="createattime")
    private Time CreatedAtTime;
    @Column (name="updateattime")
    private Time UpdateAtTime;


//    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
//    @JoinColumn(nullable = false, name = "Id_User")
//    private User user;
//
//    @OneToOne()
//    @JoinColumn(nullable = false, name = "Id_UserAddress")
//    private UserAddress userAddress;
//
//    @ManyToOne()
//    @JoinColumn(nullable = false, name = "idStatus")
//    private Status status;
}

