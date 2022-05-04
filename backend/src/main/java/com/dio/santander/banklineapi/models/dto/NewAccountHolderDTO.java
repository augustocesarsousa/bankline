package com.dio.santander.banklineapi.models.dto;

import com.dio.santander.banklineapi.models.entities.AccountHolder;

public class NewAccountHolderDTO {

  private String name;
  private String cpf;

  public NewAccountHolderDTO() {}

  public NewAccountHolderDTO(String name, String cpf) {
    this.name = name;
    this.cpf = cpf;
  }

  public NewAccountHolderDTO(AccountHolder accountHolder) {
    this.name = accountHolder.getName();
    this.cpf = accountHolder.getCpf();
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getCpf() {
    return cpf;
  }

  public void setCpf(String cpf) {
    this.cpf = cpf;
  }
}
