package com.indracompany.treinamento.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.indracompany.treinamento.model.entity.Cliente;

public interface ClienteRepository extends GenericCrudRepository<Cliente, Long>{
	
	Cliente findByCpf(String cpf);

	
	@Query(value = "SELECT * FROM `clientes` WHERE UPPER(nome) LIKE ?1%", nativeQuery = true)
	List<Cliente> findByNome(String nome);

}
