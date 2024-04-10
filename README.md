# Anular-CRUD-Operations

# Angular-CRUD-Operations

Commands

===Backend===
1. npm init -y
2. npm i express body-parser cors mysql2
3. npm i -g nodemon
4. nodemon index.js

===MySql Command===

CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100),
    email VARCHAR(100),
    mobile VARCHAR(100)
);

===Frontend===
1. ng new Frontend
2. ng new Frontend --no-standalone (for angular 17)
3. ng g c create
4. ng g c read
5. ng g s apiservice
6. ng serve -o
