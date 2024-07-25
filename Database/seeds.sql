USE u954605081_metrica_prod;
#USE u954605081_metrica_stg;
#USE u954605081_pesquisa;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO users (user, name, password, team) VALUES ("@metrica", "Métrica", "@metrica2024", "Métrica");

INSERT INTO managers (user, name, password) VALUES ("@metrica", "Métrica", "@metrica2024");
    
INSERT INTO answer_types (type) VALUES
    ("text"),
    ("selection_num"),
    ("selection_text"),
    ("text_selection_text"),
    ("selection_text_long");
