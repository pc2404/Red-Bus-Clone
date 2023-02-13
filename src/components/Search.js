import React, { useState } from "react";
import { Container, InputGroup, Form, Button } from "react-bootstrap";
import { BsArrowLeftRight } from "react-icons/bs";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState();
  const navigate = useNavigate();

  function exchangeToFrom() {
    const fromVal = from;
    const toVal = to;
    setTo(fromVal);
    setFrom(toVal);
  }

  function handleSearch() {
    if (!from || !to || !date) {
      toast.error("All fields are required");
    } else {
      navigate("/results");
    }
  }
  return (
    <Container>
      <div className="mt-5">
        <InputGroup className="m-3 flex align-items-center">
          <InputGroup.Text>
            {<TbBuildingSkyscraper size={20} />}
          </InputGroup.Text>
          <Form.Control
            aria-label="Text input with dropdown button"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <BsArrowLeftRight onClick={exchangeToFrom} />
          <InputGroup.Text>
            {<TbBuildingSkyscraper size={20} />}
          </InputGroup.Text>
          <Form.Control
            aria-label="Text input with dropdown button"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <InputGroup.Text>{<MdOutlineDateRange size={20} />}</InputGroup.Text>
          <Form.Control
            aria-label="Text input with dropdown button"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button variant="danger" onClick={handleSearch}>
            Search Buses
          </Button>
        </InputGroup>
      </div>
    </Container>
  );
};
