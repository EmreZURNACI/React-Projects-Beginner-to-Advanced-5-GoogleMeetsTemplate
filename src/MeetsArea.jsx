import React from 'react'
import Counter from "./Store/Counter.jsx";
import { useSelector } from 'react-redux';
import User from './User.jsx'
function MeetsArea() {
  const count = useSelector((state) => state.count.count);
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(<User />);
  }
  function divideCols() {
    if (users.length === 1) {
      return "grid-cols-1 gap-1";
    }
    else if (users.length > 1 && users.length < 5) {
      return "grid-cols-2 gap-2";
    }
    else if (users.length >= 5 && users.length < 7) {
      return "grid-cols-3 gap-3";
    }
    else if (users.length % 3 === 0 && users.length!==12) {
      return "grid-cols-3 gap-3"
    }
    else {
      return "grid-cols-4 gap-4"
    }
  }
  return (
    <div className={"w-screen h-screen bg-black grid text-white " + divideCols()}>
      {
        users.map((user, index) => (
          <div key={index}>{user}</div>
        ))
      }
      <Counter />
    </div>
  )
}

export default MeetsArea