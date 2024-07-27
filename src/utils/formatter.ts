import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatRelativeTime = (date: Date) => {
  return formatDistanceToNow(new Date(date), { locale: ptBR, addSuffix: true });
};