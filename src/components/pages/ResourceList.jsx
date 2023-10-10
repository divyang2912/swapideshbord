import  { React,useEffect,useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useAppStore } from '../../services';
import { When } from '../When/When';
import ResourceRow from './ResourceRow';

const ResourceList = () => {
    const { resource } = useParams();
    const { next, records, req } = useAppStore(state => state.data[resource]);
    const { fetchList } = useAppStore(state => state.actions);
    const noMoreRecords = records.length > 0 && Boolean(next) === false;
    const fetchCountRef = useRef(0);
    if(Object.keys(req).length === 0){
      fetchCountRef.current = 0
    }
  useEffect(() => {
        if (fetchCountRef.current === 0 && records.length === 0) {
            fetchList(resource, next)
        }
        fetchCountRef.current++
      },[resource])
    return (
      <div>
        <div className='twelve'><h1>{resource}</h1></div>
        <When
          isLoading={Boolean(req.isFetching)&&records.length === 0}
          errMsg={req.errMsg || ''}
          retry={() => fetchList(resource, next)}
        >
        <br />
        <br />
        <div className='tbl-content'>
        <table>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Details</th>
              <th>Other Data</th>
            </tr>
          </thead>
          <tbody>
            {
              records.map((rec, index) => <ResourceRow resourceName={resource} key={rec.name + index} resource={rec} srNo={index + 1} />)
            }
          </tbody>
        </table>
        </div>
        {
          Boolean(req.isFetching)&&records.length > 0 ?
          <div className='lengthDiv'>
          <div className="spinner">
          <div className="bounce1" style={{backgroundColor: "lightblue"}}></div>
          <div className="bounce2" style={{backgroundColor: "lightblue"}}></div>
          <div className="bounce3" style={{backgroundColor: "lightblue"}}></div>
          </div></div> : <div className='lengthDiv'>{records.length}&nbsp;-&nbsp;Data Found</div>
        }
             </When>
        <div>
        {
          records.length > 0 && !noMoreRecords?
          <div className='btnDiv'>
        <button
        className='plus-button'
        disabled={Boolean(req.isFetching) || noMoreRecords}
        onClick={() => fetchList(resource, next)}
      >
      </button>
      </div> : null
        }
        </div>
   
      </div>
    )
}

export default ResourceList
