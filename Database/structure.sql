USE u954605081_metrica_prod;
#USE u954605081_metrica_stg;
#USE u954605081_pesquisa;

-- SINGULAR
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(20) NOT NULL,
  name VARCHAR(80) NOT NULL,
  password VARCHAR(20) NOT NULL,
  team VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE managers (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE clients (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE answer_types (
  id INT NOT NULL AUTO_INCREMENT,
  type VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- WHITH FOREIGN KEY
CREATE TABLE user_notes (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  note VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_blocks (
  id INT NOT NULL AUTO_INCREMENT,
  client INT NOT NULL,
  question VARCHAR(255) NOT NULL,
  answer VARCHAR(255),
  answer_type INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (client) REFERENCES clients(id),
  FOREIGN KEY (answer_type) REFERENCES answer_types(id)
);

CREATE TABLE search_sections (
  id INT NOT NULL AUTO_INCREMENT,
  client_id INT NOT NULL,
  section_01 INT,
  section_02 INT,
  section_03 INT,
  section_04 INT,
  section_05 INT,
  section_06 INT,
  section_07 INT,
  section_08 INT,
  section_09 INT,
  section_10 INT,
  section_11 INT,
  section_12 INT,
  section_13 INT,
  section_14 INT,
  section_15 INT,
  section_16 INT,
  section_17 INT,
  section_18 INT,
  section_19 INT,
  section_20 INT,
  section_21 INT,
  section_22 INT,
  section_23 INT,
  section_24 INT,
  section_25 INT,
  section_26 INT,
  section_27 INT,
  section_28 INT,
  section_29 INT,
  section_30 INT,

  PRIMARY KEY (id),
  FOREIGN KEY (section_01) REFERENCES question_blocks(id),
  FOREIGN KEY (section_02) REFERENCES question_blocks(id),
  FOREIGN KEY (section_03) REFERENCES question_blocks(id),
  FOREIGN KEY (section_04) REFERENCES question_blocks(id),
  FOREIGN KEY (section_05) REFERENCES question_blocks(id),
  FOREIGN KEY (section_06) REFERENCES question_blocks(id),
  FOREIGN KEY (section_07) REFERENCES question_blocks(id),
  FOREIGN KEY (section_08) REFERENCES question_blocks(id),
  FOREIGN KEY (section_09) REFERENCES question_blocks(id),
  FOREIGN KEY (section_10) REFERENCES question_blocks(id),
  FOREIGN KEY (section_11) REFERENCES question_blocks(id),
  FOREIGN KEY (section_12) REFERENCES question_blocks(id),
  FOREIGN KEY (section_13) REFERENCES question_blocks(id),
  FOREIGN KEY (section_14) REFERENCES question_blocks(id),
  FOREIGN KEY (section_15) REFERENCES question_blocks(id),
  FOREIGN KEY (section_16) REFERENCES question_blocks(id),
  FOREIGN KEY (section_17) REFERENCES question_blocks(id),
  FOREIGN KEY (section_18) REFERENCES question_blocks(id),
  FOREIGN KEY (section_19) REFERENCES question_blocks(id),
  FOREIGN KEY (section_20) REFERENCES question_blocks(id),
  FOREIGN KEY (section_21) REFERENCES question_blocks(id),
  FOREIGN KEY (section_22) REFERENCES question_blocks(id),
  FOREIGN KEY (section_23) REFERENCES question_blocks(id),
  FOREIGN KEY (section_24) REFERENCES question_blocks(id),
  FOREIGN KEY (section_25) REFERENCES question_blocks(id),
  FOREIGN KEY (section_26) REFERENCES question_blocks(id),
  FOREIGN KEY (section_27) REFERENCES question_blocks(id),
  FOREIGN KEY (section_28) REFERENCES question_blocks(id),
  FOREIGN KEY (section_29) REFERENCES question_blocks(id),
  FOREIGN KEY (section_30) REFERENCES question_blocks(id),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE introduction_sections (
  id INT NOT NULL AUTO_INCREMENT,
  client_id INT NOT NULL,
  section_01 INT,
  section_02 INT,
  section_03 INT,
  section_04 INT,
  section_05 INT,
  section_06 INT,
  section_07 INT,
  section_08 INT,
  section_09 INT,
  section_10 INT,
  
  PRIMARY KEY (id),
  FOREIGN KEY (section_01) REFERENCES question_blocks(id),
  FOREIGN KEY (section_02) REFERENCES question_blocks(id),
  FOREIGN KEY (section_03) REFERENCES question_blocks(id),
  FOREIGN KEY (section_04) REFERENCES question_blocks(id),
  FOREIGN KEY (section_05) REFERENCES question_blocks(id),
  FOREIGN KEY (section_06) REFERENCES question_blocks(id),
  FOREIGN KEY (section_07) REFERENCES question_blocks(id),
  FOREIGN KEY (section_08) REFERENCES question_blocks(id),
  FOREIGN KEY (section_09) REFERENCES question_blocks(id),
  FOREIGN KEY (section_10) REFERENCES question_blocks(id),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE searches (
  id INT NOT NULL AUTO_INCREMENT,
  client_id INT NOT NULL,
  introduction INT NOT NULL,
  search INT NOT NULL,
  qtd_users INT NOT NULL,
  users_meta INT NOT NULL,
  total INT NOT NULL,
  name VARCHAR(255), 

  PRIMARY KEY (id),
  FOREIGN KEY (client_id) REFERENCES clients(id),
  FOREIGN KEY (introduction) REFERENCES introduction_sections(id),
  FOREIGN KEY (search) REFERENCES search_sections(id)
);

CREATE TABLE user_searches (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  search_id INT NOT NULL,
  qtd_done INT NOT NULL DEFAULT 0,
  qtd_goal INT NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (search_id) REFERENCES searches(id)
);

CREATE TABLE search_answers (
  id INT NOT NULL AUTO_INCREMENT,
  client_id INT NOT NULL,
  search_id INT NOT NULL,
  question_id INT NOT NULL,
  section VARCHAR(40) NOT NULL,
  answer_collected VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  unique_id VARCHAR(40) NOT NULL,
  custom_filter VARCHAR(100) NOT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (client_id) REFERENCES clients(id),
  FOREIGN KEY (search_id) REFERENCES searches(id),
  FOREIGN KEY (question_id) REFERENCES question_blocks(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE search_history (
  id INT NOT NULL AUTO_INCREMENT,
  client_id INT NOT NULL,
  search_id INT NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (client_id) REFERENCES clients(id),
  FOREIGN KEY (search_id) REFERENCES searches(id)
);

CREATE TABLE warnings (
  id INT NOT NULL AUTO_INCREMENT,
  client INT NOT NULL,
  first mediumtext DEFAULT NULL,
  second mediumtext DEFAULT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (client) REFERENCES clients(id)
);

CREATE TABLE search_start_question (
  id INT NOT NULL AUTO_INCREMENT,
  client INT NOT NULL,
  search_id INT NOT NULL,
  question mediumtext NOT NULL,
  cancel VARCHAR(40) NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (client) REFERENCES clients(id),
  FOREIGN KEY (search_id) REFERENCES searches(id)
);