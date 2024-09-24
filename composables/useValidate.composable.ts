import type { IValidationRule } from '~/typescript/interfaces.typescript'

export default <T>(value: T, rules: IValidationRule<T>[]) => {
  for (const rule of rules) {
    if (!rule.check(value)) {
      return rule.message
    }
  }
  return null
}