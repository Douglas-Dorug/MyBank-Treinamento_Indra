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

import com.indracompany.treinamento.model.dto.OperacaoContaDTO;
import com.indracompany.treinamento.model.entity.OperacaoConta;
import com.indracompany.treinamento.model.service.OperacaoContaService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("rest/operacoes")
public class OperacoesContaRest extends GenericCrudRest<OperacaoConta, Long, OperacaoContaService> {
	
	@Autowired
	private OperacaoContaService operacaoContaService;
	
	@ApiOperation(value = "Essse serviço consulta as operações realizadas em uma conta por sua agencia e numero de conta")
	@GetMapping(value = "/buscarExtratoPorConta/{agencia}/{numeroConta}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody ResponseEntity<List<OperacaoContaDTO>> obterOperacoes(@PathVariable String agencia,@PathVariable String numeroConta){
		List<OperacaoContaDTO> dto = operacaoContaService.obterOperacoes(agencia, numeroConta);
		return new ResponseEntity<>(dto, HttpStatus.OK);
	}

}
