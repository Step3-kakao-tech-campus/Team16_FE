import ShelterCard from 'components/molecules/ShelterCard';
import ProfileCard from 'components/molecules/ProfileCard';

export interface ShelterInfoProps {
  name: string;
  id: number;
  adress: string;
  call: string;
}

export interface ProfileListProps {
  image: string;
  id: number;
  name: string;
  age: number;
  shelter: string;
  state: string;
}

export interface Props {
  profileListProps: ProfileListProps;
  shelterInfoProps: ShelterInfoProps;
}

const VShelterInfo = (props: Props) => {
  return (
    <div>
      <div>
        <ShelterCard {...props.shelterInfoProps} />
      </div>
      <div className=" m-20 -mt-10">
        <h2 className="font-bold text-xl sm:text-2xl ml-20">관리중인 동물</h2>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 ml-20">
          <ProfileCard {...props.profileListProps} />
          <ProfileCard {...props.profileListProps} />
          <ProfileCard {...props.profileListProps} />
          <ProfileCard {...props.profileListProps} />
          <ProfileCard {...props.profileListProps} />
          <ProfileCard {...props.profileListProps} />
        </div>
      </div>
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="Todo"
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            이전
          </a>
        </li>

        <li>
          <a
            href="/profile/urgent/1"
            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            1
          </a>
        </li>

        <li className="block h-8 w-8 rounded border-orange-400 bg-orange-400 text-center leading-8 text-white">
          2
        </li>

        <li>
          <a
            href="/profile/urgent/2"
            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            3
          </a>
        </li>

        <li>
          <a
            href="/profile/urgent/3"
            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            4
          </a>
        </li>

        <li>
          <a
            href="Todo"
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            다음
          </a>
        </li>
      </ol>
    </div>
  );
};

export default VShelterInfo;
