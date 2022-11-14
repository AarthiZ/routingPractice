import React from 'react';
import { Route } from 'react-router-dom';

const Welcome = () => {
    return (
        // <div>
        <section>
            <p style={{ textAlign: 'center' }}>Welcome</p >
            <Route path="/welcome/new-user"><p style={{ textAlign: 'center' }}>Welcome new user!</p></Route>
        </section >
        // </div >
    )
}
export default Welcome;