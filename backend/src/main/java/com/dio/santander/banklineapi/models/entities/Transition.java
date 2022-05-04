package com.dio.santander.banklineapi.models.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.dio.santander.banklineapi.models.entities.enums.TransitionType;

@Entity
@Table(name = "tb_transition")
public class Transition {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private LocalDateTime dateTime;
  private String description;
  private Double value;

  @Enumerated(EnumType.STRING)
  private TransitionType type;

  @Column(name = "id_Account")
  private Integer idAccount;

  public Transition() {
  }

  public Transition(
      Long id,
      LocalDateTime dateTime,
      String description,
      Double value,
      TransitionType type,
      Integer idAccount) {
    this.id = id;
    this.dateTime = dateTime;
    this.description = description;
    this.value = value;
    this.type = type;
    this.idAccount = idAccount;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
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

  public Integer getIdAccount() {
    return idAccount;
  }

  public void setIdAccount(Integer idAccount) {
    this.idAccount = idAccount;
  }
}
