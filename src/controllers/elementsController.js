import axios from "axios";
import dataSetElements from "./../sample.json";

const getElements = async (req, res) => {
    const { limit, offset } = req.body;
    const elements = await axios("https://jsonplaceholder.typicode.com/posts");
    // console.log(elements.data);
    
    const result = elements.data.slice(
        limit * offset,
        limit * (offset + 1));
    res.status(200).json(result);
}

export const methods = { getElements }