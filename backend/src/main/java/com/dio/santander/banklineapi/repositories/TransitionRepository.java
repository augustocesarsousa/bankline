package com.dio.santander.banklineapi.repositories;

import com.dio.santander.banklineapi.models.entities.Transition;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TransitionRepository extends JpaRepository<Transition, Integer> {

}