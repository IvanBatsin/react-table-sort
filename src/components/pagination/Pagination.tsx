import React from 'react';

interface PaginationProps {
  itemPerPage: number,
  totalItems: number,
  currentPage: number,
  handePageNumber: (number: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({handePageNumber ,itemPerPage, totalItems, currentPage}: PaginationProps): React.ReactElement => {
  const pageNumbers: number[] = Array(Math.ceil(totalItems/itemPerPage)).fill(1);

  return (
    <ul className="pagination">
      {pageNumbers.map((_, index) => {
        return (
          <li 
            key={index} 
            className={`waves-effect ${currentPage === index + 1 && 'active'}`}
          >
            <a onClick={event => handePageNumber(Number(event.currentTarget.innerText))}>{index + 1}</a>
          </li>
        )
      })}
    </ul>
  )
}