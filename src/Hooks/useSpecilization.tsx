"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSpecilization = () => {

    const [specilizationsList, setSpecilizationList] = useState([]);

    useEffect(() => {
        getSpecilization();
    },[])

  const getSpecilization = () => {
    GlobalApi.getSpecilization().then(resp => {
        console.log(resp.data.data)
        setSpecilizationList(resp.data.data)
    });
  }

  return specilizationsList;

}

export default useSpecilization;