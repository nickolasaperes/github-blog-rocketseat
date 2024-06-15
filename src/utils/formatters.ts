import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function dateFormatDistanceToNow(date: Date) {
  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  })
}
