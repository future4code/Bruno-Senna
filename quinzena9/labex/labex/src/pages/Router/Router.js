import React from "react";
import HomePage from "../HomePage/HomePage";
import ApplicationForm from "../ApplicationForm/ApplicationForm";
import CreatetripPage from "../CreateTripPage/CreateTripPage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import LoginPage from "../LoginPage/LoginPage";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Router() {
    
    return(
    <BrowserRouter>
    <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>
        <Route exact path="/trips/list">
            <ListTripsPage/>
        </Route>
        <Route exact path="/application-form">
            <ApplicationForm/>
        </Route>
        <Route exact path="/login">
            <LoginPage/>
        </Route>
        <Route exact path="/trips/creat">
            <CreatetripPage/>
        </Route>
        <Route exact path="/trips/details">
            <TripDetailsPage/>
        </Route>
    </Switch>
    </BrowserRouter>
    );
}