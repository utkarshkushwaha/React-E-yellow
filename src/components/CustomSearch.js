import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css';
import Data from "../components/Data.json";
function CustomSearch() {
    const [userData,setUserData]=React.useState(Data);
    const [userSearchData,setUserSearchData]=React.useState(Data);
    const [job,setJob]=React.useState('');
    const [locality,setLocality]=React.useState('');
      

      const handleSearch=()=>{
          const newData=userData.
          filter(x=>x.job== (job==''?x.job:job))
          .filter(y =>y.locality == (locality==''?y.locality:locality));
          setUserSearchData(newData);
      }
      return <div className='Custom_Search_Container'>
          <Table>
              <tr>
                  <td>
                      <input className="from-control" type='text' placeholder='Enter Job...' onChange={(e)=>setJob(e.target.value)}/>
                  </td>
                  <td>
                      <input className="from-control" type='text' placeholder='Enter Locality...' onChange={(e) => setLocality(e.target.value)} />
                  </td>
                  
                  <td>
                      <button className="btn btn--primary" onClick={()=>handleSearch()}>Search</button>
                  </td>
              </tr>
          </Table>
          <Table responsive stripped size="sm">
              <thead>
                  <tr>
                      <th>Job</th>
                      <th>Locality</th>
                      <th>Name</th>
                      <th>Contact Number</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      userSearchData&&userSearchData.length>0 ?
                      userSearchData.map(item=>
                          <tr>
                              <td>{item.job}</td>
                              <td>{item.locality}</td>
                              <td>{item.name}</td>
                              <td>{item.contact}</td>
                          </tr>    
                      )
                      :'No Data'
                  }
              </tbody>
          </Table>

      </div>
  }

  export default CustomSearch;
