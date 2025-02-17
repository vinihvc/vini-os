import { cn } from '@/lib/cn'
import { useDateTime } from './use-date-time'

interface DateTimeProps extends React.ComponentProps<'div'> {}

export const DateTime = (props: DateTimeProps) => {
  const { className, ...rest } = props

  const { day, hours, minutes, weekDay, monthName, amPm } = useDateTime('12h')

  return (
    <div
      className={cn('grid place-items-end font-medium text-xs', className)}
      {...rest}
    >
      <time>{`${hours}:${minutes} ${amPm}`}</time>

      <span>{`${weekDay} ${day} ${monthName}`}</span>
    </div>
  )
}
