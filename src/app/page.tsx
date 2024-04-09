"use client";

import Service from "@/components/Service/Service";
import Specialization from "@/components/Specialization/Specialization";
import Spec from "@/components/Spec/Spec";
import Image from "next/image";
import Appointment from "@/components/Appointment/Appointment";
import Hero from "@/components/Hero/Hero";

export default function Home() {

 

  return (
    <>
    <Hero/>
     <Service />
     <Specialization/>
     <Spec />
     <Appointment />
    </>
  );
}
