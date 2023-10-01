import ProfileCard from 'components/molecules/ProfileCard';

export interface ProfileListProps {
  image: string;
  id: number;
  name: string;
  age: number;
  shelter: string;
  state: string;
}

const VNewList = (profileListProps: ProfileListProps) => (
  <div className="m-20">
    <h2 className="font-bold text-xl sm:text-2xl m-10 mr-20">
      신규 애니모리 친구들
    </h2>
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 m-10">
      <ProfileCard {...profileListProps} />
      <ProfileCard {...profileListProps} />
      <ProfileCard {...profileListProps} />
      <ProfileCard {...profileListProps} />
      <ProfileCard {...profileListProps} />
      <ProfileCard {...profileListProps} />
      <ProfileCard {...profileListProps} />
      <ProfileCard {...profileListProps} />
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
          href="/profile/new/1"
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
          href="/profile/new/2"
          className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          3
        </a>
      </li>

      <li>
        <a
          href="/profile/new/3"
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

export default VNewList;
