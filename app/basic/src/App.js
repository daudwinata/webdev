import React, { Component } from 'react';
import './App.css';
// import Intro from './Basic/Intro';
// import Person from './Basic/Person';
// import StateSample from './Basic/State';
// import Increment from './Basic/Increment';
// import Child from './Basic/Child';

// import UserInput from './Basic/UserInput';
// import { UserOutput } from './Basic/UserOutput';

// import InlineCSS from './Basic/InlineCSS';

// import Rendering from './Basic/RenderingList';
// import RenderingIndex from './Basic/RenderingListIndex';
// import RenderingListAndRemoveItem from './Basic/RenderingListAndRemoveItem';
// import RenderingWithKey from './Basic/RenderingWithKey';

// import DynamicClass from './Basic/DynamicClassName';

// import ComponentMount from './Basic/ComponentMount';


import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Spa/Home';
import Child1 from './Spa/Child1';
import Child2 from './Spa/Child2';
import NotFound from './Spa/NotFound';

class App extends Component {
    // clickHandler = () => {
    //     console.log("Clicked");
    // }

    // changeInput = (evt) => {
    //     console.log(evt.target.value);
    // }

    // myHandler = () => {
    //     console.log("This is app myHandler");
    // }

    // state = { username: '' };
    // updateUserName = (name) => {
    //     this.setState({ username: name });
    // }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    {/* <Intro />
                <Person name="Udzzz" age={32} weight={85} height={170} />

                <button onClick={this.clickHandler}>Click me</button>
                <input type='text' onChange={this.changeInput} /><br></br>

                <StateSample />

                <Increment initVal={3} />

                <Child someFunction={this.myHandler} />


                <h1>App Component </h1>
                <UserInput changeHandler={this.updateUserName} />
                <UserOutput name={this.state.username} />

                <InlineCSS /> */}

                    {/* <Rendering />

                <RenderingIndex />

                <RenderingListAndRemoveItem /> */}

                    {/* <RenderingWithKey />

                <DynamicClass />

                <ComponentMount /> */}

                    <Link to='/'>Home</Link>
                    <Link to='/Child1/14'>Child1</Link>
                    <Link to='/Child2?arg1=5&arg2=6'>Child2</Link>

                    <switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Child2' component={Child2} />
                        <Route exact path='/Child1/:number' component={Child1} />
                        <Route component={NotFound} />
                    </switch>

                </div>
            </BrowserRouter>
        )
    }
}

export default App;