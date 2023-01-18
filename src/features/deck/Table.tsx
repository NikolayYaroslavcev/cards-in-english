import React, {FC, useState} from 'react';
import {ArrowTableBlock, TableStyled} from './StyledDeck';
import polygon from '../../assets/img/Polygon.svg';
import {useTable} from 'react-table';
import {StyledActions} from '../../common/components/style/Action/StyledActions';
import edit from '../../assets/img/Edit.svg';
import {deskDeleteTC, deskUpdateTC, getDeckTC, setUpdateDeskAC} from './deck-reducer';
import deleteIcon from '../../assets/img/Delete.svg';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {getCardsTC} from '../cards/cards-reducer';
import {Navigate, useNavigate, useSearchParams} from 'react-router-dom';

type TablePropsType = {
    myId: string
    sortPack:(packName:string,sortPacsBull:boolean)=> void
}
const Table: FC<TablePropsType> = ({myId, sortPack}) => {

    const data = useAppSelector(state => state.deck.cardPacks)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [sortPacsBull, setSortPacsBull] = useState(false)

    const onClickCardsHandler = (deskId: string) => {
        console.log(deskId)
        // dispatch(getCardsTC());
        navigate(`/cards`)

    }
    const columns = React.useMemo<any>(() => [
        {
            Header: 'Name',
            accessor: 'name',

        },
        {
            Header: 'Cards',
            accessor: 'cardsCount',

        },
        {
            Header: 'Last Updated',
            accessor: 'updated',

        },
        {
            Header: 'Created by',
            accessor: 'user_name',

        },
        {
            Header: 'Actions',
            Cell: (props: any) => {
                const userId = props.row.original.user_id
                const deskId = props.row.original._id
                const isMyDesk = userId === myId

                return (
                    <StyledActions isMyDesk={isMyDesk}>
                        <img src={edit}
                             onClick={() => isMyDesk && dispatch(deskUpdateTC(deskId, ''))}
                             alt="edit"/>
                        <img src={deleteIcon} onClick={() => isMyDesk && dispatch(deskDeleteTC(deskId))}
                             alt="deleteIcon"/>
                    </StyledActions>
                )
            },
        },
    ], [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})
    const onClickHandler = (id: string) => {
        setSortPacsBull(!sortPacsBull)
        sortPack(id,sortPacsBull)
        console.log(id)
    }
    return (
        <TableStyled {...getTableProps()} >
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps()}
                        >
                            {
                                <ArrowTableBlock>
                                    <p>{column.render('Header')}</p>
                                    <img
                                        src={polygon}
                                        alt="polygon"
                                        onClick={() => onClickHandler(column.id)}
                                    />
                                </ArrowTableBlock>
                            }
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()} >
                        {row.cells.map(cell => {
                            return (
                                <td onClick={() => {
                                    cell.column.Header !== 'Actions' && onClickCardsHandler(cell.row.original._id)
                                }}
                                    {...cell.getCellProps()}
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </TableStyled>
    );
};

export default Table;
