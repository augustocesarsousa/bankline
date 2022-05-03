package com.dio.santander.banklineapi.model.entities;

public class Account {

    private Long number;
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