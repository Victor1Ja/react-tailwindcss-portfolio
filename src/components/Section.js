import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import getData from '../data';

export default function Section({ children }) {
  const { setData, loaded, setLoaded } = useContext(DataContext);
  useEffect(() => {
    const load = async () => {
      const newData = await getData();
      console.log({ newData });
      setData(newData);
      setLoaded(true);
    };
    load();
  }, []);
  return (
    <section className="section">
      {!loaded && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )}
      {loaded && children}
    </section>
  );
}
