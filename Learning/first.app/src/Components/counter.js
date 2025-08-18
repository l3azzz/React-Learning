import React, { useState } from "react";

function Counter() {
  let initialValue = 0;
  const [tallycount, setTallycount] = useState(initialValue); // remember we re using constant

  let updateCounter = () => {
    for (let i = 0; i < 5; i++) {
      setTallycount(tallycount + 1);
      //   doesn't work we'll se why next video
      //   this don't or work on previous value
    }
  };
  return (
    <div>
      <h1>
        Tally Countine : {tallycount}
        <button onClick={() => setTallycount(tallycount + 1)}>+</button>
        <button onClick={() => setTallycount(tallycount - 1)}>-</button>
        <button onClick={() => setTallycount(initialValue)}>Reset</button>
        <button onClick={() => setTallycount(tallycount + 5)}>+5</button>
        <button onClick={() => setTallycount(tallycount + 10000)}>
          +10000
        </button>
        <button onClick={() => updateCounter()}>+5 2nd</button>
        {/*  this fucks remeber don't work*/}
        {/* no problem it just works but we 'll se */}
        {/* this will not work bcuz above is constant 
        // above is false statement */}
      </h1>
    </div>
  );
}

export default Counter;

// how to use usestate with objeacts
