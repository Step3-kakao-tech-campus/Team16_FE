import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import registerState from 'recoil/registerState';
import StatusScore from './StatusScore';

const StatusSelectGroup = () => {
  const [profileStatus, setProfileStatus] = useRecoilState(registerState);
  const { petPolygonProfileDto } = profileStatus;

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
            ...prev.petPolygonProfileDto,
            intelligence: Number(option),
          },
        }));
        break;
      case 'affinity':
        setAffinityOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...prev.petPolygonProfileDto,
            affinity: Number(option),
          },
        }));
        break;
      case 'athletic':
        setAthleticOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...prev.petPolygonProfileDto,
            athletic: Number(option),
          },
        }));
        break;
      case 'adaptability':
        setAdaptabilityOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...prev.petPolygonProfileDto,
            adaptability: Number(option),
          },
        }));
        break;
      case 'activeness':
        setActivenessOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...prev.petPolygonProfileDto,
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
        score={petPolygonProfileDto.intelligence}
        selectedOption={intelligenceOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'affinity'}
        score={petPolygonProfileDto.affinity}
        selectedOption={affinityOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'athletic'}
        score={petPolygonProfileDto.athletic}
        selectedOption={athleticOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'adaptability'}
        score={petPolygonProfileDto.adaptability}
        selectedOption={adaptabilityOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'activeness'}
        score={petPolygonProfileDto.activeness}
        selectedOption={activenessOption}
        handleChange={handleOptionChange}
      />
    </div>
  );
};

export default StatusSelectGroup;
