// utils/logger.ts
export type LogCategory = "SYSTEM" | "AUTH" | "BUSINESS";

export const logger = {
  /**
   * Logs techniques (pour le débogage système)
   */
  technical: (
    context: string,
    error: any,
    category: LogCategory = "SYSTEM",
  ) => {
    const timestamp = new Date().toISOString();
    console.error(`[TECHNICAL] [${category}] [${context}] [${timestamp}]`, {
      message: error?.message || "Erreur inconnue",
      status: error?.status,
      stack: error?.stack,
    });
  },

  /**
   * Logs métiers (pour le suivi de l'activité utilisateur)
   */
  business: (action: string, metadata: Record<string, any>) => {
    const timestamp = new Date().toISOString();
    console.info(`[BUSINESS] [${action}] [${timestamp}]`, metadata);
  },
};
