import PropTypes from 'prop-types';

import styles from './AlertError.module.css';
import { Alert } from 'react-bootstrap';

export default function AlerError({ onAlertClose, name }) {
  return (
    <Alert
      className={styles.container}
      variant="info"
      transition
      onClose={onAlertClose}
      dismissible
    >
      <Alert.Heading>Not found!</Alert.Heading>
      <p>{`The city ("${name}") was not found`}</p>
    </Alert>
  );
}

AlerError.propTypes = {
  onAlertClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
