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
  
    return (
      <div>
        {isFetching ? <h3>Fetching !!!!</h3> : null}
        {errMsg ? <h3>{errMsg}</h3> : null}
        {data ? (<div>
          <div className='twelve'>
            <h1>
              {data['name'] || data['title']}
            </h1>
          </div>
          <div style={{color : "white"}}>
            {<OtherDataList resource={data} />}
          </div>
        </div>) : null}
      </div>
    )
}

export default ResourceInstance
