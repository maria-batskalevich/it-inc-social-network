import React, {useState} from "react";
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    pageSize: number;
    totalItemsCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    portionSize: number;
};

export const Paginator = React.memo(
    ({
         totalItemsCount,
         pageSize,
         onPageChange,
         currentPage,
         portionSize,
     }: PaginatorPropsType) => {
        const [portionNumber, setPortionNumber] = useState(1);
        const pagesCount = Math.ceil(totalItemsCount / pageSize); // Math.ceil() - rounding to higher integer
        const portionsCount = Math.ceil(pagesCount / portionSize); // portionsCount === number of "portions", which pagination is split into

        const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
        const rightPortionPageNumber = portionNumber * portionSize;
        const pages: Array<number> = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={s.paginator}>
                {portionNumber > 1 && (
                    <button
                        onClick={() => setPortionNumber(portionNumber - 1)}
                        className={s.btn}
                    >
                        {"<"}
                    </button>
                )}

                {pages
                    .filter(
                        (page) =>
                            page >= leftPortionPageNumber && page <= rightPortionPageNumber
                    )
                    .map((page) => {
                        return (
                            <span
                                key={page}
                                onClick={() => {
                                    onPageChange(page);
                                }}
                                className={
                                    currentPage === page ? s.selectedPage : s.page
                                }
                            >
                {page}
              </span>
                        );
                    })}
                {portionsCount > portionNumber && (
                    <button
                        onClick={() => {
                            setPortionNumber(portionNumber + 1);
                        }}
                        className={s.btn}
                    >
                        {">"}
                    </button>
                )}
            </div>
        );
    }
);