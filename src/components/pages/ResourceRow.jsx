import React from 'react'
import OtherDataList from './OtherDataList';

const ResourceRow = ({ resource, srNo, resourceName }) => {
    const InfoKeysByResourceName = {
        films: ['title', 'director'],
        people: ['name', 'height', 'birth_year'],
        species: ['name', 'language'],
        vehicles: ['name', 'model', 'manufacturer'],
        starships: ['name', 'model'],
        planets: ['name', 'gravity']
      };

    return (<tr>
        <td Style="font-size:20px;">{srNo}</td>
        <td><ol>{InfoKeysByResourceName[resourceName].map((sourceName,i) => {return (<li key={i}><b>{sourceName.toUpperCase()}</b>   -   {resource[sourceName]}</li>)})}</ol></td>
        <td><OtherDataList resource={resource} /></td>
      </tr>)
}

export default ResourceRow
