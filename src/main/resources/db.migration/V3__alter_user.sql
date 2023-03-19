ALTER TABLE users
    ADD email varchar(25)  NOT NULL UNIQUE,
    ADD password varchar(120) NOT NULL,
    ADD username varchar(120),
    ADD rating integer,
    ADD created_at_time time,
    ADD created_at_date date,
    ADD avatar bytea;
