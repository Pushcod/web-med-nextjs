"use client";

import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSingleDoctor = (id) => {

    const [detailDoctor, setDetailDoctor]= useState();

    useEffect(()=> {
        getSingleDoctor();
    },[id])

  const getSingleDoctor = () => {
    GlobalApi.getSingleDoctor(id).then(resp => {
        console.log(resp.data.data);
        setDetailDoctor(resp.data.data[0]);
    });
  }

  return detailDoctor;
}

export default useSingleDoctor
