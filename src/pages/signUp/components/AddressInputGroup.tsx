import { useRecoilState } from 'recoil';
import { shelterSignupState } from 'recoil/shelterState';
import VAddressInputGroup from './VAddressInputGroup';

const AddressInputGroup = () => {
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
    shelterInfo,
  };
  return <VAddressInputGroup {...AddressInputGroupProps} />;
};

export default AddressInputGroup;
