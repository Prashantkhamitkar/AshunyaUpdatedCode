import React, { useState } from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
const ActionButton = () => {
 const [dropdown, setDropdown] = useState(false);
 const [submenu, setSubmenu] = useState(false);
 const [repsubmenu, setRepSubmenu] = useState(false);
    return (
      <>
        <Dropdown isOpen={dropdown} toggle={() => setDropdown(!dropdown)}>
          <DropdownToggle tag="button" className="btn btn-light waves-effect">
            ACTIONS
            <i className="mdi mdi-chevron-down" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-dark">
            <DropdownItem>
              <i className="fas fa-filter me-1"></i> FILTER
            </DropdownItem>

            <Dropdown
              isOpen={submenu}
              toggle={() => {
                setSubmenu(!submenu);
                setRepSubmenu(false);
              }}
              style={{ cursor: "pointer" }}
              direction="right"
            >
              <DropdownToggle
                tag="div"
                className="dropdown-item d-flex justify-content-between align-items-center"
                caret
              >
                <div>
                  <i className="fas fa-table me-2"></i>DATA
                </div>
                <i className="mdi mdi-chevron-right" />
              </DropdownToggle>
              <DropdownMenu
                data-popper-placement="right-start"
                className="dropdown-menu-dark "
                style={{
                  marginTop: "-2rem",
                }}
              >
                <DropdownItem>
                  <i className="fas fa-sort me-2"></i>SORT
                </DropdownItem>
                <DropdownItem>
                  <i className="fas fa-calculator me-2"></i>
                  AGGREGATE
                </DropdownItem>
                <DropdownItem>
                  <i className="fas fa-sync me-2"></i>
                  REFRESH
                </DropdownItem>
                <DropdownItem>
                  <i className="fas fa-history me-2"></i>
                  FLASHBACK
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown
              isOpen={repsubmenu}
              toggle={() => {
                setRepSubmenu(!repsubmenu);
                setSubmenu(false);
              }}
              style={{ cursor: "pointer" }}
              direction="right"
            >
              <DropdownToggle
                tag="div"
                className="dropdown-item d-flex justify-content-between align-items-center"
                caret
              >
                <div>
                  <i className="far fa-clipboard me-2"></i> REPORT
                </div>
                <i className="mdi mdi-chevron-right" />
              </DropdownToggle>
              <DropdownMenu
                data-popper-placement="right-start"
                className="dropdown-menu-dark "
                style={{
                  marginTop: "-2rem",
                }}
              >
                <DropdownItem>
                  <i className="far fa-save me-2"></i>SAVE
                </DropdownItem>
                <DropdownItem>
                  <i className="fas fa-retweet me-2"></i>RESET
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <DropdownItem>
              <i className="fas fa-download me-1"></i> DOWNLOAD{" "}
            </DropdownItem>
            <DropdownItem>
              <i className="far fa-question-circle me-1"></i> HELP
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>
    );
}

export default ActionButton