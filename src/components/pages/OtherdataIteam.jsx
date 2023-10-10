import React from 'react'
import { Link } from 'react-router-dom';
import "../../App.css"
import { useAppStore } from '../../services';

const getResourceIdFromUrl = (url = '') => {
  console.log("url = ",url)
  const parts = url.split("/");
  return { id: parts[parts.length - 2], resourceName: parts[parts.length - 3] };
};

const OtherdataIteam = ({url}) => {
  const resourcesById = useAppStore(state => state.data.resourcesById);
  const fetchInstance = useAppStore(state => state.actions.fetchInstance);
  const urlData = resourcesById[url];
  const { id, resourceName } = getResourceIdFromUrl(url);
  
  if (!urlData) {
    return (<div> :( &nbsp;&nbsp;&nbsp; {id}</div>);
  }
  const retry = () => fetchInstance(url, true);
  const { isFetching, errMsg, data } = urlData;
  const displayText = data?.title || data?.name;
  return (
    <div>
      {isFetching ? <div className="spinner">
  <div className="bounce1"></div>
  <div className="bounce2"></div>
  <div className="bounce3"></div> &nbsp;&nbsp;
  {id}
</div> : null}
      {errMsg ? <div style={{ color: 'red' }}>
        {errMsg} &nbsp;&nbsp;&nbsp; <span onClick={retry}>Retry</span> &nbsp;&nbsp; {id} </div> : null}
      {!isFetching && !errMsg && data ?
        (<div>
            <a
            className='intDiv'
              style={{ marginRight: '2rem'}}
              target='_blank'
              href={`http://images.google.com/images?um=1&hl=en&safe=active&nfpr=1&q=starwars+${resourceName}+${displayText}`}>
              {displayText}
            </a>
            <Link className='intDiv' to={`/${resourceName}/${id}`}>{id}</Link></div>)
        : null
      }

    </div>
  )
}

export default OtherdataIteam
