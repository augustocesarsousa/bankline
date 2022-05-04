package com.dio.santander.banklineapi.controllers;

import java.util.List;

import com.dio.santander.banklineapi.models.dto.NewAccountHolderDTO;
import com.dio.santander.banklineapi.models.entities.AccountHolder;
import com.dio.santander.banklineapi.repositories.AccountHolderRepository;
import com.dio.santander.banklineapi.services.AccountHolderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/accountholders")
public class AccountHolderController {

  @Autowired
  private AccountHolderRepository repository;

  @Autowired
  private AccountHolderService service;

  @GetMapping
  public List<AccountHolder> findAll() {
    return repository.findAll();
  }

  @PostMapping
  public void save(@RequestBody NewAccountHolderDTO newAccountHolderDTO) {
    service.save(newAccountHolderDTO);
  }
}
