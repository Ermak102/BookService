package com.psuti.Mironov.entity.SimberEnitity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name="status")
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idstatus", nullable = false)
    private UUID idStatus;

    @Column(nullable = false,length = 10,name="name")
    private String Name;
}
