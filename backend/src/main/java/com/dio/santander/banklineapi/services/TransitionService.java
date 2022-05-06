package com.dio.santander.banklineapi.services;

import java.time.LocalDateTime;

import com.dio.santander.banklineapi.models.dto.NewTransitionDTO;
import com.dio.santander.banklineapi.models.entities.AccountHolder;
import com.dio.santander.banklineapi.models.entities.Transaction;
import com.dio.santander.banklineapi.models.entities.enums.TransitionType;
import com.dio.santander.banklineapi.repositories.AccountHolderRepository;
import com.dio.santander.banklineapi.repositories.TransitionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransitionService {

  @Autowired
  private TransitionRepository repository;

  @Autowired
  private AccountHolderRepository accountHolderRepository;

  public void save(NewTransitionDTO newTransition) {
    Transaction transition = new Transaction();
    Double value = newTransition.getType() == TransitionType.REVENUE
      ? newTransition.getValue()
      : newTransition.getValue() * -1;

    transition.setDate(LocalDateTime.now());
    transition.setDescription(newTransition.getDescription());
    transition.setIdAccount(newTransition.getIdAccount());
    transition.setType(newTransition.getType());
    transition.setValue(value);

    AccountHolder accountHolder = accountHolderRepository
      .findById(transition.getIdAccount())
      .orElse(null);

    if (accountHolder != null) {
      accountHolder
        .getAccount()
        .setBalance(accountHolder.getAccount().getBalance() + value);
      accountHolderRepository.save(accountHolder);
    }

    repository.save(transition);
  }
}
