CREATE TABLE IF NOT EXISTS drivers
(
    id                 UUID           NOT NULL,
    name               VARCHAR(100)   NOT NULL,
    rate_per_kilometer NUMERIC(10, 2) NOT NULL,
    created_at         TIMESTAMP      NOT NULL DEFAULT now(),
    updated_at         TIMESTAMP,
    CONSTRAINT drivers_id_pk PRIMARY KEY (id)
);


COMMENT ON TABLE drivers IS 'Holds drivers general data and rate per kilometer';

