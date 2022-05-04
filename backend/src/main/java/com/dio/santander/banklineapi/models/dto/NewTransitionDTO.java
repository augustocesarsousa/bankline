package com.dio.santander.banklineapi.models.dto;

import com.dio.santander.banklineapi.models.entities.Transition;
import com.dio.santander.banklineapi.models.entities.enums.TransitionType;

public class NewTransitionDTO {

  private String description;
  private Double value;
  private TransitionType type;
  private Integer idAccount;

  public NewTransitionDTO() {}

  public NewTransitionDTO(
    String description,
    Double value,
    TransitionType type,
    Integer idAccount
  ) {
    this.description = description;
    this.value = value;
    this.type = type;
    this.idAccount = idAccount;
  }

  public NewTransitionDTO(Transition transition) {
    this.description = transition.getDescription();
    this.value = transition.getValue();
    this.type = transition.getType();
    this.idAccount = transition.getIdAccount();
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
