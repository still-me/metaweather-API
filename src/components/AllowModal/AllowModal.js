import { Button, Modal } from "react-bootstrap";

export default function AllowModal({ children, show, onButtonClick }) {
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Access to your position</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Would you like to share your position to see current weather in you
        region?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" data-action="allow" onClick={onButtonClick}>
          Allow
        </Button>
        <Button
          variant="primary"
          data-action="no allow"
          onClick={onButtonClick}
        >
          Not Allow
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
