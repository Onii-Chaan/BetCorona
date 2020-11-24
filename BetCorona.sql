create table User(
    ID int primary key,
    nickname char(32),
    balance int,    
    email text
);

create table Secure(
    ID int primary key,
    passW text,
    UserID int,
    foreign key(UserID) references User(ID)
);

create table Achievements(
    ID int primary key,
    achStatus enum('true', 'false'),
    achDate Date,
    title text,
    UserID int,
    foreign key(UserID) references User(ID)
);

create table Bet(
    ID int primary key,
    betStatus enum('true', 'false'),
    betDate Date,
    title text,
    amount int    
);


create table Betting(
    ID int primary key,
    UserID int,
    BetID int,
    foreign key(UserID) references User(ID),
    foreign key(BetID) references Bet(ID)
);

