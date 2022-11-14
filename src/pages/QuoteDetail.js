import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

export const QuoteDetail = () => {
    const params = useParams();
    return (
        <Fragment>
            <h1>QuoteDetail</h1>
            <h4>{params.quoteId}</h4>
        </Fragment>
    )
}
