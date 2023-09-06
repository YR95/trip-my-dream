import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CardItem from '../../components/Cards/Card';
import { continents } from '../../api/continents/continents';

export default function Continents () {
  const [continentList, setContinentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const isLoading = useMemo(() => loading && error,
    [loading, error]);
  // const fetchContinentList = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await continents.get();
  //     setContinentList(response);
  //     console.log(response);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchContinentList = useCallback(async () => {

      setLoading(true);
      try {
        const response = await continents.get();
        setContinentList(response);
        console.log(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }

    },
    []);
  useEffect(() => {
      fetchContinentList();
    },
    []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      {continentList.map((continent) => (
        <CardItem key={continent.id} continent={continent}/>
      ))}
    </>
  );
}