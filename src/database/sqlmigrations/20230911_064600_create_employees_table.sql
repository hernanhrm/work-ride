CREATE TABLE IF NOT EXISTS employees
(
    id         UUID         NOT NULL,
    name       VARCHAR(100) NOT NULL,
    address    VARCHAR(150) NOT NULL,
    created_at TIMESTAMP    NOT NULL DEFAULT now(),
    updated_at TIMESTAMP,
    CONSTRAINT employees_id_pk PRIMARY KEY (id)
);

COMMENT ON TABLE employees IS 'Holds employees general data and is used to relate the kilometer distance to the offices and related trips';

