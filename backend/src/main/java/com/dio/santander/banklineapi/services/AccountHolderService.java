package com.dio.santander.banklineapi.services;

import java.util.Date;

import com.dio.santander.banklineapi.models.dto.NewAccountHolderDTO;
import com.dio.santander.banklineapi.models.entities.Account;
import com.dio.santander.banklineapi.models.entities.AccountHolder;
import com.dio.santander.banklineapi.repositories.AccountHolderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountHolderService {

  @Autowired
  private AccountHolderRepository repository;

  public void save(NewAccountHolderDTO newAccountHolderDTO) {
    AccountHolder accountHolder = new AccountHolder();
    accountHolder.setCpf(newAccountHolderDTO.getCpf());
    accountHolder.setName(newAccountHolderDTO.getName());

    Account account = new Account();
    account.setNumber(new Date().getTime());

    accountHolder.setAccount(account);
    repository.save(accountHolder);
  }
}
