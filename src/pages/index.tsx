import React from "react";
import {LandingPage} from "./LandingPage";

import {Link} from "@mui/material";

interface Props {}

const landing = process.env.LANDING_PAGE_ENABLED;
const authenticated = true;

export default class Index extends React.Component {

    render() {
        if(landing) return (
            <LandingPage/>
        )

        if(!authenticated) return (
            <div>
                <button>Login</button>
            </div>
        )

        if(authenticated) return (
           <div>
               hello
               <Link href={'/admin'}>
                   <button>
                       Admin
                   </button>
               </Link>
           </div>
        )

        return (
            <div>
                fail
            </div>
        )
    }
};