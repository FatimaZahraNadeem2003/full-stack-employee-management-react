import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContentWrapperProps {
    title: string
    children: React.ReactNode
    actions?: React.ReactNode
}

export const ContentWrapper = ({ title, children, actions }: ContentWrapperProps) => {
    return (
        <div className="content-wrapper">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>{title}</CardTitle>
                        {actions && <div className="actions">{actions}</div>}
                    </div>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </div>
    )
}