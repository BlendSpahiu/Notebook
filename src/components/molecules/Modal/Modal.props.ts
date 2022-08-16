export interface ModalProps {
    title: string;
    description: string;
    open: boolean;
    handleClose: () => void;
    handleButtonClick: (value: any) => void;
}

export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };