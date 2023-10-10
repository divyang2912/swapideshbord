import React ,{useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useAppStore } from '../../services';
import { getUniqResourceIdsFromRecords } from '../../services/helpers';
import OtherDataList from './OtherDataList';
const getResourceInstanceUrl = (resource, id) =>  {
  return `https://swapi.dev/api/${resource}/${id}/`
};

const ResourceInstance = () => {
    const { resource, id } = useParams();
    console.log(resource,id)
    const resourcesById = useAppStore(state => state.data.resourcesById);
    const fetchInstance = useAppStore(state => state.actions.fetchInstance);
    const url = getResourceInstanceUrl(resource, id);
    const currentResource = resourcesById[url];
    const countRef = useRef(0);
    React.useEffect(() => {
      if (countRef.current === 0) {
        if (!currentResource) {
          fetchInstance(url, true);
        }
      }
      countRef.current++;
    }, [currentResource]);
  
    const { isFetching, errMsg, data } = currentResource || {};
  
    React.useEffect(() => {
      if (data) {
        const urls = getUniqResourceIdsFromRecords([data]);
        urls.forEach(url => {
          if (resourcesById[url] === undefined) {
            fetchInstance(url, true);
          }
        });
      }
    }, [data, resourcesById])
    const myMap = [{"key" : "classification"},
    {key : "language"},
    {key : "average_hight"},
    {key : "director"},
    {key : "producer"},
    {key : "release_date"},
    {key : "height"},
    {key : "mass"},
    {key : "gender"},
    {key : "diameter"},
    {key : "climate"},
    {key : "population"},
    {key : "gravity"},
    {key : "model"},
    {key : "consumables"},
    {key : "length"}]
    const filteredKeys = myMap.filter(({ key }) => data[key] !== undefined)
    console.log("...................",filteredKeys)
    return (
      <div className='intdiv'>
        {isFetching ? <h3>Fetching !!!!</h3> : null}
        {errMsg ? <h3>{errMsg}</h3> : null}
        {data ? (<div>
          
          <div className='twelve'>
            <h1>
            <div className='black'>
              {data['name'] || data['title']}
            </div>
            </h1>
          </div>
          <div>
            {filteredKeys.map(({key}) => {
              return(
                <ol>
                  <b>{key.toUpperCase()}</b> - {data[key]}
                </ol>
              )
            })}
          </div>
          <div>
            {<OtherDataList resource={data} />}
          </div>
        </div>) : null}
      </div>
    )
}

export default ResourceInstance
