package com.psuti.Mironov.entity.SimberEnitity;

import com.psuti.Mironov.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name="UserMessage")
public class UserMessage {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    @Column(name="Id_UserMessage", nullable = false)
    private UUID Id_UserMessage;

    @Column (nullable = false, length = 250, name="textMessage")
    private String textMessage;

    @Column (nullable = false, length = 150, name="textMessage")
    private String Notes;

    @Column
    private int typeOfMessage;

    @Column
    private Date CreatedAtDate;
    @Column
    private Date UpdateAtDate;

    @Column
    private Time CreatedAtTime;
    @Column
    private Time UpdateAtTime;

    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "Id_User")
    private User user;

    @ManyToOne()
    @JoinColumn(nullable = false, name = "idStatus")
    private Status status;
}
