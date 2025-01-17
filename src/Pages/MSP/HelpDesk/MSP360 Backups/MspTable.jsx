import React, { useEffect, useState } from "react";
import { records as data } from "./MSP360data.js";
import MspTableData from "./MspTableData.jsx";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import ActionButton from "../../common/ActionButton.jsx";

const MspTable = () => {
  const [mspData, setMspData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setMspData(filtered);
  }, [searchTerm]);
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">BACKUP DATA</h5>
            </CardHeader>
            <CardBody>
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
              <MspTableData data={mspData} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default MspTable;
