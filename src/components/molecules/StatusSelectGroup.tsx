import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import registerState from 'recoil/registerState';
import StatusScore from '../atoms/StatusScore';

const StatusSelectGroup = () => {
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

export default StatusSelectGroup;
