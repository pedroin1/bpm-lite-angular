export const formatDate = (date: Date | string | null | undefined): string => {
  try {
    if (!date) {
      throw new Error('Data não fornecida');
    }

    const dateObj = date instanceof Date ? date : new Date(date);

    if (isNaN(dateObj.getTime())) {
      throw new Error('Formato de data inválido');
    }

    return new Intl.DateTimeFormat('pt-BR').format(dateObj);
  } catch (error: unknown) {
    console.error('Erro na formatação de data:', error);
    return '';
  }
};
