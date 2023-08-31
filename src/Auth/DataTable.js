
import React, { useState } from "react";

const DataTable = ({data, onDelete, onEdit}) => {
    const [editableRowIndex, setEditableRowIndex] = useState(null);
    const handleEdit = (index) => {
        setEditableRowIndex(index);
    };
    const handleSave = (index, updatedData) => {
        setEditableRowIndex(null);
        onEdit(index, updatedData);
    };
    return (
        <table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className={editableRowIndex === index ? 'editing' : ''}>
                        <td>
                            {editableRowIndex === index ? (
                                <input
                                    type="text"
                                    value={row.email}
                                    onChange={(e) => onEdit(index, { ...row, email: e.target.value})}
                                />
                            ) : (
                                row.email
                            )}
                        </td>

                        <td>
                            {editableRowIndex === index ? (
                                <input
                                    type="text"
                                    value={row.name}
                                    onChange={(e) => onEdit(index, { ...row, name: e.target.value})}
                                />
                            ) : (
                                row.name
                            )}
                        </td>

                        <td>
                            {editableRowIndex === index ? (
                                <button className="edit" onClick={() => handleSave(index, row)}>Save</button>
                            ) : (
                                <>
                                    <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
                                    <button onClick={() => onDelete(index)}>Delete</button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
