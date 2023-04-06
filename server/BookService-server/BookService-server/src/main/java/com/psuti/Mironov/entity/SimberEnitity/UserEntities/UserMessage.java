package com.psuti.Mironov.entity.SimberEnitity.UserEntities;

import com.psuti.Mironov.entity.SimberEnitity.Status;
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

    @Column (length = 150, name="notes")
    private String Notes;

    @Column (nullable = true, name="typeofmessage")
    private int typeOfMessage;

    @Column (nullable = true,name="createatdate")
    private Date CreatedAtDate;

    @Column (nullable = true,name="createattime")
    private Time CreatedAtTime;

    //TODO Repair relations and columns
    //FIXME N..1 User, N..1 Status
    //DONE

    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "id_user")
    private User user;

    @ManyToOne(targetEntity = Status.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "idstatus", referencedColumnName = "idStatus")
    private Status status;
}
