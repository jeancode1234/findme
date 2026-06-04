export type LogDetails = Record<string, unknown>

const formatMessage = (level: string, message: string, details?: LogDetails) => {
  const base = `[FindMe][${level}] ${message}`
  return details ? `${base} — ${JSON.stringify(details)}` : base
}

export const useLogger = () => {
  const info = (message: string, details?: LogDetails) => console.info(formatMessage('INFO', message, details))
  const warn = (message: string, details?: LogDetails) => console.warn(formatMessage('WARN', message, details))
  const error = (message: string, details?: LogDetails) => console.error(formatMessage('ERROR', message, details))
  const debug = (message: string, details?: LogDetails) => console.debug(formatMessage('DEBUG', message, details))

  return {
    info,
    warn,
    error,
    debug,
  }
}
