import type { IValidationRule } from '~/typescript/interfaces.typescript'

export const emailRules: IValidationRule<string>[] = [
  {
    check: (email: string) => !!email,
    message: 'Введите почту.'
  },
  {
    check: (email: string) => /^[a-zA-Z0-9._%+-]+/.test(email),
    message: 'Неверный формат: проверьте символы до @.',
  },
  {
    check: (email: string) => /@[a-zA-Z0-9.-]+/.test(email),
    message: 'Неверный формат: проверьте символы после @.',
  },
  { check: (email: string) => /\.[a-zA-Z]{2,}$/.test(email), message: 'Неверный домен.' },
]