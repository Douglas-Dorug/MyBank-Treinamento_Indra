package com.indracompany.treinamento.model.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
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
	
	public List<ClienteDTO> buscarClientePorNome(String nome) {
		
		List<Cliente> clientes = repository.findByNomeIgnoreCaseLike("%"+nome+"%");
		
		if (clientes == null || clientes.isEmpty()) {
			throw new AplicacaoException(ExceptionValidacoes.ALERTA_NENHUM_REGISTRO_ENCONTRADO);
		}
		
		List<ClienteDTO> listaClientes = new ArrayList<ClienteDTO>();
		
		for(Cliente cliente : clientes) {
			ClienteDTO cli = new ClienteDTO();
			BeanUtils.copyProperties(cliente, cli);
			//cli.setCpf(cliente.getCpf());
			//cli.setNome(cliente.getNome());
			//cli.setId(cliente.getId());
			
			listaClientes.add(cli);
		}
		return  listaClientes;
	}
	
	private boolean cpfEhValido(String cpf) {
		return CpfUtil.validaCPF(cpf);
	}

	  
}
