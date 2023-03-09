create table if not exists Author
(
    idAuthor integer not null,
    LastName varchar(20) not null,
    FirstName varchar (20) not null,
    UNIQUE (idAuthor),
    PRIMARY KEY (idAuthor)
);

create table if not exists BookLiterature
(
    idBookLiterature integer not null,
    idAuthor integer not null,
    BookName varchar(50) not null,
    Note varchar(50) not null,
    UNIQUE      (idBookLiterature),
    PRIMARY KEY (idBookLiterature)
    );

create table if not exists Users
(
    idUser integer not null,
    FirstName varchar(25) not null,
    LastName varchar (50) not null,
    Email varchar (15) not null,
    UserName varchar (15) not null,
    Password varchar (15) not null,
    Rating integer not null,
    CreatedAt date,
    Enabled bool,
    Avatar bytea,
    IsStaff bool,
    IsSuperUser bool,
    UNIQUE (idUser),
    PRIMARY KEY (idUser)
);

create table if not exists UserAddress
(
    idUserAddress integer,
    idUser integer,
    AddrIndex varchar(6),
    AddrCity varchar(15),
    AddrStreet varchar(25),
    AddrHouse varchar(5),
    AddrApartment varchar(3),
    isDefault bool,
    UNIQUE (idUserAddress),
    PRIMARY KEY (idUserAddress)
);

create table if not exists BookResponse
(
    idBookResponse integer,
    idBookLiterature integer,
    IdUser integer,
    CreatedAt date,
    Response varchar(500),
    Note varchar(50),
    UNIQUE (idBookResponse),
    PRIMARY KEY (idBookResponse)
);

create table if not exists OfferList
(
    idOfferList integer,
    idBookLiterature integer,
    idUser integer,
    idStatus integer,
    IBSN varchar(13),
    YearPublishing date,
    CreateAtDate date,
    CreateAtTime time,
    UpdateAtDate date,
    UpdateAtTime time,
    UNIQUE (idOfferList),
    PRIMARY KEY (idOfferList)
);

create table if not exists WishList
(
    idWishList integer,
    idUser integer,
    idStatus integer,
    idUserAddress integer,
    CreateAtDate date,
    CreateAtTime time,
    UpdateAtDate date,
    UpdateAtTime time,
    UNIQUE (idWishList),
    PRIMARY KEY (idWishList)
);

create table if not exists UserMessage
(
    idUserMessage integer,
    idUser integer,
    CreateAtDate date,
    CreateAtTime time,
    textMessage varchar (250),
    Notes varchar(150),
    idStatus integer,
    typeOfMessage int,
    UNIQUE (idUserMessage),
    PRIMARY KEY (idUserMessage)
);

create table if not exists ExchangeList
(
    idExchangeList integer,
    idOfferList1 integer,
    idWishList1 integer,
    idOfferList2 integer,
    idWishList2 integer,
    CreateAtDate date,
    CreateAtTime time,
    isBoth bool,
    UNIQUE (idExchangeList),
    PRIMARY KEY (idExchangeList)
);

create table if not exists UserExchangeList
(
    idUserExchangeList integer,
    idExchangeList integer,
    idOfferList integer,
    TrackNumber varchar(20),
    Receiving bool,
    UNIQUE (idUserExchangeList),
    PRIMARY KEY (idUserExchangeList)
);

create table if not exists UserList
(
    idUserList integer,
    TypeList integer,
    idWishList integer,
    UNIQUE (idUserList),
    PRIMARY KEY (idUserList)
);

create table if not exists UserValueCategory
(
    idUserValueCategory integer,
    idUserList integer,
    idCategory integer,
    UNIQUE (idUserValueCategory),
    PRIMARY KEY (idUserValueCategory)
);

create table if not exists Status
(
    idStatus integer,
    Name varchar(10),
    UNIQUE (idStatus),
    PRIMARY KEY (idStatus)
);

create table if not exists Category
(
    idCategory integer,
    categoryName varchar(25),
    idParent integer,
    MultiSelect bool,
    UNIQUE (idCategory),
    PRIMARY KEY (idCategory)
);


ALTER TABLE BookLiterature ADD CONSTRAINT fk_idAuthor FOREIGN KEY (idAuthor) references Author(idAuthor);

ALTER TABLE BookResponse ADD CONSTRAINT fk_idBookLiterature FOREIGN KEY (idBookLiterature) references BookLiterature(idBookLiterature);
ALTER TABLE BookResponse ADD CONSTRAINT fk_idUser FOREIGN KEY (idUser) references Users(idUser);

ALTER TABLE UserAddress ADD CONSTRAINT fk_idUser FOREIGN KEY (idUser) references Users(idUser);

ALTER TABLE OfferList ADD CONSTRAINT fk_idBookLiterature FOREIGN KEY (idBookLiterature) references BookLiterature(idBookLiterature);
ALTER TABLE OfferList ADD CONSTRAINT fk_idUser FOREIGN KEY (idUser) references Users(idUser);
ALTER TABLE OfferList ADD CONSTRAINT fk_idStatus FOREIGN KEY (idStatus) references Status(idStatus);

ALTER TABLE WishList ADD CONSTRAINT fk_idUser FOREIGN KEY (idUser) references Users(idUser);
ALTER TABLE WishList ADD CONSTRAINT fk_idStatus FOREIGN KEY (idStatus) references Status(idStatus);
ALTER TABLE WishList ADD CONSTRAINT fk_idUserAddress FOREIGN KEY (idUserAddress) references UserAddress(idUserAddress);

ALTER TABLE UserMessage ADD CONSTRAINT fk_idUser FOREIGN KEY (idUser) references Users(idUser);
ALTER TABLE UserMessage ADD CONSTRAINT fk_idStatus FOREIGN KEY (idStatus) references Status(idStatus);

ALTER TABLE ExchangeList ADD CONSTRAINT fk_idOfferList1 FOREIGN KEY (idOfferList1) references OfferList(idOfferList);
ALTER TABLE ExchangeList ADD CONSTRAINT fk_idOfferList2 FOREIGN KEY (idOfferList2) references OfferList(idOfferList);
ALTER TABLE ExchangeList ADD CONSTRAINT fk_idWishList1 FOREIGN KEY (idWishList1) references WishList(idWishList);
ALTER TABLE ExchangeList ADD CONSTRAINT fk_idWishList2 FOREIGN KEY (idWishList2) references WishList(idWishList);

ALTER TABLE UserExchangeList ADD CONSTRAINT fk_idExchangeList FOREIGN KEY (idExchangeList) references ExchangeList(idExchangeList);
ALTER TABLE UserExchangeList ADD CONSTRAINT fk_idOfferList FOREIGN KEY (idOfferList) references OfferList(idOfferList);

ALTER TABLE UserList ADD CONSTRAINT fk_idWishList FOREIGN KEY (idWishList) references WishList(idWishList);

ALTER TABLE UserValueCategory ADD CONSTRAINT fk_idUserList FOREIGN KEY (idUserList) references UserList(idUserList);
ALTER TABLE UserValueCategory ADD CONSTRAINT fk_idCategory FOREIGN KEY (idCategory) references Category(idCategory);








