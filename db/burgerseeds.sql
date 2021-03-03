DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

SELECT * FROM burgers_db.burgers;
INSERT INTO burgers (burger_name, devoured)
VALUES ('Mushroom Swiss Burger', false), ('Double Bacon Burger', false), ('Traditional Burger', false);