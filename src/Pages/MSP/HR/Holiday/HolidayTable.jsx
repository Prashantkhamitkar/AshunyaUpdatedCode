import React, { useEffect, useState } from 'react'
import data from "./Holiday"
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import HolidayData from './HolidayData';
import ActionButton from '../../common/ActionButton';
const HolidayTable = () => {
      const [holidayData, setHolidayData] = useState(data);
      const [searchTerm, setSearchTerm] = useState("");
      const [check, setcheck] = useState(false);
      const [toggle, setToggle] = useState(false);

      useEffect(() => {
        const filtered = data.filter((item) =>
          Object.values(item).some((val) =>
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setHolidayData(filtered);
      }, [searchTerm]);
      const toggleModal = () => setToggle(!toggle);
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">HOLIDAY DATA</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  md="12"
                  className="col-sm d-flex justify-content-end align-items-center"
                >
                  <Button
                    color="info"
                    className="btn btn-rounded"
                    disabled={!check}
                    onClick={toggleModal}
                  >
                    EDIT
                  </Button>
                </Col>
              </Row>
              <Row className="g-4">
                <Col className="col-sm">
                  <div className="app-search d-flex flex-column flex-sm-row mt-0 align-items-start align-items-sm-center gap-3">
                    <p className="text-muted mb-0">Summary</p>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <span
                        className="ri-search-line"
                        style={{ zIndex: "0" }}
                      ></span>
                    </div>
                    <ActionButton />
                  </div>
                </Col>
              </Row>
              <HolidayData
                data={holidayData}
                setToggle={setToggle}
                modal={toggle}
                check={setcheck}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default HolidayTable