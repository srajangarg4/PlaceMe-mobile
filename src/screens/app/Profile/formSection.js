import React from 'react';
import { Accordion } from '../../../components';
import { childrenType, PropTypes } from '../../../utils';

const FormSection = ({ title, open, children }) => (
  <Accordion title={title} open={open} showSeperator={false}>
    {children}
  </Accordion>
);

FormSection.defaultProps = {
  open: false,
};

FormSection.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
  children: childrenType.isRequired,
};

export default FormSection;
