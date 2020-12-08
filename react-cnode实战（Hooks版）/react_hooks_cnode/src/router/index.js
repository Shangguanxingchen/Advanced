import React from 'react';
import IndexPage from '../views/index/index';
import TopicPage from '../views/topic/index';
import AboutPage from '../views/about/index';
import StartPage from '../views/getstart/index';
import UserPage from '../views/user/index';
import Page404 from '../views/view404/index';


const routes = [
    {
        path:"/",
        exact:true,
        render(props){
            return <IndexPage {...props}></IndexPage>
        }
    },
    {
        path: ["/topics","/topics/:id"],
        exact:true,
        render(props){
            return <TopicPage {...props}></TopicPage>
        }
    },
    {
        path: ["/user", "/user/:username"],
        exact:true,
        render(props){
            return <UserPage {...props}></UserPage>
        }
    },
    {
        path:"/getstart",
        exact:true,
        render(props){
            return <StartPage {...props}></StartPage>
        }
    },
    {
        path:"/about",
        exact:true,
        render(props){
            return <AboutPage {...props}></AboutPage>
        }
    },
    {
        path:"",
        exact:true,
        render(props){
            return <Page404 {...props}></Page404>
        }
    },

];

export {routes};