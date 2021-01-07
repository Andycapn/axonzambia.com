/* 
  Axon Zambia: Home Page
*/

import React from "react"
import { ImageBackground, MainDiv } from "../components/MyStyledComponents"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Button = styled(Link)`
  width: 200px;
  background-color: #e47b02;
  margin: 0 auto;
  padding: 0.5em 1em;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  transition: ease-in 150ms;

  &:hover {
    background-color: #a85902;
  }
`

const IndexPage = () => {
  const {
    bgImage,
    webDesignBg,
    graphicDesignBg,
    SEOBg,
    hostingBg,
  } = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "banner-bg.png" }) {
        sharp: childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      webDesignBg: file(relativePath: { eq: "web-design.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      graphicDesignBg: file(relativePath: { eq: "graphic-design.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      SEOBg: file(relativePath: { eq: "seo.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hostingBg: file(relativePath: { eq: "hosting.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const BackgroundImages = [
    bgImage.sharp.fluid,
    `linear-gradient(0deg, grey, rgba(123, 127, 131, 0.68) 33%, #1274be)`,
  ].reverse()

  return (
    <Layout>
      <SEO title="Home" />
      <ImageBackground
        tag={"section"}
        fluid={BackgroundImages}
        css={css`
          height: 100vh;
          overflow: hidden;
          background-attachment: fixed;
        `}
      >
        <MainDiv>
          <div
            className="hero-text"
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: 70vh;
              & > .hero-h1 {
                font-size: 72px;
                font-family: cairo, sans-serif;
                text-transform: uppercase;
              }
              & > .hero-subheading {
                font-weight: bold;
                margin-left: -966px;
                font-size: 30px;
              }
              & > .hero-subtext {
                font-size: 30px;
                padding: 0 20%;
                line-height: 1.25;
                font-weight: 600;
              }
              & > .hero-btn {
                margin-top: 40px;
              }

              & > * {
                text-align: center;
                color: white;
              }
            `}
          >
            <p className="hero-subheading">We Are Axon</p>
            <h1 className="hero-h1">A Premium Web Services Agency</h1>
            <p className="hero-subtext">
              Building Innovative Solutions for Innovative Businesses In Zambia
              and Beyond.
            </p>
            <Button className="hero-btn" to={"/page-2"}>
              Learn More
            </Button>
          </div>
        </MainDiv>
      </ImageBackground>
      <section>
        <MainDiv
          css={css`
            margin: 40px 0;
            & h3 {
              font-family: cairo, sans-serif;
              text-align: center;
              font-size: 30px;
              color: #e47b02;
            }

            & p {
              font-size: 21px;
              text-align: center;
            }
          `}
        >
          <h3>Give Your Business An Unfair Advantage</h3>
          <p>
            We provide high quality and cost effective online marketing
            solutions and services.
          </p>
        </MainDiv>
      </section>
      <section
        className="services"
        css={css`
          background-color: #f1f1f1f1;
          min-height: 400px;
          & > .container {
            max-width: 1300px;
            height: 400px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 320px));
            grid-template-rows: 1fr;
            margin: 0 auto;
            & > .service {
              text-align: center;
              display: flex;
              flex-direction: column;
              height: 100%;
              padding: 2em;
              h5 {
                margin-top: auto;
                color: white;
                font-size: 25px;
                font-family: cairo, sans-serif;
              }
              a {
                color: #e47b02;
              }
            }
          }
        `}
      >
        <div className="container">
          <ImageBackground
            tag="div"
            fluid={[
              `linear-gradient(0deg, rgba(228, 123, 2, 0.63), #f1f1f1)`,
              webDesignBg.sharp.fluid,
            ]}
            className="service"
          >
            <Link to={"page-2"}>Learn More</Link>
            <h5>Website Design & Development</h5>
          </ImageBackground>
          <ImageBackground
            tag="div"
            fluid={[
              `linear-gradient(0deg, rgba(0, 106, 150, 0.48), #f1f1f1)`,
              graphicDesignBg.sharp.fluid,
            ]}
            className="service"
          >
            <Link to={"page-2"}>Learn More</Link>
            <h5>Graphic Design</h5>
          </ImageBackground>
          <ImageBackground
            tag="div"
            fluid={[
              `linear-gradient(0deg, rgba(255, 149, 28, 0.61), #f1f1f1)`,
              SEOBg.sharp.fluid,
            ]}
            className="service"
          >
            <Link to={"page-2"}>Learn More</Link>
            <h5>Search Engine Optimisation (SEO)</h5>
          </ImageBackground>
          <ImageBackground
            tag="div"
            fluid={[
              `linear-gradient(0deg, rgba(2, 161, 227, 0.51), #f1f1f1)`,
              hostingBg.sharp.fluid,
            ]}
            className="service"
          >
            <Link to={"page-2"}>Learn More</Link>
            <h5>Hosting</h5>
          </ImageBackground>
        </div>
      </section>
      <section
        css={css`
          text-align: center;
          font-family: cairo, sans-serif;
          font-size: 21px;
          font-weight: 600;
          margin: 40px 0;
          p {
            padding: 0 30px;
          }
        `}
      >
        <MainDiv>
          <h2>What Sets Us Apart?</h2>
          <p>
            Given our commitment to excellence we strive to deliver great work
            that is on budget and on time. Whether you are a multi-national or
            an entrepreneur just starting out, we treat each project as though
            our very livelihood depends on it – which in our view, it quite
            literally does. Our success is built on solid relationships with our
            clients, not contractual obligations – which is how we plan to keep
            it. If you are looking for an agency to take your brand to new
            heights, you need look no further.
          </p>
        </MainDiv>
      </section>
    </Layout>
  )
}

export default IndexPage
