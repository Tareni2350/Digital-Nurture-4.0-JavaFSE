public class Logger {
    // Step 2: Create a private static instance of Logger
    private static Logger instance;

    // Step 2: Make the constructor private so no other class can instantiate it
    private Logger() {
        System.out.println("Logger initialized");
    }

    // Step 2: Provide a public static method to return the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger(); // Lazy initialization
        }
        return instance;
    }

    // Sample log method
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}