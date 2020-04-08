import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import MemberContainer from '../components/MemberContainer'

const disabilityBlurbStyle = {
  width: "40%",
  minWidth: "300px",
  float: "right",
  backgroundColor: "#D64000",
  borderRadius: "16px",
  border: "6px solid #e65010",
  padding: "18px 24px 18px 24px",
  color: "white",
  fontSize: "80%",
  margin: "10px"
}

const contentStyle = {
  flexDirection: "column",
  borderRadius: "16px",
  border: "6px solid #e65010",
  padding: "18px 24px 18px 24px",
}

const contentBlock = {
  paddingTop: "30px"
}

export const AboutPageTemplate = ({ title, content, contentComponent}) => {
  const PageContent = contentComponent || Content
  console.log(content);
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1" style={contentStyle}>
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div style={contentBlock}>
                <h2 className="is-size-5 has-text-weight-bold ">About Independent Living Housing</h2><br />
                {content.description}
              </div>
              <div style={contentBlock}>
                <h2 className="is-size-5 has-text-weight-bold ">Our Mission</h2><br />
                {content.mission}
              </div>
              <div style={disabilityBlurbStyle}>
                <h2 className="is-size-5 has-text-weight-bold ">Learning Disabilities</h2><br />
                {content.disability}
              </div>
              <div style={contentBlock}>
                <h2 className="is-size-5 has-text-weight-bold ">Our Vision</h2><br />
                {content.vision}<br /><br />
                {content.target}
              </div>
              <div style={contentBlock}>
                <h2 className="is-size-5 has-text-weight-bold ">Current Programs</h2><br />
                {content.program}
              </div>
              <div>
                <MemberContainer />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object,
  contentComponent: PropTypes.func,
  disability: PropTypes.string,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.frontmatter}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        disability
        mission
        vision
        program
        target
      }
    }
  }
`
