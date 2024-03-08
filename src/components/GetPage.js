import { useState } from 'react';
import axios from 'axios';

const GetPage = async (url) => {
    const obj = {
        url: url
    }
    const data = await axios.post('https://server-wyniki.onrender.com/htmlCode', obj);
    return data;
}

export default GetPage;