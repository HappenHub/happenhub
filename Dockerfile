# Use official lightweight OpenJDK image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Build the project using Maven
RUN apt-get update && apt-get install -y maven && mvn clean package -DskipTests

# Expose port 8080
EXPOSE 8080

# Run the built jar file
CMD ["java", "-jar", "target/happenhub-0.0.1-SNAPSHOT.jar"]
