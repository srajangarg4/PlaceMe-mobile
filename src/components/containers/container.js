import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  childrenType, viewStyleType, PropTypes, color, refType,
} from '../../utils';
import Loader from '../loader';
import Text from '../text';

const Container = ({
  children,
  style,
  centerAligned,
  keyboardAware,
  loading,
  loadingLabel,
  containerRef,
  ...extraProps
}) => {
  if (loading) {
    return (
      <View style={styles.loadingView}>
        <Loader show />
        <Text style={styles.loadingText} color={color.primary}>{loadingLabel}</Text>
      </View>
    );
  }
  if (keyboardAware) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.keyboardAvoidingView]}
      >
        <ScrollView
          contentContainerStyle={[
            styles.container,
            style,
            centerAligned ? styles.centered : null,
          ]}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          ref={containerRef}
          {...extraProps}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        style,
        centerAligned ? styles.centered : null,
      ]}
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      ref={containerRef}
      {...extraProps}
    >
      {children}
    </ScrollView>
  );
};

Container.propTypes = {
  children: childrenType,
  style: viewStyleType,
  centerAligned: PropTypes.bool,
  keyboardAware: PropTypes.bool,
  loading: PropTypes.bool,
  loadingLabel: PropTypes.string,
  containerRef: refType,
};
Container.defaultProps = {
  children: undefined,
  style: {},
  centerAligned: false,
  keyboardAware: false,
  loading: false,
  loadingLabel: undefined,
  containerRef: undefined,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexGrow: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  centered: {
    justifyContent: 'center',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 15,
  },
});
export default Container;
