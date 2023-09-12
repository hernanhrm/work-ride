CREATE TABLE IF NOT EXISTS trips
(
    id          UUID      NOT NULL,
    employee_id UUID      NOT NULL,
    driver_id   UUID      NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT now(),
    updated_at  TIMESTAMP,
    CONSTRAINT trips_id_pk PRIMARY KEY (id),
    CONSTRAINT trips_employee_id_fk FOREIGN KEY (employee_id) REFERENCES employees (id)
        ON UPDATE RESTRICT ON DELETE RESTRICT,
    CONSTRAINT trips_id_fk FOREIGN KEY (driver_id) REFERENCES drivers (id)
        ON UPDATE RESTRICT ON DELETE RESTRICT,
    CONSTRAINT trips_employee_id_driver_id_uk UNIQUE (employee_id, driver_id)
);

COMMENT ON TABLE trips IS 'Holds the trips made by a driver with the corresponding employee';

