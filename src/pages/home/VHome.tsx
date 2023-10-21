import ProfileCard from 'pages/profileList/ProfileCard';

export interface PageProps {
  hasNext: boolean;
}

export interface ShortFormProps {
  map(
    arg0: (
      shortForm: any,
      index: any,
    ) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode;
  petId: number;
  name: string;
  age: string;
  shelterId: number;
  shelterName: string;
  profileShortFormUrl: string;
  adoptionStatus: string;
}

export interface HomeProps {
  pageProps: PageProps;
  shortFormProps: ShortFormProps;
}

const VHome = (homeProps: HomeProps) => (
  <div className="flex flex-col mx-16 sm:mx-40 lg:mx-64 my-14">
    <h2 className="flex w-full font-bold text-xl sm:text-2xl items-center whitespace-nowrap"></h2>
    <div className="flex flex-col">
      {homeProps.shortFormProps.map((shortForm, index) => (
        <div key={index} className="flex">
          <a
            href={`/pet/${shortForm.petId}`}
            className="flex flex-col items-center justify-center gap-6"
          >
            <video muted autoPlay loop>
              <source src={shortForm.profileShortFormUrl} type="video/mp4" />
            </video>
            <div className="flex flex-row w-full h-20">
              <div className="text-lg text-neutral-950">
                {homeProps.shortFormProps.name}
              </div>
              <div className="h-10 w-10">
                {homeProps.shortFormProps.adoptionStatus}
                {homeProps.shortFormProps.shelterName}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default VHome;
