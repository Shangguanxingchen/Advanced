import React from 'react';
import { useStore,useSelector } from 'react-redux';
function AboutPage() {
    //console.log(useSelector())
    console.log(useStore())
    return (
        <div>
            关于我们
        </div>
    );
}

export default AboutPage;

