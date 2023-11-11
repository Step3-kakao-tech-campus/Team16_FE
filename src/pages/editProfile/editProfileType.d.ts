export interface VEditProfileProps {
  getLoading: boolean;
  postloading: boolean;
  modalOpen: boolean;
  modalText: string;
  handleModalClose: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
