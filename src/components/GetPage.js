import { useState } from 'react';
import axios from 'axios';

const GetPage = async (url) => {
    const obj = {
        url: url
    }
    const data = await axios.post('https://promotion-detector-server.onrender.com/htmlCode', obj);
    return data;
}

export default GetPage;