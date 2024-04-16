"use client";
import useDoctor from '@/Hooks/useDoctor';
import Specialization from '@/components/Specialization/Specialization';
import React from 'react'

export default function page() {
  
   const getDoctor = useDoctor();
  return (
    <>
     <Specialization getDoctor={getDoctor} />
    </>
  )
}

