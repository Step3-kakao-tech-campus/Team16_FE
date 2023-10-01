import ModalPortal from 'commons/ModalPortal';
import { useState } from 'react';
import CategoryModal, { CategoryModalProps } from 'commons/CategoryModal';
import { CategoryModalType } from 'components/molecules/VCategoryModalList';
import VGNB, { VGNBProps } from './VGNB';

const GNB = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [speciesOrRegion, setSpeciesOrRegion] =
    useState<CategoryModalType>('species');

  const handleCategoryButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleModalCloseClick = () => {
    setIsModalOpen(false);
    setSpeciesOrRegion('species');
  };
  const handleModalOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setSpeciesOrRegion('species');
    }
  };

  const categoryModalProps: CategoryModalProps = {
    handleModalCloseClick,
    handleModalOutsideClick,
    speciesOrRegion,
    setSpeciesOrRegion,
  };

  const vGNBProps: VGNBProps = {
    handleCategoryButtonClick,
  };

  return (
    <>
      <VGNB {...vGNBProps} />
      {isModalOpen && (
        <ModalPortal>
          <CategoryModal {...categoryModalProps} />
        </ModalPortal>
      )}
    </>
  );
};

export default GNB;
