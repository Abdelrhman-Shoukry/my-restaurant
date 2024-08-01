import React from "react";
import Header from "../component/header";
import Sec1 from "../component/sec1";
import Sec2 from "../component/sec2";
import Sec3 from "../component/sec3";
import Middle from "../component/middle";

class Home extends React.Component{
    render(){
        return( <>

<Header/>
<Sec1/>
<Sec2/>
<Middle/>
<Sec3/>
</>
        )
    }
}


export default Home;