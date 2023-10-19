import React, {useContext} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { MetaContext } from "../../context/MetaContext";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";

export const Favorites = () => {

  let { meta } = useContext(MetaContext);
  let { favorites } = useContext(FavoritesContext);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {"Favorites | " + meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Favorites </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {favorites.length !== 0 ? (
            (favorites.map((data, i) => {
              return (
                <Link to={data.link} key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <p>{data.description}</p>
                    <Link to={data.link}>view project</Link>
                  </div>
                </Link>
              );
            }))
          ):(
            <h1>There are no favorites yet</h1>
          )}          
        </div>
      </Container>
    </HelmetProvider>
  );
};
