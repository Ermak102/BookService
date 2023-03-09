CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
create table if not exists roles
(
    name        varchar     not null,
    UNIQUE      (name),
    PRIMARY KEY (name)
);

ALTER TABLE users
    add roles varchar (15);

ALTER TABLE Users ADD CONSTRAINT fk_roles FOREIGN KEY (roles) references roles(name)


