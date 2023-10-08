import PageButton from 'pages/ProfileList/PageButton';

export function getPaginationItems(
  currentPage: number,
  lastPage: number,
  maxLength: number,
) {
  const res: Array<number> = [];

  // maxLength보다 lastPage가 짧을 때에는 그냥 쭉 페이지 리스트를 보여줌
  if (lastPage <= maxLength) {
    for (let i = 1; i <= lastPage; i += 1) {
      res.push(i);
    }
  } else {
    const firstPage = 1;
    const confirmedPagesCount = 3;
    const deductedMaxLength = maxLength - confirmedPagesCount;
    const sideLength = deductedMaxLength / 2;

    // ... 계산하는 로직
    if (
      currentPage - firstPage < sideLength ||
      lastPage - currentPage < sideLength
    ) {
      for (let j = 1; j <= sideLength + firstPage; j += 1) {
        res.push(j);
      }

      res.push(NaN);

      for (let k = lastPage - sideLength; k <= lastPage; k += 1) {
        res.push(k);
      }
    } else if (
      currentPage - firstPage >= deductedMaxLength &&
      lastPage - currentPage >= deductedMaxLength
    ) {
      const deductedSideLength = sideLength - 1;

      res.push(1);
      res.push(NaN);

      for (
        let l = currentPage - deductedSideLength;
        l <= currentPage + deductedSideLength;
        l += 1
      ) {
        res.push(l);
      }

      res.push(NaN);
      res.push(lastPage);
    } else {
      const isNearFirstPage = currentPage - firstPage < lastPage - currentPage;
      let remainingLength = maxLength;

      if (isNearFirstPage) {
        for (let m = 1; m <= currentPage + 1; m += 1) {
          res.push(m);
          remainingLength -= 1;
        }

        res.push(NaN);
        remainingLength -= 1;

        for (let n = lastPage - (remainingLength - 1); n <= lastPage; n += 1) {
          res.push(n);
        }
      } else {
        for (let o = lastPage; o >= currentPage - 1; o -= 1) {
          res.unshift(o);
          remainingLength -= 1;
        }

        res.unshift(NaN);
        remainingLength -= 1;

        for (let p = remainingLength; p >= 1; p -= 1) {
          res.unshift(p);
        }
      }
    }
  }

  return res;
}

export interface Props {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
}
export default function Pagination({
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage,
}: Props) {
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);

  return (
    <nav className="pagination  whitespace-nowrap" aria-label="Pagination">
      <PageButton
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        이전
      </PageButton>
      {pageNums.map((pageNum, idx) => (
        <PageButton
          key={idx}
          active={currentPage === pageNum}
          disabled={Number.isNaN(pageNum)}
          onClick={() => setCurrentPage(pageNum)}
        >
          {!Number.isNaN(pageNum) ? pageNum : '...'}
        </PageButton>
      ))}
      <PageButton
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        다음
      </PageButton>
    </nav>
  );
}
