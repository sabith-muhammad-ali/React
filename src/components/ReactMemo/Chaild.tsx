import React from 'react';

const Child = React.memo(({ count }) => {
    console.log("Child component rendered");
    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
});

export default Child;