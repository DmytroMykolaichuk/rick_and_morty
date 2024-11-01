'use client';
import { getInitialPages } from '@/service/api';
import { useEffect, useState, useMemo } from 'react';
import EpisodesViewList from '@/components/ListCharacters/ListCharacter';
import ButtonMenu from '@/components/ButtonMenu/ButtonMenu';

export default function Location() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [type, setType] = useState<string>('Planet');

  useEffect(() => {
    const getAllLocations = async () => {
      try {
        const { info, results } = await getInitialPages('location', 1);
        const allLocations = [...results];

        const requests = Array.from({ length: info.pages - 1 }, (_, i) =>
          getInitialPages('location', i + 2)
        );

        const responses = await Promise.all(requests);

        responses.forEach(({ results }) => allLocations.push(...results));
        setLocations(allLocations);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    getAllLocations();
  }, []);

  useEffect(() => {
    setFilteredLocations(locations.filter(loc => loc.type === type));
  }, [type, locations]);

  const uniqueTypes = useMemo(
    () => Array.from(new Set(locations.map(location => location.type))),
    [locations]
  );

  return (
    <section>
      <h1>Types of Locations :</h1>
      <div>
        <ButtonMenu uniqueTypes={uniqueTypes} type={type} setType={setType} />
        <EpisodesViewList
          characters={filteredLocations}
          url="locations"
          title="Locations"
        />
      </div>
    </section>
  );
}
