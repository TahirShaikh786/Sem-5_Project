import React from "react";
import { ImageGallery } from "react-image-grid-gallery";
import Header from "../components/common/Header/header";
import Footer from "../components/common/Footer/footer";
import { Container, Row } from "react-bootstrap";
import { imagesArray } from "../components/imagesArray";
import { Helmet } from "react-helmet";
import PagesBanner from "../components/Banner/PagesBanner";

const Gallery = () => {

  return (
    <div>
      <Helmet>
        <title>Gallery | Tahir Tourism</title>
      </Helmet>
      <Header style={{ backgroundColor: "black" }} />

      <PagesBanner title="Gallery" />

      <Container>
        <Row className="mt-5">
          <ImageGallery
            imagesInfoArray={imagesArray}
            columnCount={"auto"}
            columnWidth={400}
            gapSize={25}
          />
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Gallery;
