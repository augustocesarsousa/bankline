package com.dio.santander.banklineapi.models.entities;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Account {

    @Column(name = "account_number")
    private Long number;

    @Column(name = "account_balance")
    private Double balance;

    public Account() {
    }

    public Account(Long number, Double balance) {
        this.number = number;
        this.balance = balance;
    }

    public Long getNumber() {
        return number;
    }

    public void setNumber(Long number) {
        this.number = number;
    }

    public Double getBalance() {
        return balance;
    }

    public void withdraw(Double amount) {
        this.balance -= amount;
    }

    public void deposit(Double amount) {
        this.balance += amount;
    }

}