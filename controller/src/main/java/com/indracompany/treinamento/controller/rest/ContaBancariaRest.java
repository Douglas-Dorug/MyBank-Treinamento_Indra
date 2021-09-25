package com.indracompany.treinamento.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.indracompany.treinamento.model.entity.ContaBancaria;
import com.indracompany.treinamento.model.service.ContaBancariaService;

@RestController
@RequestMapping("rest/contas")
public class ContaBancariaRest extends GenericCrudRest<ContaBancaria, Long, ContaBancariaService> {

	@Autowired
	private ContaBancariaService contaBancariaService;
	
	@GetMapping(value = "/consultar-saldo{agencia}/{conta}", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<Double> consultarSaldo(@PathVariable String agencia, @PathVariable String conta){
		double saldo = contaBancariaService.consultarSaldo(agencia, conta);
		return new ResponseEntity<>(saldo, HttpStatus.OK);
	}
	
	@GetMapping(value = "/consultar-contas-cliente/{cpf}", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<List<ContaBancaria>> consultaContasPorCLiente(@PathVariable String cpf){
		
		List<ContaBancaria> contasCliente = contaBancariaService.obterContas(cpf);
		return new ResponseEntity<>(contasCliente, HttpStatus.OK);
	}

}
