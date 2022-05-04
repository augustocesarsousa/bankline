package com.dio.santander.banklineapi.controllers;

import java.util.List;

import com.dio.santander.banklineapi.models.dto.NewTransitionDTO;
import com.dio.santander.banklineapi.models.entities.Transition;
import com.dio.santander.banklineapi.repositories.TransitionRepository;
import com.dio.santander.banklineapi.services.TransitionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/transitions")
public class TransitionController {

  @Autowired
  private TransitionRepository repository;

  @Autowired
  private TransitionService service;

  @GetMapping
  public List<Transition> findAll() {
    return repository.findAll();
  }

  @GetMapping("/{idAccount}")
  public List<Transition> findByIdAccount(@PathVariable("idAccount") Integer idAccount) {
    return repository.findByIdAccount(idAccount);
  }

  @PostMapping
  public void save(@RequestBody NewTransitionDTO newTransitionDTO) {
    service.save(newTransitionDTO);
  }
}
