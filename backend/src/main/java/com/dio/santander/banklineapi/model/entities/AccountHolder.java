package com.dio.santander.banklineapi.model.entities;

import java.util.HashSet;
import java.util.Set;

public class AccountHolder {

    private Integer id;
    private String cpf;
    private String nome;

    private Account account;

    private Set<Transition> transitions = new HashSet<>();

    public AccountHolder() {

    }

    public AccountHolder(Integer id, String cpf, String nome, Account account) {
        this.id = id;
        this.cpf = cpf;
        this.nome = nome;
        this.account = account;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Set<Transition> getTransitions() {
        return transitions;
    }

}