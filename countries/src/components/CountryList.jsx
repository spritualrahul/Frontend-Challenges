import React from 'react';
import CountriesData from '../CountriesData';
import CountryCard from './CountryCard';

export default function CountryList() {
  console.log(CountriesData);
  const array= CountriesData.map(()=> <CountryCard/>);
  return (
    
      <div className="countries-container">{array}</div>
   
  )
}
