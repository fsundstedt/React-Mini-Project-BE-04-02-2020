create table users (
    id serial primary key,
    name varchar
);

create table posts (
    id serial primary key,
    title varchar,
    content text,
    user_id integer references users(id)
);

INSERT INTO users(id, name) VALUES (1, 'Frank');
INSERT INTO posts (id, title, content, user_id) VALUES (1, 'Day 1', 'Day 1 of the Coronapocalypse', 1);