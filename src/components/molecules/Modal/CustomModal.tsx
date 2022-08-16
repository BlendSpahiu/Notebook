import { ReactElement } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { ModalProps, style } from "./Modal.props";

export const CustomModal = ({
  title,
  description,
  open,
  handleClose,
  handleButtonClick,
}: ModalProps): ReactElement => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {title}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {description}
      </Typography>

      <div className="flex items-center space-x-4 mt-5">
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleButtonClick} variant="contained" color="error">
          Delete
        </Button>
      </div>
    </Box>
  </Modal>
);
