import React from "react";
import Posts from "./Posts";

class Home extends React.Component {
    render() {
        return (
            <div className="mr-5 ml-5">
                <Posts />
            </div>
        );
    }
}

export default Home;
