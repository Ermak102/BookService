alter table tokens drop constraint tokens_user_id_fkey;
alter table tokens add foreign key (user_id) references Users(idUser) on delete cascade;
