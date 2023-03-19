package com.psuti.Mironov.entity.SimberEnitity;

import jdk.jfr.Category;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "UserValueCategory")
public class UserValueCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="Id_UserValueCategory", nullable = false)
    private UUID Id_UserValueCategory;

    @OneToMany
    @JoinColumn(name="Id_UserList")
    private List<UserList> userLists;

    @ManyToOne
    @JoinColumn(name="idCategory")
    private Category category;
}
