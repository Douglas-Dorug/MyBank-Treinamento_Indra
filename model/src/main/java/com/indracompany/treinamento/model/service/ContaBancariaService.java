package com.indracompany.treinamento.model.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.indracompany.treinamento.exception.AplicacaoException;
import com.indracompany.treinamento.exception.ExceptionValidacoes;
import com.indracompany.treinamento.model.dto.ClienteDTO;
import com.indracompany.treinamento.model.dto.TransferenciaBancariaDTO;
import com.indracompany.treinamento.model.entity.ContaBancaria;
import com.indracompany.treinamento.model.entity.Cliente;
import com.indracompany.treinamento.model.repository.ContaBancariaRepository;

@Service
public class ContaBancariaService extends GenericCrudService<ContaBancaria, Long, ContaBancariaRepository> {
	
	@Autowired
	private ClienteService clienteService;
	
	@Autowired
	private OperacaoContaService operacaoContaService;
	
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
	
	@Transactional(rollbackOn = Exception.class)
	public void depositar(String nomeContaRecebimento,String agencia, String numeroConta, double valor, String tipoOperacao) {
		ContaBancaria conta = this.consultarConta(agencia, numeroConta);
		if (valor<=0) {
			throw new AplicacaoException(ExceptionValidacoes.ERRO_ACESSO_NEGADO_JIRA);
		}
		conta.setSaldo(conta.getSaldo() + valor);
		super.salvar(conta);
		if(tipoOperacao.equals("DEPOSITAR")) {
			operacaoContaService.salvarOperacao(conta, valor, "Depósito recebido", 'C');
		} else if (tipoOperacao.equals("TRANSFERIR")) {
			operacaoContaService.salvarOperacao(conta, valor, "Transferencia recebida de " + nomeContaRecebimento, 'C');
		}
	}
	
	@Transactional(rollbackOn = Exception.class)
	public void sacar(String nomeContaDestino, String agencia, String numeroConta, double valor, String tipoOperacao) {
		ContaBancaria conta = this.consultarConta(agencia, numeroConta);
		if (valor<=0) {
			throw new AplicacaoException(ExceptionValidacoes.ERRO_ACESSO_NEGADO_JIRA);
		}
		if (conta.getSaldo()<valor) {
			throw new AplicacaoException(ExceptionValidacoes.ERRO_SALDO_INEXISTENTE);
		}
		
		conta.setSaldo(conta.getSaldo() - valor);
		super.salvar(conta);
		if(tipoOperacao.equals("SACAR")) {
			operacaoContaService.salvarOperacao(conta, valor, "Saque efetuado", 'D');
		} else if (tipoOperacao.equals("TRANSFERIR")) {
			operacaoContaService.salvarOperacao(conta, valor, "Transferencia realizada para " + nomeContaDestino, 'D');
		}
	}

	@Transactional(rollbackOn = Exception.class)
	public void transferir(TransferenciaBancariaDTO dto) {
		ContaBancaria contaOrigem = consultarConta(dto.getAgenciaOrigem(),dto.getNumeroContaOrigem());
		ContaBancaria contaDestino = consultarConta(dto.getAgenciaDestino(),dto.getNumeroContaDestino());
		String clienteOrigem = contaOrigem.getCliente().getNome();
		String clienteDestino = contaDestino.getCliente().getNome();
		if (dto.getAgenciaOrigem().equals(dto.getAgenciaDestino())
				&& dto.getNumeroContaOrigem().equals(dto.getAgenciaDestino())) {
			throw new AplicacaoException(ExceptionValidacoes.ERRO_CONTA_INVALIDA);
		}
		this.sacar(clienteDestino,dto.getAgenciaOrigem(), dto.getNumeroContaOrigem(), dto.getValor(), "TRANSFERIR");
		this.depositar(clienteOrigem,dto.getAgenciaDestino(), dto.getNumeroContaDestino(), dto.getValor(), "TRANSFERIR");
	}
	
	
	

}
