package com.parkmate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class ParkmateApplication {

    public static void main(String[] args) {
        SpringApplication.run(ParkmateApplication.class, args);
    }
}
