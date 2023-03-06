import React from "react";

import { Background } from '../Background';
import { Heading } from "../Heading";
import { Items } from "../Items";

import { dataHomes } from "../../assets/dataHomes";

import './App.css';

export const App = () => {
  return (
    <>
      <Background className="background-homes">
        <section className="container">
          <Heading>Homes guests loves</Heading>
          <Items data={dataHomes}/>
        </section>
      </Background>
    </>
  )
}
