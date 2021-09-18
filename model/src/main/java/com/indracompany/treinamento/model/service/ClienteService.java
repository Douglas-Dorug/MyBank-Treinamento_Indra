package com.indracompany.treinamento.model.service;

import org.springframework.stereotype.Service;

import com.indracompany.treinamento.exception.AplicacaoException;
import com.indracompany.treinamento.exception.ExceptionValidacoes;
import com.indracompany.treinamento.model.dto.ClienteDTO;
import com.indracompany.treinamento.model.entity.Cliente;
import com.indracompany.treinamento.model.repository.ClienteRepository;
import com.indracompany.treinamento.util.CpfUtil;

@Service
public class ClienteService extends GenericCrudService<Cliente, Long, ClienteRepository>{

	public ClienteDTO buscarClientePorCpf(String cpf) {
		
		boolean cpfEhValido = this.cpfEhValido(cpf);
		
		if (!cpfEhValido) {
			throw new AplicacaoException(ExceptionValidacoes.ERRO_CPF_INVALIDO);
		}
		
		Cliente cli = repository.findByCpf(cpf);
		
		if (cli == null) {
			throw new AplicacaoException(ExceptionValidacoes.ALERTA_NENHUM_REGISTRO_ENCONTRADO);
		}
		
		ClienteDTO retorno = new ClienteDTO();
		retorno.setCpf(cli.getCpf());
		retorno.setNome(cli.getNome());
		retorno.setId(cli.getId());
		
		return retorno;
	}
	
	private boolean cpfEhValido(String cpf) {
		return CpfUtil.validaCPF(cpf);
	}
	  
}
