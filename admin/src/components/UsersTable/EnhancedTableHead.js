import React from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from 'material-ui/Table';
import { Checkbox } from 'material-ui';

const columnData = [
	{ id: "fullname", numeric: false, disablePadding: true, label: 'Fullname' },
	{ id: "email", numeric: false, disablePadding: true, label: 'Email' },
];

const EnhancedTableHead = ({ onSelectAllClick, order, orderBy, onRequestSort, selectAll }) => (
	<TableHead>
		<TableRow>
			<TableCell checkbox>
				<Checkbox 
					onChange={(e, checked) => onSelectAllClick(checked)}
					checked={selectAll}
				/>
			</TableCell>
			{columnData.map(column => (
				<TableCell
					key={column.id}
					numeric={column.numeric}
					disablePadding={column.disablePadding}
				>
					<TableSortLabel
						active={orderBy === column.id}
						direction={order}
						onClick={() => onRequestSort(column.id)}
					>
						{column.label}
					</TableSortLabel>
				</TableCell>
			))}
		</TableRow>
	</TableHead>
);

export default EnhancedTableHead;
