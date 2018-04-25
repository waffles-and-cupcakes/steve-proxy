DROP DATABASE IF EXISTS fec;
CREATE DATABASE fec;
\connect fec;

CREATE TABLE reviews
(
  room_id INT NOT NULL,
  first_name TEXT NOT NULL,
  user_avatar  TEXT NOT NULL,
  created_at TEXT NOT NULL,
  body TEXT NOT NULL,
  accuracy INT NOT NULL,
  communication INT NOT NULL,
  cleanliness INT NOT NULL,
  location INT NOT NULL,
  check_in INT NOT NULL,
  value INT NOT NULL
);

COPY reviews(room_id, first_name, user_avatar, created_at, 
body, accuracy, communication, cleanliness, location, check_in, value) 
FROM '/Users/Belinda/Hack-Reactor/FEC-proxy/reviews/db/reviews.csv' DELIMITER ',' CSV HEADER;