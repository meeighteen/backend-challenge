// import fetch from "node-fetch";
import dataSetElements from "./../sample.json";

const getElements = async (req, res) => {
    // const elements = await fetch("http://swapi.co/api/people/1");
    res.send({"message": "Hello world!"});
}

export const methods = { getElements }