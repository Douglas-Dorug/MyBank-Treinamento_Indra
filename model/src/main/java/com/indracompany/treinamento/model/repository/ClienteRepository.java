package com.indracompany.treinamento.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.indracompany.treinamento.model.entity.Cliente;

public interface ClienteRepository extends GenericCrudRepository<Cliente, Long>{
	
	Cliente findByCpf(String cpf);

	
	List<Cliente> findByNomeIgnoreCaseLike(String nome);

}
