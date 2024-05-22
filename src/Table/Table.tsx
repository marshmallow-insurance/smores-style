import React from 'react'
import { Text } from '../Text'
import { TableHeader } from './components/TableHeader'
import { TableRow } from './components/TableRow'
import { StyledCell, StyledTable } from './components/commonComponents'
import { TableProps } from './types'

/**
 * A table component that displays data with various features such as expandable rows, striped rows, and fixed headers.
 *
 * ## Caveats:
 * - `subRows` should always have the same columns as the Parent table
 * - `stripedColor` wont be applied to `subRows` or `subTables`
 * - `rowActions` will always need an `onClick`, this will be automatically passed onto the `ReactNode` you place & will be selectable
 * - Rows will scale depending on the cell content size
 * - Using `clickableRow` with clickable cells, ensure you use `e.stopPropagation` in your cells `onClick`
 *
 * ## Improvements:
 * - It would be nice if we expandable logic inside this component, e.g the presence of certain props would automatically add this
 */
export const Table = <T extends object>({
  columns,
  data,
  fixedHeader = true,
  hasKeyline = false,
  expandable,
  subTable,
  subRows,
  headerHeight,
  headerColor = 'mascarpone',
  rowColor = 'custard',
  stripedColor,
  rowBorderColor = 'oatmeal',
  rowActions,
  clickableRow,
  rowPadding,
  columnPadding,
  noDataContent,
  hideTableHeader = false,
}: TableProps<T>) => {
  const showActionsCell = expandable || rowActions
  const expandSubProp = showActionsCell ? columns.length + 1 : columns.length
  return (
    <StyledTable>
      {!hideTableHeader && (
        <thead>
          <TableHeader
            columns={columns}
            fixedHeader={fixedHeader}
            headerHeight={headerHeight}
            subTable={subTable}
            headerColor={headerColor}
            rowActions={rowActions}
            columnPadding={columnPadding}
            expandable={expandable}
            hasKeyline={hasKeyline}
          />
        </thead>
      )}
      <tbody>
        {data.length === 0 && (
          <StyledCell
            colSpan={expandSubProp}
            $rowPadding={rowPadding}
            $columnPadding={columnPadding}
          >
            {noDataContent ? (
              noDataContent
            ) : (
              <Text align="center">No available data</Text>
            )}
          </StyledCell>
        )}
        {data.length !== 0 &&
          data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              rowData={row}
              rowIndex={rowIndex}
              columns={columns}
              rowActions={rowActions}
              stripedColor={stripedColor}
              subTable={subTable}
              subRows={subRows}
              rowColor={rowColor}
              rowBorderColor={rowBorderColor}
              rowPadding={rowPadding}
              columnPadding={columnPadding}
              expandable={expandable}
              clickableRow={clickableRow}
            />
          ))}
      </tbody>
    </StyledTable>
  )
}
