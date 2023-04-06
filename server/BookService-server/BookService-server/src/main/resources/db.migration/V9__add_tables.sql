create table if not exists Author
(
    idAuthor uuid not null,
    LastName varchar(20) not null,
    FirstName varchar (20) not null,
    UNIQUE (idAuthor),
    PRIMARY KEY (idAuthor)
);

create table if not exists BookLiterature
(
    idBookLiterature uuid not null,
    idAuthor uuid not null,
    BookName varchar(50) not null,
    Note varchar(50) not null,
    UNIQUE      (idBookLiterature),
    PRIMARY KEY (idBookLiterature)
);

create table if not exists UserAddress
(
    Id_UserAddress uuid,
    Id_User uuid,
    AddrIndex varchar(6),
    AddrCity varchar(15),
    AddrStreet varchar(25),
    AddrHouse varchar(5),
    AddrApartment varchar(3),
    isDefault bool,
    UNIQUE (Id_UserAddress),
    PRIMARY KEY (Id_UserAddress)
);

create table if not exists BookResponse
(
    idBookResponse uuid,
    idBookLiterature uuid,
    Id_User uuid,
    CreatedAt date,
    Response varchar(500),
    Note varchar(50),
    UNIQUE (idBookResponse),
    PRIMARY KEY (idBookResponse)
);

create table if not exists OfferList
(
    idOfferList uuid,
    idBookLiterature uuid,
    Id_User uuid,
    idStatus uuid,
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
    idWishList uuid,
    Id_User uuid,
    idStatus uuid,
    Id_UserAddress uuid,
    CreateAtDate date,
    CreateAtTime time,
    UpdateAtDate date,
    UpdateAtTime time,
    UNIQUE (idWishList),
    PRIMARY KEY (idWishList)
);

create table if not exists UserMessage
(
    Id_UserMessage uuid,
    Id_User uuid,
    CreateAtDate date,
    CreateAtTime time,
    textMessage varchar (250),
    Notes varchar(150),
    idStatus uuid,
    typeOfMessage int,
    UNIQUE (Id_UserMessage),
    PRIMARY KEY (Id_UserMessage)
);

create table if not exists ExchangeList
(
    idExchangeList uuid,
    idOfferList1 uuid,
    idWishList1 uuid,
    idOfferList2 uuid,
    idWishList2 uuid,
    CreateAtDate date,
    CreateAtTime time,
    isBoth bool,
    UNIQUE (idExchangeList),
    PRIMARY KEY (idExchangeList)
);

create table if not exists UserExchangeList
(
    Id_UserExchangeList uuid,
    idExchangeList uuid,
    idOfferList uuid,
    TrackNumber varchar(20),
    Receiving bool,
    UNIQUE (Id_UserExchangeList),
    PRIMARY KEY (Id_UserExchangeList)
);

create table if not exists UserList
(
    Id_UserList uuid,
    TypeList integer,
    idWishList uuid,
    UNIQUE (Id_UserList),
    PRIMARY KEY (Id_UserList)
);

create table if not exists UserValueCategory
(
    Id_UserValueCategory uuid,
    Id_UserList uuid,
    idCategory uuid,
    UNIQUE (Id_UserValueCategory),
    PRIMARY KEY (Id_UserValueCategory)
);

create table if not exists Status
(
    idStatus uuid,
    Name varchar(10),
    UNIQUE (idStatus),
    PRIMARY KEY (idStatus)
);

create table if not exists Category
(
    idCategory uuid,
    categoryName varchar(25),

    MultiSelect bool,
    UNIQUE (idCategory),
    PRIMARY KEY (idCategory)
);


ALTER TABLE BookLiterature ADD CONSTRAINT fk_idAuthor FOREIGN KEY (idAuthor) references Author(idAuthor);

ALTER TABLE BookResponse ADD CONSTRAINT fk_idBookLiterature FOREIGN KEY (idBookLiterature) references BookLiterature(idBookLiterature);
ALTER TABLE BookResponse ADD CONSTRAINT fk_Id_User FOREIGN KEY (Id_User) references Users(Id);

ALTER TABLE UserAddress ADD CONSTRAINT fk_Id_User FOREIGN KEY (Id_User) references Users(Id);

ALTER TABLE OfferList ADD CONSTRAINT fk_idBookLiterature FOREIGN KEY (idBookLiterature) references BookLiterature(idBookLiterature);
ALTER TABLE OfferList ADD CONSTRAINT fk_Id_User FOREIGN KEY (Id_User) references Users(Id);
ALTER TABLE OfferList ADD CONSTRAINT fk_idStatus FOREIGN KEY (idStatus) references Status(idStatus);

ALTER TABLE WishList ADD CONSTRAINT fk_Id_User FOREIGN KEY (Id_User) references Users(Id);
ALTER TABLE WishList ADD CONSTRAINT fk_idStatus FOREIGN KEY (idStatus) references Status(idStatus);
ALTER TABLE WishList ADD CONSTRAINT fk_Id_UserAddress FOREIGN KEY (Id_UserAddress) references UserAddress(Id_UserAddress);

ALTER TABLE UserMessage ADD CONSTRAINT fk_Id_User FOREIGN KEY (Id_User) references Users(Id);
ALTER TABLE UserMessage ADD CONSTRAINT fk_idStatus FOREIGN KEY (idStatus) references Status(idStatus);

ALTER TABLE ExchangeList ADD CONSTRAINT fk_idOfferList1 FOREIGN KEY (idOfferList1) references OfferList(idOfferList);
ALTER TABLE ExchangeList ADD CONSTRAINT fk_idOfferList2 FOREIGN KEY (idOfferList2) references OfferList(idOfferList);
ALTER TABLE ExchangeList ADD CONSTRAINT fk_idWishList1 FOREIGN KEY (idWishList1) references WishList(idWishList);
ALTER TABLE ExchangeList ADD CONSTRAINT fk_idWishList2 FOREIGN KEY (idWishList2) references WishList(idWishList);

ALTER TABLE UserExchangeList ADD CONSTRAINT fk_idExchangeList FOREIGN KEY (idExchangeList) references ExchangeList(idExchangeList);
ALTER TABLE UserExchangeList ADD CONSTRAINT fk_idOfferList FOREIGN KEY (idOfferList) references OfferList(idOfferList);

ALTER TABLE UserList ADD CONSTRAINT fk_idWishList FOREIGN KEY (idWishList) references WishList(idWishList);

ALTER TABLE UserValueCategory ADD CONSTRAINT fk_Id_UserList FOREIGN KEY (Id_UserList) references UserList(Id_UserList);
ALTER TABLE UserValueCategory ADD CONSTRAINT fk_idCategory FOREIGN KEY (idCategory) references Category(idCategory);
