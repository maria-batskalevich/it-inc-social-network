import React from "react";
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    pageSize: number;
    totalItemsCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};

export const Paginator = React.memo(
    ({
         totalItemsCount,
         pageSize,
         onPageChange,
         currentPage,
     }: PaginatorPropsType) => {
        const pagesCount = Math.ceil(totalItemsCount / pageSize); // Math.ceil() - rounding to higher integer

        const pages: Array<number> = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                {pages.map((page) => {
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
            </div>
        );
    }
);