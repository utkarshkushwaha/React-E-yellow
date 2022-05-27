import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css';
import './CustommSearch.css';
function CustommSearch(props) {
    const [userData, setUserData] = React.useState(props.Data);
    const [userSearchData, setUserSearchData] = React.useState(props.Data);
    const [name, setname] = React.useState('');
    const [locality, setLocality] = React.useState('');


    const handleSearch = () => {
        const newData = userData.
            filter(x => x.name == (name == '' ? x.name : name))
            .filter(y => y.locality == (locality == '' ? y.locality : locality));
        setUserSearchData(newData);
    }
    return <div className='Customm_Search'>
        <Table>
            <tr>
                <td>
                    <input className="from-control" type='text' placeholder='Enter Name...' onChange={(e) => setname(e.target.value)} />
                </td>
                <td>
                    <input className="from-control" type='text' placeholder='Enter Locality...' onChange={(e) => setLocality(e.target.value)} />
                </td>
                
                <td>
                    <button className="btn btn--primary" onClick={() => handleSearch()}>Search</button>
                </td>
            </tr>
        </Table>
        <Table responsive stripped size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Locality</th>
                    <th>Job</th>
                    <th>Contact Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    userSearchData && userSearchData.length > 0 ?
                        userSearchData.map(item =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.locality}</td>
                                <td>{item.job}</td>
                                <td>{item.contact}</td>
                            </tr>
                        )
                        : 'No Data'
                }
            </tbody>
        </Table>

    </div>
}

export default CustommSearch;
