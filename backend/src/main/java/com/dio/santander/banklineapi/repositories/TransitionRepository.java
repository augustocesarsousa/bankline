package com.dio.santander.banklineapi.repositories;

import java.util.List;

import com.dio.santander.banklineapi.models.entities.Transition;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TransitionRepository extends JpaRepository<Transition, Long> {

    public List<Transition> findByIdAccount(Integer idAccount);
}
