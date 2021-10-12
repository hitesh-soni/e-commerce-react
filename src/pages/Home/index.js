import React, { useState } from "react";
import { images } from "assets/images";
import { Card, Row, Col, Avatar } from "antd";
import HomeLayout from "layouts/HomeLayout";
import { PageLoader } from "components/Global";
import { getCategories } from "store/actions/category";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "config/routes";

function Home({ getCategories, categories }) {
  const [loading, setLoading] = useState(false);

  /**
   * Fetch categories
   */
  React.useEffect(() => {
    setLoading(true);
    getCategories().finally(() => setLoading(false));
  }, []);

  if (loading) return <PageLoader />;

  return (
    <HomeLayout>
      <div>
        <img
          style={{ objectFit: "cover" }}
          src={images.CATEGORY_HEADER}
          className="c-ma-10 c-w-100 c-h-px-100"
        />

        <div className="text-center" style={{ padding: "24px 9%" }}>
          <Row
            justify="center"
            className="c-mb-50 text-left"
            style={{ justifyContent: "space-evenly" }}
          >
            {categories.map((e) => (
              <Col
                className="c-mt-20"
                xxl={5}
                xl={8}
                lg={12}
                md={12}
                sm={24}
                key={e._id}
              >
                <Link to={routes.productsPage.getPath(e?.slug)}>
                  <Card
                    style={{ width: 300, height: 320, cursor: "pointer" }}
                    cover={<img alt="example" src={e?.cover_image_url} />}
                  >
                    <Card.Meta
                      avatar={
                        <Avatar src="https://thumbs.dreamstime.com/b/red-sale-sign-sticker-illustration-isolated-white-background-31436582.jpg" />
                      }
                      title={e.name}
                      description={e.description}
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </HomeLayout>
  );
}

const mapStateToProps = ({ category }) => ({
  categories: category.categories,
});

export default connect(mapStateToProps, {
  getCategories,
})(Home);
