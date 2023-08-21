import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import BusinessServicesList from './DepartmentComponent';
import Nav from './Nav'

const SecondPageComponent1 = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => setError(error.message));
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 800 },
  ];

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <Nav/>
      <div className="gridContainer" >
        <Box sx={{ height: 400, width: '80%', margin: "auto", marginTop: "5px" }}>
          {posts.length != 0 ? <DataGrid rows={posts} columns={columns} pageSize={5}
            checkboxSelection
            disableRowSelectionOnClick
          /> : <h3>Loading...</h3>}
        </Box>
      </div>
      <BusinessServicesList />
    </>
  );
};

export default SecondPageComponent1;
