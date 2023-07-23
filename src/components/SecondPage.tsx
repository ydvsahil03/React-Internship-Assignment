import  { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PostModel } from './PostModel';
// import DepartmentList from './DepartmentList';
// import { departmentsData } from '../utils';


function SecondPage() {
  const [data, setData] = useState<PostModel[]>([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get<PostModel[]>('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Second Page</h1>
      <DataGrid rows={data} columns={columns} checkboxSelection />
      

      {/* <DepartmentList departments={departmentsData} /> */}
    </div>
  );
}


export default SecondPage;
