# Spring Boot Cheat Sheet

This cheat sheet covers essential Spring Boot annotations, built-in functions, and common patterns to help you build robust and efficient Java applications.

## Core Annotations

**@SpringBootApplication**

- Purpose: Marks the main class of a Spring Boot application.
- Functionality: Enables auto-configuration, component scanning, and Spring Boot's opinionated defaults.

**@Configuration**

- Purpose: Designates a class as a source of bean definitions.
- Functionality: Allows you to create and configure beans using Java code.

**@Bean**

- Purpose: Defines a bean within a `@Configuration` class.
- Functionality: The method annotated with `@Bean` produces an object that Spring manages.


**@Component**

- Purpose: A generic stereotype for any Spring-managed component.
- Functionality: Indicates that the class is a candidate for auto-detection when using annotation-based configuration and classpath scanning.

## Web Annotations

**@RestController**
- Purpose: Marks a class as a REST controller (combines `@Controller` and `@ResponseBody`).
- Functionality: Handles incoming HTTP requests and returns data directly in the response body (usually JSON or XML).

**@GetMapping("/place_path_here")**
- Purpose: Maps HTTP GET requests to a specific handler method.
- Functionality: Defines the endpoint URL and method for handling GET requests.

**@PostMapping("/place_path_here")**

- Purpose: Maps HTTP POST requests to a specific handler method.
- Functionality: Defines the endpoint URL and method for handling POST requests.

**@PutMapping("/path")**

- Purpose: Maps HTTP PUT requests to a specific handler method.

**@DeleteMapping("/path")**

- Purpose: Maps HTTP DELETE requests to a specific handler method.

**@RequestMapping("/path")**

- Purpose: A general-purpose annotation for mapping web requests to handler methods.
- Functionality: Can be used with various HTTP methods (GET, POST, PUT, DELETE, etc.).

## Persistence Annotations (JPA/Hibernate)

**@Entity**

- Purpose: Marks a class as a persistent entity (to be mapped to a database table).

**@Id**

- Purpose: Designates a field as the primary key of an entity.

**@GeneratedValue**

- Purpose: Indicates that the value of the marked field should be generated automatically.

**@Column(name = "column_name")**

- Purpose: Customizes the mapping of an entity field to a database column.

## Bean Validation Annotations

**@NotNull**

- Purpose: The annotated element must not be null.

**@NotEmpty**

- Purpose: The annotated element must not be null or empty.

**@NotBlank**

- Purpose: The annotated element must not be null and must contain at least one non-whitespace character.

**@Size(min = 5, max = 20)**

- Purpose: The size of the annotated element must be between the specified boundaries (inclusive).

## Spring Boot Built-in Functions

### Spring Expression Language (SpEL)

**#{ ... }**


- Purpose: Dynamic evaluation of expressions within Spring annotations and configuration files.
- Functionality: Access bean properties, call methods, perform mathematical operations, etc.

### Property Access

**${ ... }**


- Purpose: Access values from property files, environment variables, or command-line arguments.

### REST Template

- Purpose: Simplifies interaction with RESTful web services.
- Functionality: Provides methods for making HTTP requests (GET, POST, PUT, DELETE) and handling responses.

### Actuator Endpoints

- `/actuator/health`
- `/actuator/info`
- `/actuator/metrics`
- ... many more

- Purpose: Provide insights into the running application.
- Functionality: Expose operational information about health, metrics, configuration, etc.