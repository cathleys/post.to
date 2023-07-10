import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as B from "@features/single-post/components/single-post.style";
import { ButtonColor } from "@features/ui/button/button";
import { ButtonUi } from "features/index";
type ModalProps = {
  open: boolean;
  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  confirm: (e: any) => void;
  message: string;
  text: string;
};

export function CustomModal({
  open,
  onClose,
  confirm,
  message,
  text,
}: ModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={B.style}>
        {message}
        <br />
        <br />
        <br />
        <B.Buttons>
          <ButtonUi text="Cancel" color={ButtonColor.white} onClick={onClose} />
          <ButtonUi text={text} color={ButtonColor.dark} onClick={confirm} />
        </B.Buttons>
      </Box>
    </Modal>
  );
}
