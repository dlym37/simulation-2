create table apartment ( --SIM-2 67C
    id serial primary key,--SIM-2 67G
    price integer,--SIM-2 69D
    street text, --SIM-2 69E
    city varchar(240),--SIM-2 69C
    state varchar(10),
    image varchar(240)
);

insert into apartment (price, street, city, state, image) --SIM-2 66G
values (1000, '123 S main', 'Provo', 'UT','http://lorempixel.com/200/200/business/'),
(1200, '15998 State st', 'Provo', 'UT','http://lorempixel.com/200/200/business/'),
(1100, '456 S main st', 'San Francisco', 'CA','http://lorempixel.com/200/200/business/'),
(1500, '789 S main st', 'Draper', 'UT','http://lorempixel.com/200/200/business/'),
(1250, '123 S main dr', 'Evanston', 'WY','http://lorempixel.com/200/200/business/'),
(800, '456 S main dr', 'Provo', 'UT','http://lorempixel.com/200/200/business/'),
(650, '789 S main dr', 'SaltLake', 'UT','http://lorempixel.com/200/200/business/'),
(2200, '1595 E 400 S', 'Pleasant Grove', 'UT','http://lorempixel.com/200/200/business/'),
(950, '11918 Hidden Valley Dr', 'Sandy', 'UT','http://lorempixel.com/200/200/business/'),
(1300, '1456 Forrest Ridge Rd', 'Idaho Falls', 'ID','http://lorempixel.com/200/200/business/'),
(1100, '123 S main', 'Orlando', 'FL','http://lorempixel.com/200/200/business/')

create table ownerId (orderId serial primary key, apartmentid int foreign key references apartment(id));--SIM-2 67E, 68E