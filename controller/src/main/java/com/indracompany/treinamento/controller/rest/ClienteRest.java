package com.indracompany.treinamento.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.indracompany.treinamento.model.dto.ClienteDTO;
import com.indracompany.treinamento.model.entity.Cliente;
import com.indracompany.treinamento.model.service.ClienteService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("rest/clientes")
public class ClienteRest extends GenericCrudRest<Cliente, Long, ClienteService>{
	
	@Autowired
	private ClienteService clienteService;
	
	@ApiOperation(value = "Essse serviço consulta um cliente por CPF")
	@GetMapping(value = "/buscarPorCpf/{cpf}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody ResponseEntity<ClienteDTO> buscarClientePorCpf(@PathVariable String cpf) {
		
		ClienteDTO dto = clienteService.buscarClientePorCpf(cpf);		
		
		return new ResponseEntity<>(dto, HttpStatus.OK);
		
	}
	
	@ApiOperation(value = "Essse serviço consulta um cliente pelo nome")
	@GetMapping(value = "/buscarPorNome/{nome}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody ResponseEntity<ClienteDTO> buscarClientePorNome(@PathVariable String nome) {
		
		ClienteDTO dto = clienteService.buscarClientePorNome(nome);		
		
		return new ResponseEntity<>(dto, HttpStatus.OK);
		
	}
	

}
