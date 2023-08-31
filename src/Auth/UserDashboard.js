import React, { useState }from "react";

import UserNavbar from './UserNavbar'
import Sidebar from './Sidebar'
import DataTable from './DataTable'

const UserDashboard=(()=> {
  const initialData = [
    { email: 'abc@example.com' , name: 'User 1' },
    { email: 'xyz@example.com' , name: 'User 2' },
  ];
  
  const [tableData, setTableData] = useState(initialData);
  
  const handleDelete = (indexToDelete) => {
    const updateData = tableData.filter((_,index) => index !== indexToDelete);
    setTableData(updateData)
  };
  const handleEdit = (index, updateData) => {
    const updatedTableData = [...tableData];
    updatedTableData[index] = updateData;
    setTableData(updatedTableData);
  };
  return (
    <div>
        <UserNavbar/>
        <Sidebar/>
        <div>
          <DataTable data={tableData} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    </div>
  );
});

export default UserDashboard