import React from 'react';

const PortfolioItem = (props) => {
    return (
        <div>
            <p>This page is for the item with the id of {props.match.params.id}</p>
        </div>
    )
};

export default PortfolioItem;