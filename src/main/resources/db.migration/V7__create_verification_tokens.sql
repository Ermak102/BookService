CREATE TABLE if not exists verification_tokens
(
    id          integer    NOT NULL,
    token       VARCHAR(255),
    user_id     integer    NOT NULL,
    expiry_date TIMESTAMP WITHOUT TIME ZONE,
    confirmed   BOOLEAN NOT NULL,
    CONSTRAINT pk_verification_tokens PRIMARY KEY (id)
);
ALTER TABLE verification_tokens
    ADD CONSTRAINT FK_VERIFICATION_TOKENS_ON_USER FOREIGN KEY (user_id) REFERENCES Users (idUser) on delete cascade;
