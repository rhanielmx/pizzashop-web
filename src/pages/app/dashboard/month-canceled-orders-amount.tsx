import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export interface MonthCanceledOrdersAmountCardProps {}

export function MonthCanceledOrdersAmountCard(
  props: MonthCanceledOrdersAmountCardProps,
) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">25</span>
        <p>
          <span className="text-rose-500 dark:text-rose-400">+5%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
