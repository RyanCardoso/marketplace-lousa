// Libs
import React, { useContext, useEffect } from "react";
import { GetStaticProps, NextPage } from "next";

// Services
import hygraphClient from "@/services/hygraphClient";

// Contexts
import { ServicesContext } from "@/context/Services";

// Fragments
import { services, ServicesType } from "@/fragments/services";

// Templates
import { ScreenRenovationServices } from "@/components/templates";

const RenovationServices: NextPage<ServicesType> = ({ data }) => {
  const { handleServices } = useContext(ServicesContext);

  useEffect(() => {
    handleServices?.(data.services);
  });

  return <ScreenRenovationServices />;
};

export const getServerSideProps: GetStaticProps = async () => {
  const data = await hygraphClient.request(services);

  return {
    props: { data },
  };
};

export default RenovationServices;
