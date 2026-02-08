import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface DepartmentTabsProps {
    tabs: { value: string; label: string; content: React.ReactNode }[]
    defaultValue?: string
}

export const HRDepartmentTabs = ({ tabs, defaultValue }: DepartmentTabsProps) => {
    return (
        <Tabs defaultValue={defaultValue || tabs[0]?.value} className="w-full">
            <TabsList>
                {tabs.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    )
}