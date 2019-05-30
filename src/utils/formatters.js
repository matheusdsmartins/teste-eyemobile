export const formatBRL = number => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
