import React from "react";
import "../components/Card/Cards.css";
import "./Homecomps.css";
import {Row} from "react-bootstrap";
import Movies from "../data/movies.json";
import {MovieItems} from "../Helper/CardsFromJson";
import { SearchBar } from "../components/SearchBar/SearchBar";

export default function MoviesPage() { 
    return (
<div className="page-margins">
            <div className="search-bar-wrap">
                <SearchBar placeholder="What are you looking for?" data={Movies}/>
            </div>
        <div className="card-collection">
            <Row xs={1} sm={2} md={2} lg={4} className="g-3">
            <MovieItems moviesArray={Movies}/>
            </Row>
        </div>
</div>

    )
}