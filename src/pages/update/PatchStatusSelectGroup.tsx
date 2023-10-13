import StatusScore from 'pages/register/StatusScore';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import registerState from 'recoil/registerState';

interface PetStatusType {
  intelligence: number;
  affinity: number;
  athletic: number;
  adaptability: number;
  activeness: number;
}

interface PetStatusProps {
  petStatus: PetStatusType;
}

const PatchStatusSelectGroup = ({ petStatus }: PetStatusProps) => {
  const [profileStatus, setProfileStatus] = useRecoilState(registerState);
  const { petPolygonProfileDto } = profileStatus;

  const { intelligence, affinity, athletic, adaptability, activeness } =
    petStatus;

  const [intelligenceOption, setIntelligenceOption] = useState(intelligence);
  const [affinityOption, setAffinityOption] = useState(affinity);
  const [athleticOption, setAthleticOption] = useState(athletic);
  const [adaptabilityOption, setAdaptabilityOption] = useState(adaptability);
  const [activenessOption, setActivenessOption] = useState(activeness);

  const handleOptionChange = (status: string, option: number) => {
    switch (status) {
      case 'intelligence':
        setIntelligenceOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...prev.petPolygonProfileDto,
            intelligence: option,
          },
        }));
        break;
      case 'affinity':
        setAffinityOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...prev.petPolygonProfileDto,
            affinity: option,
          },
        }));
        break;
      case 'athletic':
        setAthleticOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...prev.petPolygonProfileDto,
            athletic: option,
          },
        }));
        break;
      case 'adaptability':
        setAdaptabilityOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...prev.petPolygonProfileDto,
            adaptability: option,
          },
        }));
        break;
      case 'activeness':
        setActivenessOption(option);
        setProfileStatus((prev) => ({
          ...prev,
          polygonProfile: {
            ...prev.petPolygonProfileDto,
            activeness: option,
          },
        }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log('propsData: ', petStatus);
  }, []);

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

export default PatchStatusSelectGroup;
