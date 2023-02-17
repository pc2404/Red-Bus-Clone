import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import journeyContext from "../context/journeyContext";
import BusesResults from "./BusesResults";

const SearchResults = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allBuses, setAllBuses] = useState([]);
  const { from, to } = useContext(journeyContext);

  async function getBuses() {
    setIsLoading(true);
    const responses = await fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${to}`
    );
    const resJson = await responses.json();
    setIsLoading(false);
    console.log("All busses", resJson);
    setAllBuses(resJson);
  }

  useEffect(() => {
    getBuses();
  }, [from, to]);

  function sortResult(criteria) {
    if (criteria === "Price") {
      const copyBuses = [...allBuses];
      const sortedBus = copyBuses.sort((a, b) => {
        if (Number(a.ticketPrice) > Number(b.ticketPrice)) {
          return -1;
        }
        return 1;
      });
      // console.log("Sorted Buses are", sortedBus);
      setAllBuses(sortedBus);
    }
  }

  if (isLoading) {
    <Spinner animation="border" variant="danger" />;
  }
  return (
    <Container className="bg-danger m-3 p-3 d-flex flex-column">
      <div className="bg-light p-3 d-flex flex-row justify-content-between w-50 align-self-center">
        <h4>SORT BY:</h4>
        {["Departure", "Arrival", "Price"].map((criteria) => (
          <Button
            className="bg-danger rounded-0"
            onClick={() => sortResult(criteria)}
          >
            {criteria}
          </Button>
        ))}
      </div>
      {allBuses.map((bus) => {
        return <BusesResults bus={bus} />;
      })}
    </Container>
  );
};
export default SearchResults;
