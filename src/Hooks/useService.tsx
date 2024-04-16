"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useService = () => {

    const [ServiceList, setService] = useState([]);

    useEffect(() => {
        getService();
    },[])

  const getService = () => {
    GlobalApi.getService().then(resp => {
        console.log(resp.data.data)
        setService(resp.data.data)
    });
  }

  return ServiceList;

}

export default useService;