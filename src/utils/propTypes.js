import PropTypes from 'prop-types';
import { ViewPropTypes, Text } from 'react-native';

export { default as PropTypes } from 'prop-types';
export const viewStyleType = ViewPropTypes.style;
const {
  string,
  func,
  shape,
  number,
  arrayOf,
  node,
  object,
  oneOfType,
  objectOf,
} = PropTypes;

export const childrenType = oneOfType([node, string]);

export const navigationType = shape({
  navigate: func.isRequired,
});

export const routeType = object;

export const refType = oneOfType([func, object]);

// eslint-disable-next-line react/forbid-foreign-prop-types
export const textStyleProps = Text.propTypes.style;

export const requireType = oneOfType([
  number,
  shape({
    uri: string,
  }),
]);

export const locationType = shape({
  city: string,
  address1: string,
  address2: string,
  state: string,
  pincode: string,
});

export const imageStyleType = PropTypes.any;

export const tabType = arrayOf(
  shape({
    name: string,
    screen: func,
  }),
);

export const iconsType = objectOf(number);

export const userDataType = shape({
  firstName: string,
  lastName: string,
  DOB: string,
  email: string,
  photo: string,
  token: string,
  location: locationType,
  phoneNumber: string,
  selectedSports: arrayOf(string),
});

export const inputType = oneOfType([number, string]);
