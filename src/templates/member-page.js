import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import pamelahines from '../img/pamelahines.jpg';
import beverlyrugley from '../img/beverlyrugley.jpg';
import colin from '../img/colin.jpg';
import ruth from '../img/ruth.jpg';

import blankprofile from '../img/blankProfile.png';
import { MemberBio } from '../components/MemberBio';

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
                    <MemberBio name='Ruth Shortie' biopic={ruth} bio={content.ruth} />
                    <MemberBio name='Beverly Rugley' biopic={beverlyrugley} bio = {content.beverly} />
                    <MemberBio name='Collin McDonough' biopic={colin} bio = {content.collin} />
                    <MemberBio name='Chantal Moore' biopic={blankprofile} bio={content.chantal} />
                    <MemberBio name='Pamela Hines' biopic={pamelahines} bio={content.pamela} />
                    <MemberBio name='Tyrone Anderson' biopic={blankprofile} bio={content.tyrone} />
                    <MemberBio name='Kristal Anderson' biopic={blankprofile} bio={content.kristal} />
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
        ruth
        chantal
        pamela
        beverly
        collin
        tyrone
        kristal
      }
    }
  }
`
