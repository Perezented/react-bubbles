import React, { useState, useEffect } from 'react';

import Loader from 'react-loader-spinner';

const LoaderPage = () => {
    return (
        <>
            <Loader type="ThreeDots" color="grey" height={400} width={400} />
        </>
    );
};

export default LoaderPage;
