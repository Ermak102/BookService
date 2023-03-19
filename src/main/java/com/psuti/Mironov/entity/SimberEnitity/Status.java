package com.psuti.Mironov.entity.SimberEnitity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name="Status")
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idStatus;

    @Column(nullable = false,length = 10,name="Name")
    private String Name;
}
