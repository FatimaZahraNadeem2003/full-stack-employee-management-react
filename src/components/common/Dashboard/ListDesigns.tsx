import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ListWrapperProps {
    children: React.ReactNode
}

interface HeadingBarProps {
    title: string
    actions?: React.ReactNode
}

interface ListItemsProps {
    data: any[]
    columns: string[]
    renderRow: (item: any, index: number) => React.ReactNode
}

interface ListContainerProps {
    children: React.ReactNode
}

export const ListWrapper = ({ children }: ListWrapperProps) => {
    return (
        <div className="list-wrapper">
            {children}
        </div>
    )
}

export const HeadingBar = ({ title, actions }: HeadingBarProps) => {
    return (
        <div className="heading-bar flex justify-between items-center">
            <h2 className="text-2xl font-bold">{title}</h2>
            {actions && <div className="actions">{actions}</div>}
        </div>
    )
}

export const ListItems = ({ data, columns, renderRow }: ListItemsProps) => {
    return (
        <div className="list-items">
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableHead key={index}>{column}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => renderRow(item, index))}
                </TableBody>
            </Table>
        </div>
    )
}

export const ListContainer = ({ children }: ListContainerProps) => {
    return (
        <div className="list-container">
            {children}
        </div>
    )
}