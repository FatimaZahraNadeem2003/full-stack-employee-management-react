import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DataTableProps {
    data: any[]
    columns: { key: string; label: string }[]
    renderRow?: (item: any, index: number) => React.ReactNode
}

export const DataTable = ({ data, columns, renderRow }: DataTableProps) => {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((column) => (
                            <TableHead key={column.key}>{column.label}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => 
                        renderRow ? 
                            renderRow(item, index) : 
                            <TableRow key={index}>
                                {columns.map((column) => (
                                    <TableCell key={column.key}>
                                        {item[column.key]}
                                    </TableCell>
                                ))}
                            </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}