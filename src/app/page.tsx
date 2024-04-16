"use client";

import Service from "@/components/Service/Service";
import Specialization from "@/components/Specialization/Specialization";
import Spec from "@/components/Spec/Spec";
import Image from "next/image";
import Appointment from "@/components/Appointment/Appointment";
import Hero from "@/components/Hero/Hero";
import useDoctor from "@/Hooks/useDoctor";
import useSpecilization from "@/Hooks/useSpec";
import useService from "@/Hooks/useService";
import Job from "@/components/Job/Job";

export default function Home() {

 const doctorData = useDoctor();
 const SpecilizationData = useSpecilization();
 const ServiceData = useService();
  return (
    <>
    <Hero/>
     <Service getService={ServiceData} />
     <Specialization getDoctor={doctorData}/>
     <Spec getSpecilization={SpecilizationData} />
     <Appointment />
     <Job/>
    </>
  );
}
