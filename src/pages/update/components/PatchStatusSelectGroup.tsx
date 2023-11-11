import StatusScore from 'pages/register/components/StatusScore';
import { useState } from 'react';
import { RegisterType } from 'recoil/registerState';
import { PetStatusProps } from '../updateType';

const PatchStatusSelectGroup = ({
  petStatus,
  setUpdateState,
}: PetStatusProps) => {
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
        setUpdateState((prev: RegisterType) => ({
          ...prev,
          petPolygonProfileDto: {
            ...prev.petPolygonProfileDto,
            intelligence: option,
          },
        }));
        break;
      case 'affinity':
        setAffinityOption(option);
        setUpdateState((prev: RegisterType) => ({
          ...prev,
          petPolygonProfileDto: {
            ...prev.petPolygonProfileDto,
            affinity: option,
          },
        }));
        break;
      case 'athletic':
        setAthleticOption(option);
        setUpdateState((prev: RegisterType) => ({
          ...prev,
          petPolygonProfileDto: {
            ...prev.petPolygonProfileDto,
            athletic: option,
          },
        }));
        break;
      case 'adaptability':
        setAdaptabilityOption(option);
        setUpdateState((prev: RegisterType) => ({
          ...prev,
          petPolygonProfileDto: {
            ...prev.petPolygonProfileDto,
            adaptability: option,
          },
        }));
        break;
      case 'activeness':
        setActivenessOption(option);
        setUpdateState((prev: RegisterType) => ({
          ...prev,
          petPolygonProfileDto: {
            ...prev.petPolygonProfileDto,
            activeness: option,
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
        score={intelligence}
        selectedOption={intelligenceOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'affinity'}
        score={affinity}
        selectedOption={affinityOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'athletic'}
        score={athletic}
        selectedOption={athleticOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'adaptability'}
        score={adaptability}
        selectedOption={adaptabilityOption}
        handleChange={handleOptionChange}
      />
      <StatusScore
        status={'activeness'}
        score={activeness}
        selectedOption={activenessOption}
        handleChange={handleOptionChange}
      />
    </div>
  );
};

export default PatchStatusSelectGroup;
