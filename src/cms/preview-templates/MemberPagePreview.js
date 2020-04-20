import React from 'react'
import PropTypes from 'prop-types'
import { MemberPageTemplate } from '../../templates/member-page'

const MemberPagePreview = ({ entry, widgetFor }) => (
  <MemberPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MemberPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MemberPagePreview
