import React from 'react';

const Snake = ({ snakeDots }) => {
    return (
        <div>
            {snakeDots.map((dot, i) => (
                <div className="snake-dot" key={i} style={{
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }} />
            ))}
        </div>
    );
};

export default Snake;
