DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);


INSERT INTO burgers (burger_name, devoured) VALUES ("test1Burger", FALSE), ("2ndTestBurger", FALSE), ("ClassicThirdTest", FALSE);

select * from burgers;