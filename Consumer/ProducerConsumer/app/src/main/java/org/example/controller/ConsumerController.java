package org.example.controller;

import io.prometheus.client.CollectorRegistry;
import io.prometheus.client.Counter;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import io.micrometer.core.instrument.Metrics;
import io.micrometer.prometheus.PrometheusMeterRegistry;





@Service
public class ConsumerController {

    private final Counter kafkaEventsCounter;

    private final String[] arr={"EnrollCourseEventJavaStack","EnrollCourseEventDataScience","EnrollCourseEventDSAInJava", "EnrollCourseEventMERNStack","BuyCourseEventJavaStack","BuyCourseEventDataScience","BuyCourseEventDSAInJava","BuyCourseEventMERNStack"};
    public ConsumerController(CollectorRegistry registry) {
        kafkaEventsCounter = Counter.build()
                .name("kafka_events_received_total")
                .labelNames("event_type")
                .help("Count of different user button click events received from Kafka")
                .register(registry);

    }

    @KafkaListener(topics = "course", groupId = "metrics-consumer-group")
    public void listen(String eventData) {
        String eventType = eventData.replaceAll("[{}\"]", "")
                .replace("event:", "").trim();

        System.out.println("Received event: " + eventType);
        boolean flag=true;
        for ( int i=0;i<8;i++){
            if (arr[i].equalsIgnoreCase(eventType)) {
                kafkaEventsCounter.labels(eventType).inc();
                flag=false;
                break;
            }
        }
        if (flag){
            kafkaEventsCounter.labels("unknown").inc();
        }
    }

}