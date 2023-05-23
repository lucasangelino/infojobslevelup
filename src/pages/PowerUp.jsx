import React from "react";
import { Grid, Col, Card, Text, Metric, BadgeDelta } from "@tremor/react";
import { useParams } from "react-router-dom";

import data from "../utils/response-id.json";

export const PowerUp = () => {
  const { powerUpId } = useParams();
  return (
    <section>
      <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
        <Col numColSpan={2}>
          <Card>
            <Text>{data.city}</Text>
            <span>{data.subcategory.value}</span>
            <span>{data.country.value}</span>
            <span>{data.journey.value}</span>
            <h1 className="text-2xl md:text-4xl">{data.title}</h1>
            <span>{data.profile.name}</span>
          </Card>
        </Col>
        <Card
          className="max-w-xs mx-auto"
          decoration="top"
          decorationColor="indigo"
        >
          <Text>Sueldo maximo</Text>
          <Metric className="text-5xl">{data.maxPay.amountValue}</Metric>
          <BadgeDelta
            deltaType="moderateIncrease"
            isIncreasePositive={true}
            decoration="left"
            size="xs"
          >
            +12.3%
          </BadgeDelta>
          <span>
            Datos extraídos de <a href="https://sueldos.dev/">sueldos.dev</a>
          </span>
        </Card>
        <Col numColSpan={1} numColSpanLg={2}>
          <h2 className="text-2xl">
            Queres entrenar con una IA para aplicar a esta oferta?
          </h2>
          <span>
            Debajo encontraras una seria de preguntas y ejercicios que
            comunmente se realizan en entrevistas para la posicion que
            seleccionaste.
          </span>
        </Col>

        <Card>
          <Text>Crear email o Carta de presentacion</Text>
        </Card>
      </Grid>
    </section>
  );
};
