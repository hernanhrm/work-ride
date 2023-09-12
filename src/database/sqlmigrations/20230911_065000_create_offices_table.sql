CREATE TABLE IF NOT EXISTS offices
(
    id         UUID         NOT NULL,
    name       VARCHAR(100) NOT NULL,
    address    VARCHAR(150) NOT NULL,
    created_at TIMESTAMP    NOT NULL DEFAULT now(),
    updated_at TIMESTAMP,
    CONSTRAINT offices_id_pk PRIMARY KEY (id)
);


COMMENT ON TABLE offices IS 'Holds offices general data, used to relate employee`s kilometer distance to the offices';

