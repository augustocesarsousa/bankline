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
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "tb_transaction")
public class Transaction {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @JsonFormat(pattern = "MMM-d-yyyy H:mm:ss")
  private LocalDateTime date;

  private String description;
  private Double value;

  @Enumerated(EnumType.STRING)
  private TransitionType type;

  @Column(name = "id_Account")
  private Integer idAccount;

  public Transaction() {}

  public Transaction(
    Long id,
    LocalDateTime date,
    String description,
    Double value,
    TransitionType type,
    Integer idAccount
  ) {
    this.id = id;
    this.date = date;
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

  public LocalDateTime getDate() {
    return date;
  }

  public void setDate(LocalDateTime date) {
    this.date = date;
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
