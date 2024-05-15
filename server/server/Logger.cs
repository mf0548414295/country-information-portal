namespace server
{
    public static class Logger
    {
        private static readonly log4net.ILog _logger = log4net.LogManager.GetLogger
                (System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        public static void Info(string infoMessage)
        {
            _logger.Info(infoMessage);
        }
        public static void Error(string errorMessage)
        {
            _logger.Info(errorMessage);
        }
        public static void Warn(string warnMessage)
        {
            _logger.Info(warnMessage);
        }
    }
}
