import React, {ChangeEvent, FC} from 'react';
import {NativeSelect, Pagination} from "@mui/material";
import {PaginationStyle} from "../../../features/deck/StyledDeck";

type PaginationBlockPropsType = {
    page: number,
    totalPages: number
    onChangePageHandler: (event: React.ChangeEvent<unknown>, page: number) => void
    pageCount: number
    handleChangeSelectValue: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const PaginationBlock: FC<PaginationBlockPropsType> = (
    {
        totalPages,
        page,
        onChangePageHandler,
        pageCount,
        handleChangeSelectValue
    }) => {


    return (
        <PaginationStyle>
            <Pagination page={page}
                        count={totalPages}
                        shape="rounded"
                        onChange={onChangePageHandler}
            />
            <p>Show</p>
            <NativeSelect
                value={pageCount}
                onChange={handleChangeSelectValue}
                inputProps={{
                    id: 'select page',
                }}
            >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={16}>16</option>
            </NativeSelect>
            <p>Cards per Page</p>
        </PaginationStyle>

    );
};

