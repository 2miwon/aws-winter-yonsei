package com.yonsei.demo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "email")
public class Email {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @NotNull
    @Setter
    @Getter
    public String sender;
    /**
    @NotNull @Setter
    @ManyToOne
    @JoinColumn(name = "receiver", columnDefinition = "varchar(100)")
    private User receiver; **/

    @NotNull
    @Setter
    @Getter
    @ManyToOne
    //@JoinColumn(name = "receiver")
    public User receiver;

    @NotNull @Getter @Setter public String subject;

    @NotNull @Getter @Setter public String messageBody;

    public Email(String sender, User receiver, String subject, String messageBody) {
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.messageBody = messageBody;
    }


}