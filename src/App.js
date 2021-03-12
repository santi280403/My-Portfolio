import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Loader from './Components/Loader/Loader'
import NavBar from './Components/NavBar/NavBar'

// Styles
import './App.css'

// Pages
const Home = lazy(() => import('./Pages/Home/Home'))

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Suspense fallback={<Loader type="page" />}>
                        <NavBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </Suspense>
                </Router>
            </div>
        )
    }

}