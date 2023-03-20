package com.psuti.Mironov.entity.SimberEnitity.UserEntities;


import com.psuti.Mironov.entity.SimberEnitity.Category;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "uservaluecategory")
public class UserValueCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_uservaluecategory", nullable = false)
    private UUID Id_UserValueCategory;

    //FIXME 1..1 Category, 1..M UserList
    @ManyToOne
    @JoinColumn(name="id_userlist")
    private UserList userLists;

    @OneToOne
    @JoinColumn(name="idcategory")
    private Category category;
}
