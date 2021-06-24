import React from 'react'
import { Image, Header, Paragraph } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './yusuf_kalayci_test_44.css'

const YusufKalayciTest44 = (props) => {
  return (
    <div className="yusuf_kalayci_test_44-container">
      <Image field={props.fields.image_1} className="yusuf_kalayci_test_44-image"></Image>
      <Header field={props.fields.header_0} className="yusuf_kalayci_test_44-header"></Header>
      <Paragraph
        field={props.fields.paragraph_2}
        className="yusuf_kalayci_test_44-paragraph"
      ></Paragraph>
    </div>
  )
}

YusufKalayciTest44.defaultProps = {
  'fields.header_0': 'text',
  fields: {},
  'fields.image_1': 'src',
  'fields.paragraph_2': 'text',
}

YusufKalayciTest44.propTypes = {
  'fields.header_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.paragraph_2': PropTypes.string,
}

export default YusufKalayciTest44
