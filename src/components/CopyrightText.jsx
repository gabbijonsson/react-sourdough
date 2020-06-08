import React from 'react';

function CopyrightText() {
    return <p className="copyright__datestamp">© {new Date().getFullYear()} Jonssons</p>
}

export default CopyrightText;