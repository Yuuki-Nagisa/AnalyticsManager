package org.example.config;

import io.prometheus.client.CollectorRegistry;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CustomPrometheusConfig {
    @Bean
    public CollectorRegistry collectorRegistry() {
        return new CollectorRegistry();
    }
}