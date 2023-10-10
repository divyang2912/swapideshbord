import React from 'react'
import OtherdataIteam from './OtherdataIteam';
import "../../App.css"

const OtherDataList = ({resource}) => {
    const myMap = [
        { key: 'films', title: 'Films' },
        { key: 'people', title: 'People' },
        { key: 'species', title: 'Species' },
        { key: 'vehicles', title: 'Vehicles' },
        { key: 'starships', title: 'Starships' },
        { key: 'pilots', title: 'Pilots' },
        { key: 'characters', title: 'Characters' },
        { key: 'residents', title: 'Residents'},
        { key: 'homeworld', title: 'Homeworld'}
      ];
    
      const filteredKeys = myMap.filter(({ key }) => resource[key] !== undefined);
    
      return (
        <div>
          {
            filteredKeys.map(({ title, key }) => {
              return (
                <div key={key} className='otherDataItemListContainer'>
                <h3>{title}</h3>
                { Array.isArray(resource[key]) ?
                resource[key].length === 0 ?
                <div className='child_data'>No Data Found</div>  :
                <ol>
                  {
                    resource[key].map(url => <OtherdataIteam key={url} url={url} />)
                  }
                </ol> :     
                resource[key] === null ?
                <div className='child_data'>No Data Found</div> 
                : 
                <ol>
                {
                  <OtherdataIteam key={resource[key]} url={resource[key]} />
                }
              </ol>  
    
                }
              </div>)
            })
          }
        </div>
      )
}

export default OtherDataList
