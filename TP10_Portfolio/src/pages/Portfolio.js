import React, {useContext} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { MetaContext } from "../context/MetaContext";
import { DataPortfolioContext } from "../context/DataPortfolioContext";
import Creation from "../components/Creation";

export const Portfolio = () => {

  let { meta } = useContext(MetaContext);
  let { dataPortfolio } = useContext(DataPortfolioContext);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {"Portfolio | " + meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataPortfolio.map((data, i) => {
            return (
              <Creation key={i} creation={data}/>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
