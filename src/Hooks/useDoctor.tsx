"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useDoctor = () => {

    const [doctorList, setDoctor] = useState([]);

    useEffect(() => {
        getDoctor();
    },[])

  const getDoctor = () => {
    GlobalApi.getDoctor().then(resp => {
        console.log(resp.data.data)
        setDoctor(resp.data.data)
    });
  }

  return doctorList;

}

export default useDoctor;