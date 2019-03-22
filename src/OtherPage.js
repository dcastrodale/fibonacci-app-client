import React from 'reactt'
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <h1>I'm so other page</h1>
            <Link to="/">Go back</Link>
        </div>
    );
}