import React from 'react';

const ExpertCard = ({expert,onAdd}) => {
    return (
        <div className="bg-white p-4 rounded shadow-md text-center">
            <img src={expert.img} alt={expert.name} className="w-24 h-24 mx-auto rounded-full mb-2" />
            <h3 className="text-lg font-semibold">{expert.name}</h3>
            <p>Age: {expert.age}</p>
            <p><strong>Designation:</strong> {expert.designation}</p>
        <p><strong>Address:</strong> {expert.address}</p>
        <p><strong>Salary:</strong> ${expert.salary.toLocaleString()}</p>
        <button button onClick={() => onAdd(expert)} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
            Add to List
        </button>
        </div>
    );
};

export default ExpertCard;





