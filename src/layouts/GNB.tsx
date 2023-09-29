import { Link } from 'react-router-dom';
import ModalPortal from 'commons/ModalPortal';
import { useState } from 'react';
import CategoryModal from 'commons/CategoryModal';

const GNB = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCategoryButtonClick = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div>
        <ol>
          <li>
            <button onClick={handleCategoryButtonClick}>카테고리</button>
          </li>
          <li>
            <Link to="/anything">프로필 목록</Link>
          </li>
          <li>
            <Link to="/anything">내 주변 보호소 찾기</Link>
          </li>
          <li>
            <Link to="/anything">등록하기</Link>
          </li>
        </ol>
      </div>
      {isModalOpen && (
        <ModalPortal>
          <CategoryModal />
        </ModalPortal>
      )}
    </>
  );
};

export default GNB;
