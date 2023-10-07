import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import registerState from 'recoil/registerState';

const Dash = () => {
  return (
    <div className="flex">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="mx-1 h-[2px] w-1 bg-[#C4C4C4] rounded-full"
        />
      ))}
    </div>
  );
};

interface StatusProps {
  status: string;
  score: number;
  selectedOption: string;
  handleChange: (status: string, option: string) => void;
}

const StatusScore = ({ status, selectedOption, handleChange }: StatusProps) => {
  const getButtonColor = (option: string) => {
    return `appearance-none ${
      selectedOption !== option
        ? 'border-[#C4C4C4] bg-[#C4C4C4]'
        : 'border-brand-color bg-brand-color'
    } border-8 rounded-full w-[50px] h-[50px] cursor-pointer`;
  };

  return (
    <div className="flex flex-col justify-center items-center m-2">
      <div className="text-lg font-semibold">{status}</div>
      <div className="flex flex-row m-2 items-center">
        <span className="text-sm font-semibold mx-1">Low</span>
        <input
          type="radio"
          value="1"
          className={getButtonColor('1')}
          onChange={() => handleChange(status, '1')}
        />
        <Dash />
        <input
          type="radio"
          value="2"
          className={getButtonColor('2')}
          onChange={() => handleChange(status, '2')}
        />
        <Dash />
        <input
          type="radio"
          value="3"
          className={getButtonColor('3')}
          onChange={() => handleChange(status, '3')}
        />
        <Dash />
        <input
          type="radio"
          value="4"
          className={getButtonColor('4')}
          onChange={() => handleChange(status, '4')}
        />
        <Dash />
        <input
          type="radio"
          value="5"
          className={getButtonColor('5')}
          onChange={() => handleChange(status, '5')}
        />
        <span className="text-sm font-semibold mx-1">High</span>
      </div>
    </div>
  );
};

const Radio = () => {
  const [profileStatus, setProfileStatus] = useRecoilState(registerState);
  const { polygonProfile } = profileStatus;

  const [intelligenceOption, setIntelligenceOption] = useState('3');
  const [affinityOption, setAffinityOption] = useState('3');
  const [athleticOption, setAthleticOption] = useState('3');
  const [adaptabilityOption, setAdaptabilityOption] = useState('3');
  const [activenessOption, setActivenessOption] = useState('3');

  const handleOptionChange = (status: string, option: string) => {
    switch (status) {
      case 'intelligence':
        setIntelligenceOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...polygonProfile,
            intelligence: Number(option),
          },
        }));
        console.log('Option', Number(option));
        console.log(polygonProfile.intelligence);

        break;
      case 'affinity':
        setAffinityOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...polygonProfile,
            affinity: Number(option),
          },
        }));
        break;
      case 'athletic':
        setAthleticOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...polygonProfile,
            athletic: Number(option),
          },
        }));
        break;
      case 'adaptability':
        setAdaptabilityOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...polygonProfile,
            adaptability: Number(option),
          },
        }));
        break;
      case 'activeness':
        setActivenessOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...polygonProfile,
            activeness: Number(option),
          },
        }));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <StatusScore
        status={'intelligence'}
        score={polygonProfile.intelligence}
        selectedOption={intelligenceOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'affinity'}
        score={polygonProfile.affinity}
        selectedOption={affinityOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'athletic'}
        score={polygonProfile.athletic}
        selectedOption={athleticOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'adaptability'}
        score={polygonProfile.adaptability}
        selectedOption={adaptabilityOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'activeness'}
        score={polygonProfile.activeness}
        selectedOption={activenessOption}
        handleChange={handleOptionChange}
      />
    </div>
  );
};

export default Radio;
