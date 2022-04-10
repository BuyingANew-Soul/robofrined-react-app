import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";


const App = () => {

    const [robots, setRobot] = useState([]);
    const [searchfield, setSearchField] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setRobot(json))
    },[]);

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    };
    
    const filterRobots = robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    });
        
    return(
        
        <div className="tc">
            <h1>ROboFrIenDs</h1>
            <SearchBox onSearchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filterRobots}/>
                </ErrorBoundary>
            </Scroll>      
        </div>
    )
    
}


export default App;