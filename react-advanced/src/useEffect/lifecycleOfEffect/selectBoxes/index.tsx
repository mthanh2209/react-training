import { useSelectedOption } from "./useSelectedOption";

interface Planet {
  id: string;
  name: string;
}

interface Place {
  id: string;
  name: string;
}

export const OptionPage = () => {
  const [
    planetList,
    planetId,
    setPlanetId
  ] = useSelectedOption("/planets");

  const [
    placeList,
    placeId,
    setPlaceId
  ] = useSelectedOption(
    planetId ? `/planets/${planetId}/places` : null
  );

  const handleChangePlanet = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlanetId(e.target.value);
  };

  const handleChangePlace = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlaceId(e.target.value);
  };

  return (
    <>
      <label>
        Pick a planet:{" "}
        <select value={planetId} onChange={handleChangePlanet}>
          {planetList?.map((planet: Planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Pick a place:{" "}
        <select value={placeId} onChange={handleChangePlace}>
          {placeList?.map((place: Place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>

      <hr />
      <p>
        You are going to: {placeId || "..."} on {planetId || "..."}
      </p>
    </>
  );
};
