import React, { FunctionComponent } from 'react'
import { CountryType } from '../types'

interface ICountryProps{
    country:CountryType
}
const Country:FunctionComponent<ICountryProps> = ({country}) => {
  return (
    <Country key={country.name} country={country}/>
  )
}

export default Country