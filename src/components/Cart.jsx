import { List } from 'lucide-react';
import React from 'react';
const Cart = ({ selected }) => {
    const total = selected.reduce((sum, item) => sum + item.salary, 0);
    return (

        <div className="bg-gray-100 p-4 rounded shadow-md h-fit">
            <h3 className="text-xl font-bold">Expert Added: {selected.length}</h3>
            <p className="mb-2">Total Cost: ${total.toLocaleString()}</p>
            <ul>
            {selected.map((exp) => (
                <li key={exp.id} className="flex items-center gap-2 my-2">
                    <img src={exp.img} alt={exp.name} className="w-8 h-8 rounded-full"/>
                    <span>{exp.name}</span>
                </li>
            ))}
            </ul>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full">
             Confirm List
            </button>
        </div>
    );
};

export default Cart;

 