package com.indracompany.treinamento.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.indracompany.treinamento.exception.AplicacaoException;
import com.indracompany.treinamento.exception.ExceptionValidacoes;
import com.indracompany.treinamento.model.dto.ClienteDTO;
import com.indracompany.treinamento.model.entity.ContaBancaria;
import com.indracompany.treinamento.model.entity.Cliente;
import com.indracompany.treinamento.model.repository.ContaBancariaRepository;

@Service
public class ContaBancariaService extends GenericCrudService<ContaBancaria, Long, ContaBancariaRepository> {
	
	@Autowired
	private ClienteService clienteService;
	
	@Autowired
	private ContaBancariaRepository contaBancariaRepository;
	
	
	public double consultarSaldo(String agencia, String numeroConta) {
		
		ContaBancaria conta = this.consultarConta(agencia, numeroConta);
		return conta.getSaldo();
	}
	
	public  ContaBancaria consultarConta(String agencia, String numeroConta) {
		
		ContaBancaria conta = contaBancariaRepository.findByAgenciaAndNumero(agencia, numeroConta);
		
		if (conta == null) {
			throw new AplicacaoException(ExceptionValidacoes.ERRO_CONTA_INVALIDA);
		}
		
		return conta;
	}
	
	public List<ContaBancaria> obterContas(String cpf) {
		ClienteDTO dto = clienteService.buscarClientePorCpf(cpf);
		Cliente cliente = clienteService.buscar(dto.getId());
		List<ContaBancaria> contasDoCliente = contaBancariaRepository.findByCliente(cliente);
		return contasDoCliente;
	}
	

}
