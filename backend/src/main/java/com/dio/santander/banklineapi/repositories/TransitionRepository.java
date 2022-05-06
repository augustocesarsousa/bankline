package com.dio.santander.banklineapi.repositories;

import java.util.List;

import com.dio.santander.banklineapi.models.entities.Transaction;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TransitionRepository extends JpaRepository<Transaction, Long> {
  public List<Transaction> findByIdAccount(Integer idAccount);
}
