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
@Table(name="usermessage")
public class UserMessage {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    @Column(name="id_usermessage", nullable = false)
    private UUID Id_UserMessage;

    @Column (nullable = false, length = 250, name="textmessage")
    private String textMessage;

    @Column (nullable = false, length = 150, name="notes")
    private String Notes;

    @Column (name="typeofmessage")
    private int typeOfMessage;

    @Column (name="createatdate")
    private Date CreatedAtDate;
//    @Column (name="updatedatdate")
//    private Date UpdateAtDate;

    @Column (name="createattime")
    private Time CreatedAtTime;
//    @Column (name="updatedattime")
//    private Time UpdateAtTime;

//    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
//    @JoinColumn(nullable = false, name = "Id_User")
//    private User user;
//
//    @ManyToOne()
//    @JoinColumn(nullable = false, name = "idStatus")
//    private Status status;
}
