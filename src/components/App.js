import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import { MessageBox } from './dialogs';
import Routes from '../routes';
import Styles from '../styles/GlobalStyles';
import { removeDialog } from '../actions';
import { LoadingOverlay } from './ui';

const App = ({ busy, dialogs, removeDialogAction }) => {
  const loaderStyle = {
    width: '100%',
    height: '100%',
    display: 'inline-table',
    position: 'absolute',
  };

  return (
    <LoadingOverlay spinner active={busy} style={loaderStyle}>
      <Routes />
      <Styles />
      {dialogs.map(dialog => {
        let componentClass = null;
        switch (dialog.type) {
          case 'MessageBox':
            componentClass = MessageBox;
            break;
          default:
        }
        if (!componentClass) {
          return null;
        }
        return React.createElement(componentClass, {
          key: uniqueId(),
          onCloseModal: () => removeDialogAction(dialog),
          ...dialog,
        });
      })}
    </LoadingOverlay>
  );
};

App.propTypes = {
  busy: PropTypes.bool,
  dialogs: PropTypes.arrayOf(PropTypes.shape({})),
  removeDialogAction: PropTypes.func.isRequired,
};

App.defaultProps = {
  busy: false,
  dialogs: [],
};

const mapStateToProps = state => ({
  busy: Boolean(state.busyCounterReducer),
  dialogs: state.dialogReducer,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeDialogAction: removeDialog,
    },
    dispatch
  );

const AppConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppConnect;
