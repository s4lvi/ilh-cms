import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import pamelahines from '../img/pamelahines.jpg';
import blankprofile from '../img/blankProfile.png';
import { MemberBio } from '../components/MemberBio';

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

export const MemberPageTemplate = ({ title, content, contentComponent}) => {
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
              <div>
                    <MemberBio name='Ruth Shortie' biopic={blankprofile} bio={''} />
                    <MemberBio name='Chantal Moore' biopic={blankprofile} bio={''} />
                    <MemberBio name='Pamela Hines' biopic={pamelahines} bio={''} />
                    <MemberBio name='Tyrone Anderson' biopic={blankprofile} bio={''} />
                    <MemberBio name='Kristal Anderson' biopic={blankprofile} bio={''} />
                    <MemberBio name='Michael Choney' biopic={blankprofile} bio={''} />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

MemberPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object,
  contentComponent: PropTypes.func,
  disability: PropTypes.string,
}

const MemberPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MemberPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.frontmatter}
      />
    </Layout>
  )
}

MemberPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MemberPage

export const memberPageQuery = graphql`
  query MemberPage($id: String!) {
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
