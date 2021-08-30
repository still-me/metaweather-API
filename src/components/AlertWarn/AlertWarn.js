import { Alert, Image } from "react-bootstrap";
import hint from "../../images/access-hint.png";

export default function AlertWarn({ onAlertClose }) {
  return (
    <Alert variant="warning" onClose={onAlertClose} dismissible>
      <Alert.Heading>
        Your browser is block share with geoposition
      </Alert.Heading>
      <p>
        You should give an access in the settings. For example in Chrome you
        could click the button to see access menu.
      </p>
      <Image width="300" src={hint} rounded />
      <p>
        Please allow in your browser and when reload page and click on Allow
        button.
      </p>
    </Alert>
  );
}
