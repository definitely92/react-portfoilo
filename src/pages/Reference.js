import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import WrapTitle from "../components/WrapTitle";
import ReferInfo from "./ReferInfo";

const Reference = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [htmlRefer, setHtmlRefer] = useState([]);

  const getRefer = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://webstoryboy.github.io/dothome1/refer.json"
      );
      setHtmlRefer(response.data.data.htmlRefer);
      setIsLoading(false);
      console.log(htmlRefer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [htmlRefer]);

  useEffect(() => {
    setTimeout(() => {
      getRefer();
    }, 1000);
  }, [getRefer]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div id="wrap" className="light">
          <Header />
          <Layout>
            <section id="referCont">
              <div className="container">
                <WrapTitle text={["Reference", "Book"]} />
                <div className="refer-cont">
                  <div className="refer-table">
                    <ul>
                      {htmlRefer.map((refer) => (
                        <ReferInfo
                          key={refer.id}
                          id={refer.id}
                          title={refer.title}
                          desc={refer.desc}
                          category={refer.category}
                          property={refer.property}
                          element={refer.element}
                          tag={refer.tag}
                          version={refer.version}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Reference;
