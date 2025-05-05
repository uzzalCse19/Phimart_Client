import React from 'react';
const List = () => {
    const fruits=["apple","Banana","Oreange"];
    
    return (
        <div>
            <ul>
            {fruits.map((fruit)=>{   
                return <li key={fruit}  style={{ color: 'blue', fontWeight: 'bold', margin: '5px 0' }}>{fruit}</li>;
                
            })}
            </ul>  

        </div>
    );
};


export default List;


// const List = () => {
//   const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Pine Apple"];

//   return (
//     <div>
//       <ul className="pl-6 list-decimal text-xl">
//         {fruits.map((fruit) => {
//           return <li key={fruit}>{fruit}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default List;
