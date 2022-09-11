import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../queries/queries";
import { GetLocationsQuery } from "../types/generated/graphql";

const DisplayLocations = () => {
  const { loading, error, data } = useQuery<GetLocationsQuery>(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;
  return (
    <>
      {data?.locations.map(({ id, name, description }) => (
        <div key={id}>
          <h3>{name}</h3>
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </>
  );
};

export default DisplayLocations;
