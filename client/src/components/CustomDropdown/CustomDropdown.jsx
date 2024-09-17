import "./customdropdown.css";
import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";

const CustomDropdown = ({ label, options, onSelect }) => {
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleClick = (selectedVal) => {
    setSelectedValue(selectedVal); // Update the selected value in the dropdown
    onSelect(selectedVal); // Pass the selected value to the parent component
  };

  return (
    <>
      <label className="item-search-label"> {label}</label>
      <Dropdown onSelect={handleClick}>
        <Dropdown.Toggle
          className="dropdown-custom"
          id="dropdown-custom-components"
        >
          <span>{selectedValue ? selectedValue : label}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Form.Control
            autoFocus
            className="my-1"
            placeholder="Search..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {options
              .filter(
                (option) =>
                  !value || option.toLowerCase().startsWith(value.toLowerCase())
              )
              .map((option, index) => (
                <Dropdown.Item eventKey={option} key={index}>
                  {option}
                </Dropdown.Item>
              ))}
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default CustomDropdown;
