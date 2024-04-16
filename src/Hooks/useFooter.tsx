"use client"

import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useFooter  = () => {

    const [footerList, setFooterList] = useState([]);

    useEffect(() => {
        getFooter();
    }, [])

    const getFooter = () => {
        GlobalApi.getFooter().then(resp => {
            setFooterList(resp.data.data);
        });
    }

    return footerList;

}

export default useFooter
