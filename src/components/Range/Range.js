import styles from './Range.module.css';
import { Form } from 'react-bootstrap';
export default function Range({ currentTemperature, handleChange }) {
  return (
    <div className={styles.rangeContainer}>
      {/* <input
        className={styles.range}
        onChange={handleChange}
        type="range"
        value={currentTemperature}
        min="-45"
        max="50"
      /> */}

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
