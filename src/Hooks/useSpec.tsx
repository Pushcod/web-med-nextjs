"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSpecilization = () => {

    const [SpecilizationList, setSpecilization] = useState([]);

    useEffect(() => {
        getSpecilization();
    },[])

  const getSpecilization = () => {
    GlobalApi.getSpecilization().then(resp => {
        console.log(resp.data.data)
        setSpecilization(resp.data.data)
    });
  }

  return SpecilizationList;

}

export default useSpecilization;