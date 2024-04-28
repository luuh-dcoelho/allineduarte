"use client";

import { useEffect, useState } from "react";
import { IClinic } from "@/types/clinic.type";
import Card from "../card";

export default function Clinics() {
  const [clinics, setClinics] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:8000/clinic")
      .then((res) => res.json())
      .then((data) => {
        setClinics(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p className="text-white">Carregando...</p>;
  if (!clinics)
    return (
      <p className="text-white">
        Não foi encontrado nenhuma clínica no momento
      </p>
    );

  return (
    <>
      {clinics.map((clinic: IClinic) => (
        <Card
          key={clinic.id}
          style={"mt-12"}
          title={clinic.title}
          clinicName={clinic.name}
          street={clinic.address1}
          district={clinic.address2}
          city={clinic.city}
          hrefCall={`tel:${clinic.country_code}${clinic.phone}`}
          hrefMap={clinic.maps_link}
        />
      ))}
    </>
  );
}