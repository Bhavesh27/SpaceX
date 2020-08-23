import React, { useReducer, useEffect } from 'react';

import Filter from '../components/Filter';
import Card from '../components/Card';
import Footer from '../components/Footer'

import { fetchData } from './actions';
import { appReducer, defaultState } from './reducer';
import { useHistory, useLocation } from "react-router-dom";
 
import './App.css';

function App() {

  const [state, dispatch] = useReducer(appReducer, defaultState);

  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const initialState = () => {
    const state = {};
    for (let [key, value] of params.entries()) {
      state[key] = value;
    }
    return state;
  }

  const handleFilterClick = (key, value) => {
    if (params.has(key)) {
      params.set(key, value);
    } else {
      params.append(key, value)
    }
    history.push(location.pathname + "?" + params.toString())
  }

  useEffect(() => {
    let query = "limit=100";
    if (params.toString()) {
      query += '&' + params.toString();
    }
    fetchData(query, dispatch);
  }, [location.search])

  return (
    <div className="app">
      <h1>SpaceX Launch Programs</h1>
      <div className="body">
        <div className="filterContainer">
          <Filter initial={initialState()} filterClick={(key, value) => handleFilterClick(key, value)} />
        </div>
        {state.isFetched && <div className="cardContainer">
          {state.data && state.data.length > 0 ? state.data.map((item, i) => {
            return <Card data={item} key={i} />
          }): <div className="noContent">No Content Available</div>}
        </div>}
        {state.isFetching && <div className="loaderContainer">
          <div className="loader"></div>  
        </div>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
