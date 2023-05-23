import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Col, TableRow, Card, Text, Metric, Button } from "@tremor/react";
import { HackatonBanner } from "../components/shared/HackatonBanner";
import { Star } from "../components/shared/Star";

// sercives
import { api } from "../services/api";
import data from "../utils/informatica-telecomunicaciones-response.json";

export const Main = () => {
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(() => {
    setJobOffers(data.offers);
  }, []);

  return (
    <>
      <section className="flex flex-col">
        <h1 className="text-2xl md:text-4xl my-4">Ofertas de empleo</h1>
        <Grid numCols={1} numColsSm={1} numColsLg={3} className="gap-2">
          <Col numColSpan={1} numColSpanLg={2}>
            {jobOffers.map((offer) => {
              return <OfferCard key={offer.id} offer={offer} />;
            })}
          </Col>
        </Grid>
      </section>
    </>
  );
};

const OfferCard = ({ offer }) => {
  return (
    <Card className="my-5">
      <div className="flex flex-row gap-2">
        <span className="text-xs text-white bg-[#167DB7] px-1 rounded-sm">
          Descatada
        </span>
        <span className="text-xs text-green-500 font-semibold bg-green-100 px-1 rounded-sm">
          Proceso Online
        </span>
      </div>
      <span className="text-xl">Esta es una oferta de una empresa</span>
      <div className="flex flex-row gap-2 items-center">
        <Text>Company Name</Text>
        <Star />
        <span className="text-xs text-gray-400">4,5 (45)</span>
      </div>
      <div className="flex flex-row text-xs gap-2 my-3">
        <span className="text-gray-400">Barcelona</span> |{" "}
        <span className="text-green-500">Hace 5h</span>
      </div>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, voluptate, quia voluptas quod quos voluptatibus
        quas quidem quibusdam, voluptate, quia voluptas
      </Text>
      <div className="flex flex-row gap-4 text-xs text-gray-400 mt-3">
        <span>Contrato indefinido</span>
        <span>Jornada complate</span>
        <span>salario no disponible</span>
      </div>
      <div className="p-2 flex flex-row justify-end">
        <Link
          to={`/power-up/${offer.id}`}
          size="xs"
          onClick={() => console.log("clicked")}
        >
          Power me 🐱‍🏍
        </Link>
      </div>
    </Card>
  );
};
