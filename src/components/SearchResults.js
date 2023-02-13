import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import BusesResults from "./BusesResults";

const SearchResults = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allBuses, setAllBuses] = useState([]);
  useEffect(() => {
    async function getBuses() {
      setIsLoading(true);
      const responses = await fetch(
        "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"
      );
      const resJson = await responses.json();
      setIsLoading(false);
      console.log(resJson);
      setAllBuses(resJson);
    }
    getBuses();
  }, []);

  if (isLoading) {
    <Spinner animation="border" variant="danger" />;
  }
  return (
    <Container className="bg-danger m-5 flex align-items-center">
      <h1 style={{ textAlign: "center" }}>
        Searched Busses will be shown here.
      </h1>
      {allBuses.map((bus) => {
        return <BusesResults bus={bus} />;
      })}
    </Container>
  );
};
export default SearchResults;
