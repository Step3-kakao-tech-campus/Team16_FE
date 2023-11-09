import VAddressInputGroup from 'pages/signUp/components/VAddressInputGroup';
import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';

const EditAddressInputGroup = () => {
  const [shelterInfo, setShelterInfo] = useRecoilState(shelterSignupState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setShelterInfo({
      ...shelterInfo,
      address: {
        ...shelterInfo.address,
        detail: target.value,
      },
    });
  };

  const AddressInputGroupProps = {
    handleChange,
  };
  return <VAddressInputGroup {...AddressInputGroupProps} />;
};

export default EditAddressInputGroup;
