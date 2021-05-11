import { CommonActions, StackActions } from '@react-navigation/native';

let navigator;

const setTopLevelNavigator = (navigatorRef) => {
  if (navigatorRef) {
    navigator = navigatorRef;
  }
};

const navigate = (routeName, params) => {
  if (navigator) {
    navigator.dispatch(
      CommonActions.navigate({
        name: routeName,
        params: { params },
      }),
    );
  }
};
const push = (routeName, params) => {
  if (navigator) {
    navigator.dispatch(
      StackActions.push({
        routeName,
        params,
      }),
    );
  }
};

const goBack = () => {
  if (navigator) {
    navigator.dispatch(CommonActions.goBack());
  }
};

export default {
  navigate,
  push,
  goBack,
  setTopLevelNavigator,
};
