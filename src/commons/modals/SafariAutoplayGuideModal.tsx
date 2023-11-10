import { getCookie, setCookie } from 'commons/cookie/cookie';
import React, { useEffect, useState } from 'react';

interface AutoplayGuideModalProps {
  browserInfo: string;
}

const SafariAutoplayGuideModal = ({ browserInfo }: AutoplayGuideModalProps) => {
  const browsers = [
    'Chrome',
    'Opera',
    'WebTV',
    'Whale',
    'Beonex',
    'Chimera',
    'NetPositive',
    'Phoenix',
    'Firefox',
    'Safari',
    'SkipStone',
    'Netscape',
    'Mozilla',
  ];
  const [isSafari, setIsSafari] = useState<boolean>(false);
  const [currentBrowser, setCurrentBrowser] = useState<string>('');
  const [isClose, setIsClose] = useState<boolean>(false);
  const isFirstTime = getCookie('isFirstTime');

  const handleCloseButton = () => {
    setIsClose(true);
    setCookie('isFirstTime', 'false', {
      maxAge: 60000 * 60 * 24 * 30,
    });
  };

  const handleBrowserInfo = async () => {
    switch (true) {
      case browserInfo.includes('edg'):
        setCurrentBrowser('Edge');
        break;
      case browserInfo.includes('trident') || browserInfo.includes('msie'):
        setCurrentBrowser('Internet Explorer');
        break;
      default:
        if (currentBrowser === 'Safari') {
          setIsSafari(true);
        }

        setCurrentBrowser(
          browsers.find((browser) =>
            browserInfo.includes(browser.toLowerCase()),
          ) || 'Other',
        );

        break;
    }
  };

  useEffect(() => {
    handleBrowserInfo();
  }, [currentBrowser]);

  return isSafari && !isClose && Boolean(isFirstTime) ? (
    <dialog
      open={isClose}
      className="w-[400px] h-[400px] rounded-md flex flex-col justify-around items-center z-50"
    >
      <button
        className="absolute top-3 right-3 text-lg font-bold"
        onClick={handleCloseButton}
      >
        X
      </button>
      <div className="flex flex-col gap-2 items-center">
        <span className="font-bold text-3xl">Safari</span>
        <span className="font-bold text-xl">자동재생 가이드</span>
      </div>
      <img></img>
      <div className="flex flex-col gap-2 items-center font-normal text-lg">
        <span className="">원활한 컨텐츠 사용을 위해</span>
        <span className="">Safari 환경설정의 자동 재생을 켜주세요.</span>
      </div>
    </dialog>
  ) : null;
};

export default SafariAutoplayGuideModal;
