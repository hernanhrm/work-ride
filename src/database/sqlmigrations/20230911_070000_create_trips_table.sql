CREATE TABLE IF NOT EXISTS trips
(
    id                          UUID      NOT NULL,
    employee_office_distance_id UUID      NOT NULL,
    driver_id                   UUID      NOT NULL,
    created_at                  TIMESTAMP NOT NULL DEFAULT now(),
    updated_at                  TIMESTAMP,
    CONSTRAINT trips_id_pk PRIMARY KEY (id),
    CONSTRAINT trips_employee_office_distance_id_fk FOREIGN KEY (employee_office_distance_id) REFERENCES employee_office_distances (id)
        ON UPDATE RESTRICT ON DELETE RESTRICT,
    CONSTRAINT trips_driver_id_fk FOREIGN KEY (driver_id) REFERENCES drivers (id)
        ON UPDATE RESTRICT ON DELETE RESTRICT
);

COMMENT ON TABLE trips IS 'Holds the trips made by a driver with the corresponding employee to an office';
