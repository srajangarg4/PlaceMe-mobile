import React from 'react';
import {
  Modal, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { color, PropTypes } from '../utils';

const BottomActionSheet = ({ show, onRequestClose, children }) => (
  <Modal
    animationType="fade"
    visible={show}
    onRequestClose={onRequestClose}
    transparent
  >
    <View style={styles.container}>
      <TouchableOpacity onPress={onRequestClose} style={styles.touchable} />
      <View>{children}</View>
    </View>
  </Modal>
);

BottomActionSheet.defaultProps = {
  children: null,
  show: false,
};
BottomActionSheet.propTypes = {
  show: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default BottomActionSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.modalBackgroundColor,
    justifyContent: 'flex-end',
  },
  touchable: { width: '100%', flex: 1 },
});
