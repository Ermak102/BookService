package com.psuti.Mironov.entity.SimberEnitity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
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
//
//    @OneToMany
//    @JoinColumn(name="Id_UserList")
//    private List<UserList> userLists;
//
//    @ManyToOne
//    @JoinColumn(name="idCategory")
//    private Category category;
}
