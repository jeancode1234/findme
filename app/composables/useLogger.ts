type LogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR";

export const useLogger = () => {
  const isDev = import.meta.env.DEV;

  // Nettoyage automatique des clés sensibles (RGPD / Sécurité GeoLink)
  const sanitize = (data: any): any => {
    if (!data) return data;
    const sensitiveKeys = ["password", "confirmPassword", "token", "secret"];
    const cleanData = JSON.parse(JSON.stringify(data));

    const mask = (obj: any) => {
      for (const key in obj) {
        if (sensitiveKeys.includes(key)) obj[key] = "[PROTÉGÉ]";
        else if (typeof obj[key] === "object" && obj[key] !== null)
          mask(obj[key]);
      }
    };
    mask(cleanData);
    return cleanData;
  };

  const log = (
    level: LogLevel,
    message: string,
    context: any = "GENERAL",
    data?: any,
  ) => {
    const timestamp = new Date().toISOString();
    const cleanData = sanitize(data);

    // 🛠️ CORRECTION EXTRÊMEMENT ROBUSTE :
    // On s'assure que 'context' est bien traité comme une string, peu importe ce qu'on lui envoie.
    // Si c'est un objet, on le convertit en chaîne ou on utilise une valeur par défaut.
    let ctxString = "GENERAL";
    if (typeof context === "string") {
      ctxString = context.toUpperCase();
    } else if (context && typeof context === "object") {
      // Si quelqu'un a passé un objet de données à la place du contexte par mégarde
      ctxString = "OBJECT_CONTEXT";
      if (!data) data = context; // On récupère l'objet pour ne pas perdre l'information dans les logs
    }

    const formatted = `${timestamp} | ${level} | [${ctxString}] : ${message}`;

    if (level === "ERROR") console.error(formatted, cleanData || "");
    else if (level === "WARN") console.warn(formatted, cleanData || "");
    else if (isDev) {
      const style =
        level === "DEBUG"
          ? "color: #7f8c8d; font-style: italic;"
          : "color: #3498db; font-weight: bold;";
      console.log(`%c${formatted}`, style, cleanData || "");
    }
  };

  return {
    debug: (msg: string, ctx?: string, data?: any) =>
      log("DEBUG", msg, ctx, data),
    info: (msg: string, ctx?: string, data?: any) =>
      log("INFO", msg, ctx, data),
    warn: (msg: string, ctx?: string, data?: any) =>
      log("WARN", msg, ctx, data),
    error: (msg: string, ctx?: string, data?: any) =>
      log("ERROR", msg, ctx, data),
  };
};
