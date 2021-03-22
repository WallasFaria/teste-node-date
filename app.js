import { parse } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

let value = '15:00'
result = parse(value, 'HH:mm', new Date(2000, 0, 1))

alert(result)
