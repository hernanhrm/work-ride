CREATE TABLE IF NOT EXISTS employee_office_distances
(
    id                 UUID           NOT NULL,
    employee_id        UUID           NOT NULL,
    office_id          UUID           NOT NULL,
    kilometer_distance NUMERIC(10, 2) NOT NULL,
    created_at         TIMESTAMP      NOT NULL DEFAULT now(),
    updated_at         TIMESTAMP,
    CONSTRAINT employee_office_distances_id_pk PRIMARY KEY (id),
    CONSTRAINT employee_office_distances_employee_id_fk FOREIGN KEY (employee_id) REFERENCES employees (id)
        ON UPDATE RESTRICT ON DELETE RESTRICT,
    CONSTRAINT employee_office_distances_office_id_fk FOREIGN KEY (office_id) REFERENCES offices (id)
        ON UPDATE RESTRICT ON DELETE RESTRICT,
    CONSTRAINT employee_office_distances_employee_id_office_id_uk UNIQUE (employee_id, office_id)
);

COMMENT ON TABLE employee_office_distances IS 'Holds the kilometers distance of an employee adress to the office one';

