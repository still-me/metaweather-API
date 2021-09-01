import PropTypes from 'prop-types';

import styles from './Range.module.css';
import { Form } from 'react-bootstrap';

export default function Range({ currentTemperature, handleChange }) {
  return (
    <div className={styles.rangeContainer}>
      <Form.Label>Range</Form.Label>
      <Form.Range
        className={styles.range}
        onChange={handleChange}
        value={currentTemperature}
        min="-45"
        max="50"
      />
    </div>
  );
}

Range.propTypes = {
  currentTemperature: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleChange: PropTypes.func.isRequired,
};
