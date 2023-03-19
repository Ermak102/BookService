package com.psuti.Mironov.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private UUID id;
    @Column(nullable = false, length = 25,name = "first_name")
    private String firstname;
    @Column(nullable = false, length = 25, name = "last_name")
    private String lastname;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @ManyToOne
    @JoinColumn(name = "role")
    private Role role;

    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String password;

    @Column(nullable = false, length = 25, name="username")
    private String username;

    @Column(nullable = false, unique = true)
    private int rating;

    @Column(nullable = false, unique = true)
    private Time created_at_time;

    @Column(nullable = false, unique = true)
    private Date created_at_date;

    @Column(nullable = false, unique = true)
    private byte[] avatar;

    @JsonIgnore
    private boolean enabled = true;
}




