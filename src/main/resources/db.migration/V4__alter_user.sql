ALTER TABLE Users
    ADD Email varchar (15) not null UNIQUE,
    ADD Password varchar(120) NOT NULL;
