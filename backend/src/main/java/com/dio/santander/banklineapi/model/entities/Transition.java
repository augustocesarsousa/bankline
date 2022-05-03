package com.dio.santander.banklineapi.model.entities;

import java.time.LocalDateTime;

import com.dio.santander.banklineapi.model.entities.enums.TransitionType;

public class Transition {

    private Integer id;
    private LocalDateTime dateTime;
    private String description;
    private Double value;
    private TransitionType type;

    public Transition() {
    }

    public Transition(Integer id, LocalDateTime dateTime, String description, Double value) {
        this.id = id;
        this.dateTime = dateTime;
        this.description = description;
        this.value = value;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public TransitionType getType() {
        return type;
    }

    public void setType(TransitionType type) {
        this.type = type;
    }

}