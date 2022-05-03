package com.dio.santander.banklineapi.repositories;

import com.dio.santander.banklineapi.models.entities.AccountHolder;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountHolderRepository extends JpaRepository<AccountHolder, Integer> {

}